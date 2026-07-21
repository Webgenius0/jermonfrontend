"use client";

import { getInternationalMarketingServices } from "@/data/pages/international-marketing";
import { useLanguage } from "@/context/LanguageContext";

type ServiceIconType = ReturnType<typeof getInternationalMarketingServices>["items"][number]["icon"];

function ServiceIcon({ type }: { type: ServiceIconType }) {
  const className = "h-6 w-6 text-brand-black";

  switch (type) {
    case "advice":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a7 7 0 0 0-4 12.7V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.3A7 7 0 0 0 12 2Z" />
        </svg>
      );
    case "product":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4 4h16v16H4V4Zm2 2v12h12V6H6Zm2 2h8v2H8V8Zm0 4h8v2H8v-2Z" />
        </svg>
      );
    case "logistics":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3 3 8v11l9 5 9-5V8l-9-5Zm0 2.2 6.5 3.6L12 12.5 5.5 8.8 12 5.2Z" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C9.2 2 7 4.2 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1V7c0-2.8-2.2-5-5-5Zm-3 5V7a3 3 0 0 1 6 0v1H9Z" />
        </svg>
      );
  }
}

export default function WhatWeDoForYouSection() {
  const { language } = useLanguage();
  const data = getInternationalMarketingServices(language);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            {data.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-brand-charcoal md:text-3xl lg:text-4xl">
            {data.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
            {data.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item) => (
            <article
              key={item.title}
              className="home-card flex flex-col p-6 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold">
                <ServiceIcon type={item.icon} />
              </div>
              <h3 className="text-base font-bold text-brand-charcoal">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
