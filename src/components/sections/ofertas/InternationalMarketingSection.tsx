import { internationalMarketing } from "@/data/pages/ofertas";
import { GoldDivider } from "@/components/ui/HomeUi";
import { MarketingPlanCard } from "./PricingCards";

export default function InternationalMarketingSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            {internationalMarketing.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-dark md:text-4xl">
            {internationalMarketing.title}
          </h2>
          <GoldDivider />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {internationalMarketing.plans.map((plan) => (
            <div key={plan.id}>
              <MarketingPlanCard plan={plan} />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-brand-muted">
                <p>{plan.footerTitle}</p>
                {"footerIntro" in plan && plan.footerIntro && (
                  <p>{plan.footerIntro}</p>
                )}
                {"footerBullets" in plan && plan.footerBullets && (
                  <ul className="list-disc space-y-1 pl-5">
                    {plan.footerBullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {"footerText" in plan && plan.footerText && (
                  <p>{plan.footerText}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
