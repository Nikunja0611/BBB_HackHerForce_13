"use client";

import { useState } from "react";
import { MessageSquare, Heart, Users, Star } from "lucide-react";

const initialPosts = [
  {
    id: 1,
    user: "Sophia",
    content: "Loving the sustainable fashion trends! 🌱 Who else is into thrift shopping?",
    likes: 12,
    comments: ["Absolutely! Thrift stores have the best finds!", "Eco-friendly fashion is the future!"],
  },
  {
    id: 2,
    user: "Daniel",
    content: "Just swapped my old denim jacket for a vintage leather one. Best trade ever! 🔥",
    likes: 8,
    comments: ["That sounds amazing!", "Show us a pic!"],
  },
];

const challenges = [
  { title: "👗 Best Outfit Swap of the Week", participants: 15 },
  { title: "♻️ Sustainable Fashion Challenge", participants: 20 },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">👥 Fashion Community & Challenges</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Community Forum Section */}
        <div className="border p-4 rounded-lg shadow-sm bg-secondary">
          <h2 className="text-xl font-semibold flex items-center">
            <Users className="mr-2" /> Community Forum
          </h2>
          <div className="mt-2 space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="p-3 bg-accent rounded-md">
                <p className="font-semibold">{post.user}:</p>
                <p>{post.content}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="flex items-center text-red-500 mr-4"
                  >
                    <Heart className="mr-1" /> {post.likes}
                  </button>
                  <div className="flex items-center text-blue-500">
                    <MessageSquare className="mr-1" /> {post.comments.length}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fashion Challenges Section */}
        <div className="border p-4 rounded-lg shadow-sm bg-secondary">
          <h2 className="text-xl font-semibold flex items-center">
            <Star className="mr-2" /> Fashion Challenges
          </h2>
          <ul className="mt-2 space-y-3">
            {challenges.map((challenge, index) => (
              <li key={index} className="p-2 bg-accent rounded-md flex justify-between">
                <span>{challenge.title}</span>
                <span className="text-sm text-gray-400">{challenge.participants} participants</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
