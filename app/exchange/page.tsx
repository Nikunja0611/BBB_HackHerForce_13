"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Heart, Search, Filter } from "lucide-react";

const MOCK_ITEMS = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    size: "M",
    condition: "Like New",
    credits: 100,
    image: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    size: "S",
    condition: "Good",
    credits: 75,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Leather Crossbody Bag",
    size: "One Size",
    condition: "Excellent",
    credits: 150,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Wool Blend Sweater",
    size: "L",
    condition: "Like New",
    credits: 85,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "High-Waisted Jeans",
    size: "M",
    condition: "Good",
    credits: 90,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    title: "Silk Blouse",
    size: "S",
    condition: "Excellent",
    credits: 95,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Exchange() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">Exchange Items</h1>
          <p className="mt-2 text-muted-foreground">
            Browse and trade pre-loved clothing items from our community
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="XS">XS</SelectItem>
              <SelectItem value="S">S</SelectItem>
              <SelectItem value="M">M</SelectItem>
              <SelectItem value="L">L</SelectItem>
              <SelectItem value="XL">XL</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedCondition} onValueChange={setSelectedCondition}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="like-new">Like New</SelectItem>
              <SelectItem value="excellent">Excellent</SelectItem>
              <SelectItem value="good">Good</SelectItem>
              <SelectItem value="fair">Fair</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Items Grid */}
        <motion.div 
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {MOCK_ITEMS.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-square w-full object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 bg-background/80 backdrop-blur-sm hover:bg-background/90"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Size {item.size} • {item.condition}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium">{item.credits} Credits</span>
                  <Button size="sm">Trade Now</Button>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
}