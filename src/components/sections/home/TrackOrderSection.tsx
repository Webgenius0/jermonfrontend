"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { getHomeTrackOrder } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";

type TrackTab = "order" | "tracking" | "email";

export default function TrackOrderSection() {
  const router = useRouter();
  const { language } = useLanguage();
  const data = getHomeTrackOrder(language);
  const [activeTab, setActiveTab] = useState<TrackTab>("order");
  const [value, setValue] = useState("");

  const current = data.tabs.find((tab) => tab.id === activeTab)!;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;

    const params = new URLSearchParams({ type: activeTab, q: trimmed });
    router.push(`/seguimiento?${params.toString()}`);
  }

  return (
    <section className="relative overflow-hidden bg-[#070707] py-16 md:py-24 text-white">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.15)_0%,transparent_70%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-2xl px-4 lg:px-6">
        <div className="overflow-hidden rounded-3xl border border-brand-gold/30 bg-white/[0.04] p-8 md:p-10 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/15 border border-brand-gold/40 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-gold" />
              </span>
              Real-Time Cargo Tracking
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
              {data.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-300 md:text-base">
              {data.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8">
            {/* Segmented Tabs */}
            <div
              role="tablist"
              aria-label={data.tablistLabel}
              className="grid grid-cols-3 gap-1.5 rounded-2xl bg-black/60 p-1.5 border border-white/10"
            >
              {data.tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setValue("");
                    }}
                    className={`rounded-xl px-3 py-2.5 text-center text-xs font-bold transition-all sm:text-sm cursor-pointer ${
                      isActive
                        ? "bg-gold-gradient text-brand-black shadow-lg scale-[1.02]"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Input Box */}
            <div className="mt-6 relative flex items-center rounded-2xl border border-brand-gold/30 bg-black/50 px-4 py-3.5 transition-all focus-within:border-brand-gold focus-within:ring-2 focus-within:ring-brand-gold/40 shadow-inner">
              <svg className="h-5 w-5 text-brand-gold shrink-0 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <label htmlFor="track-input" className="sr-only">
                {current.placeholder}
              </label>
              <input
                id="track-input"
                type={current.inputType}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder={current.placeholder}
                className="w-full border-0 bg-transparent text-base font-medium text-white placeholder:text-gray-500 focus:outline-none"
                autoComplete={activeTab === "email" ? "email" : "off"}
              />
              {value && (
                <button
                  type="button"
                  onClick={() => setValue("")}
                  className="text-gray-400 hover:text-white text-xs font-bold px-2 py-1 rounded-full bg-white/10"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-7 flex justify-center">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-10 py-4 text-sm font-extrabold uppercase tracking-wider text-brand-black shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(201,162,39,0.55)] cursor-pointer"
              >
                <span>{data.submitLabel}</span>
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>

          {/* Quick Trust Badges */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              🔒 <strong className="text-gray-200">Encrypted</strong> Data
            </span>
            <span className="inline-flex items-center gap-1.5">
              ✈️ <strong className="text-gray-200">Global</strong> Express Air
            </span>
            <span className="inline-flex items-center gap-1.5">
              ⚓ <strong className="text-gray-200">Ocean</strong> Freight Status
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

