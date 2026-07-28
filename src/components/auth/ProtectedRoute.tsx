"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, openAuthModal } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      openAuthModal("login");
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, openAuthModal, router]);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#0a0a0a] text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-gold border-t-transparent" />
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Loading Client Portal...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
