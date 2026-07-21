"use client";

import Image from "next/image";
import { getInternationalClientele } from "@/data/pages/about-us";
import { useLanguage } from "@/context/LanguageContext";

export default function InternationalClienteleSection() {
  const { language } = useLanguage();
  const internationalClientele = getInternationalClientele(language);
  const {
    title,
    intro,
    bullets,
    trustIntro,
    trustParagraphs,
    image,
  } = internationalClientele;

  return (
    <section className="bg-white py-20 md:py-28 relative border-t border-brand-gold/15">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://bagiard.com/wp-content/uploads/2024/06/6643fd26b73f28f5bcca0272_BAGIA-Logo-Symbol-Transpa.webp"
                alt="BAGIA"
                className="h-10 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(201,162,39,0.5)]"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
                Global Partnerships
              </span>
            </div>

            <h2 className="text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
              {title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-brand-muted font-medium">
              {intro}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 items-center rounded-2xl bg-[#faf8f5] p-4 border border-brand-gold/20 shadow-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-xs font-bold text-brand-dark">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-brand-charcoal p-6 text-white border border-brand-gold/30">
              <p className="font-bold text-brand-gold text-sm uppercase tracking-wider mb-2">{trustIntro}</p>
              {trustParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-xs leading-relaxed text-gray-200 font-medium mt-2"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl border-2 border-brand-gold/30 shadow-2xl md:min-h-[480px]">
              <Image
                src={image}
                alt="Art gallery interior with sculptures on display"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

