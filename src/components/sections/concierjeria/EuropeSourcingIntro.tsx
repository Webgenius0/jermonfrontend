import { concierjeriaIntro } from "@/data/pages/concierjeria";
import { ImageDivider } from "@/components/ui/HomeUi";

export default function EuropeSourcingIntro() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
        <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
          {concierjeriaIntro.title}
        </h2>

        {concierjeriaIntro.dividerImage && (
          <ImageDivider src={concierjeriaIntro.dividerImage} alt="BAGIA" />
        )}

        <div className="space-y-5 text-left text-base leading-relaxed text-brand-muted md:text-center md:text-lg">
          {concierjeriaIntro.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              className={index === 1 ? "font-semibold text-brand-dark" : undefined}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
