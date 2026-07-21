import Link from "next/link";
import type { PlanFeature, ServicePlan } from "@/data/pages/offers";

function FeatureList({
  features,
  inverted = false,
}: {
  features: PlanFeature[];
  inverted?: boolean;
}) {
  return (
    <ul className="space-y-3 text-sm">
      {features.map((feature) => (
        <li key={feature.text} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
              feature.included
                ? inverted
                  ? "bg-brand-gold text-brand-black"
                  : "bg-brand-gold/15 text-brand-gold"
                : "bg-red-50 text-red-500"
            }`}
          >
            {feature.included ? "✓" : "✕"}
          </span>
          <span
            className={`text-xs md:text-sm font-medium ${
              feature.included
                ? inverted
                  ? "text-gray-200"
                  : "text-brand-dark"
                : "text-gray-400 line-through"
            }`}
          >
            {feature.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ServicePricingCard({ plan }: { plan: ServicePlan }) {
  const featured = plan.featured;

  return (
    <article
      className={`relative flex h-full flex-col justify-between rounded-3xl p-8 md:p-9 transition-all duration-300 ${
        featured
          ? "border-2 border-brand-gold bg-brand-charcoal text-white shadow-[0_0_40px_rgba(201,162,39,0.3)] md:scale-105 z-10"
          : "border border-brand-gold/25 bg-white text-brand-dark shadow-xl hover:border-brand-gold/50"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gold-gradient px-4 py-1 text-[11px] font-extrabold uppercase tracking-widest text-brand-black shadow-md">
          Most Popular Choice
        </div>
      )}

      <div>
        <div className="text-center">
          <h3
            className={`text-xl font-bold tracking-wide md:text-2xl ${
              featured ? "text-white" : "text-brand-dark"
            }`}
          >
            {plan.name}
          </h3>
          <p
            className={`mt-3 text-xs leading-relaxed font-medium ${
              featured ? "text-gray-300" : "text-brand-muted"
            }`}
          >
            {plan.subtitle}
          </p>
        </div>

        <div className="my-8 border-t border-b border-gray-100/10 py-6">
          <FeatureList features={plan.features} inverted={featured} />
        </div>
      </div>

      <div className="text-center">
        <p
          className={`text-3xl font-extrabold ${
            featured ? "text-brand-gold" : "text-brand-dark"
          }`}
        >
          {plan.price}
          {plan.period && (
            <span
              className={`block text-xs font-normal mt-1 ${
                featured ? "text-gray-400" : "text-brand-muted"
              }`}
            >
              /{plan.period}
            </span>
          )}
        </p>

        <Link
          href={plan.cta.href}
          className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-extrabold transition-all cursor-pointer ${
            featured
              ? "bg-gold-gradient text-brand-black shadow-[0_0_20px_rgba(201,162,39,0.4)] hover:scale-105"
              : "border border-brand-gold bg-brand-charcoal text-brand-gold hover:bg-brand-black hover:text-white"
          }`}
        >
          {plan.cta.label} →
        </Link>
      </div>
    </article>
  );
}

export function MarketingPlanCard({
  plan,
}: {
  plan: (typeof import("@/data/pages/offers").internationalMarketing.plans)[number];
}) {
  const featured = plan.featured;

  return (
    <article
      className={`relative flex h-full flex-col justify-between rounded-3xl p-8 md:p-10 transition-all duration-300 ${
        featured
          ? "border-2 border-brand-gold bg-brand-charcoal text-white shadow-[0_0_35px_rgba(201,162,39,0.25)]"
          : "border border-brand-gold/25 bg-white text-brand-dark shadow-xl hover:border-brand-gold/50"
      }`}
    >
      <div>
        <div className="text-center">
          {featured && (
            <span className="inline-block rounded-full bg-brand-gold/20 border border-brand-gold/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-gold-light mb-3">
              Recommended Plan
            </span>
          )}
          <h3
            className={`text-xl font-bold md:text-2xl ${
              featured ? "text-white" : "text-brand-dark"
            }`}
          >
            {plan.name}
          </h3>
          <p
            className={`mt-2 text-xs font-medium ${
              featured ? "text-gray-300" : "text-brand-muted"
            }`}
          >
            {plan.subtitle}
          </p>
        </div>

        <ul className="mt-8 space-y-3 text-xs md:text-sm">
          {plan.features.map((feature) => (
            <li key={feature} className="flex gap-3 font-medium">
              <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${featured ? "bg-brand-gold/20 text-brand-gold" : "bg-brand-gold/15 text-brand-gold"}`}>
                ✓
              </span>
              <span className={featured ? "text-gray-200" : "text-brand-dark"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-center pt-6 border-t border-gray-100/10">
        <p
          className={`text-3xl font-extrabold ${
            featured ? "text-brand-gold" : "text-brand-dark"
          }`}
        >
          {plan.price}
          {plan.period && (
            <span
              className={`block text-xs font-normal mt-1 ${
                featured ? "text-gray-400" : "text-brand-muted"
              }`}
            >
              /{plan.period}
            </span>
          )}
        </p>
        <Link
          href={plan.cta.href}
          className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-extrabold transition-all cursor-pointer ${
            featured
              ? "bg-gold-gradient text-brand-black shadow-[0_0_25px_rgba(201,162,39,0.35)] hover:scale-105"
              : "border border-brand-gold bg-brand-charcoal text-brand-gold hover:bg-brand-black hover:text-white"
          }`}
        >
          {plan.cta.label} →
        </Link>
      </div>
    </article>
  );
}

