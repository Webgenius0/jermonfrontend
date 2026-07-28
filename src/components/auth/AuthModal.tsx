"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { getAuthTranslations } from "@/data/auth";

export default function AuthModal() {
  const {
    authModalOpen,
    authModalView,
    closeAuthModal,
    setAuthModalView,
    login,
    register,
    demoLogin,
  } = useAuth();

  const { language } = useLanguage();
  const t = getAuthTranslations(language);

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!authModalOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorKey(null);
    const res = login(email, password);
    if (!res.success && res.error) {
      setErrorKey(res.error);
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorKey(null);
    if (!name || !email || !password) return;

    const res = register({
      name,
      email,
      phone,
      companyName,
      password,
      role: "client",
      subscriptionTier: "PRO COLLECTION",
    });

    if (!res.success && res.error) {
      setErrorKey(res.error);
    }
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorKey(null);
    setSuccessMessage(
      language === "es"
        ? "Enlace enviado a su correo electrónico."
        : language === "fr"
        ? "Lien envoyé à votre adresse e-mail."
        : "Reset link sent to your email address."
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Overlay Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={closeAuthModal}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-brand-gold/30 bg-[#0d0d0d] p-7 text-white shadow-[0_25px_70px_rgba(0,0,0,0.8)] md:p-9">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeAuthModal}
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gray-400 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Header Symbol & Title */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient shadow-md font-bold text-brand-black text-xl">
            B
          </div>

          <h3 className="mt-4 text-2xl font-extrabold text-white">
            {authModalView === "login"
              ? t.loginTitle
              : authModalView === "register"
              ? t.registerTitle
              : t.forgotTitle}
          </h3>

          <p className="mt-1.5 text-xs text-gray-400 leading-relaxed">
            {authModalView === "login"
              ? t.loginSubtitle
              : authModalView === "register"
              ? t.registerSubtitle
              : t.forgotSubtitle}
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="mt-6 grid grid-cols-2 rounded-2xl bg-black/60 p-1 border border-white/10 text-xs font-bold">
          <button
            type="button"
            onClick={() => {
              setAuthModalView("login");
              setErrorKey(null);
            }}
            className={`rounded-xl py-2 transition-all cursor-pointer ${
              authModalView === "login"
                ? "bg-gold-gradient text-brand-black shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {t.loginTitle}
          </button>
          <button
            type="button"
            onClick={() => {
              setAuthModalView("register");
              setErrorKey(null);
            }}
            className={`rounded-xl py-2 transition-all cursor-pointer ${
              authModalView === "register"
                ? "bg-gold-gradient text-brand-black shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {t.registerTitle}
          </button>
        </div>

        {/* Error / Success Notifications */}
        {errorKey && (
          <div className="mt-4 rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-center text-xs font-semibold text-red-400">
            ⚠️ {t[errorKey as keyof typeof t] || errorKey}
          </div>
        )}

        {successMessage && (
          <div className="mt-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-center text-xs font-semibold text-emerald-400">
            ✓ {successMessage}
          </div>
        )}

        {/* 1-Click Demo Login Helper */}
        {authModalView === "login" && (
          <div className="mt-5 rounded-2xl border border-brand-gold/25 bg-brand-gold/5 p-3.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-brand-gold text-center">
              {t.demoLoginTitle}
            </p>
            <div className="mt-2.5 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => demoLogin("client")}
                className="rounded-xl border border-white/10 bg-white/5 py-2 px-2 text-[11px] font-semibold text-white hover:border-brand-gold hover:bg-brand-gold/20 transition-all cursor-pointer"
              >
                👤 {t.demoClient}
              </button>
              <button
                type="button"
                onClick={() => demoLogin("merchant")}
                className="rounded-xl border border-white/10 bg-white/5 py-2 px-2 text-[11px] font-semibold text-white hover:border-brand-gold hover:bg-brand-gold/20 transition-all cursor-pointer"
              >
                🏛️ {t.demoMerchant}
              </button>
            </div>
          </div>
        )}

        {/* FORM VIEW: LOGIN */}
        {authModalView === "login" && (
          <form onSubmit={handleLoginSubmit} className="mt-5 space-y-4">
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
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-xs font-semibold text-gray-300">
                  {t.passwordLabel}
                </label>
                <button
                  type="button"
                  onClick={() => setAuthModalView("forgot")}
                  className="text-[11px] font-medium text-brand-gold hover:underline cursor-pointer"
                >
                  {t.forgotPasswordLink}
                </button>
              </div>
              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t.passwordPlaceholder}
                  className="w-full rounded-xl border border-white/15 bg-black/50 px-3.5 py-2.5 pr-10 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xs"
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gold-gradient py-3 text-xs font-extrabold uppercase tracking-wider text-brand-black shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
            >
              {t.loginSubmit}
            </button>
          </form>
        )}

        {/* FORM VIEW: REGISTER */}
        {authModalView === "register" && (
          <form onSubmit={handleRegisterSubmit} className="mt-5 space-y-3">
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
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3.5 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
              />
            </div>

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
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3.5 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-semibold text-gray-300">
                  {t.phoneLabel}
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
                />
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
                  className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3 py-2 text-xs text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
                />
              </div>
            </div>

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
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3.5 py-2 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-gold-gradient py-3 text-xs font-extrabold uppercase tracking-wider text-brand-black shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
            >
              {t.registerSubmit}
            </button>
          </form>
        )}

        {/* FORM VIEW: FORGOT PASSWORD */}
        {authModalView === "forgot" && (
          <form onSubmit={handleForgotSubmit} className="mt-5 space-y-4">
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
                className="mt-1 w-full rounded-xl border border-white/15 bg-black/50 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gold-gradient py-3 text-xs font-extrabold uppercase tracking-wider text-brand-black shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
            >
              {t.forgotSubmit}
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setAuthModalView("login")}
                className="text-xs font-semibold text-brand-gold hover:underline cursor-pointer"
              >
                ← {t.backToLogin}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
