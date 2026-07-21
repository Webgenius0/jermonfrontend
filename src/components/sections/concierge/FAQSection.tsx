"use client";

import { useState } from "react";
import Link from "next/link";
import { getConciergeFaq, getConciergeFaqPreviewUi } from "@/data/pages/concierge";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQSection() {
  const { language } = useLanguage();
  const conciergeFaq = getConciergeFaq(language);
  const previewUi = getConciergeFaqPreviewUi(language);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Show only top 5 FAQs on landing page
  const topFaqs = conciergeFaq.items.slice(0, 5);

  return (
    <section className="bg-white py-20 md:py-28 relative border-t border-brand-gold/15">
      <div className="mx-auto max-w-4xl px-4 lg:px-6">
        {/* Header */}
        <div className="text-center">
          {conciergeFaq.eyebrow && (
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              {conciergeFaq.eyebrow}
            </p>
          )}
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {conciergeFaq.title}
          </h2>
          {conciergeFaq.subtitle && (
            <p className="mt-2 text-lg font-semibold text-brand-gold">
              {conciergeFaq.subtitle}
            </p>
          )}
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        {/* Top 5 Accordion Container */}
        <div className="mt-12 space-y-4">
          {topFaqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-brand-gold bg-[#faf8f5] shadow-lg"
                    : "border-brand-gold/15 bg-white hover:border-brand-gold/40 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-brand-dark md:text-lg cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold">
                      {index + 1}
                    </span>
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen ? "bg-brand-gold text-brand-black rotate-180" : "bg-brand-gold/15 text-brand-gold"
                    }`}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-brand-gold/15 px-6 py-5 text-sm leading-relaxed text-brand-muted animate-fade-up bg-white">
                    <p className="text-base text-brand-dark font-medium">{item.answer}</p>

                    {item.bullets && (
                      <ul className="mt-4 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2.5 text-sm text-brand-dark">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                            <span className="capitalize">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All FAQs Button */}
        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-full border border-brand-gold bg-brand-charcoal px-8 py-3.5 text-sm font-bold text-brand-gold hover:bg-brand-black hover:text-white shadow-lg transition-all hover:scale-105 cursor-pointer"
          >
            {previewUi.viewAllLabel}
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}


