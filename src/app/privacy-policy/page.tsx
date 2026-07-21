import type { Metadata } from "next";
import LegalPageRoute from "@/components/layout/LegalPageRoute";
import { privacyPolicyDocument } from "@/data/pages/legal";
import { createLegalPageMetadata } from "@/lib/legal-metadata";

export const metadata: Metadata = createLegalPageMetadata(privacyPolicyDocument);

export default function PrivacyPolicyPage() {
  return <LegalPageRoute documentKey="privacy" />;
}
