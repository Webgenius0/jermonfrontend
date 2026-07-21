"use client";

import { useState } from "react";
import Link from "next/link";
import { getConciergeFaq, getFaqPageUi } from "@/data/pages/concierge";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQPage() {
  const { language } = useLanguage();
  const conciergeFaq = getConciergeFaq(language);
  const pageUi = getFaqPageUi(language);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = conciergeFaq.items.filter((item, index) => {
    const searchableText = [
      item.question,
      item.answer,
      ...(item.bullets ?? []),
      ...("orderedList" in item && item.orderedList ? item.orderedList : []),
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      searchQuery.trim() === "" || searchableText.includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeCategory === "all") return true;
    if (activeCategory === "sourcing") return [0, 1, 2, 3].includes(index);
    if (activeCategory === "authenticity") return [4, 5, 6].includes(index);
    if (activeCategory === "logistics") return [7, 8, 9].includes(index);
    if (activeCategory === "membership") return [10, 11, 12, 13].includes(index);

    return true;
  });

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <section className="relative overflow-hidden bg-[#0d0d0d] py-20 text-white md:py-28">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.15)_0%,transparent_70%)] blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center lg:px-6">
          <Link
            href="/shopping-concierge"
            className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold text-brand-gold-light hover:bg-brand-gold/20 transition-all mb-6"
          >
            {pageUi.backLink}
          </Link>

          <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl text-white leading-tight">
            {pageUi.heroTitle}{" "}
            <span className="text-gold-gradient">{pageUi.heroTitleHighlight}</span>
          </h1>

          <p className="mt-4 text-base text-gray-300 md:text-lg max-w-2xl mx-auto">
            {pageUi.heroDescription}
          </p>

          <div className="mt-8 relative max-w-xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={pageUi.searchPlaceholder}
              className="w-full rounded-full border border-brand-gold/40 bg-white/10 px-6 py-4 pl-12 text-sm text-white placeholder-gray-400 backdrop-blur-md focus:border-brand-gold focus:bg-white/15 focus:outline-none shadow-xl transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-gold"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-white"
              >
                {pageUi.clear}
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 lg:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {pageUi.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-brand-charcoal text-brand-gold shadow-md border border-brand-gold/40"
                    : "bg-white text-brand-dark hover:bg-brand-gold/10 border border-brand-gold/15 shadow-sm"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="mt-8 text-center text-xs font-semibold text-brand-muted uppercase tracking-wider">
            {pageUi.showingCount(filteredItems.length, conciergeFaq.items.length)}
          </div>

          <div className="mt-6 space-y-4">
            {filteredItems.length === 0 ? (
              <div className="rounded-3xl bg-white p-12 text-center shadow-sm border border-brand-gold/15">
                <p className="text-lg font-bold text-brand-dark">{pageUi.noResultsTitle}</p>
                <p className="mt-2 text-xs text-brand-muted">{pageUi.noResultsDescription}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 rounded-full bg-brand-gold px-5 py-2 text-xs font-bold text-brand-black cursor-pointer"
                >
                  {pageUi.resetFilters}
                </button>
              </div>
            ) : (
              filteredItems.map((item) => {
                const originalIndex = conciergeFaq.items.indexOf(item);
                const isOpen = openIndex === originalIndex;

                return (
                  <div
                    key={item.question}
                    className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-brand-gold bg-white shadow-lg"
                        : "border-brand-gold/15 bg-white hover:border-brand-gold/40 shadow-sm"
                    }`}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-brand-dark md:text-lg cursor-pointer"
                      onClick={() => setOpenIndex(isOpen ? null : originalIndex)}
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-brand-gold text-xs font-bold">
                          {originalIndex + 1}
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
                      <div className="border-t border-brand-gold/15 px-6 py-6 text-sm leading-relaxed text-brand-muted animate-fade-up bg-white">
                        <p className="text-base text-brand-dark font-medium leading-relaxed">{item.answer}</p>

                        {item.bullets && (
                          <ul className="mt-4 space-y-2">
                            {item.bullets.map((bullet) => (
                              <li key={bullet} className="flex items-center gap-2.5 text-sm text-brand-dark font-medium">
                                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                                <span className="capitalize">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {"orderedList" in item && item.orderedList && (
                          <ol className="mt-4 space-y-2 border-l-2 border-brand-gold/30 pl-4">
                            {item.orderedList.map((step, idx) => (
                              <li key={step} className="text-sm text-brand-dark font-medium">
                                <span className="text-brand-gold font-bold mr-1">{idx + 1}.</span> {step}
                              </li>
                            ))}
                          </ol>
                        )}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          <div className="mt-16 rounded-3xl bg-brand-charcoal p-8 md:p-12 text-white text-center border border-brand-gold/30 shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-gold/20 blur-2xl" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
              {pageUi.contactBanner.eyebrow}
            </span>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl text-white">
              {pageUi.contactBanner.title}
            </h2>
            <p className="mt-3 text-sm text-gray-300 max-w-xl mx-auto">
              {pageUi.contactBanner.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-gold-gradient px-8 py-3.5 text-sm font-extrabold text-brand-black shadow-lg hover:scale-105"
              >
                {pageUi.contactBanner.formCta}
              </Link>
              <a
                href="http://wa.me/18094252964"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:border-emerald-500 hover:text-emerald-400"
              >
                {pageUi.contactBanner.whatsappCta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
