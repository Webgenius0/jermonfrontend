import Image from "next/image";
import { logisticsBanner } from "@/data/pages/ofertas";

export default function LogisticsBannerSection() {
  return (
    <section className="relative min-h-[420px] overflow-hidden md:min-h-[480px]">
      <Image
        src={logisticsBanner.backgroundImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-4 py-16 md:min-h-[480px] lg:px-6">
        <div className="max-w-2xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold md:text-sm">
            {logisticsBanner.eyebrow}
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            {logisticsBanner.title}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/85 md:text-base">
            {logisticsBanner.description}
          </p>
        </div>
      </div>
    </section>
  );
}
