"use client";

import Link from "next/link";
import type { LegalDocument } from "@/data/pages/legal";
import { getLegalPageUi } from "@/lib/i18n-shared";
import { useLanguage } from "@/context/LanguageContext";

type LegalPageProps = {
  document: LegalDocument;
};

export default function LegalPage({ document }: LegalPageProps) {
  const { language } = useLanguage();
  const legalUi = getLegalPageUi(language);

  return (
    <article className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <header className="border-b border-brand-gray/30 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
            {legalUi.label}
          </p>
          <h1 className="mt-3 text-3xl font-bold text-brand-charcoal sm:text-4xl">
            {document.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {document.description}
          </p>
          {document.updated && (
            <p className="mt-2 text-sm text-brand-muted/80">
              Last updated: {document.updated}
            </p>
          )}
        </header>

        <div className="mt-10 space-y-10">
          {document.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-brand-charcoal">{section.title}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 60)}
                  className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              {section.table && (
                <dl className="mt-4 divide-y divide-brand-gray/30 overflow-hidden rounded-xl border border-brand-gray/30">
                  {section.table.map((row) => (
                    <div
                      key={row.label}
                      className="grid gap-1 bg-brand-cream/30 px-4 py-3 sm:grid-cols-[11rem_1fr]"
                    >
                      <dt className="text-sm font-semibold text-brand-charcoal">
                        {row.label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-brand-muted">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-brand-muted sm:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-brand-gold/30 bg-brand-cream/50 px-6 py-5 text-sm text-brand-muted">
          {legalUi.questions}{" "}
          <Link href="/contact-us" className="font-semibold text-brand-gold hover:underline">
            {legalUi.contact}
          </Link>
          .
        </div>
      </div>
    </article>
  );
}

