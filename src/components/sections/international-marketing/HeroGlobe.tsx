"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

const MARKERS: { location: [number, number]; size: number }[] = [
  { location: [48.8566, 2.3522], size: 0.06 },
  { location: [40.7128, -74.006], size: 0.06 },
  { location: [18.4861, -69.9312], size: 0.07 },
  { location: [35.6762, 139.6503], size: 0.06 },
];

const GOLD: [number, number, number] = [201 / 255, 162 / 255, 39 / 255];

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth || 360;
    let frameId = 0;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.15,
      mapSamples: 20000,
      mapBrightness: 8,
      baseColor: [0.12, 0.11, 0.09],
      markerColor: GOLD,
      glowColor: GOLD,
      markers: MARKERS,
    });

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) {
        width = entry.contentRect.width;
      }
    });
    observer.observe(canvas);

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (pointerInteracting.current === null) {
        phiRef.current += 0.004;
      }
      globe.update({
        width: width * 2,
        height: width * 2,
        phi: phiRef.current + pointerInteractionMovement.current,
      });
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      globe.destroy();
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.2)_0%,transparent_70%)]" />
      <canvas
        ref={canvasRef}
        className="relative h-full w-full cursor-grab active:cursor-grabbing"
        aria-hidden="true"
        onPointerDown={(event) => {
          pointerInteracting.current =
            event.clientX - pointerInteractionMovement.current;
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
        }}
        onMouseMove={(event) => {
          if (pointerInteracting.current !== null) {
            const delta = event.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 200;
          }
        }}
        onTouchMove={(event) => {
          if (pointerInteracting.current !== null && event.touches[0]) {
            const delta = event.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta / 120;
          }
        }}
      />
      <div className="pointer-events-none absolute right-0 top-4 rounded-full bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-black sm:text-xs">
        Global reach
      </div>
    </div>
  );
}
