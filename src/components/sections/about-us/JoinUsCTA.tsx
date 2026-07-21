"use client";

import Link from "next/link";
import { getAboutUsJoinCta } from "@/data/pages/about-us";
import { getPartnerProgramSection } from "@/lib/i18n-shared";
import { useLanguage } from "@/context/LanguageContext";

export default function JoinUsCTA() {
  const { language } = useLanguage();
  const aboutUsJoinCta = getAboutUsJoinCta(language);
  const partnerProgram = getPartnerProgramSection(language);

  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28 relative text-white overflow-hidden">
      {/* Radial Gold Lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[550px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.15)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-6">
        <div className="rounded-3xl border border-brand-gold/30 bg-white/[0.03] p-8 md:p-14 backdrop-blur-md shadow-2xl">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            {aboutUsJoinCta.logoSymbol && (
              <div className="mx-auto mb-4 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://bagiard.com/wp-content/uploads/2024/06/6643fd26b73f28f5bcca0272_BAGIA-Logo-Symbol-Transpa.webp"
                  alt="BAGIA Emblem"
                  className="h-14 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(201,162,39,0.6)]"
                />
              </div>
            )}

            <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              {partnerProgram.badge}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              {partnerProgram.title}
            </h2>

            <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
              {aboutUsJoinCta.description}
            </p>
          </div>

          {/* 3 Partner Benefits */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {partnerProgram.cards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-brand-gold/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="mt-4 font-bold text-white text-lg">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-400">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={aboutUsJoinCta.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-extrabold text-brand-black shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all hover:scale-105"
            >
              {partnerProgram.primaryCta}
            </Link>
            <a
              href="http://wa.me/18094252964"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-400"
            >
              {partnerProgram.whatsappCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

