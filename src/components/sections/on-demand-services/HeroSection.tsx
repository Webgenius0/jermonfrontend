"use client";

import Image from "next/image";
import { getOnDemandHeroUi, getOnDemandServicesHero } from "@/data/pages/on-demand-services";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const heroData = getOnDemandServicesHero(language);
  const heroUi = getOnDemandHeroUi(language);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-32">
      <Image
        src={heroData.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0a0a0a]/90 to-[#0a0a0a]" />

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
            {heroUi.badge}
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white leading-tight">
          {heroData.title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
          {heroData.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {heroUi.destinationChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm shadow-sm"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://bagiard.com/simulateur-de-frais-dexpedition/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-9 py-3.5 text-sm font-extrabold text-brand-black shadow-[0_0_30px_rgba(201,162,39,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(201,162,39,0.5)] cursor-pointer"
          >
            {heroUi.calcCta}
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#service-cards"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-brand-gold/60 hover:bg-white/10 cursor-pointer"
          >
            {heroUi.exploreCta}
          </a>
        </div>
      </div>
    </section>
  );
}
