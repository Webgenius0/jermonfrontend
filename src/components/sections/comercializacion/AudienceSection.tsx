import { comercializacionAudience } from "@/data/pages/comercializacion";
import { ImageDivider } from "@/components/ui/HomeUi";

export default function AudienceSection() {
  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
        <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
          {comercializacionAudience.title}
        </h2>
        <ImageDivider src={comercializacionAudience.dividerImage} alt="BAGIA" />

        <ul className="space-y-4 text-left text-base leading-relaxed text-brand-muted md:text-center md:text-lg">
          {comercializacionAudience.items.map((item) => (
            <li key={item} className="flex gap-3 md:justify-center">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold md:hidden" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-semibold text-brand-dark">
          {comercializacionAudience.closing}
        </p>
      </div>
    </section>
  );
}
