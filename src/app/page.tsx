import type { Metadata } from "next";
import {
  CategoryBannerSection,
  ConciergeSection,
  ContactSection,
  ExpertiseSection,
  FAQSection,
  GlobalMarketSection,
  HeroSection,
  PartnersSection,
  ProcessSection,
  TestimonialsSection,
  TrackOrderSection,
} from "@/components/sections/home";
import { homeCategories, homePage } from "@/data/pages/home";

export const metadata: Metadata = {
  title: homePage.title,
  description: homePage.metaDescription,
};

export default function HomePage() {
  const [jewelry, painting] = homeCategories;

  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ExpertiseSection />
      <ConciergeSection />
      <TrackOrderSection />
      <CategoryBannerSection {...jewelry} />
      <GlobalMarketSection />
      <ProcessSection />
      <CategoryBannerSection {...painting} />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
