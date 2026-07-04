import { comercializacionJoinCta } from "@/data/pages/comercializacion";
import { GoldButton, ImageDivider } from "@/components/ui/HomeUi";

export default function JoinSubscriptionCTA() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
        <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
          {comercializacionJoinCta.title}
        </h2>
        <ImageDivider src={comercializacionJoinCta.dividerImage} alt="BAGIA" />
        <p className="text-base leading-relaxed text-brand-muted md:text-lg">
          {comercializacionJoinCta.paragraph}
        </p>
        <div className="mt-8">
          <GoldButton href={comercializacionJoinCta.buttonHref}>
            {comercializacionJoinCta.buttonLabel}
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
