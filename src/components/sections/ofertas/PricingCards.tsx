import Link from "next/link";
import type { PlanFeature, ServicePlan } from "@/data/pages/ofertas";

function FeatureList({
  features,
  inverted = false,
}: {
  features: PlanFeature[];
  inverted?: boolean;
}) {
  return (
    <ul className="space-y-2.5 text-sm">
      {features.map((feature) => (
        <li key={feature.text} className="flex items-start gap-2.5">
          <span
            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-xs font-bold ${
              feature.included
                ? inverted
                  ? "text-white"
                  : "text-brand-gold"
                : "text-red-500"
            }`}
          >
            {feature.included ? "✓" : "✕"}
          </span>
          <span className={inverted ? "text-white/95" : "text-brand-muted"}>
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
      className={`flex h-full flex-col rounded-sm border p-6 md:p-7 ${
        featured
          ? "relative z-10 scale-100 border-brand-gold bg-brand-gold shadow-xl md:scale-105 md:py-10"
          : "border-brand-gold/40 bg-white shadow-sm"
      }`}
    >
      <div className="text-center">
        <h3
          className={`text-lg font-bold tracking-wide md:text-xl ${
            featured ? "text-brand-black" : "text-brand-dark"
          }`}
        >
          {plan.name}
        </h3>
        <p
          className={`mt-3 text-xs leading-relaxed md:text-sm ${
            featured ? "text-brand-black/75" : "text-brand-muted"
          }`}
        >
          {plan.subtitle}
        </p>
      </div>

      <div className="my-6 flex-1">
        <FeatureList features={plan.features} inverted={featured} />
      </div>

      <div className="text-center">
        <p
          className={`text-2xl font-bold md:text-3xl ${
            featured ? "text-brand-black" : "text-brand-dark"
          }`}
        >
          {plan.price}
          {plan.period && (
            <span
              className={`block text-sm font-normal ${
                featured ? "text-brand-black/70" : "text-brand-muted"
              }`}
            >
              /{plan.period}
            </span>
          )}
        </p>

        <Link
          href={plan.cta.href}
          className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
            featured
              ? "bg-white text-brand-black hover:bg-brand-cream"
              : "border border-brand-gold bg-transparent text-brand-gold hover:bg-brand-gold hover:text-brand-black"
          }`}
        >
          {plan.cta.label}
        </Link>
      </div>
    </article>
  );
}

export function MarketingPlanCard({
  plan,
}: {
  plan: (typeof import("@/data/pages/ofertas").internationalMarketing.plans)[number];
}) {
  const featured = plan.featured;

  return (
    <article
      className={`rounded-sm border p-6 md:p-8 ${
        featured
          ? "border-brand-gold bg-brand-gold shadow-lg"
          : "border-brand-gold/30 bg-white shadow-sm"
      }`}
    >
      <h3
        className={`text-center text-lg font-bold md:text-xl ${
          featured ? "text-brand-black" : "text-brand-dark"
        }`}
      >
        {plan.name}
      </h3>
      <p
        className={`mt-2 text-center text-sm ${
          featured ? "text-brand-black/75" : "text-brand-muted"
        }`}
      >
        {plan.subtitle}
      </p>

      <ul className="mt-6 space-y-2.5 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2.5">
            <span className={featured ? "text-brand-black" : "text-brand-gold"}>
              ✓
            </span>
            <span className={featured ? "text-brand-black/90" : "text-brand-muted"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <p
          className={`text-2xl font-bold md:text-3xl ${
            featured ? "text-brand-black" : "text-brand-dark"
          }`}
        >
          {plan.price}
          {plan.period && (
            <span
              className={`block text-sm font-normal ${
                featured ? "text-brand-black/70" : "text-brand-muted"
              }`}
            >
              /{plan.period}
            </span>
          )}
        </p>
        <Link
          href={plan.cta.href}
          className={`mt-6 inline-flex w-full max-w-xs items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
            featured
              ? "bg-white text-brand-black hover:bg-brand-cream"
              : "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-black"
          }`}
        >
          {plan.cta.label}
        </Link>
      </div>
    </article>
  );
}
