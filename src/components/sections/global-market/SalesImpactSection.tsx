"use client";

import { getSalesImpact } from "@/data/pages/global-market";
import { useLanguage } from "@/context/LanguageContext";

export default function SalesImpactSection() {
  const { language } = useLanguage();
  const salesImpact = getSalesImpact(language);

  return (
    <section className="bg-[#faf8f5] py-20 md:py-28 relative border-t border-brand-gold/15">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Financial & Growth Forecast
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {salesImpact.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {salesImpact.scenarios.map((scenario, index) => (
            <article
              key={scenario.name}
              className="rounded-3xl border border-brand-gold/25 bg-white p-8 md:p-10 shadow-xl transition-all duration-300 hover:border-brand-gold/60 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/30 px-3.5 py-1 text-xs font-bold text-brand-gold uppercase tracking-wider">
                    {index === 0 ? "Initial Strategy" : "Scaled Operations"}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-400">Phase 0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-extrabold text-brand-dark">{scenario.name}</h3>

                <ul className="mt-6 space-y-3.5 text-xs md:text-sm text-brand-dark font-medium">
                  {scenario.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 items-start">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-brand-charcoal p-5 text-white border border-brand-gold/30">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-1">
                  Expected Impact
                </p>
                <p className="text-lg font-extrabold text-white">
                  {scenario.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

