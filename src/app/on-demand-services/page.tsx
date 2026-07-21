import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  HeroSection,
  LogisticsTrustBar,
  ServiceCardsSection,
  InstantQuoteBanner,
} from "@/components/sections/on-demand-services";
import { onDemandServicesPage } from "@/data/pages/on-demand-services";

export const metadata = createPageMetadata(
  onDemandServicesPage.title,
  onDemandServicesPage.metaDescription,
);

export default function OnDemandServicesPage() {
  return (
    <>
      <HeroSection />
      <LogisticsTrustBar />
      <ServiceCardsSection />
      <InstantQuoteBanner />
    </>
  );
}
