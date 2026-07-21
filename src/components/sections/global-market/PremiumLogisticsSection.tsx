"use client";

import Image from "next/image";
import { getPremiumLogistics } from "@/data/pages/global-market";
import { useLanguage } from "@/context/LanguageContext";

export default function PremiumLogisticsSection() {
  const { language } = useLanguage();
  const premiumLogistics = getPremiumLogistics(language);

  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] py-20 text-white md:py-28 border-t border-b border-brand-gold/20">
      <Image
        src={premiumLogistics.backgroundImage}
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />

      {/* Gold Radial Ambient Lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            Premium Logistics Architecture
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
            {premiumLogistics.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {premiumLogistics.columns.map((column, index) => (
            <article
              key={column.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-brand-gold/50 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gold/15 border border-brand-gold/30 text-brand-gold font-bold text-xs mb-5">
                  0{index + 1}
                </div>
                <h3 className="font-extrabold text-brand-gold text-lg leading-snug">
                  {column.title}
                </h3>
                <ul className="mt-5 space-y-3 text-xs md:text-sm text-gray-200">
                  {column.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 items-start font-medium">
                      <span className="text-brand-gold font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

