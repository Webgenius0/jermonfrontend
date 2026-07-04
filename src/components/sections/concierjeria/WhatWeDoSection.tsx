import { concierjeriaServices } from "@/data/pages/concierjeria";

export default function WhatWeDoSection() {
  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          {concierjeriaServices.eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
              {concierjeriaServices.eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-2xl font-bold text-brand-dark md:text-3xl">
            {concierjeriaServices.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {concierjeriaServices.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-brand-gold/15 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-brand-dark">{card.title}</h3>
              <p className="mt-4 text-sm text-brand-muted">{card.description}</p>
              {card.bullets && (
                <ul className="mt-4 space-y-2 text-sm text-brand-muted">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              {card.footer && (
                <p className="mt-6 text-sm leading-relaxed text-brand-dark">
                  {card.footer}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
