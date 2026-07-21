"use client";

import Image from "next/image";
import { getWhyDominicanRepublic } from "@/data/pages/about-us";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyDominicanRepublicSection() {
  const { language } = useLanguage();
  const whyDominicanRepublic = getWhyDominicanRepublic(language);

  return (
    <section className="relative overflow-hidden bg-[#faf8f5] py-20 md:py-28 border-t border-brand-gold/15">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <Image
          src={whyDominicanRepublic.watermarkImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Strategic Gateway
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {whyDominicanRepublic.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted font-medium">
            {whyDominicanRepublic.intro}
          </p>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        {/* 3 Strategic Reason Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {whyDominicanRepublic.bullets.map((bullet, index) => (
            <div
              key={bullet}
              className="rounded-3xl border border-brand-gold/25 bg-white p-8 shadow-xl transition-all duration-300 hover:border-brand-gold/60 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/15 border border-brand-gold/30 text-brand-gold font-bold text-sm mb-5">
                  0{index + 1}
                </div>
                <p className="text-base font-extrabold text-brand-dark leading-snug">
                  {bullet}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-12 rounded-2xl bg-white p-6 border border-brand-gold/25 text-center shadow-md max-w-3xl mx-auto">
          <p className="text-sm font-bold leading-relaxed text-brand-dark">
            {whyDominicanRepublic.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

