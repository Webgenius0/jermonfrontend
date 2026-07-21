"use client";

import { getConciergeIntro, getConciergeIntroUi } from "@/data/pages/concierge";
import { useLanguage } from "@/context/LanguageContext";

export default function EuropeSourcingIntro() {
  const { language } = useLanguage();
  const introData = getConciergeIntro(language);
  const introUi = getConciergeIntroUi(language);

  return (
    <section className="relative bg-[#faf8f5] py-20 md:py-28 overflow-hidden border-b border-brand-gold/15">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            {introUi.badge}
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {introData.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gold-gradient" />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-brand-charcoal p-8 md:p-10 text-white shadow-2xl border border-brand-gold/30 relative overflow-hidden group">
            <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-brand-gold/20 blur-3xl group-hover:bg-brand-gold/30 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between">
                <svg className="h-10 w-10 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <span className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-gold-light">
                  {introUi.primaryMissionLabel}
                </span>
              </div>

              <blockquote className="mt-6 text-2xl font-bold leading-relaxed text-white">
                &ldquo;{introData.paragraphs[1]}&rdquo;
              </blockquote>

              <p className="mt-4 text-xs leading-relaxed text-gray-300">{introUi.quoteCaption}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                {introUi.keyHubsLabel}
              </span>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-gray-300">
                {introUi.hubs.map((hub) => (
                  <span key={hub} className="rounded-full bg-white/10 px-2.5 py-0.5">
                    {hub}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col justify-between rounded-3xl bg-white p-7 shadow-lg border border-brand-gold/20 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-xl">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-200">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-dark">{introUi.barrierTitle}</h3>
                <p className="mt-3 text-xs leading-relaxed text-brand-muted">{introData.paragraphs[0]}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <ul className="space-y-1.5 text-[11px] font-semibold text-brand-dark">
                  {introUi.barrierBullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-white p-7 shadow-lg border border-brand-gold/20 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-xl">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-dark">{introUi.solutionTitle}</h3>
                <p className="mt-3 text-xs leading-relaxed text-brand-muted">{introData.paragraphs[2]}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <ul className="space-y-1.5 text-[11px] font-semibold text-brand-dark">
                  {introUi.solutionBullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 rounded-2xl bg-white p-6 shadow-sm border border-brand-gold/15 sm:grid-cols-3 text-center">
          {introUi.trustRow.map((item, index) => (
            <div
              key={item.label}
              className={`${
                index === 0
                  ? "border-b sm:border-b-0 sm:border-r border-gray-100 pb-4 sm:pb-0 sm:pr-4"
                  : index === 1
                    ? "border-b sm:border-b-0 sm:border-r border-gray-100 py-4 sm:py-0 sm:px-4"
                    : "pt-4 sm:pt-0 sm:pl-4"
              }`}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">{item.label}</p>
              <p className="mt-1 text-sm font-extrabold text-brand-dark">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
