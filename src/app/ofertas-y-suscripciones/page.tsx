import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  ChooseServiceSection,
  InternationalMarketingSection,
  LogisticsBannerSection,
  OfertasHero,
  WhatsAppCTASection,
} from "@/components/sections/ofertas";
import { ofertasPage } from "@/data/pages/ofertas";

export const metadata = createPageMetadata(
  ofertasPage.title,
  ofertasPage.metaDescription,
);

export default function OfertasPage() {
  return (
    <>
      <OfertasHero />
      <ChooseServiceSection />
      <LogisticsBannerSection />
      <InternationalMarketingSection />
      <WhatsAppCTASection />
    </>
  );
}
