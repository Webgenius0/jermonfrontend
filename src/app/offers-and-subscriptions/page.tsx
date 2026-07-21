import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  ChooseServiceSection,
  InternationalMarketingSection,
  LogisticsBannerSection,
  HeroSection,
  WhatsAppCTASection,
} from "@/components/sections/offers";
import { offersPage } from "@/data/pages/offers";

export const metadata = createPageMetadata(
  offersPage.title,
  offersPage.metaDescription,
);

export default function OfertasPage() {
  return (
    <>
      <HeroSection />
      <ChooseServiceSection />
      <LogisticsBannerSection />
      <InternationalMarketingSection />
      <WhatsAppCTASection />
    </>
  );
}
