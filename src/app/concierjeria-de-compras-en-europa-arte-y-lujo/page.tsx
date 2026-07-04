import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  ConcierjeriaFAQSection,
  ConcierjeriaHero,
  DemandingClienteleSection,
  EuropeSourcingIntro,
  JoinUsCTA,
  PieceSearchCTA,
  TailoredProcessSection,
  WhatWeDoSection,
} from "@/components/sections/concierjeria";
import { concierjeriaPage } from "@/data/pages/concierjeria";

export const metadata = createPageMetadata(
  concierjeriaPage.title,
  concierjeriaPage.metaDescription,
);

export default function ConcierjeriaPage() {
  return (
    <>
      <ConcierjeriaHero />
      <EuropeSourcingIntro />
      <WhatWeDoSection />
      <DemandingClienteleSection />
      <TailoredProcessSection />
      <ConcierjeriaFAQSection />
      <PieceSearchCTA />
      <JoinUsCTA />
    </>
  );
}
