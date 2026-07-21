"use client";

import Image from "next/image";
import { getGlobalMarketStats } from "@/data/pages/global-market";
import { useLanguage } from "@/context/LanguageContext";

export default function GlobalMarketStats() {
  const { language } = useLanguage();
  const globalMarketStats = getGlobalMarketStats(language);
  const { art, luxury } = globalMarketStats;

  return (
    <section className="bg-[#faf8f5] py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Global Market Metrics
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {globalMarketStats.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Card 1: Art Market */}
          <div className="flex flex-col justify-between rounded-3xl border border-brand-gold/25 bg-white p-8 md:p-10 shadow-xl">
            <div>
              <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/30 px-3.5 py-1 text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">
                Contemporary & Fine Art
              </span>
              <h3 className="text-2xl font-extrabold text-brand-dark">{art.title}</h3>
              <p className="mt-4 text-3xl font-extrabold text-brand-gold md:text-4xl">
                {art.stat}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted font-medium">{art.intro}</p>
              
              <ul className="mt-6 space-y-3 text-xs md:text-sm">
                {art.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 items-start font-medium">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-brand-dark">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-brand-charcoal p-5 text-white border border-brand-gold/30">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-1">
                Strategic Conclusion
              </p>
              <p className="text-xs text-gray-200 font-medium leading-relaxed">
                {art.conclusion}
              </p>
            </div>
          </div>

          {/* Card 2: Luxury Goods */}
          <div className="flex flex-col justify-between rounded-3xl border border-brand-gold/25 bg-white p-8 md:p-10 shadow-xl">
            <div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-6 shadow-md border border-brand-gold/20">
                <Image
                  src={luxury.image}
                  alt="Luxury market"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/30 px-3.5 py-1 text-xs font-bold text-brand-gold uppercase tracking-wider mb-2">
                High Fashion & Fine Jewelry
              </span>
              <h3 className="text-2xl font-extrabold text-brand-dark">
                {luxury.title}
              </h3>
              
              <ul className="mt-6 space-y-3 text-xs md:text-sm">
                {luxury.stats.map((stat) => (
                  <li key={stat} className="flex gap-3 items-start font-medium">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span className="text-brand-dark">{stat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-brand-charcoal p-5 text-white border border-brand-gold/30">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-1">
                Strategic Conclusion
              </p>
              <p className="text-xs text-gray-200 font-medium leading-relaxed">
                {luxury.conclusion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

