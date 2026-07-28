"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { getAuthTranslations } from "@/data/auth";

export default function LoginPage() {
  const router = useRouter();
  const { login, demoLogin } = useAuth();
  const { language } = useLanguage();
  const t = getAuthTranslations(language);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorKey, setErrorKey] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorKey(null);
    const res = login(email, password);
    if (res.success) {
      router.push("/dashboard");
    } else if (res.error) {
      setErrorKey(res.error);
    }
  };

  const handleDemoLogin = (type: "client" | "merchant") => {
    demoLogin(type);
    router.push("/dashboard");
  };

  return (
    <div className="relative w-full max-w-5xl my-4">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[550px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.16)_0%,transparent_70%)] blur-3xl" />

      {/* Split Grid Card */}
      <div className="relative z-10 grid overflow-hidden rounded-3xl border border-brand-gold/30 bg-[#0a0a0a] shadow-[0_30px_90px_rgba(0,0,0,0.85)] lg:grid-cols-12">
        {/* Left Column: Branding & Feature Highlights */}
        <div className="relative hidden flex-col justify-between border-r border-white/10 bg-gradient-to-br from-brand-charcoal via-[#121212] to-black p-10 lg:col-span-5 lg:flex">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              ✨ Member Portal
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-white leading-tight">
              International Art & Luxury Logistics
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-gray-300">
              Access your personal shipping dashboard, track live air and ocean cargo, and request European shopping concierge services in Paris & London.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
              <span className="text-xs font-bold text-brand-gold">✈️ Express Air Freight</span>
              <p className="mt-1 text-[11px] text-gray-300">
                Museum-grade protective crates & express customs clearance.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
              <span className="text-xs font-bold text-brand-gold">💎 Concierge Shopping</span>
              <p className="mt-1 text-[11px] text-gray-300">
                Bespoke acquisition in Hermès, Chanel, & Drouot auction houses.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-[11px] text-gray-400">
            Trusted by 500+ collectors, jewelers & galleries worldwide.
          </div>
        </div>

        {/* Right Column: Form Container */}
        <div className="p-8 md:p-12 lg:col-span-7 flex flex-col justify-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-white">
              {t.loginTitle}
            </h1>
            <p className="mt-2 text-xs leading-relaxed text-gray-400">
              {t.loginSubtitle}
            </p>
          </div>

          {/* Quick Demo Access Bar */}
          <div className="mt-6 rounded-2xl border border-brand-gold/30 bg-brand-gold/10 p-3.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-brand-gold">
              ⚡ {t.demoLoginTitle}
            </p>
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin("client")}
                className="rounded-xl border border-white/15 bg-white/5 py-2 px-2 text-[11px] font-semibold text-white hover:border-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer shadow-sm"
              >
                👤 {t.demoClient}
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin("merchant")}
                className="rounded-xl border border-white/15 bg-white/5 py-2 px-2 text-[11px] font-semibold text-white hover:border-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer shadow-sm"
              >
                🏛️ {t.demoMerchant}
              </button>
            </div>
          </div>

          {errorKey && (
            <div className="mt-4 rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-center text-xs font-semibold text-red-400">
              ⚠️ {t[errorKey as keyof typeof t] || errorKey}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300">
                {t.emailLabel}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                className="mt-1.5 w-full rounded-2xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-gray-300">
                  {t.passwordLabel}
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[11px] font-medium text-brand-gold hover:underline"
                >
                  {t.forgotPasswordLink}
                </Link>
              </div>
              <div className="relative mt-1.5">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="w-full rounded-2xl border border-white/15 bg-black/50 px-4 py-3 pr-10 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-gold-gradient py-4 text-xs font-extrabold uppercase tracking-wider text-brand-black shadow-[0_0_25px_rgba(201,162,39,0.35)] transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(201,162,39,0.55)] cursor-pointer"
            >
              {t.loginSubmit}
            </button>
          </form>

          {/* Footer Prompt */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-400 md:text-left">
            {t.noAccountPrompt}{" "}
            <Link
              href="/register"
              className="font-bold text-brand-gold hover:underline"
            >
              {t.signUpNow}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
