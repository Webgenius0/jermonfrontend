"use client";

import Image from "next/image";
import { getAboutUsHero } from "@/data/pages/about-us";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();
  const heroData = getAboutUsHero(language);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-32">
      {/* Subtle Luxury Radial Glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 backdrop-blur-md mb-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-light">
                {heroData.eyebrow}
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white leading-tight">
              {heroData.title}
            </h1>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-300 md:text-lg">
              {heroData.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image Frame */}
          <div className="lg:col-span-5">
            <div className="relative min-h-[380px] overflow-hidden rounded-3xl border-2 border-brand-gold/30 shadow-2xl md:min-h-[460px]">
              <Image
                src={heroData.image}
                alt={heroData.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/60 backdrop-blur-md p-4 border border-white/15">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  {heroData.imageCaptionTitle}
                </p>
                <p className="text-xs text-gray-300 mt-1 font-medium">
                  {heroData.imageCaptionText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


