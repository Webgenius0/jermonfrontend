import { createPageMetadata } from "@/components/shared/PagePlaceholder";
import {
  ContactFormSection,
  ContactHero,
  ContactInfoSection,
} from "@/components/sections/contactenos";
import { contactPage } from "@/data/pages/contactenos";

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
    </>
  );
}
