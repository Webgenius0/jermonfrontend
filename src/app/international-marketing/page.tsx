import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  AudienceSection,
  HeroSection,
  ConnectTalentIntro,
  JoinSubscriptionCTA,
  PlatformMarqueeSection,
  WhatWeDoForYouSection,
  WhyInternationalSection,
} from "@/components/sections/international-marketing";
import { internationalMarketingPage } from "@/data/pages/international-marketing";

export const metadata = createPageMetadata(
  internationalMarketingPage.title,
  internationalMarketingPage.metaDescription,
);

export default function ComercializacionPage() {
  return (
    <>
      <HeroSection />
      <PlatformMarqueeSection />
      <ConnectTalentIntro />
      <WhyInternationalSection />
      <WhatWeDoForYouSection />
      <AudienceSection />
      <JoinSubscriptionCTA />
    </>
  );
}
