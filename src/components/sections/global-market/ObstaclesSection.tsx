"use client";

import { getObstacles } from "@/data/pages/global-market";
import { useLanguage } from "@/context/LanguageContext";

export default function ObstaclesSection() {
  const { language } = useLanguage();
  const obstacles = getObstacles(language);

  return (
    <section className="bg-[#faf8f5] py-20 md:py-28 relative border-t border-brand-gold/15">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Market Challenges Solved
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {obstacles.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted font-medium">
            {obstacles.intro}
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {obstacles.items.map((item, index) => (
            <article
              key={item}
              className="rounded-3xl border border-brand-gold/25 bg-white p-7 shadow-xl transition-all duration-300 hover:border-brand-gold/60 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
                    ⚠️
                  </div>
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">
                    Barrier 0{index + 1}
                  </span>
                </div>
                <h3 className="text-base font-extrabold text-brand-dark leading-snug capitalize">
                  {item}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                <span>✓ BAGIA Solution Ready</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

