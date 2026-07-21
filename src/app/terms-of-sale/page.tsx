import type { Metadata } from "next";
import LegalPageRoute from "@/components/layout/LegalPageRoute";
import { termsOfSaleDocument } from "@/data/pages/legal";
import { createLegalPageMetadata } from "@/lib/legal-metadata";

export const metadata: Metadata = createLegalPageMetadata(termsOfSaleDocument);

export default function TermsOfSalePage() {
  return <LegalPageRoute documentKey="termsOfSale" />;
}
