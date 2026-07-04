import Image from "next/image";
import Link from "next/link";
import { homeHero } from "@/data/pages/home";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-brand-charcoal text-white">
      <Image
        src={homeHero.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover object-center grayscale"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 lg:px-10 lg:pb-20">
        <div className="max-w-xl">
          <div className="space-y-0.5 text-3xl font-bold leading-snug md:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {homeHero.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <p className="mt-5 text-base text-white/90 md:text-lg">
            {homeHero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {homeHero.buttons.map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                className="rounded-full border border-brand-gold/80 bg-black/40 px-6 py-2.5 text-sm font-semibold text-brand-gold backdrop-blur-sm transition-colors hover:border-brand-gold hover:bg-brand-gold/15"
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
