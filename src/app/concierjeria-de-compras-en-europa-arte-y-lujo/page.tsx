import {
  createPageMetadata,
  PagePlaceholder,
} from "@/components/shared/PagePlaceholder";

export const metadata = createPageMetadata(
  "Concierjería de compras en Europa",
  "Concierjería de compras en Europa — arte y lujo.",
);

export default function ConcierjeriaPage() {
  return (
    <PagePlaceholder
      title="Concierjería de compras en Europa"
      description="Servicios de concierjería de compras para arte y lujo en Europa."
    />
  );
}
