import { comercializacionServices } from "@/data/pages/comercializacion";
import { ImageDivider } from "@/components/ui/HomeUi";

type ServiceIconType = (typeof comercializacionServices.items)[number]["icon"];

function ServiceIcon({ type }: { type: ServiceIconType }) {
  const className = "h-6 w-6 text-brand-black";

  switch (type) {
    case "advice":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a7 7 0 0 0-4 12.7V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3.3A7 7 0 0 0 12 2Z" />
        </svg>
      );
    case "product":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a8 8 0 0 0-5.3 14.1V20a1 1 0 0 0 1 1h8.6a1 1 0 0 0 1-1v-3.9A8 8 0 0 0 12 2Z" />
        </svg>
      );
    case "logistics":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 3 3 8v11l9 5 9-5V8l-9-5Zm0 2.2 6.5 3.6L12 12.5 5.5 8.8 12 5.2Z" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C9.2 2 7 4.2 7 7v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-1V7c0-2.8-2.2-5-5-5Zm-3 5V7a3 3 0 0 1 6 0v1H9Z" />
        </svg>
      );
  }
}

export default function WhatWeDoForYouSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
            {comercializacionServices.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted">
            {comercializacionServices.intro}
          </p>
          <ImageDivider src={comercializacionServices.dividerImage} alt="BAGIA" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {comercializacionServices.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-brand-light bg-brand-cream/40 p-6 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold">
                <ServiceIcon type={item.icon} />
              </div>
              <h3 className="text-base font-bold text-brand-dark">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
