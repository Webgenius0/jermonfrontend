"use client";

import Image from "next/image";
import { getDominicanPotential } from "@/data/pages/global-market";
import { useLanguage } from "@/context/LanguageContext";

export default function DominicanPotentialSection() {
  const { language } = useLanguage();
  const dominicanPotential = getDominicanPotential(language);

  return (
    <section className="bg-[#faf8f5] py-20 md:py-28 relative border-t border-brand-gold/15">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Text & Bullet Cards */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-brand-gold/30 bg-brand-charcoal p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[400px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.18)_0%,transparent_70%)] blur-3xl"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/40 px-4 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light mb-3">
                  {dominicanPotential.eyebrow}
                </span>

                <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
                  {dominicanPotential.title}
                </h2>

                <ul className="mt-8 space-y-4 text-sm md:text-base text-gray-200">
                  {dominicanPotential.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 items-start font-medium">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold text-xs font-bold mt-0.5">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-base font-bold text-white leading-relaxed">{dominicanPotential.highlight}</p>
                  <p className="mt-1 text-sm font-extrabold text-brand-gold">
                    {dominicanPotential.highlightSub}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Res Dominican Hub Image */}
          <div className="lg:col-span-5">
            <div className="relative min-h-[420px] overflow-hidden rounded-3xl border-2 border-brand-gold/30 shadow-2xl md:min-h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
                alt="Santo Domingo, Dominican Republic"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-black/70 backdrop-blur-md p-4 border border-white/15">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                  Santo Domingo Logistics Hub
                </p>
                <p className="text-xs text-gray-300 mt-1 font-medium">
                  Connecting Dominican creators with Europe, London, Miami, and Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

