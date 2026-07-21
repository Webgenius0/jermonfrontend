"use client";

import Image from "next/image";
import { getHomeGlobalMarket } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";
import { GoldButton, SectionHeading } from "@/components/ui/HomeUi";

export default function GlobalMarketSection() {
  const { language } = useLanguage();
  const data = getHomeGlobalMarket(language);

  return (
    <section className="home-section bg-brand-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-6">
        <div>
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            center={false}
          />
          <div className="inline-block rounded-xl border border-brand-gold/30 bg-white px-5 py-3 shadow-sm">
            <p className="text-xl font-bold text-brand-gold md:text-2xl">
              {data.stat}
            </p>
          </div>
          <p className="mt-5 text-brand-muted">{data.intro}</p>
          <ul className="mt-4 space-y-2 text-sm text-brand-muted">
            {data.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-brand-gold">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <GoldButton href={data.cta.href}>
              {data.cta.label}
            </GoldButton>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] ring-1 ring-black/5 lg:aspect-square">
          <Image
            src="https://bagiard.com/wp-content/uploads/2024/06/IMG_4856-768x1013.webp"
            alt="Global art market"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
