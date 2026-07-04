import { tradeNorm } from "@/data/pages/mercado-mundial";

type IconType = (typeof tradeNorm.items)[number]["icon"];

function TradeIcon({ type }: { type: IconType }) {
  const className = "mx-auto h-8 w-8 text-brand-dark";

  switch (type) {
    case "compare":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a7 7 0 0 0-4 12.7V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.3A7 7 0 0 0 12 2Z" />
        </svg>
      );
    case "tracking":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
        </svg>
      );
    case "insurance":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2 4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3Z" />
        </svg>
      );
    case "customs":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2Zm-7 0V6a2 2 0 1 1 4 0v2h-4Z" />
        </svg>
      );
    case "delivery":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3 6h11v9H3V6Zm12 2h3l3 3v4h-6V8ZM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3 2 8v11l10 5 10-5V8L12 3Z" />
        </svg>
      );
  }
}

export default function TradeNormSection() {
  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
            {tradeNorm.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {tradeNorm.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tradeNorm.items.map((item) => (
            <article key={item.text} className="text-center">
              <TradeIcon type={item.icon} />
              <p className="mt-4 text-sm font-semibold text-brand-dark md:text-base">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
