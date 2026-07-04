import Image from "next/image";
import { homeGlobalMarket } from "@/data/pages/home";
import { GoldButton, SectionHeading } from "@/components/ui/HomeUi";

export default function GlobalMarketSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-6">
        <div>
          <SectionHeading
            eyebrow={homeGlobalMarket.eyebrow}
            title={homeGlobalMarket.title}
            center={false}
          />
          <p className="text-2xl font-bold text-brand-gold">
            {homeGlobalMarket.stat}
          </p>
          <p className="mt-4 text-brand-muted">
            Un mercado en recomposición:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-muted">
            {homeGlobalMarket.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-brand-gold">–</span> {b}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <GoldButton href={homeGlobalMarket.cta.href}>
              {homeGlobalMarket.cta.label}
            </GoldButton>
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden rounded-lg bg-brand-light">
          <Image
            src="https://bagiard.com/wp-content/uploads/2024/06/IMG_4856-768x1013.webp"
            alt="Global art market"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
