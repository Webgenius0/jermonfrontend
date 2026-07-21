"use client";

import { getInstantQuoteBanner } from "@/data/pages/on-demand-services";
import { useLanguage } from "@/context/LanguageContext";

export default function InstantQuoteBanner() {
  const { language } = useLanguage();
  const banner = getInstantQuoteBanner(language);

  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] py-20 text-white md:py-28 border-t border-brand-gold/20">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center lg:px-6">
        <div className="rounded-3xl border border-brand-gold/30 bg-white/[0.03] p-8 md:p-14 backdrop-blur-md shadow-2xl">
          <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light">
            {banner.badge}
          </span>

          <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
            {banner.title}
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg max-w-3xl mx-auto">
            {banner.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://bagiard.com/simulateur-de-frais-dexpedition/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-9 py-4 text-base font-extrabold text-brand-black shadow-[0_0_30px_rgba(201,162,39,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_45px_rgba(201,162,39,0.6)] cursor-pointer"
            >
              {banner.primaryCta}
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="http://wa.me/18094252964"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-400 cursor-pointer"
            >
              {banner.whatsappCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
