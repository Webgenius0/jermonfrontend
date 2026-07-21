import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  ConcreteImpactSection,
  HeroSection,
  InternationalClienteleSection,
  JoinUsCTA,
  OperationalExperienceSection,
  VisionSection,
  WhyDominicanRepublicSection,
} from "@/components/sections/about-us";
import { aboutUsPage } from "@/data/pages/about-us";

export const metadata = createPageMetadata(
  aboutUsPage.title,
  aboutUsPage.metaDescription,
);

export default function AboutUsPage() {
  return (
    <>
      <HeroSection />
      <OperationalExperienceSection />
      <ConcreteImpactSection />
      <WhyDominicanRepublicSection />
      <InternationalClienteleSection />
      <VisionSection />
      <JoinUsCTA />
    </>
  );
}
