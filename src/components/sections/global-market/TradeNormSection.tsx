"use client";

import { getTradeNorm } from "@/data/pages/global-market";
import { useLanguage } from "@/context/LanguageContext";

type IconType = ReturnType<typeof getTradeNorm>["items"][number]["icon"];

function TradeIcon({ type }: { type: IconType }) {
  const className = "h-7 w-7 text-brand-gold";

  switch (type) {
    case "compare":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 3h5v5" />
          <path d="M4 20L21 3" />
          <path d="M21 16v5h-5" />
          <path d="M15 15l6 6" />
          <path d="M4 4l5 5" />
        </svg>
      );
    case "tracking":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <line x1="2" y1="12" x2="22" y2="12" />
        </svg>
      );
    case "insurance":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
    case "customs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "delivery":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        </svg>
      );
  }
}

export default function TradeNormSection() {
  const { language } = useLanguage();
  const tradeNorm = getTradeNorm(language);

  return (
    <section className="bg-white py-20 md:py-28 relative border-t border-brand-gold/15">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            {tradeNorm.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {tradeNorm.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted font-medium">
            {tradeNorm.intro}
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tradeNorm.items.map((item, index) => (
            <article
              key={item.text}
              className="group rounded-3xl border border-brand-gold/25 bg-[#faf8f5] p-8 shadow-xl transition-all duration-300 hover:border-brand-gold/60 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/15 border border-brand-gold/30 mb-6">
                  <TradeIcon type={item.icon} />
                </div>
                <p className="text-base font-extrabold text-brand-dark leading-snug">
                  {item.text}
                </p>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-brand-gold uppercase tracking-wider">
                <span>{tradeNorm.standardRequirementLabel}</span>
                <span className="ml-2 font-mono">0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

