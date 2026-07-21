"use client";

import { getHomePartners } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";
import LogoMarquee from "@/components/ui/LogoMarquee";
import { GoldDivider, SectionHeading } from "@/components/ui/HomeUi";

export default function PartnersSection() {
  const { language } = useLanguage();
  const data = getHomePartners(language);

  return (
    <section className="bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 pb-4 pt-14 lg:px-6">
        <SectionHeading title={data.title} />
        <GoldDivider />
      </div>
      <LogoMarquee logos={data.logos} />
    </section>
  );
}
