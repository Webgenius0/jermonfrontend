"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function AuthLayoutFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] py-6 text-xs text-gray-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row lg:px-8">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand-gold" />
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-gray-400">
          <span className="text-emerald-400 font-medium">🔒 256-Bit SSL Encrypted</span>
          <Link href="/privacy-policy" className="hover:text-brand-gold transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-sale" className="hover:text-brand-gold transition-colors">
            Terms of Sale
          </Link>
          <Link href="/legal-notices" className="hover:text-brand-gold transition-colors">
            Legal Notices
          </Link>
        </div>
      </div>
    </footer>
  );
}
