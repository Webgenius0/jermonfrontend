import Image from "next/image";

export type MarqueeLogo = {
  name: string;
  src?: string;
  alt?: string;
};

type LogoMarqueeProps = {
  logos: MarqueeLogo[];
  speed?: number;
};

export default function LogoMarquee({ logos, speed = 35 }: LogoMarqueeProps) {
  const track = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden border-b border-brand-light bg-brand-cream/50 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-brand-cream/50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-brand-cream/50 to-transparent" />

      <div
        className="flex w-max animate-marquee items-center gap-12 px-6"
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-16 w-36 shrink-0 items-center justify-center grayscale transition-all hover:grayscale-0"
          >
            {logo.src ? (
              <Image
                src={logo.src}
                alt={logo.alt ?? logo.name}
                width={140}
                height={56}
                className="max-h-14 w-auto object-contain"
              />
            ) : (
              <span className="text-center text-xs font-semibold uppercase tracking-widest text-brand-muted/80">
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
