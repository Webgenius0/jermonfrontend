import { concierjeriaJoinCta } from "@/data/pages/concierjeria";
import { GoldButton, ImageDivider } from "@/components/ui/HomeUi";

export default function JoinUsCTA() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
        <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
          {concierjeriaJoinCta.title}
        </h2>

        {concierjeriaJoinCta.dividerImage && (
          <ImageDivider src={concierjeriaJoinCta.dividerImage} alt="BAGIA" />
        )}

        {concierjeriaJoinCta.paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-relaxed text-brand-muted md:text-lg"
          >
            {paragraph}
          </p>
        ))}

        {concierjeriaJoinCta.buttonHref && concierjeriaJoinCta.buttonLabel && (
          <div className="mt-8">
            <GoldButton href={concierjeriaJoinCta.buttonHref}>
              {concierjeriaJoinCta.buttonLabel}
            </GoldButton>
          </div>
        )}
      </div>
    </section>
  );
}
