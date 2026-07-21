"use client";

import { getBeginningIntro } from "@/data/pages/global-market";
import { useLanguage } from "@/context/LanguageContext";

export default function BeginningIntro() {
  const { language } = useLanguage();
  const introData = getBeginningIntro(language);

  return (
    <section className="bg-[#faf8f5] py-16 md:py-24 relative">
      <div className="mx-auto max-w-5xl px-4 lg:px-6">
        <div className="rounded-3xl border border-brand-gold/30 bg-brand-charcoal p-8 md:p-14 text-white shadow-2xl relative overflow-hidden text-center">
          {/* Subtle Ambient Glow */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light mb-4">
              {introData.eyebrow}
            </span>

            <div className="mt-4 space-y-6 text-base leading-relaxed text-gray-200 md:text-xl font-medium max-w-3xl mx-auto">
              {introData.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-0.5 w-12 bg-brand-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                BAGIA RD Strategic Context
              </span>
              <div className="h-0.5 w-12 bg-brand-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


