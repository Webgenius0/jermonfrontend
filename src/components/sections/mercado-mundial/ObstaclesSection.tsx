import { obstacles } from "@/data/pages/mercado-mundial";

export default function ObstaclesSection() {
  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold leading-tight text-brand-dark md:text-3xl lg:text-4xl">
              {obstacles.title}
            </h2>
            <p className="mt-6 text-brand-muted">{obstacles.intro}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {obstacles.items.map((item) => (
              <article
                key={item}
                className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 14H9V9h2v7Zm0-9H9V5h2v2Z" />
                  </svg>
                </span>
                <p className="text-sm font-medium capitalize text-brand-dark">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
