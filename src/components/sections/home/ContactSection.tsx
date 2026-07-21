"use client";

import { getHomeContact } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";
import { GoldButton, SectionHeading } from "@/components/ui/HomeUi";

export default function ContactSection() {
  const { language } = useLanguage();
  const data = getHomeContact(language);
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&output=embed`;

  return (
    <section className="home-section bg-brand-cream">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading title={data.title} center={false} />

        <div className="grid overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(0,0,0,0.08)] ring-1 ring-black/5 lg:grid-cols-2">
          <div className="bg-brand-charcoal p-8 text-white md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              {data.eyebrow}
            </p>
            <ul className="mt-8 space-y-6">
              {data.items.map((item) => (
                <li key={item.label}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-lg text-white hover:text-brand-gold"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg text-white/90">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <GoldButton href={data.cta.href}>{data.cta.label}</GoldButton>
            </div>
          </div>

          <div className="min-h-[320px]">
            <iframe
              title="BAGIA location"
              src={mapSrc}
              className="h-full min-h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
