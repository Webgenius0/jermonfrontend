import { concierjeriaProcess } from "@/data/pages/concierjeria";
import { ImageDivider } from "@/components/ui/HomeUi";
import ProcessIcon from "./ProcessIcons";

export default function TailoredProcessSection() {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal py-16 text-white md:py-24">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            {concierjeriaProcess.title}
          </h2>
          {concierjeriaProcess.subtitle && (
            <p className="mt-4 text-base text-white/80 md:text-lg">
              {concierjeriaProcess.subtitle}
            </p>
          )}
          {concierjeriaProcess.dividerImage && (
            <ImageDivider src={concierjeriaProcess.dividerImage} alt="" />
          )}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {concierjeriaProcess.steps.map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold text-brand-black">
                <ProcessIcon name={step.icon} />
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {step.description}
              </p>
              {step.bullets && (
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-brand-gold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
