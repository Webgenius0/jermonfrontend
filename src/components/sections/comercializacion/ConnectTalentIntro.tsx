import { comercializacionIntro } from "@/data/pages/comercializacion";

export default function ConnectTalentIntro() {
  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
        <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
          {comercializacionIntro.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-brand-muted md:text-lg">
          {comercializacionIntro.paragraph}
        </p>
      </div>
    </section>
  );
}
