import { beginningIntro } from "@/data/pages/mercado-mundial";

export default function BeginningIntro() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
        <div className="mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-brand-dark">
          <span className="text-lg font-bold text-brand-dark">!</span>
        </div>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
          {beginningIntro.eyebrow}
        </p>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-brand-muted md:text-lg">
          {beginningIntro.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
