import { comercializacionPlatforms } from "@/data/pages/comercializacion";
import LogoMarquee from "@/components/ui/LogoMarquee";

export default function PlatformMarqueeSection() {
  return (
    <section className="bg-white pb-14 pt-4">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-6">
        <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">
          {comercializacionPlatforms.title}
        </h2>
      </div>
      <div className="mt-8">
        <LogoMarquee logos={comercializacionPlatforms.logos} speed={35} />
      </div>
    </section>
  );
}
