"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Tangent, Sparkles, Users, Award, Camera, Home, Trophy, Bot } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/exchange", label: "Exchange", icon: Tangent },
  { href: "/try-on", label: "Try On", icon: Camera },
  { href: "/community", label: "Community", icon: Users },
  { href: "/wardrobe", label: "Wardrobe", icon: Award },
  { href: "/gamification", label: "Gamification", icon: Trophy },
  { href: "/ai_assistant", label: "AI Assistant", icon: Bot },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Sparkles className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">EcoSwap</span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map(({ href, label, icon: Icon }) => (
                <NavigationMenuItem key={href}>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <Icon className="mr-2 h-4 w-4" />
                      {label}
                      {href === pathname && (
                        <motion.div
                          className="absolute inset-x-0 -bottom-px h-px bg-foreground"
                          layoutId="navbar-active"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
