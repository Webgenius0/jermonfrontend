import Image from "next/image";
import { premiumLogistics } from "@/data/pages/mercado-mundial";

export default function PremiumLogisticsSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <Image
        src={premiumLogistics.backgroundImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center text-2xl font-bold text-white md:text-3xl">
          {premiumLogistics.title}
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {premiumLogistics.columns.map((column) => (
            <article key={column.title} className="rounded-lg bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="font-bold text-brand-gold">{column.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                {column.bullets.map((bullet) => (
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
