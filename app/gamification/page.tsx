"use client";

import { useState } from "react";
import { Award, ShieldCheck, Flame, Users } from "lucide-react";

const leaderboardData = [
  { name: "Alice", points: 1200 },
  { name: "Bob", points: 1100 },
  { name: "Charlie", points: 1050 },
];

export default function GamificationPage() {
  const [streak, setStreak] = useState(5);
  const [badges, setBadges] = useState(["Top Trader", "5-Day Streak"]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Gamification System</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Streak Section */}
        <div className="border p-4 rounded-lg shadow-sm bg-secondary">
          <h2 className="text-xl font-semibold flex items-center">
            <Flame className="mr-2" /> Your Streak: {streak} Days
          </h2>
        </div>

        {/* Badges Section */}
        <div className="border p-4 rounded-lg shadow-sm bg-secondary">
          <h2 className="text-xl font-semibold flex items-center">
            <ShieldCheck className="mr-2" /> Your Badges
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
            <Users className="mr-2" /> Leaderboard
          </h2>
          <ul className="mt-2 space-y-2">
            {leaderboardData.map((user, index) => (
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
