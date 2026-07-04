import { chooseService } from "@/data/pages/ofertas";
import { GoldDivider } from "@/components/ui/HomeUi";
import { ServicePricingCard } from "./PricingCards";

export default function ChooseServiceSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
            {chooseService.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-brand-dark md:text-4xl">
            {chooseService.title}
          </h2>
          <GoldDivider />
        </div>

        <div className="grid items-end gap-6 lg:grid-cols-3 lg:gap-4 xl:gap-6">
          {chooseService.plans.map((plan) => (
            <ServicePricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
