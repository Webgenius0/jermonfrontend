"use client";

import { getHomeProcess } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";

type ProcessIconType = ReturnType<typeof getHomeProcess>["steps"][number]["icon"];

function ProcessStepIcon({ type }: { type: ProcessIconType }) {
  const className = "h-6 w-6 text-brand-black transition-transform duration-300 group-hover:scale-110";

  switch (type) {
    case "attention":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "store":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
          <path d="M2 7h20" />
        </svg>
      );
    case "packing":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      );
    case "shipment":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
  }
}

export default function ProcessSection() {
  const { language } = useLanguage();
  const data = getHomeProcess(language);

  return (
    <section className="relative overflow-hidden bg-[#090909] py-20 text-white md:py-28">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -z-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.12)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light">
            Simple & Transparent Workflow
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
            {data.title}
          </h2>
          <p className="mt-3 text-base text-gray-300 md:text-lg">
            {data.subtitle}
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {data.steps.map((step, index) => {
            const stepNumber = String(index + 1).padStart(2, "0");
            return (
              <article
                key={step.title}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-brand-gold/40 hover:bg-white/[0.06] hover:shadow-[0_20px_45px_rgba(201,162,39,0.15)]"
              >
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient shadow-lg group-hover:scale-105 transition-transform">
                      <ProcessStepIcon type={step.icon} />
                    </div>
                    <span className="font-mono text-3xl font-black tracking-tighter text-white/20 group-hover:text-brand-gold transition-colors">
                      {stepNumber}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white group-hover:text-brand-gold-light transition-colors leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-gray-300">
                    {step.description}
                  </p>
                </div>

                {/* Step indicator footer */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-brand-gold/70">
                  <span>Step {index + 1} of 4</span>
                  <span className="text-white/40 group-hover:text-brand-gold transition-colors">→</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

