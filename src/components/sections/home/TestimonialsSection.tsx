import { homeTestimonials } from "@/data/pages/home";
import { SectionHeading } from "@/components/ui/HomeUi";

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading title={homeTestimonials.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeTestimonials.items.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-lg bg-gradient-to-b from-brand-gold/30 to-white p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-brand-black">
                {item.name.charAt(0)}
              </div>
              <h3 className="font-bold text-brand-dark">{item.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                &ldquo;{item.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-brand-muted">
          *Fuente: {homeTestimonials.source}
        </p>
      </div>
    </section>
  );
}
