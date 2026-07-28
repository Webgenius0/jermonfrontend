"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getAuthTranslations } from "@/data/auth";

export default function ForgotPasswordPage() {
  const { language } = useLanguage();
  const t = getAuthTranslations(language);

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative w-full max-w-md my-4">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.16)_0%,transparent_70%)] blur-3xl" />

      <div className="relative z-10 overflow-hidden rounded-3xl border border-brand-gold/30 bg-[#0a0a0a] p-8 md:p-10 text-white shadow-[0_30px_90px_rgba(0,0,0,0.85)]">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient shadow-lg font-extrabold text-brand-black text-2xl">
            🔑
          </div>
          <h1 className="mt-5 text-3xl font-extrabold text-white">
            {t.forgotTitle}
          </h1>
          <p className="mt-2 text-xs leading-relaxed text-gray-400">
            {t.forgotSubtitle}
          </p>
        </div>

        {submitted ? (
          <div className="mt-6 text-center space-y-4">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs font-semibold text-emerald-400">
              ✓ {language === "es"
                ? "Hemos enviado las instrucciones para restablecer su contraseña a su correo electrónico."
                : language === "fr"
                ? "Nous avons envoyé les instructions de réinitialisation à votre adresse e-mail."
                : "We have sent password reset instructions to your email address."}
            </div>
            <Link
              href="/login"
              className="inline-block rounded-full bg-gold-gradient px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-brand-black shadow-md hover:scale-105 transition-all"
            >
              {t.backToLogin}
            </Link>
          </div>
        ) : (
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
                className="mt-1.5 w-full rounded-2xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-brand-gold focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gold-gradient py-4 text-xs font-extrabold uppercase tracking-wider text-brand-black shadow-lg transition-all hover:scale-105 cursor-pointer"
            >
              {t.forgotSubmit}
            </button>

            <div className="text-center pt-2">
              <Link
                href="/login"
                className="text-xs font-semibold text-brand-gold hover:underline"
              >
                ← {t.backToLogin}
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
