import { promisingMarkets } from "@/data/pages/mercado-mundial";

export default function PromisingMarketsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
            {promisingMarkets.title}
          </h2>
          <p className="mt-4 text-brand-muted">{promisingMarkets.intro}</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {promisingMarkets.markets.map((market) => (
            <article key={market.name}>
              <h3 className="text-lg font-bold text-brand-dark">{market.name}</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-muted">
                {market.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-brand-gold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
