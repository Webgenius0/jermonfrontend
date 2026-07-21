import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  ContactFormSection,
  ContactHero,
  ContactInfoSection,
} from "@/components/sections/contact";
import JoinUsCTA from "@/components/sections/about-us/JoinUsCTA";
import { contactPage } from "@/data/pages/contact";

export const metadata = createPageMetadata(
  contactPage.title,
  contactPage.metaDescription,
);

export default function ContactenosPage() {
  return (
    <>
      <ContactHero />
      <ContactFormSection />
      <ContactInfoSection />
      <JoinUsCTA />
    </>
  );
}

