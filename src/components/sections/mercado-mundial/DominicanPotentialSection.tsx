import Image from "next/image";
import { dominicanPotential } from "@/data/pages/mercado-mundial";

export default function DominicanPotentialSection() {
  const { images } = dominicanPotential;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-4 md:grid-cols-3 md:gap-3">
          <div className="relative min-h-[320px] overflow-hidden md:min-h-[420px]">
            <Image
              src={images.flag}
              alt="República Dominicana"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          <div className="relative min-h-[320px] overflow-hidden md:min-h-[420px]">
            <Image
              src={images.city}
              alt="Santo Domingo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/55 p-6 text-white md:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                {dominicanPotential.eyebrow}
              </p>
              <h2 className="mt-3 text-xl font-bold uppercase leading-snug md:text-2xl">
                {dominicanPotential.title}
              </h2>
              <ul className="mt-5 space-y-2 text-sm">
                {dominicanPotential.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="text-brand-gold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-bold">{dominicanPotential.highlight}</p>
              <p className="mt-1 text-sm font-bold text-brand-gold">
                {dominicanPotential.highlightSub}
              </p>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden md:min-h-[420px]">
            <Image
              src={images.beach}
              alt="Caribe dominicano"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
