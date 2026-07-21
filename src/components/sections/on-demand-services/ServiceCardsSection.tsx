"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getDestinationsText,
  getOnDemandServices,
  getServiceCardCtaLabel,
  getServiceCardsSectionUi,
} from "@/data/pages/on-demand-services";
import { useLanguage } from "@/context/LanguageContext";

export default function ServiceCardsSection() {
  const { language } = useLanguage();
  const services = getOnDemandServices(language);
  const ctaLabel = getServiceCardCtaLabel(language);
  const sectionUi = getServiceCardsSectionUi(language);
  const destinationsText = getDestinationsText(language);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = services.filter((service) => {
    if (activeCategory === "all") return true;
    return service.id === activeCategory;
  });

  return (
    <section id="service-cards" className="bg-[#faf8f5] py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            {sectionUi.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {sectionUi.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {sectionUi.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-brand-charcoal text-brand-gold shadow-md border border-brand-gold/40"
                  : "bg-white text-brand-dark hover:bg-brand-gold/10 border border-brand-gold/15 shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-brand-gold/25 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-brand-gold/60 hover:shadow-2xl"
            >
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-charcoal">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-brand-gold/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-black shadow-md backdrop-blur-sm">
                    {service.title.split(" ")[0]}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-muted leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-4 text-xs font-semibold text-brand-dark">
                    {sectionUi.cardBullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-xl bg-[#faf8f5] p-3 border border-brand-gold/15">
                    <p className="text-[11px] font-bold text-brand-gold uppercase tracking-wider">
                      {sectionUi.destinationsLabel}
                    </p>
                    <p className="mt-0.5 text-xs text-brand-dark font-medium">{destinationsText}</p>
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <Link
                  href={service.quoteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-charcoal px-6 py-3.5 text-sm font-bold text-brand-gold border border-brand-gold/40 shadow-md transition-all hover:bg-brand-black hover:text-white hover:border-brand-gold cursor-pointer"
                >
                  {ctaLabel}
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
