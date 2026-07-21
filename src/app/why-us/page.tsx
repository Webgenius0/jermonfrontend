import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import { WhyUsContent } from "@/components/sections/why-us";
import JoinUsCTA from "@/components/sections/about-us/JoinUsCTA";
import { whyUsPage } from "@/data/pages/why-us";

export const metadata = createPageMetadata(
  whyUsPage.title,
  whyUsPage.metaDescription,
);

export default function WhyUsPage() {
  return (
    <>
      <WhyUsContent />
      <JoinUsCTA />
    </>
  );
}
