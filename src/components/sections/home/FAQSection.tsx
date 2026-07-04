"use client";

import { useState } from "react";
import { homeFaq } from "@/data/pages/home";
import { SectionHeading } from "@/components/ui/HomeUi";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        <SectionHeading title={homeFaq.title} />

        <div className="space-y-3">
          {homeFaq.items.map((item, index) => {
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
                        {item.bullets.map((b) => (
                          <li key={b}>{b}</li>
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
