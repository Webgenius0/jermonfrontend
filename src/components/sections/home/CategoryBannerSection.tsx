import Link from "next/link";

type CategoryBannerProps = {
  title: string;
  cta: string;
  button: string;
  href: string;
};

export default function CategoryBannerSection({
  title,
  cta,
  button,
  href,
}: CategoryBannerProps) {
  return (
    <section className="bg-brand-charcoal py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-6">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-brand-gold/40">
          <svg
            className="h-10 w-10 text-brand-gold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6v12m-6-6h12"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mt-3 text-white/70">{cta}</p>
        <Link
          href={href}
          className="mt-8 inline-block text-sm font-semibold text-brand-gold hover:text-brand-gold-light"
        >
          {button} →
        </Link>
      </div>
    </section>
  );
}
