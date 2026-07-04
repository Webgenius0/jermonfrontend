import Image from "next/image";
import { globalMarketStats } from "@/data/pages/mercado-mundial";

export default function GlobalMarketStats() {
  const { art, luxury } = globalMarketStats;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center text-2xl font-bold text-brand-dark md:text-3xl">
          {globalMarketStats.title}
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-xl font-bold text-brand-dark">{art.title}</h3>
            <p className="mt-4 text-2xl font-bold text-brand-gold md:text-3xl">
              {art.stat}
            </p>
            <p className="mt-4 text-brand-muted">{art.intro}</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-muted">
              {art.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-brand-gold">✓</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-brand-dark">
              Conclusión: {art.conclusion}
            </p>
          </div>

          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={luxury.image}
                alt="Mercado del lujo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-brand-dark">
              {luxury.title}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-muted">
              {luxury.stats.map((stat) => (
                <li key={stat} className="flex gap-2">
                  <span className="text-brand-gold">✓</span>
                  <span>{stat}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-brand-dark">
              Conclusión: {luxury.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
