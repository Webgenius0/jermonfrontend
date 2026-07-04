import {
  createPageMetadata,
  PagePlaceholder,
} from "@/components/shared/PagePlaceholder";

export const metadata = createPageMetadata("Seguimiento");

export default function SeguimientoPage() {
  return (
    <PagePlaceholder
      title="Seguimiento"
      description="Track your shipment."
    />
  );
}
