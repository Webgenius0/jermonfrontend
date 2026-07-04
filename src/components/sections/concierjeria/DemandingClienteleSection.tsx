"use client";

import Image from "next/image";
import { useState } from "react";
import { concierjeriaClientele } from "@/data/pages/concierjeria";

export default function DemandingClienteleSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, images, paragraphs, bullets, closing } = concierjeriaClientele;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className="flex h-[420px] gap-3 overflow-hidden rounded-2xl md:h-[520px]"
            onMouseLeave={() => setActiveIndex(0)}
          >
            {images.map((image, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={image.src}
                  type="button"
                  className="relative overflow-hidden rounded-xl transition-[flex] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  style={{ flex: isActive ? 3 : 1 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  aria-label={image.alt ?? `Imagen ${index + 1}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt ?? ""}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </button>
              );
            })}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
              {title}
            </h2>

            {paragraphs?.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-6 text-base leading-relaxed text-brand-muted"
              >
                {paragraph}
              </p>
            ))}

            {bullets && (
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-brand-muted md:text-base">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {closing && (
              <p className="mt-6 font-semibold leading-relaxed text-brand-dark">
                {closing}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
