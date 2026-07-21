"use client";

import { getConciergeServices } from "@/data/pages/concierge";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatWeDoSection() {
  const { language } = useLanguage();
  const conciergeServices = getConciergeServices(language);
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {conciergeServices.eyebrow && (
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              {conciergeServices.eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {conciergeServices.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        {/* 2 Major Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {conciergeServices.cards.map((card, idx) => (
            <article
              key={card.title}
              className="group relative flex flex-col justify-between rounded-3xl border border-brand-gold/25 bg-[#faf8f5] p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold/60 hover:shadow-xl hover:shadow-brand-gold/5"
            >
              <div>
                {/* Top Badge & Header */}
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-brand-gold/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-gold">
                    {idx === 0 ? "Haute Couture & Leather" : "Fine Art & Auction"}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-colors">
                    {idx === 0 ? (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6zM3 6h18M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    )}
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-bold text-brand-dark">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-brand-muted">
                  {card.description}
                </p>

                {/* Bullet Points */}
                {card.bullets && (
                  <ul className="mt-6 space-y-3">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-brand-dark">
                        <span className="mt-1.5 flex h-2 w-2 shrink-0 rotate-45 bg-brand-gold" />
                        <span className="font-medium capitalize">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Card Footer Box */}
              {card.footer && (
                <div className="mt-8 rounded-2xl bg-white p-5 border border-brand-gold/20 shadow-inner">
                  <p className="text-xs font-semibold leading-relaxed text-brand-dark">
                    💡 <span className="text-brand-gold font-bold">Key Insight:</span> {card.footer}
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

