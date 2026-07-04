import {
  createPageMetadata,
  PagePlaceholder,
} from "@/components/shared/PagePlaceholder";

export const metadata = createPageMetadata("Contáctenos");

export default function ContactenosPage() {
  return (
    <PagePlaceholder
      title="Contáctenos"
      description="Contact form will use React Hook Form."
    />
  );
}
