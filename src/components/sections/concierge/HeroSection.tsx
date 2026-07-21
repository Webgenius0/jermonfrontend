"use client";

import Link from "next/link";
import { getConciergeHero, getConciergeHeroUi } from "@/data/pages/concierge";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const heroData = getConciergeHero(language);
  const heroUi = getConciergeHeroUi(language);

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] py-20 text-white md:py-32">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.15)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-light">
                {heroUi.badge}
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white leading-[1.1]">
              {heroData.title}
            </h1>

            <p className="mt-4 text-xl font-light tracking-wide text-white/90 md:text-2xl">
              {heroUi.tagline}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
              {heroData.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-bold text-brand-black shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(201,162,39,0.5)] focus:outline-none cursor-pointer"
              >
                {heroUi.inquireCta}
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="#tailored-approach"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-brand-gold/60 hover:bg-white/10 cursor-pointer"
              >
                {heroUi.exploreCta}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              {heroUi.trustMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl font-bold text-brand-gold">{metric.value}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md space-y-4">
              {heroUi.showcaseCards.map((card, index) => (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition-all duration-300 hover:border-brand-gold/40 hover:bg-white/[0.07] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                      {index === 0 && (
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <path d="M21 15l-5-5L5 21" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-brand-gold-light transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
