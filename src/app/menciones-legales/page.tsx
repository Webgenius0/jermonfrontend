import type { Metadata } from "next";
import LegalPageRoute from "@/components/layout/LegalPageRoute";
import { legalNoticesDocument } from "@/data/pages/legal";
import { createLegalPageMetadata } from "@/lib/legal-metadata";

export const metadata: Metadata = createLegalPageMetadata(legalNoticesDocument);

export default function LegalNoticesPage() {
  return <LegalPageRoute documentKey="legalNotices" />;
}
