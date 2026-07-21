"use client";

import { getOffersHero } from "@/data/pages/offers";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const heroData = getOffersHero(language);

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
            {heroData.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white leading-tight">
          {heroData.title}
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
          {heroData.subtitle}
        </p>

        {/* Trust Metrics Bar */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 max-w-3xl mx-auto">
          {heroData.trustMetrics.map((metric) => (
            <div key={metric.label}>
              <p className="text-2xl font-bold text-brand-gold">{metric.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


