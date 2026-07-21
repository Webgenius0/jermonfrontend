"use client";

import Image from "next/image";
import { getAboutUsVision } from "@/data/pages/about-us";
import { useLanguage } from "@/context/LanguageContext";

export default function VisionSection() {
  const { language } = useLanguage();
  const aboutUsVision = getAboutUsVision(language);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-28 border-t border-brand-gold/20">
      <Image
        src={aboutUsVision.backgroundImage}
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/80" />

      {/* Gold Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[500px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-6">
        <div className="rounded-3xl border border-brand-gold/30 bg-white/[0.03] p-8 md:p-14 backdrop-blur-md shadow-2xl">
          <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light mb-4">
            OUR STRATEGIC VISION
          </span>

          <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
            {aboutUsVision.title}
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-200 md:text-lg max-w-2xl mx-auto font-medium">
            {aboutUsVision.description}
          </p>
        </div>
      </div>
    </section>
  );
}

