"use client";

import { getOperationalExperience } from "@/data/pages/about-us";
import { useLanguage } from "@/context/LanguageContext";

function OpExpIcon({ index }: { index: number }) {
  const className = "h-6 w-6 text-brand-gold";

  switch (index) {
    case 0:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 3h12l4 6-10 12L2 9z" />
        </svg>
      );
    case 1:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 2:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );
    case 3:
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
  }
}

export default function OperationalExperienceSection() {
  const { language } = useLanguage();
  const operationalExperience = getOperationalExperience(language);

  return (
    <section className="bg-[#faf8f5] py-20 md:py-28 relative border-t border-brand-gold/15">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Proven Field Expertise
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {operationalExperience.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted font-medium">
            {operationalExperience.intro}
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {operationalExperience.bullets.map((bullet, index) => (
            <div
              key={bullet}
              className="group rounded-3xl border border-brand-gold/25 bg-white p-7 shadow-xl transition-all duration-300 hover:border-brand-gold/60 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/15 border border-brand-gold/30 mb-5">
                  <OpExpIcon index={index} />
                </div>
                <h3 className="text-lg font-extrabold text-brand-dark leading-snug">
                  {bullet}
                </h3>
              </div>
              <div className="mt-6 flex items-center text-xs font-bold text-brand-gold uppercase tracking-wider">
                <span>Operational Standard</span>
                <span className="ml-2 font-mono">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Statement Quote Box */}
        <div className="mt-14 rounded-3xl border border-brand-gold/30 bg-brand-charcoal p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <span className="text-4xl font-serif text-brand-gold leading-none">“</span>
            <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-200 italic">
              {operationalExperience.closing}
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-0.5 w-8 bg-brand-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                BAGIA RD Operational Commitment
              </span>
              <div className="h-0.5 w-8 bg-brand-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

