import { homeContact } from "@/data/pages/home";
import { SectionHeading } from "@/components/ui/HomeUi";

export default function ContactSection() {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(homeContact.mapQuery)}&output=embed`;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionHeading title={homeContact.title} center={false} />

        <div className="grid gap-10 lg:grid-cols-2">
          <ul className="space-y-6">
            {homeContact.items.map((item) => (
              <li key={item.label}>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-lg text-brand-dark hover:text-brand-gold"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-lg text-brand-dark">{item.value}</p>
                )}
              </li>
            ))}
          </ul>

          <div className="overflow-hidden rounded-lg border border-brand-light shadow-sm">
            <iframe
              title="BAGIA location"
              src={mapSrc}
              className="h-80 w-full border-0 lg:h-full lg:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
