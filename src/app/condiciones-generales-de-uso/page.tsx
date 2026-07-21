import type { Metadata } from "next";
import LegalPageRoute from "@/components/layout/LegalPageRoute";
import { termsOfUseDocument } from "@/data/pages/legal";
import { createLegalPageMetadata } from "@/lib/legal-metadata";

export const metadata: Metadata = createLegalPageMetadata(termsOfUseDocument);

export default function TermsOfUsePage() {
  return <LegalPageRoute documentKey="termsOfUse" />;
}
