"use client";

import Image from "next/image";
import Link from "next/link";
import { getHomeHero } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const heroData = getHomeHero(language);

  const categoryLines = heroData.lines.slice(0, 3);
  const closingLines = heroData.lines.slice(3);

  const categoryTextClass =
    "block text-[1.625rem] font-semibold leading-[1.2] text-white sm:text-[1.875rem] md:text-[2rem]";
  const headlineTextClass =
    "block text-[2rem] font-bold leading-[1.12] sm:text-[2.375rem] md:text-[2.75rem] lg:text-[3rem]";

  return (
    <section className="relative min-h-[calc(100svh-20.75rem)] overflow-hidden bg-brand-charcoal text-white">
      <Image
        src={heroData.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover object-center grayscale"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.35),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-20.75rem)] max-w-7xl flex-col justify-center px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl animate-fade-up lg:max-w-xl xl:max-w-2xl">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.32em] text-brand-gold sm:text-xs">
            {heroData.subtitle}
          </p>

          <div className="mt-4 space-y-1">
            {categoryLines.map((line) => (
              <p key={line} className={categoryTextClass}>
                {line}
              </p>
            ))}
          </div>

          <div className="mt-3 space-y-1">
            {closingLines.map((line, index) => (
              <p
                key={line}
                className={`${headlineTextClass} ${
                  index === closingLines.length - 1 ? "text-brand-gold" : "text-white"
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            {heroData.buttons.map((btn, index) => (
              <Link
                key={btn.label}
                href={btn.href}
                className={
                  index === 0
                    ? "inline-flex min-w-[9.5rem] items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-gold-light"
                    : "inline-flex min-w-[9.5rem] items-center justify-center rounded-full border border-white/70 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                }
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
