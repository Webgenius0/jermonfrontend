"use client";

import { getWhyUsSections, getWhyUsUi } from "@/data/pages/why-us";
import { useLanguage } from "@/context/LanguageContext";

function WhyUsIcon({ id }: { id: string }) {
  const className = "h-7 w-7 text-brand-gold";

  switch (id) {
    case "luxury":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M11 3v6L2 9" />
          <path d="M13 3v6l9 0" />
        </svg>
      );
    case "budget":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 6v12" />
        </svg>
      );
    case "human":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "flexible":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 3 21 3 21 8" />
          <line x1="4" y1="20" x2="21" y2="3" />
          <polyline points="21 16 21 21 16 21" />
          <line x1="15" y1="15" x2="21" y2="21" />
          <line x1="4" y1="4" x2="9" y2="9" />
        </svg>
      );
    case "experience":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "network":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "attention":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case "security":
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      );
  }
}

export default function WhyUsContent() {
  const { language } = useLanguage();
  const sections = getWhyUsSections(language);
  const whyUsUi = getWhyUsUi(language);

  return (
    <div>
      {/* Dark Obsidian Hero Banner */}
      <section className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-32">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center lg:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-light">
              Excellence, Security & Discretion
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white leading-tight">
            Why Choose <span className="text-gold-gradient">BAGIA RD?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
            Discover why collectors, merchants, and luxury houses trust BAGIA RD for high-value logistics between Santo Domingo, Europe, and the rest of the world.
          </p>
        </div>
      </section>

      {/* 8 Core Value Cards Grid */}
      <section className="bg-[#faf8f5] py-20 md:py-28 relative">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {sections.map((section, index) => {
              const formattedIndex = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={section.id}
                  className="group relative flex flex-col justify-between rounded-3xl border border-brand-gold/25 bg-white p-8 md:p-10 shadow-xl transition-all duration-300 hover:border-brand-gold/60 hover:-translate-y-1"
                >
                  <div>
                    {/* Top Row: Icon & Index Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/15 border border-brand-gold/30">
                        <WhyUsIcon id={section.id} />
                      </div>
                      <span className="text-3xl font-extrabold text-brand-gold/40 transition-colors group-hover:text-brand-gold">
                        {formattedIndex}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-extrabold text-brand-dark leading-snug">
                      {section.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-brand-muted font-medium">
                      {section.description}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-wider text-brand-gold">
                    <span>{whyUsUi.guaranteeLabel}</span>
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}


