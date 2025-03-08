"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, RefreshCw, Users } from "lucide-react";
import Link from "next/link";

export function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sustainable Fashion Exchange
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join our community of conscious fashion lovers. Trade pre-loved clothing,
              reduce waste, and refresh your wardrobe sustainably.
            </motion.p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" asChild>
                <Link href="/exchange">
                  Start Trading <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="p-6">
              <RefreshCw className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Easy Exchange</h3>
              <p className="mt-2 text-muted-foreground">
                Trade clothes using our virtual credit system. List items, browse collections,
                and refresh your wardrobe.
              </p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Community</h3>
              <p className="mt-2 text-muted-foreground">
                Join fashion challenges, share style tips, and connect with fellow
                sustainable fashion enthusiasts.
              </p>
            </Card>
            <Card className="p-6">
              <Leaf className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Sustainability</h3>
              <p className="mt-2 text-muted-foreground">
                Track your fashion footprint and make a positive impact on the
                environment through conscious clothing choices.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="bg-muted/50 py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold">Featured Items</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden">
                <div className="aspect-square bg-muted" />
                <div className="p-4">
                  <h3 className="font-semibold">Vintage Dress</h3>
                  <p className="text-sm text-muted-foreground">Size M • Like New</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium">50 Credits</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/exchange">View All Items</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}