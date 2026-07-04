import Image from "next/image";
import { homeConcierge } from "@/data/pages/home";
import { GoldButton, SectionHeading } from "@/components/ui/HomeUi";

export default function ConciergeSection() {
  const { luxury, art, main } = homeConcierge;

  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading title={main.title} center={false} />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            {[luxury, art].map((block) => (
              <div
                key={block.title}
                className="rounded-lg border border-brand-gold/20 bg-white/80 p-6"
              >
                <h3 className="text-lg font-bold text-brand-gold">
                  {block.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-brand-muted">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={main.image}
              alt="Luxury concierge"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-12 max-w-3xl space-y-4 text-brand-muted">
          {main.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="leading-relaxed">
              {p}
            </p>
          ))}
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-brand-gold">✓</span> no venden a distancia
            </li>
            <li className="flex gap-2">
              <span className="text-brand-gold">✓</span> rechazan a los
              compradores no europeos
            </li>
            <li className="flex gap-2">
              <span className="text-brand-gold">✓</span> reservan productos para
              clientela local o fiel
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <GoldButton href={main.cta.href}>{main.cta.label}</GoldButton>
        </div>
      </div>
    </section>
  );
}
