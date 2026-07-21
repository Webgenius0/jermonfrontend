"use client";

import Image from "next/image";
import Link from "next/link";
import { FooterLink } from "@/components/layout/FooterLink";
import {
  getFooterLegalLinks,
  getFooterQuickLinks,
  siteConfig,
} from "@/lib/site-config";
import { getFooterExtras } from "@/lib/i18n-shared";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const quickLinks = getFooterQuickLinks(language);
  const legalLinks = getFooterLegalLinks(language);
  const footerExtras = getFooterExtras(language);

  const titles = {
    es: {
      tagline: "Sus solicitudes son nuestros compromisos",
      desc: "es una empresa de logística en Santo Domingo especializada en transporte internacional, servicios de carga aérea y marítima, almacenamiento y distribución en la República Dominicana.",
      quickLinks: "Enlaces rápidos",
      legalNotice: "Avisos legales",
      contactUs: "Contáctenos",
      rights: "Todos los derechos reservados.",
    },
    fr: {
      tagline: "Vos demandes sont nos engagements",
      desc: "est une entreprise de logistique à Saint-Domingue spécialisée dans le transport international, le fret aérien et maritime, le stockage et la distribution en République Dominicaine.",
      quickLinks: "Liens rapides",
      legalNotice: "Mentions légales",
      contactUs: "Contactez-nous",
      rights: "Tous droits réservés.",
    },
    en: {
      tagline: "Your requests are our commitments",
      desc: "is a logistics company in Santo Domingo specializing in international transport, air and sea freight services, storage and distribution solutions across the Dominican Republic.",
      quickLinks: "Quick links",
      legalNotice: "Legal notice",
      contactUs: "Contact us",
      rights: "All rights reserved.",
    },
  }[language];

  return (
    <footer className="border-t-4 border-brand-gold text-white">
      <div className="bg-brand-charcoal py-10 sm:py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8">
            {/* Brand */}
            <div className="lg:pr-4">
              <Link href="/" className="inline-block">
                <Image
                  src={siteConfig.logoInverted}
                  alt={siteConfig.name}
                  width={180}
                  height={61}
                  className="h-auto w-36 sm:w-40"
                />
              </Link>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">
                {titles.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                <strong className="font-semibold text-white">BAGIA RD</strong>{" "}
                {titles.desc}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/50">
                {siteConfig.rnc}
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">
                {titles.quickLinks}
              </h2>
              <ul className="grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-white/80 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      href={link.href}
                      className="transition-colors hover:text-brand-gold"
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal notice */}
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">
                {titles.legalNotice}
              </h2>
              <ul className="space-y-2.5 text-sm text-white/80">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <FooterLink
                      href={link.href}
                      className="block leading-snug transition-colors hover:text-brand-gold"
                    >
                      {link.label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-gold">
                {titles.contactUs}
              </h2>
              <ul className="space-y-2.5 text-sm text-white/80">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-brand-gold"
                  >
                    <EnvelopeIcon className="h-4 w-4 shrink-0 text-brand-gold" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-brand-gold"
                  >
                    <PhoneIcon className="h-4 w-4 shrink-0 text-brand-gold" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-brand-gold"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0 text-brand-gold" />
                    {footerExtras.whatsapp}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-brand-gold text-brand-black">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-3 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_auto] lg:gap-6 lg:px-8 lg:py-5">
          <div className="text-sm leading-relaxed">
            <p className="font-medium">BAGIA RD, S.R.L. © {titles.rights}</p>
            <p className="text-brand-black/75">{siteConfig.address}</p>
          </div>

          <p className="text-center text-xs text-brand-black/70 lg:text-left">
            Copyright © {new Date().getFullYear()} BAGIA {footerExtras.copyright}
          </p>

          <div className="flex justify-end">
            <a
              href="#top"
              aria-label={footerExtras.backToTop}
              className="inline-flex h-10 w-10 items-center justify-center bg-brand-charcoal text-white transition-opacity hover:opacity-90 cursor-pointer"
            >
              <ArrowUpIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

function ArrowUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor" aria-hidden="true">
      <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
    </svg>
  );
}
