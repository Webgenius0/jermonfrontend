"use client";

import { getInternationalMarketingAudience } from "@/data/pages/international-marketing";
import { useLanguage } from "@/context/LanguageContext";

function CheckIcon() {
  return (
    <svg className="h-5 w-5 shrink-0 text-brand-gold" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function AudienceSection() {
  const { language } = useLanguage();
  const data = getInternationalMarketingAudience(language);

  return (
    <section className="bg-brand-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Who we serve
            </p>
            <h2 className="mt-3 text-2xl font-bold text-brand-charcoal md:text-3xl lg:text-4xl">
              {data.title}
            </h2>
            <p className="mt-6 text-lg font-semibold leading-relaxed text-brand-charcoal">
              {data.intro}
            </p>
          </div>

          <ul className="space-y-4">
            {data.targets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-brand-gold/20 bg-white px-5 py-4 shadow-sm"
              >
                <CheckIcon />
                <span className="text-base leading-relaxed text-brand-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
