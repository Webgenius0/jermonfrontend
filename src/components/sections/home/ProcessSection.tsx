import { homeProcess } from "@/data/pages/home";
import { GoldDivider, SectionHeading } from "@/components/ui/HomeUi";

export default function ProcessSection() {
  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading title={homeProcess.title} />
        <GoldDivider />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {homeProcess.steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-lg border border-brand-gold/20 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold text-lg font-bold text-brand-black">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold capitalize text-brand-dark">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
