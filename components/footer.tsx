import { Sparkles } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6" />
              <span className="font-bold">EcoSwap</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Sustainable fashion exchange platform for conscious consumers.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/exchange">Exchange</Link></li>
              <li><Link href="/try-on">Virtual Try-On</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/wardrobe">My Wardrobe</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/guidelines">Community Guidelines</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EcoSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}