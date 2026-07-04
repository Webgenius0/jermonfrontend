import { contactInfo } from "@/data/pages/contactenos";

function ContactIcon({ type }: { type: string }) {
  const className = "h-5 w-5 text-brand-dark";

  if (type === "mail") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V6H4Zm16 2.8-7.5 4.7a1 1 0 0 1-1 0L4 8.8V18h16V8.8Z" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.6 10.8c1.5 3.1 3.5 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8Z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}

export default function ContactInfoSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(contactInfo.mapQuery)}&output=embed`;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
              {contactInfo.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-muted md:text-base">
              {contactInfo.subtitle}
            </p>

            <ul className="mt-10 space-y-8">
              {contactInfo.items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-gray/70 bg-white">
                    <ContactIcon type={item.id} />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-dark">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-sm text-brand-muted hover:text-brand-gold"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                        {item.value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-lg border border-brand-light shadow-sm">
            <iframe
              title="Ubicación BAGIA RD"
              src={mapSrc}
              className="h-80 w-full border-0 lg:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
