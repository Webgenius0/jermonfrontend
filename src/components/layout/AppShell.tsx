"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthModal from "@/components/auth/AuthModal";
import AuthLayoutHeader from "@/components/auth/AuthLayoutHeader";
import AuthLayoutFooter from "@/components/auth/AuthLayoutFooter";

const AUTH_PATHS = [
  "/login",
  "/register",
  "/forgot-password",
  "/iniciar-sesion",
  "/registrarse",
];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = AUTH_PATHS.includes(pathname);

  if (isAuthPage) {
    return (
      <div className="flex min-h-screen flex-col bg-[#050505] text-white">
        <AuthLayoutHeader />
        <main className="flex-1 flex items-center justify-center py-10 px-4">
          {children}
        </main>
        <AuthLayoutFooter />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <AuthModal />
    </div>
  );
}
