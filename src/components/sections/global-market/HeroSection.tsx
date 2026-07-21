"use client";

import Link from "next/link";
import { getGlobalMarketHero } from "@/data/pages/global-market";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const heroData = getGlobalMarketHero(language);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-32">
      {/* Subtle Luxury Radial Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center lg:px-6">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-light">
            {heroData.eyebrow}
          </span>
        </div>

        {/* Title */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white leading-tight">
          {heroData.title}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
          {heroData.subtitle}
        </p>

        {/* Dual CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={heroData.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-extrabold text-brand-black shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all hover:scale-105 cursor-pointer"
          >
            {heroData.cta.label} →
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-brand-gold/60 hover:bg-white/10 cursor-pointer"
          >
            {heroData.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}


