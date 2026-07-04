"use client";

import Image from "next/image";
import { useState } from "react";

export type MarqueeLogo = {
  name: string;
  src?: string;
  alt?: string;
};

type LogoMarqueeProps = {
  logos: MarqueeLogo[];
  /** Animation duration in seconds — lower = faster */
  speed?: number;
};

export default function LogoMarquee({ logos, speed = 40 }: LogoMarqueeProps) {
  const [paused, setPaused] = useState(false);
  const track = [...logos, ...logos];

  return (
    <div
      className="relative overflow-hidden border-b border-brand-light bg-brand-cream py-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-brand-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-brand-cream to-transparent" />

      <div
        className="flex w-max items-center gap-12 px-6"
        style={{
          animation: `marquee ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
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
                className="h-auto max-h-14 w-auto object-contain"
                draggable={false}
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
