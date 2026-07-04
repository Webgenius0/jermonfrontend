"use client";

import { useState } from "react";
import { concierjeriaFaq } from "@/data/pages/concierjeria";

export default function ConcierjeriaFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <div className="text-center">
          {concierjeriaFaq.eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              {concierjeriaFaq.eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-2xl font-bold text-brand-dark md:text-3xl">
            {concierjeriaFaq.title}
          </h2>
          {concierjeriaFaq.subtitle && (
            <p className="mt-3 text-lg font-semibold text-brand-muted">
              {concierjeriaFaq.subtitle}
            </p>
          )}
        </div>

        <div className="mt-10 space-y-3">
          {concierjeriaFaq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-lg border transition-colors ${
                  isOpen
                    ? "border-brand-gold bg-brand-gold text-brand-black"
                    : "border-brand-light bg-white"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
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
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {item.orderedList && (
                      <ol className="mt-3 list-decimal space-y-1 pl-5">
                        {item.orderedList.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
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
