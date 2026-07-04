import { comercializacionHero } from "@/data/pages/comercializacion";

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className="h-28 w-28 md:h-36 md:w-36"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="44" stroke="white" strokeWidth="2.5" />
      <ellipse cx="60" cy="60" rx="18" ry="44" stroke="white" strokeWidth="2" />
      <path d="M16 60h88M60 16c-12 14-12 74 0 88M60 16c12 14 12 74 0 88" stroke="white" strokeWidth="2" />
      <circle cx="60" cy="60" r="6" fill="#c9a227" />
    </svg>
  );
}

export default function ComercializacionHero() {
  return (
    <section className="bg-brand-cream py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight text-brand-dark md:text-4xl lg:text-[2.5rem]">
            {comercializacionHero.title}
          </h1>
          <div className="flex shrink-0 items-center justify-center rounded-full bg-brand-charcoal p-6 md:p-8">
            <GlobeIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
