import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  AudienceSection,
  ComercializacionHero,
  ConnectTalentIntro,
  JoinSubscriptionCTA,
  PlatformMarqueeSection,
  WhatWeDoForYouSection,
  WhyInternationalSection,
} from "@/components/sections/comercializacion";
import { comercializacionPage } from "@/data/pages/comercializacion";

export const metadata = createPageMetadata(
  comercializacionPage.title,
  comercializacionPage.metaDescription,
);

export default function ComercializacionPage() {
  return (
    <>
      <ComercializacionHero />
      <PlatformMarqueeSection />
      <ConnectTalentIntro />
      <WhyInternationalSection />
      <WhatWeDoForYouSection />
      <AudienceSection />
      <JoinSubscriptionCTA />
    </>
  );
}
