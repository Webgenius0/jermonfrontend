import { salesImpact } from "@/data/pages/mercado-mundial";

export default function SalesImpactSection() {
  return (
    <section className="bg-brand-charcoal py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          {salesImpact.title}
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {salesImpact.scenarios.map((scenario) => (
            <article
              key={scenario.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <h3 className="text-lg font-bold text-brand-gold">{scenario.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {scenario.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-base font-bold text-white">
                {scenario.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
