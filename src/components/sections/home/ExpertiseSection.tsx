"use client";

import { getHomeExpertise } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";

type ExpertiseIconProps = {
  type: "rocket" | "package" | "headset";
};

function ExpertiseIcon({ type }: ExpertiseIconProps) {
  const className = "h-7 w-7 text-brand-gold transition-transform duration-300 group-hover:scale-110";

  if (type === "rocket") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    );
  }

  if (type === "package") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="m3.3 7 8.7 5 8.7-5" />
        <path d="M12 22V12" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

export default function ExpertiseSection() {
  const { language } = useLanguage();
  const expertiseData = getHomeExpertise(language);

  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] py-20 text-white md:py-28">
      {/* Background Lighting Accent */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.12)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              World-Class Standards
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
            {expertiseData.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gold-gradient" />
        </div>

        {/* 3 Modern Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {expertiseData.items.map((item) => (
            <article
              key={item.number}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-brand-gold/40 hover:bg-white/[0.06] hover:shadow-[0_20px_45px_rgba(201,162,39,0.15)]"
            >
              {/* Number Badge & Icon Header */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-gold/10 shadow-inner group-hover:border-brand-gold/60 group-hover:bg-brand-gold/20 transition-all">
                    <ExpertiseIcon type={item.icon} />
                  </div>
                  <span className="font-mono text-3xl font-black tracking-tighter text-white/20 group-hover:text-brand-gold transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-brand-gold-light transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-brand-gold/80 font-medium">
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  BAGIA RD Quality Assured
                </span>
                <span className="text-brand-gold font-bold">✓</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


