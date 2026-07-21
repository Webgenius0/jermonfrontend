"use client";

import Link from "next/link";
import { getWhatsappCta } from "@/data/pages/offers";
import { useLanguage } from "@/context/LanguageContext";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-20 w-20 text-[#25D366] filter drop-shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-transform duration-300 group-hover:scale-110"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppCTASection() {
  const { language } = useLanguage();
  const whatsappCta = getWhatsappCta(language);

  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] py-20 text-white md:py-28 border-t border-brand-gold/20">
      {/* Ambient Lighting Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(37,211,102,0.15)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-6">
        <div className="rounded-3xl border border-brand-gold/30 bg-white/[0.03] p-8 md:p-14 backdrop-blur-md shadow-2xl flex flex-col items-center justify-between gap-10 md:flex-row">
          <div className="max-w-xl text-center md:text-left">
            <span className="inline-block rounded-full bg-emerald-500/15 border border-emerald-500/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">
              Direct VIP Assistance
            </span>
            <h2 className="text-3xl font-extrabold leading-snug text-white md:text-4xl">
              {whatsappCta.title}
            </h2>
            <p className="mt-4 text-base text-gray-300 md:text-lg">
              {whatsappCta.subtitle}
            </p>
          </div>

          <Link
            href={whatsappCta.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            className="group flex flex-col items-center justify-center shrink-0 rounded-2xl bg-white/5 p-6 border border-white/10 backdrop-blur-sm transition-all hover:border-emerald-500/60 hover:bg-emerald-500/10 cursor-pointer"
          >
            <WhatsAppIcon />
            <span className="mt-3 text-xs font-bold text-white group-hover:text-emerald-400">
              Open WhatsApp Chat →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

