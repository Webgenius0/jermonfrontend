"use client";

import { getPromisingMarkets } from "@/data/pages/global-market";
import { useLanguage } from "@/context/LanguageContext";

export default function PromisingMarketsSection() {
  const { language } = useLanguage();
  const promisingMarkets = getPromisingMarkets(language);

  return (
    <section className="bg-white py-20 md:py-28 relative border-t border-brand-gold/15">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Top International Markets
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {promisingMarkets.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted font-medium">
            {promisingMarkets.intro}
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {promisingMarkets.markets.map((market, index) => (
            <article
              key={market.name}
              className="group rounded-3xl border border-brand-gold/25 bg-[#faf8f5] p-8 shadow-xl transition-all duration-300 hover:border-brand-gold/60 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/15 border border-brand-gold/30 mb-5 text-xl font-bold">
                  {index === 0 ? "🇺🇸" : index === 1 ? "🇪🇺" : "🌐"}
                </div>
                <h3 className="text-xl font-extrabold text-brand-dark leading-snug">
                  {market.name}
                </h3>
                <ul className="mt-6 space-y-3 text-xs md:text-sm">
                  {market.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 items-start font-medium">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span className="text-brand-dark">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

