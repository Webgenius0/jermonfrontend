"use client";

import { getInternationalMarketingIntro } from "@/data/pages/international-marketing";
import { useLanguage } from "@/context/LanguageContext";

export default function ConnectTalentIntro() {
  const { language } = useLanguage();
  const introData = getInternationalMarketingIntro(language);

  return (
    <section className="bg-brand-cream py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            Your global partner
          </p>
          <h2 className="mt-3 text-2xl font-bold text-brand-charcoal md:text-3xl lg:text-4xl">
            {introData.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-muted md:text-lg">
            {introData.paragraph}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { stat: "24–48h", label: "Processing window" },
            { stat: "Global", label: "Marketplace reach" },
            { stat: "End-to-end", label: "Sales & logistics" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-brand-gold/20 bg-white px-5 py-6 text-center shadow-sm"
            >
              <p className="text-2xl font-bold text-brand-gold">{item.stat}</p>
              <p className="mt-1 text-sm text-brand-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

