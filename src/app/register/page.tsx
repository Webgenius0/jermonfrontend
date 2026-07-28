"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth, UserRole, SubscriptionTier } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { getAuthTranslations } from "@/data/auth";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const { language } = useLanguage();
  const t = getAuthTranslations(language);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<UserRole>("client");
  const [tier, setTier] = useState<SubscriptionTier>("PRO COLLECTION");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (password !== confirmPassword) {
      setErrorMsg(t.passwordsDoNotMatch);
      return;
    }

    const res = register({
      name,
      email,
      phone,
      companyName,
      password,
      role,
      subscriptionTier: tier,
    });

    if (res.success) {
      router.push("/dashboard");
    } else if (res.error) {
      setErrorMsg(t[res.error as keyof typeof t] || res.error);
    }
  };

  return (
    <div className="relative w-full max-w-5xl my-4">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[600px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.16)_0%,transparent_70%)] blur-3xl" />

      {/* Split Grid Card */}
      <div className="relative z-10 grid overflow-hidden rounded-3xl border border-brand-gold/30 bg-[#0a0a0a] shadow-[0_30px_90px_rgba(0,0,0,0.85)] lg:grid-cols-12">
        {/* Left Column: Branding & Feature Highlights */}
        <div className="relative hidden flex-col justify-between border-r border-white/10 bg-gradient-to-br from-brand-charcoal via-[#121212] to-black p-10 lg:col-span-5 lg:flex">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              🏛️ Global Network Membership
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-white leading-tight">
              Join BAGIA RD Private Desk
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-gray-300">
              Create an account to gain direct access to European auction houses, luxury boutique sourcing, and air freight logistics between Paris, London, & Santo Domingo.
            </p>
          </div>

          <div className="space-y-3 text-xs text-gray-300">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold font-bold">✓</span>
              <span>Dedicated 1-on-1 Logistics Advisor</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold font-bold">✓</span>
              <span>100% Insured High-Value Transport</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold font-bold">✓</span>
              <span>Express Customs & Export Formalities</span>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-[11px] text-gray-400">
            © 2026 BAGIA RD • Santo Domingo & Paris
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="p-8 md:p-10 lg:col-span-7 flex flex-col justify-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-extrabold text-white">
              {t.registerTitle}
            </h1>
            <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
              {t.registerSubtitle}
            </p>
          </div>

          {errorMsg && (
            <div className="mt-4 rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-center text-xs font-semibold text-red-400">
              ⚠️ {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
            {/* Role Selector */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                {t.roleLabel}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setRole("client")}
                  className={`rounded-2xl border p-2.5 text-center transition-all cursor-pointer ${
                    role === "client"
                      ? "border-brand-gold bg-brand-gold/20 text-brand-gold font-bold shadow-md"
                      : "border-white/10 bg-black/40 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <span className="block text-sm">👤</span>
                  <span className="mt-1 block text-[10px] leading-tight">
                    {t.rolePersonal}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("merchant")}
                  className={`rounded-2xl border p-2.5 text-center transition-all cursor-pointer ${
                    role === "merchant"
                      ? "border-brand-gold bg-brand-gold/20 text-brand-gold font-bold shadow-md"
                      : "border-white/10 bg-black/40 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <span className="block text-sm">🏛️</span>
                  <span className="mt-1 block text-[10px] leading-tight">
                    {t.roleMerchant}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setRole("collector")}
                  className={`rounded-2xl border p-2.5 text-center transition-all cursor-pointer ${
                    role === "collector"
                      ? "border-brand-gold bg-brand-gold/20 text-brand-gold font-bold shadow-md"
                      : "border-white/10 bg-black/40 text-gray-400 hover:border-white/20"
                  }`}
                >
                  <span className="block text-sm">💎</span>
                  <span className="mt-1 block text-[10px] leading-tight">
                    {t.roleCollector}
                  </span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300">
                {t.nameLabel}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.namePlaceholder}
                className="mt-1 w-full rounded-2xl border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-3">
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
                  className="mt-1 w-full rounded-2xl border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300">
                  {t.phoneLabel}
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className="mt-1 w-full rounded-2xl border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300">
                {t.companyLabel}
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder={t.companyPlaceholder}
                className="mt-1 w-full rounded-2xl border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                {t.tierLabel}
              </label>
              <select
                value={tier}
                onChange={(e) => setTier(e.target.value as SubscriptionTier)}
                className="w-full rounded-2xl border border-white/15 bg-black/70 px-3.5 py-2.5 text-xs text-white focus:border-brand-gold focus:outline-none"
              >
                <option value="ESSENTIAL">{t.tierEssential}</option>
                <option value="PRO COLLECTION">{t.tierPro}</option>
                <option value="PRIVATE CONCIERGE">{t.tierConcierge}</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-300">
                  {t.passwordLabel}
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="mt-1 w-full rounded-2xl border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300">
                  {t.confirmPasswordLabel}
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="mt-1 w-full rounded-2xl border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-3 w-full rounded-full bg-gold-gradient py-3.5 text-xs font-extrabold uppercase tracking-wider text-brand-black shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              {t.registerSubmit}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-white/10 text-center text-xs text-gray-400 md:text-left">
            {t.haveAccountPrompt}{" "}
            <Link
              href="/login"
              className="font-bold text-brand-gold hover:underline"
            >
              {t.loginTitle}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
