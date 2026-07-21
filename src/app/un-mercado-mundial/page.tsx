import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  BeginningIntro,
  DominicanPotentialSection,
  GlobalMarketStats,
  HeroSection,
  ObstaclesSection,
  PremiumLogisticsSection,
  PromisingMarketsSection,
  SalesImpactSection,
  TradeNormSection,
} from "@/components/sections/global-market";
import JoinUsCTA from "@/components/sections/about-us/JoinUsCTA";
import { globalMarketPage } from "@/data/pages/global-market";

export const metadata = createPageMetadata(
  globalMarketPage.title,
  globalMarketPage.metaDescription,
);

export default function MercadoMundialPage() {
  return (
    <>
      <HeroSection />
      <BeginningIntro />
      <GlobalMarketStats />
      <TradeNormSection />
      <DominicanPotentialSection />
      <PromisingMarketsSection />
      <ObstaclesSection />
      <PremiumLogisticsSection />
      <SalesImpactSection />
      <JoinUsCTA />
    </>
  );
}

