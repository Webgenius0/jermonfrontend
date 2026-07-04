import { homeProcess } from "@/data/pages/home";
import { SectionHeading } from "@/components/ui/HomeUi";

type ProcessIconType = (typeof homeProcess.steps)[number]["icon"];

function ProcessStepIcon({ type }: { type: ProcessIconType }) {
  const className = "h-7 w-7 text-brand-dark";

  switch (type) {
    case "attention":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
        </svg>
      );
    case "store":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4 10V8l1-4h14l1 4v2H4Zm0 2h16v8H4v-8Zm3 2v4h2v-4H7Zm4 0v4h2v-4h-2Zm4 0v4h2v-4h-2Z" />
        </svg>
      );
    case "packing":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3 3 8v11l9 5 9-5V8l-9-5Zm0 2.3 6.5 3.6L12 12.5 5.5 8.9 12 5.3ZM5 10.2l6 3.3v7.5l-6-3.3v-7.5Zm14 0v7.5l-6 3.3v-7.5l6-3.3Z" />
        </svg>
      );
    case "shipment":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3 6h11v9H3V6Zm12 2h3l3 3v4h-6V8ZM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM1 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v1H2V5Z" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm14 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3 18c0-2.8 3.1-5 7-5h4c3.9 0 7 2.2 7 5v1H3v-1Zm2-8h14l-2 4H7l-2-4Z" />
        </svg>
      );
  }
}

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading title={homeProcess.title} />

        <div className="mt-12 flex flex-col items-center gap-6 sm:grid sm:grid-cols-2 sm:items-start lg:mt-16 lg:flex lg:flex-row lg:justify-center lg:gap-4 xl:gap-5">
          {homeProcess.steps.map((step, index) => {
            const isLow = index % 2 === 1;

            return (
              <article
                key={step.title}
                className={`w-full max-w-[220px] rounded-xl bg-white px-5 py-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:max-w-none lg:w-[19%] lg:max-w-[210px] ${
                  isLow ? "lg:mt-20 xl:mt-24" : "lg:mt-0"
                }`}
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold">
                  <ProcessStepIcon type={step.icon} />
                </div>
                <h3 className="text-base font-bold text-brand-dark md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-brand-muted md:text-sm">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
