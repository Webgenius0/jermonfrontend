"use client";

import LegalPage from "@/components/layout/LegalPage";
import { useLanguage } from "@/context/LanguageContext";
import {
  getLegalNoticesDocument,
  getPrivacyPolicyDocument,
  getTermsOfSaleDocument,
  getTermsOfUseDocument,
} from "@/data/pages/legal";

export type LegalDocumentKey = "privacy" | "legalNotices" | "termsOfSale" | "termsOfUse";

const documentGetters = {
  privacy: getPrivacyPolicyDocument,
  legalNotices: getLegalNoticesDocument,
  termsOfSale: getTermsOfSaleDocument,
  termsOfUse: getTermsOfUseDocument,
} as const;

type LegalPageRouteProps = {
  documentKey: LegalDocumentKey;
};

export default function LegalPageRoute({ documentKey }: LegalPageRouteProps) {
  const { language } = useLanguage();
  const document = documentGetters[documentKey](language);
  return <LegalPage document={document} />;
}
