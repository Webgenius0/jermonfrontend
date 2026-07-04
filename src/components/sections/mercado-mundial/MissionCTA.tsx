import Link from "next/link";
import { mission } from "@/data/pages/mercado-mundial";

export default function MissionCTA() {
  return (
    <section className="bg-brand-gold py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-6">
        <div className="mx-auto mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-brand-black">
          <span className="text-lg font-bold text-brand-black">!</span>
        </div>
        <h2 className="text-3xl font-bold text-brand-black md:text-4xl">
          {mission.title}
        </h2>
        <p className="mt-6 text-base font-medium text-brand-black/80">
          {mission.intro}
        </p>
        <ul className="mt-6 space-y-2 text-sm text-brand-black/85 md:text-base">
          {mission.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
        <p className="mt-8 text-lg font-bold text-brand-black">
          {mission.closing}
        </p>
        <Link
          href={mission.cta.href}
          className="mt-8 inline-flex rounded-full bg-brand-black px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-charcoal"
        >
          {mission.cta.label}
        </Link>
      </div>
    </section>
  );
}
