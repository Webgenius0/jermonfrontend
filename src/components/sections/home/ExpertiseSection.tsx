import { homeExpertise } from "@/data/pages/home";
import { GoldDivider, SectionHeading } from "@/components/ui/HomeUi";

export default function ExpertiseSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading title={homeExpertise.title} />
        <GoldDivider />

        <div className="grid gap-8 md:grid-cols-3">
          {homeExpertise.items.map((item) => (
            <article
              key={item.number}
              className="relative border border-brand-light bg-white p-8 shadow-sm"
            >
              <span className="absolute left-6 top-4 text-5xl font-bold text-brand-gold/20">
                {item.number}
              </span>
              <div className="relative border-l-4 border-brand-gold pl-6 pt-8">
                <h3 className="text-xl font-bold text-brand-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
