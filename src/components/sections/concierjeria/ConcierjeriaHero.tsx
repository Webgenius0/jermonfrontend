import { concierjeriaHero } from "@/data/pages/concierjeria";

export default function ConcierjeriaHero() {
  return (
    <section className="bg-brand-cream py-20 md:min-h-[280px] md:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-brand-dark md:text-4xl lg:text-[2.5rem]">
          {concierjeriaHero.title}
        </h1>
      </div>
    </section>
  );
}
