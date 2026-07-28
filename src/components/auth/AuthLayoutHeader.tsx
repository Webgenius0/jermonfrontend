"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function AuthLayoutHeader() {
  const { language } = useLanguage();

  const backText =
    language === "es"
      ? "Volver al sitio web"
      : language === "fr"
      ? "Retour au site"
      : "Back to Website";

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/20 bg-brand-charcoal/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient font-black text-brand-black text-xl shadow-md transition-transform group-hover:scale-105">
            B
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-gold-light transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold">
              Private Concierge & Logistics
            </span>
          </div>
        </Link>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-2 text-xs font-bold text-brand-gold-light hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer shadow-sm"
          >
            <span>←</span>
            <span className="hidden sm:inline">{backText}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
