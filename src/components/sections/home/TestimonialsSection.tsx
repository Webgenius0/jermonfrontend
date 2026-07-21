"use client";

import { useState, useEffect, useCallback } from "react";
import { getHomeTestimonials } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";

function StarRating() {
  return (
    <div className="flex gap-1 text-brand-gold" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-brand-gold filter drop-shadow-[0_0_6px_rgba(201,162,39,0.5)]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const { language } = useLanguage();
  const data = getHomeTestimonials(language);
  const items = data.items.slice(0, 8);

  const [startIndex, setStartIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Maximum starting index for 3 visible cards at a time
  const maxIndex = Math.max(0, items.length - 1);

  const nextSlide = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoplay, nextSlide]);

  return (
    <section className="relative overflow-hidden bg-[#090909] py-20 text-white md:py-28">
      {/* Ambient Lighting Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[550px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.14)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-brand-gold animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-light">
                Verified Reviews & Experience
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
              {data.title}
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={prevSlide}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-brand-gold hover:bg-gold-gradient hover:text-brand-black shadow-lg cursor-pointer active:scale-95"
              aria-label="Previous testimonial"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:border-brand-gold hover:bg-gold-gradient hover:text-brand-black shadow-lg cursor-pointer active:scale-95"
              aria-label="Next testimonial"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Multi-Card Track Slider */}
        <div
          className="mt-12 overflow-hidden"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          <div
            className="flex gap-6 transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${startIndex * 340}px)`,
            }}
          >
            {/* Render items twice to create seamless loop feel */}
            {[...items, ...items].map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="group relative flex h-[290px] w-[320px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-brand-gold/50 hover:bg-white/[0.06] hover:shadow-[0_20px_45px_rgba(201,162,39,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <StarRating />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold/70">
                      Verified
                    </span>
                  </div>

                  <blockquote className="mt-5 text-sm leading-relaxed text-gray-200">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient font-extrabold text-brand-black text-sm shadow-md">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm group-hover:text-brand-gold-light transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-gray-400 font-medium">
                        Collector & Partner
                      </p>
                    </div>
                  </div>
                  <span className="text-brand-gold font-bold text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                    ★ 5.0
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Indicator Bar */}
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setStartIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === startIndex % items.length
                    ? "w-8 bg-brand-gold"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <p className="text-xs font-medium text-gray-400">
            *Source: {data.source}
          </p>
        </div>
      </div>
    </section>
  );
}


