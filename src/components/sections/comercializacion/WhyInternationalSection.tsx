import { comercializacionWhyInternational } from "@/data/pages/comercializacion";

export default function WhyInternationalSection() {
  return (
    <section className="bg-brand-charcoal py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          {comercializacionWhyInternational.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {comercializacionWhyInternational.reasons.map((reason) => (
            <article
              key={reason.number}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-black">
                {reason.number}
              </div>
              <div>
                <h3 className="text-lg font-bold">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
