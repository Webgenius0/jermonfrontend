"use client";

import { getHomeCategories } from "@/data/pages/home";
import { useLanguage } from "@/context/LanguageContext";
import CategoryBannerSection from "./CategoryBannerSection";

export default function HomePaintingBanner() {
  const { language } = useLanguage();
  const category = getHomeCategories(language)[1];

  return <CategoryBannerSection {...category} imagePosition="right" />;
}
