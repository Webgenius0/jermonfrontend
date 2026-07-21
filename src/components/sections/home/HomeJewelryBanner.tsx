"use client";

import { getHomeCategories } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";
import CategoryBannerSection from "./CategoryBannerSection";

export default function HomeJewelryBanner() {
  const { language } = useLanguage();
  const category = getHomeCategories(language)[0];

  return <CategoryBannerSection {...category} />;
}
