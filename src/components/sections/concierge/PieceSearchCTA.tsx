"use client";

import { getConciergePieceCta } from "@/data/pages/concierge";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function PieceSearchCTA() {
  const { language } = useLanguage();
  const conciergePieceCta = getConciergePieceCta(language);
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] py-20 text-white md:py-28">
      {/* Ambient Radial Lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-6">
        {/* Luxury Crest Symbol */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gold/15 text-brand-gold border border-brand-gold/40 shadow-[0_0_20px_rgba(201,162,39,0.2)]">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35" strokeLinecap="round"/>
          </svg>
        </div>

        <h2 className="mt-6 text-3xl font-extrabold md:text-4xl lg:text-5xl text-white leading-tight">
          {conciergePieceCta.title}
        </h2>

        <div className="mt-6 space-y-3 text-base leading-relaxed text-gray-300 md:text-lg max-w-2xl mx-auto">
          {conciergePieceCta.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className={
                paragraph.startsWith("Trust")
                  ? "font-bold text-brand-gold text-lg md:text-xl"
                  : undefined
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 backdrop-blur-sm">
            🔒 100% Confidential Inquiry
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 backdrop-blur-sm">
            ⚡ Direct European Response
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 backdrop-blur-sm">
            💎 Tailored Sourcing
          </span>
        </div>

        <div className="mt-10">
          <Link
            href="/contactenos"
            className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-9 py-4 text-base font-extrabold text-brand-black shadow-[0_0_30px_rgba(201,162,39,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_45px_rgba(201,162,39,0.6)] cursor-pointer"
          >
            Submit a Search Request
            <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

