import { concierjeriaPieceCta } from "@/data/pages/concierjeria";
import { GoldButton } from "@/components/ui/HomeUi";

export default function PieceSearchCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal py-16 text-white md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
        <h2 className="text-2xl font-bold md:text-3xl">{concierjeriaPieceCta.title}</h2>

        <div className="mt-6 space-y-4 text-base leading-relaxed text-white/85">
          {concierjeriaPieceCta.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className={
                paragraph.startsWith("Confiar") ? "font-semibold text-brand-gold" : undefined
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8">
          <GoldButton href="/contactenos" variant="dark">
            Contáctenos
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
