"use client";

import Image from "next/image";
import Link from "next/link";
import { getInternationalMarketingHero } from "@/data/pages/international-marketing";
import { useLanguage } from "@/context/LanguageContext";
import HeroGlobe from "./HeroGlobe";

export default function HeroSection() {
  const { language } = useLanguage();
  const heroData = getInternationalMarketingHero(language);

  return (
    <section className="relative overflow-hidden bg-brand-charcoal text-white">
      <Image
        src={heroData.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover object-center opacity-35"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(201,162,39,0.12),transparent_50%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold sm:text-sm">
            {heroData.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {heroData.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {heroData.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {heroData.buttons.map((btn, index) => (
              <Link
                key={btn.label}
                href={btn.href}
                className={
                  index === 0
                    ? "inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light cursor-pointer"
                    : "inline-flex items-center justify-center rounded-full border border-brand-gold/80 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-brand-gold hover:bg-brand-gold/10 cursor-pointer"
                }
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroGlobe />
        </div>
      </div>
    </section>
  );
}

