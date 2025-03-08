"use client";

import { useState, useEffect } from "react";
import { Mic, Send, Volume2, Loader } from "lucide-react";

// Fix for missing SpeechRecognition types
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

export default function AIBot() {
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [listening, setListening] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const SpeechRecognition =
    typeof window !== "undefined" &&
    ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  useEffect(() => {
    if (recognition) {
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setMessage(transcript);
        handleAskAI(transcript);
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event);
      };
    }
  }, []);

  const handleStartListening = () => {
    if (recognition) {
      setListening(true);
      recognition.start();
    }
  };

  const handleStopListening = () => {
    if (recognition) {
      setListening(false);
      recognition.stop();
    }
  };

  const handleAskAI = async (query: string) => {
    if (!query.trim()) return;
    
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/styling", {
        method: "POST",
        body: JSON.stringify({ text: query }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setResponse(data.reply);
      speakResponse(data.reply);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Oops! Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  const speakResponse = (text: string) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.pitch = 1.1;
    utterance.rate = 1;
    utterance.volume = 1;
    synth.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-secondary rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-3">🛍️ ReStyle360 AI Stylist</h2>

      <div className="flex items-center w-full max-w-lg border rounded-lg p-3 bg-white">
        <button
          onClick={handleStartListening}
          className={`mr-3 ${listening ? "text-red-500" : "text-blue-500"}`}
        >
          <Mic />
        </button>
        <input
          type="text"
          className="flex-grow px-3 py-2 border rounded-lg outline-none"
          placeholder="Ask for fashion advice..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => handleAskAI(message)} className="text-green-500 ml-3">
          <Send />
        </button>
      </div>

      {loading && (
        <div className="mt-4 text-gray-600">
          <Loader className="animate-spin inline-block mr-2" />
          Thinking...
        </div>
      )}

      {response && !loading && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg w-full max-w-lg">
          <p>{response}</p>
          <button onClick={() => speakResponse(response)} className="text-yellow-500 mt-2">
            <Volume2 />
          </button>
        </div>
      )}
    </div>
  );
}
