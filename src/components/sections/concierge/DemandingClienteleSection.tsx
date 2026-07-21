"use client";

import Image from "next/image";
import { useState } from "react";
import { getConciergeClientele } from "@/data/pages/concierge";
import { useLanguage } from "@/context/LanguageContext";

export default function DemandingClienteleSection() {
  const { language } = useLanguage();
  const conciergeClientele = getConciergeClientele(language);
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, images, paragraphs, bullets, closing, eyebrow, imageLabels } = conciergeClientele;

  return (
    <section className="bg-[#faf8f5] py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Interactive Image Accordion */}
          <div className="lg:col-span-6">
            <div
              className="flex h-[450px] gap-4 overflow-hidden rounded-3xl p-2 bg-brand-charcoal shadow-2xl md:h-[540px] border border-brand-gold/20"
              onMouseLeave={() => setActiveIndex(0)}
            >
              {images.map((image, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={image.src}
                    type="button"
                    className="relative overflow-hidden rounded-2xl transition-[flex] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold group cursor-pointer"
                    style={{ flex: isActive ? 3 : 1 }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    aria-label={image.alt ?? `Image ${index + 1}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt ?? ""}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating Label */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block rounded-full bg-brand-gold/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-black shadow-lg">
                        {imageLabels?.[index]?.badge ?? image.alt}
                      </span>
                      {isActive && imageLabels?.[index]?.caption && (
                        <p className="mt-2 text-sm font-semibold text-white transition-all animate-fade-up hidden sm:block">
                          {imageLabels[index].caption}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Narrative & Client Criteria */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              {eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
              {title}
            </h2>

            {paragraphs?.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base font-semibold text-brand-dark md:text-lg"
              >
                {paragraph}
              </p>
            ))}

            {bullets && (
              <ul className="mt-6 space-y-4">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 border border-brand-gold/15 shadow-sm transition-all hover:border-brand-gold/40 hover:shadow-md"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold font-bold text-xs">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-brand-muted md:text-base capitalize">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {closing && (
              <div className="mt-8 rounded-2xl bg-brand-charcoal p-6 text-white border border-brand-gold/30 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-brand-gold" />
                  <p className="font-bold text-base text-brand-gold-light md:text-lg">
                    {closing}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

