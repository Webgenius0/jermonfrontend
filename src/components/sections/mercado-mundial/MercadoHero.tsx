import Image from "next/image";
import Link from "next/link";
import { mercadoHero } from "@/data/pages/mercado-mundial";

export default function MercadoHero() {
  return (
    <section className="relative min-h-[420px] overflow-hidden md:min-h-[520px]">
      <Image
        src={mercadoHero.backgroundImage}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-4 py-20 md:min-h-[520px] lg:px-6">
        <div className="max-w-4xl text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            {mercadoHero.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold uppercase leading-tight md:text-4xl lg:text-5xl">
            {mercadoHero.title}
          </h1>
          <p className="mt-4 text-lg font-semibold uppercase leading-snug text-white/90 md:text-xl">
            {mercadoHero.subtitle}
          </p>
          <Link
            href={mercadoHero.cta.href}
            className="mt-8 inline-flex rounded-full border border-brand-gold px-8 py-3 text-sm font-semibold text-brand-gold transition-colors hover:bg-brand-gold hover:text-brand-black"
          >
            {mercadoHero.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
