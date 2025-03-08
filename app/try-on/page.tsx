"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Camera, Upload, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function TryOn() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold">Virtual Try-On</h1>
          <p className="mt-2 text-muted-foreground">
            Preview how clothes will look on you using our AR technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <Card className="overflow-hidden">
            <div className="aspect-video bg-muted/50 relative flex items-center justify-center">
              <div className="text-center p-8">
                <Camera className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">AR Try-On Coming Soon</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Our advanced AR technology will let you virtually try on clothes before trading. 
                  Upload a photo to join the waitlist.
                </p>
              </div>
            </div>
            <div className="p-6 border-t">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="photo-upload"
                  />
                  <label
                    htmlFor="photo-upload"
                    className="flex items-center justify-center gap-2 border-2 border-dashed rounded-lg p-4 cursor-pointer hover:bg-muted/50 transition-colors"
                  >
                    <Upload className="h-4 w-4" />
                    {selectedFile ? selectedFile.name : "Upload your photo"}
                  </label>
                </div>
                <Button className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Join Waitlist
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                By uploading a photo, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </Card>

          {/* Feature Preview */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Real-Time Preview</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                See clothes on your photo in real-time
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">AI-Powered Fit</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Smart size recommendations
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">Share & Compare</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get feedback from the community
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}