"use client";

import { useState } from "react";
import { getHomeFaq } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/HomeUi";

export default function FAQSection() {
  const { language } = useLanguage();
  const faqData = getHomeFaq(language);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="home-section bg-white">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <SectionHeading title={faqData.title} />

        <div className="space-y-3">
          {faqData.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-xl border transition-colors ${
                  isOpen
                    ? "border-brand-gold bg-brand-gold text-brand-black shadow-md"
                    : "border-black/5 bg-brand-cream hover:border-brand-gold/30"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className="text-xl leading-none">{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm leading-relaxed">
                    <p>{item.answer}</p>
                    {item.bullets && (
                      <ul className="mt-3 list-disc space-y-1 pl-5">
                        {item.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

