"use client";

import { getConciergeProcess } from "@/data/pages/concierge";
import { useLanguage } from "@/context/LanguageContext";
import { ImageDivider } from "@/components/ui/HomeUi";
import ProcessIcon from "./ProcessIcons";

export default function TailoredProcessSection() {
  const { language } = useLanguage();
  const conciergeProcess = getConciergeProcess(language);
  return (
    <section id="tailored-approach" className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-[400px] w-[400px] rounded-full bg-brand-gold/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            {conciergeProcess.stepEyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
            {conciergeProcess.title}
          </h2>
          {conciergeProcess.subtitle && (
            <p className="mt-4 text-base text-gray-300 md:text-lg">
              {conciergeProcess.subtitle}
            </p>
          )}
          {conciergeProcess.dividerImage && (
            <ImageDivider src={conciergeProcess.dividerImage} alt="" />
          )}
        </div>

        {/* 8-Step Grid Timeline */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {conciergeProcess.steps.map((step, index) => {
            const stepNum = String(index + 1).padStart(2, "0");
            return (
              <article
                key={step.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold/50 hover:bg-white/[0.06] hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-3xl font-extrabold text-brand-gold/40 group-hover:text-brand-gold transition-colors font-mono">
                      {stepNum}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient text-brand-black shadow-md">
                      <ProcessIcon name={step.icon} className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white group-hover:text-brand-gold-light transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-gray-300">
                    {step.description}
                  </p>

                  {/* Bullet points */}
                  {step.bullets && (
                    <ul className="mt-4 space-y-2 text-xs text-gray-300">
                      {step.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                          <span className="capitalize">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                  <span>{conciergeProcess.phaseLabel} {Math.ceil((index + 1) / 2)}</span>
                  <span className="text-brand-gold font-semibold uppercase tracking-wider">
                    {conciergeProcess.confidentialLabel}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

