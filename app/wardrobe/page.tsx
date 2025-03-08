"use client";

import { useState } from "react";
import { Award, ShieldCheck, Flame, Users, Shirt, Sparkles, RefreshCcw } from "lucide-react";

const wardrobeItems = ["Black Jacket", "Blue Jeans", "White Sneakers", "Red T-shirt", "Formal Suit"];
const outfitSuggestions = ["Casual Look: Blue Jeans + White Sneakers", "Office Wear: Formal Suit"];
const recentTrades = ["Traded: Brown Leather Jacket for a Black Hoodie"];

const wardrobeLeaderboard = [
  { name: "Sophia", points: 300 },
  { name: "Daniel", points: 270 },
  { name: "Olivia", points: 250 },
];

export default function WardrobePage() {
  const [streak, setStreak] = useState(10);
  const [badges, setBadges] = useState(["Trendsetter", "Minimalist", "Eco-Friendly"]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">👗 Wardrobe Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* My Wardrobe Section */}
        <div className="border p-4 rounded-lg shadow-sm bg-secondary">
          <h2 className="text-xl font-semibold flex items-center">
            <Shirt className="mr-2" /> My Wardrobe
          </h2>
          <ul className="mt-2 space-y-2">
            {wardrobeItems.map((item, index) => (
              <li key={index} className="p-2 bg-accent rounded-md">{item}</li>
            ))}
          </ul>
        </div>

        {/* Suggested Outfits */}
        <div className="border p-4 rounded-lg shadow-sm bg-secondary">
          <h2 className="text-xl font-semibold flex items-center">
            <Sparkles className="mr-2" /> Suggested Outfits
          </h2>
          <ul className="mt-2 space-y-2">
            {outfitSuggestions.map((outfit, index) => (
              <li key={index} className="p-2 bg-accent rounded-md">{outfit}</li>
            ))}
          </ul>
        </div>

        {/* Recent Trades */}
        <div className="border p-4 rounded-lg shadow-sm bg-secondary">
          <h2 className="text-xl font-semibold flex items-center">
            <RefreshCcw className="mr-2" /> Recent Trades
          </h2>
          <ul className="mt-2 space-y-2">
            {recentTrades.map((trade, index) => (
              <li key={index} className="p-2 bg-accent rounded-md">{trade}</li>
            ))}
          </ul>
        </div>

        {/* Streak Section */}
        <div className="border p-4 rounded-lg shadow-sm bg-secondary">
          <h2 className="text-xl font-semibold flex items-center">
            <Flame className="mr-2" /> Outfit Streak: {streak} Days
          </h2>
        </div>

        {/* Badges Section */}
        <div className="border p-4 rounded-lg shadow-sm bg-secondary">
          <h2 className="text-xl font-semibold flex items-center">
            <ShieldCheck className="mr-2" /> Earned Badges
          </h2>
          <ul className="mt-2 space-y-2">
            {badges.map((badge, index) => (
              <li key={index} className="flex items-center">
                <Award className="mr-2 text-yellow-500" />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        {/* Leaderboard Section */}
        <div className="border p-4 rounded-lg shadow-sm bg-secondary col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold flex items-center">
            <Users className="mr-2" /> Best Dressed Leaderboard
          </h2>
          <ul className="mt-2 space-y-2">
            {wardrobeLeaderboard.map((user, index) => (
              <li key={index} className="flex justify-between p-2 bg-accent rounded-md">
                <span>{user.name}</span>
                <span>{user.points} pts</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
