import { homePartners } from "@/data/pages/home";
import LogoMarquee from "@/components/ui/LogoMarquee";
import { SectionHeading } from "@/components/ui/HomeUi";

export default function PartnersSection() {
  return (
    <section className="bg-white">
      <LogoMarquee logos={homePartners.logos} />

      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-6">
        <SectionHeading title={homePartners.title} />
      </div>
    </section>
  );
}
