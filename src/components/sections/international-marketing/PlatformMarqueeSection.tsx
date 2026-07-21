"use client";

import { getInternationalMarketingPlatforms } from "@/data/pages/international-marketing";
import { useLanguage } from "@/context/LanguageContext";
import LogoMarquee from "@/components/ui/LogoMarquee";

export default function PlatformMarqueeSection() {
  const { language } = useLanguage();
  const data = getInternationalMarketingPlatforms(language);

  return (
    <section className="border-b border-black/5 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
          Global platforms
        </p>
        <h2 className="mt-3 text-2xl font-bold text-brand-charcoal md:text-3xl lg:text-4xl">
          {data.title}
        </h2>
      </div>
      <div className="mt-8 md:mt-10">
        <LogoMarquee logos={data.logos} speed={35} />
      </div>
    </section>
  );
}
