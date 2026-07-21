"use client";

import Image from "next/image";
import { getLogisticsBanner } from "@/data/pages/offers";
import { useLanguage } from "@/context/LanguageContext";

export default function LogisticsBannerSection() {
  const { language } = useLanguage();
  const logisticsBanner = getLogisticsBanner(language);

  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] py-20 text-white md:py-28 border-t border-b border-brand-gold/20">
      <Image
        src={logisticsBanner.backgroundImage}
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />

      {/* Gold Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -z-0 h-[450px] w-[550px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              {logisticsBanner.eyebrow}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
              {logisticsBanner.title}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-300 md:text-lg">
              {logisticsBanner.description}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            {logisticsBanner.benefitCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold font-bold">
                    {card.emoji}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{card.title}</h4>
                    <p className="text-xs text-gray-300 mt-0.5">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

