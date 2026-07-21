import { TrackOrderSection } from "@/components/sections/home";
import { createPageMetadata } from "@/components/shared/PagePlaceholder";

export const metadata = createPageMetadata("Track Order");

export default function OrderTrackingPage() {
  return (
    <main className="min-h-screen bg-white">
      <TrackOrderSection />
    </main>
  );
}
