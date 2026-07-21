"use client";

import Image from "next/image";
import Link from "next/link";
import { getHomeConcierge } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";

function FeatureCard({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <article className="h-full rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.07)] ring-1 ring-black/[0.04] sm:p-6 lg:p-7">
      <h3 className="text-base font-bold text-brand-dark sm:text-lg">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-brand-muted">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ConciergeSection() {
  const { language } = useLanguage();
  const { luxury, art, main } = getHomeConcierge(language);

  return (
    <section className="bg-brand-cream py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold sm:text-sm">
            {main.eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-bold leading-tight text-brand-dark sm:text-3xl lg:text-4xl">
            {main.title}
          </h2>
        </div>

        {/* Top row: cards + compact image/intro */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-8 lg:mt-10 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          {/* Cards */}
          <div className="order-3 flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:gap-5 lg:order-1 lg:grid-cols-1 lg:gap-6">
            <FeatureCard title={luxury.title} bullets={luxury.bullets} />
            <FeatureCard title={art.title} bullets={art.bullets} />
          </div>

          {/* Shorter image + intro only */}
          <div className="order-1 flex flex-col lg:order-2">
            <div className="relative h-60 w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-[0_12px_32px_-10px_rgba(0,0,0,0.12)] sm:h-72 md:h-80 lg:h-96">
              <Image
                src={main.image}
                alt={main.imageAlt ?? "Luxury art and collectibles"}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>

            <p className="mt-5 text-sm leading-relaxed text-brand-dark/85 sm:mt-6 sm:text-base lg:flex-1">
              {main.intro}
            </p>
          </div>
        </div>

        {/* Bottom block — full width, balanced with left column */}
        <div className="order-2 mt-6 rounded-2xl border border-brand-gold/35 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.05)] sm:mt-8 sm:p-6 md:p-8 lg:mt-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-10">
            <div>
              <p className="font-semibold text-brand-dark">{main.boutiqueHeading}</p>
              <ul className="mt-3 space-y-2 sm:mt-4">
                {main.boutiqueBullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm text-brand-muted sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5 border-t border-brand-gold/15 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-sm leading-relaxed text-brand-dark/85 sm:text-base">
                {main.closing}
              </p>
              <Link
                href={main.cta.href}
                className="inline-flex w-full items-center justify-center rounded-full border border-brand-gold bg-brand-charcoal px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-black sm:w-fit cursor-pointer"
              >
                {main.cta.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

