import Image from "next/image";
import { homeConcierge } from "@/data/pages/home";
import { GoldButton } from "@/components/ui/HomeUi";

function FeatureCard({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <article className="rounded-2xl bg-brand-cream p-6 md:p-8">
      <h3 className="text-lg font-bold text-brand-dark md:text-xl">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-brand-muted md:text-[0.9375rem]">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ConciergeSection() {
  const { luxury, art, main } = homeConcierge;

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="order-2 flex flex-col gap-6 lg:order-1 lg:pt-4">
            <FeatureCard title={luxury.title} bullets={luxury.bullets} />
            <FeatureCard title={art.title} bullets={art.bullets} />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-bold leading-tight text-brand-dark md:text-3xl lg:text-[2rem] lg:leading-snug">
              {main.title}
            </h2>

            <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)] md:mt-8">
              <Image
                src={main.image}
                alt="Bolso de lujo Hermès"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="mt-8 space-y-5 text-sm leading-relaxed text-brand-muted md:text-base">
              <p>{main.intro}</p>

              <div>
                <p className="font-semibold text-brand-dark">
                  {main.boutiqueHeading}
                </p>
                <ul className="mt-3 space-y-2">
                  {main.boutiqueBullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span className="mt-0.5 shrink-0 text-brand-gold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p>{main.closing}</p>
            </div>

            <div className="mt-8">
              <GoldButton href={main.cta.href} variant="dark">
                {main.cta.label}
              </GoldButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
