import type { Metadata } from "next";
import type { LegalDocument } from "@/data/pages/legal";

export function createLegalPageMetadata(document: LegalDocument): Metadata {
  return {
    title: document.title,
    description: document.description,
  };
}
