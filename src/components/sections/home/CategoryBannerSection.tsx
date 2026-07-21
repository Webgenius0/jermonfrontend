import Image from "next/image";
import Link from "next/link";

type CategoryBannerProps = {
  id: "jewelry" | "painting";
  title: string;
  cta: string;
  button: string;
  href: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

function ImagePanel({ image, imageAlt }: { image: string; imageAlt: string }) {
  return (
    <div className="group relative h-64 w-full shrink-0 overflow-hidden rounded-3xl bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-brand-gold/30 transition-transform duration-500 hover:scale-[1.02] sm:h-72 sm:w-64 md:h-80 md:w-72 lg:h-96 lg:w-80">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 320px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
      
      {/* Corner Badge */}
      <div className="absolute bottom-4 left-4 right-4">
        <span className="inline-block rounded-full bg-brand-gold/90 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-brand-black shadow-lg backdrop-blur-md">
          Premium Logistics
        </span>
      </div>
    </div>
  );
}

export default function CategoryBannerSection({
  title,
  cta,
  button,
  href,
  image,
  imageAlt,
  imagePosition = "left",
}: CategoryBannerProps) {
  const isRight = imagePosition === "right";
  const ctaClassName =
    "group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-9 py-3.5 text-sm font-extrabold uppercase tracking-wider text-brand-black shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,162,39,0.6)] cursor-pointer";

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-16 md:py-24 text-white">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(201,162,39,0.15),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(201,162,39,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-gold/25 bg-white/[0.03] p-8 md:p-12 lg:p-14 backdrop-blur-xl shadow-[0_30px_70px_rgba(0,0,0,0.5)]">
          <div className={`flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between lg:gap-16 ${isRight ? "md:flex-row-reverse" : ""}`}>
            <ImagePanel image={image} imageAlt={imageAlt} />

            <div className="flex-1 text-center md:text-left">
              <span className="inline-block rounded-full bg-brand-gold/15 border border-brand-gold/30 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light">
                Specialized Handling
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>

              <p className="mt-4 text-base text-gray-300 sm:text-lg lg:text-xl font-medium leading-relaxed max-w-xl">
                {cta}
              </p>

              {href.startsWith("http") ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ctaClassName}
                >
                  <span>{button}</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              ) : (
                <Link href={href} className={ctaClassName}>
                  <span>{button}</span>
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

