import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  FAQSection,
  HeroSection,
  DemandingClienteleSection,
  EuropeSourcingIntro,
  JoinUsCTA,
  PieceSearchCTA,
  TailoredProcessSection,
  WhatWeDoSection,
} from "@/components/sections/concierge";
import { conciergePage } from "@/data/pages/concierge";

export const metadata = createPageMetadata(
  conciergePage.title,
  conciergePage.metaDescription,
);

export default function ConcierjeriaPage() {
  return (
    <>
      <HeroSection />
      <EuropeSourcingIntro />
      <WhatWeDoSection />
      <DemandingClienteleSection />
      <TailoredProcessSection />
      <FAQSection />
      <PieceSearchCTA />
      <JoinUsCTA />
    </>
  );
}
