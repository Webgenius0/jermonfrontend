import type { Metadata } from "next";
import {
  ConciergeSection,
  ContactSection,
  ExpertiseSection,
  FAQSection,
  GlobalMarketSection,
  HeroSection,
  HomeJewelryBanner,
  HomePaintingBanner,
  PartnersSection,
  ProcessSection,
  TestimonialsSection,
  TrackOrderSection,
} from "@/components/sections/home";
import { homePage } from "@/data/pages/home";

export const metadata: Metadata = {
  title: homePage.title,
  description: homePage.metaDescription,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ExpertiseSection />
      <ConciergeSection />
      <TrackOrderSection />
      <HomeJewelryBanner />
      <GlobalMarketSection />
      <ProcessSection />
      <HomePaintingBanner />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
