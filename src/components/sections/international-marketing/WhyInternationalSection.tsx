"use client";

import { getInternationalMarketingWhy } from "@/data/pages/international-marketing";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyInternationalSection() {
  const { language } = useLanguage();
  const data = getInternationalMarketingWhy(language);

  return (
    <section className="relative overflow-hidden bg-brand-charcoal py-16 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(201,162,39,0.1),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold md:text-3xl lg:text-4xl">
            {data.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.reasons.map((reason) => (
            <article
              key={reason.number}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-brand-gold/40 hover:bg-white/[0.07]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-black">
                {reason.number}
              </div>
              <h3 className="text-lg font-bold">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
