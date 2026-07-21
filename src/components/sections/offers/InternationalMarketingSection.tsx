"use client";

import { getOffersInternationalMarketing } from "@/data/pages/offers";
import { useLanguage } from "@/context/LanguageContext";
import { MarketingPlanCard } from "./PricingCards";

export default function InternationalMarketingSection() {
  const { language } = useLanguage();
  const internationalMarketing = getOffersInternationalMarketing(language);

  return (
    <section className="bg-[#faf8f5] py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            {internationalMarketing.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {internationalMarketing.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {internationalMarketing.plans.map((plan) => (
            <div key={plan.id} className="flex flex-col justify-between">
              <MarketingPlanCard plan={plan} />
              
              <div className="mt-6 rounded-2xl bg-white p-6 border border-brand-gold/20 shadow-sm space-y-3">
                <p className="text-xs font-bold text-brand-dark leading-relaxed">
                  💡 {plan.footerTitle}
                </p>

                {"footerIntro" in plan && plan.footerIntro && (
                  <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                    {plan.footerIntro}
                  </p>
                )}

                {"footerBullets" in plan && plan.footerBullets && (
                  <ul className="space-y-1 text-xs text-brand-dark">
                    {plan.footerBullets.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                        <span className="capitalize">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {"footerText" in plan && plan.footerText && (
                  <p className="text-xs text-brand-muted leading-relaxed font-medium">
                    {plan.footerText}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

