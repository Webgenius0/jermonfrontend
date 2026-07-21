"use client";

import Image from "next/image";
import { useState } from "react";
import { getConcreteImpact } from "@/data/pages/about-us";
import { useLanguage } from "@/context/LanguageContext";

export default function ConcreteImpactSection() {
  const { language } = useLanguage();
  const concreteImpact = getConcreteImpact(language);
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, intro, servicesIntro, bullets, closing, images } = concreteImpact;

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-28 border-t border-brand-gold/20">
      {/* Radial Gold Lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -z-0 h-[500px] w-[650px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.15)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Interactive Image Expander */}
          <div className="lg:col-span-6">
            <div
              className="flex h-[420px] gap-3 overflow-hidden rounded-3xl border border-brand-gold/30 bg-white/[0.03] p-3 backdrop-blur-md shadow-2xl md:h-[500px]"
              onMouseLeave={() => setActiveIndex(0)}
            >
              {images.map((image, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={image.src}
                    type="button"
                    className="relative overflow-hidden rounded-2xl transition-[flex] duration-500 ease-out focus:outline-none cursor-pointer"
                    style={{ flex: isActive ? 3.5 : 1 }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    aria-label={image.alt}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    {isActive && (
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/70 backdrop-blur-md p-3 border border-white/15">
                        <p className="text-xs font-bold text-brand-gold uppercase tracking-wider">{image.alt}</p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Text & Service Impact List */}
          <div className="lg:col-span-6">
            <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light mb-3">
              Strategic Growth Partner
            </span>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
              {intro}
            </p>

            <div className="mt-8 rounded-2xl bg-white/[0.03] p-6 border border-white/10 backdrop-blur-sm">
              <p className="font-bold text-brand-gold text-xs uppercase tracking-wider mb-4">{servicesIntro}</p>
              <ul className="space-y-3.5 text-sm text-gray-200">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 items-start font-medium">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold mt-0.5">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-sm font-bold text-white leading-relaxed">
              {closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

