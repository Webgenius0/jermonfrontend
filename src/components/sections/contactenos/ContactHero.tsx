import Image from "next/image";
import { contactHero } from "@/data/pages/contactenos";

export default function ContactHero() {
  return (
    <section className="bg-[#2d2d2d] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-[3.25rem]">
            {contactHero.title}
          </h1>

          <div className="relative aspect-[4/3] overflow-hidden rounded-tl-[3rem] rounded-br-[3rem] md:aspect-[5/4]">
            <Image
              src={contactHero.image}
              alt="Mobiliario y arte"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
