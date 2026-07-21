"use client";

import { getContactHero } from "@/data/pages/contact";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactHero() {
  const { language } = useLanguage();
  const hero = getContactHero(language);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-28">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center lg:px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-gold-light">
            {hero.badge}
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white leading-tight">
          {hero.title}{" "}
          <span className="text-gold-gradient block mt-1">{hero.titleHighlight}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
          {hero.description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`http://wa.me/${siteConfig.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 border border-white/15 px-5 py-2 text-xs font-semibold text-white backdrop-blur-sm hover:border-emerald-500 hover:text-emerald-400 transition-all cursor-pointer"
          >
            💬 {hero.whatsappLabel}: {siteConfig.phone}
          </a>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
            className="rounded-full bg-white/10 border border-white/15 px-5 py-2 text-xs font-semibold text-white backdrop-blur-sm hover:border-brand-gold hover:text-brand-gold transition-all cursor-pointer"
          >
            📞 {hero.phoneLabel}: {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="rounded-full bg-white/10 border border-white/15 px-5 py-2 text-xs font-semibold text-white backdrop-blur-sm hover:border-brand-gold hover:text-brand-gold transition-all cursor-pointer"
          >
            ✉️ {hero.emailLabel}: {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
