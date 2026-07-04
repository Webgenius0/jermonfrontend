import { ofertasHero } from "@/data/pages/ofertas";

export default function OfertasHero() {
  return (
    <section className="bg-brand-charcoal py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
            {ofertasHero.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
            {ofertasHero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
