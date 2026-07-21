"use client";

import { getContactInfo } from "@/data/pages/contact";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/site-config";

function ContactIcon({ type }: { type: string }) {
  const className = "h-6 w-6 text-brand-gold";

  if (type === "mail") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function ContactInfoSection() {
  const { language } = useLanguage();
  const contactInfo = getContactInfo(language);
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contactInfo.mapQuery)}&output=embed`;

  return (
    <section className="bg-white py-20 md:py-28 relative border-t border-brand-gold/15">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              Direct Communication
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
              {contactInfo.title}
            </h2>
            <p className="mt-4 text-base text-brand-muted leading-relaxed font-medium">
              {contactInfo.subtitle}
            </p>

            <div className="mt-10 space-y-4">
              {contactInfo.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-5 rounded-2xl bg-[#faf8f5] p-5 border border-brand-gold/15 transition-all hover:border-brand-gold/40 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-gold/15 border border-brand-gold/30">
                    <ContactIcon type={item.id} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 block text-base font-bold text-brand-dark hover:text-brand-gold transition-colors truncate"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-semibold leading-relaxed text-brand-dark">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`http://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition-all cursor-pointer"
              >
                💬 Open WhatsApp Chat
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-brand-charcoal px-5 py-2.5 text-xs font-bold text-brand-gold border border-brand-gold/40 shadow-md hover:bg-brand-black transition-all cursor-pointer"
              >
                ✉️ Send Direct Email
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Container */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl border border-brand-gold/25 bg-brand-charcoal shadow-2xl relative">
              <div className="bg-brand-charcoal px-6 py-3 border-b border-brand-gold/20 flex items-center justify-between text-xs font-semibold text-gray-300">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Headquarters: Santo Domingo, DR
                </span>
                <span className="text-brand-gold font-bold">BAGIA RD, S.R.L.</span>
              </div>
              <iframe
                title="BAGIA RD Location"
                src={mapSrc}
                className="h-[360px] w-full border-0 md:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

