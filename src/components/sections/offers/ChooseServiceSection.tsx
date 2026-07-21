"use client";

import { getChooseService } from "@/data/pages/offers";
import { useLanguage } from "@/context/LanguageContext";
import { ServicePricingCard } from "./PricingCards";

export default function ChooseServiceSection() {
  const { language } = useLanguage();
  const chooseData = getChooseService(language);

  return (
    <section className="bg-[#faf8f5] py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
            {chooseData.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-brand-dark md:text-4xl lg:text-5xl leading-tight">
            {chooseData.title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold-gradient" />
        </div>

        <div className="mt-16 grid items-stretch gap-8 lg:grid-cols-3 xl:gap-8">
          {chooseData.plans.map((plan) => (
            <ServicePricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}


