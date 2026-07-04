import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  BeginningIntro,
  DominicanPotentialSection,
  GlobalMarketStats,
  MercadoHero,
  MissionCTA,
  ObstaclesSection,
  PremiumLogisticsSection,
  PromisingMarketsSection,
  SalesImpactSection,
  TradeNormSection,
} from "@/components/sections/mercado-mundial";
import { mercadoMundialPage } from "@/data/pages/mercado-mundial";

export const metadata = createPageMetadata(
  mercadoMundialPage.title,
  mercadoMundialPage.metaDescription,
);

export default function MercadoMundialPage() {
  return (
    <>
      <MercadoHero />
      <BeginningIntro />
      <GlobalMarketStats />
      <TradeNormSection />
      <DominicanPotentialSection />
      <PromisingMarketsSection />
      <ObstaclesSection />
      <PremiumLogisticsSection />
      <SalesImpactSection />
      <MissionCTA />
    </>
  );
}
