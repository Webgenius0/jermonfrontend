"use client";

import { useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { getAuthTranslations } from "@/data/auth";

type DashboardTab = "overview" | "shipments" | "profile" | "subscription";

type MockShipment = {
  id: string;
  trackingNo: string;
  itemDescription: string;
  origin: string;
  destination: string;
  status: "In Transit" | "Customs Clearance" | "Delivered" | "Sourcing Phase";
  statusColor: string;
  date: string;
};

const MOCK_SHIPMENTS: MockShipment[] = [
  {
    id: "shp_8849",
    trackingNo: "BAG-8849-PAR",
    itemDescription: "18th-Century European Oil Painting & Antique Frame",
    origin: "Paris, France 🇫🇷",
    destination: "Santo Domingo, DR 🇩🇴",
    status: "In Transit",
    statusColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    date: "2026-07-20",
  },
  {
    id: "shp_9102",
    trackingNo: "BAG-9102-LDN",
    itemDescription: "Rare Birkin 30 Gold Hardware & Exclusive Leather Box",
    origin: "London, UK 🇬🇧",
    destination: "Santo Domingo, DR 🇩🇴",
    status: "Customs Clearance",
    statusColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    date: "2026-07-18",
  },
  {
    id: "shp_7721",
    trackingNo: "BAG-7721-MIA",
    itemDescription: "Haute Horlogerie Custom Watch Case",
    origin: "Miami, USA 🇺🇸",
    destination: "Santo Domingo, DR 🇩🇴",
    status: "Delivered",
    statusColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    date: "2026-07-10",
  },
];

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

function DashboardContent() {
  const { user, logout, updateProfile } = useAuth();
  const { language } = useLanguage();
  const t = getAuthTranslations(language);

  const [activeTab, setActiveTab] = useState<DashboardTab>("overview");

  // Profile Form state
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [companyName, setCompanyName] = useState(user?.companyName || "");
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, phone, companyName });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  if (!user) return null;

  return (
    <div className="relative min-h-[90vh] bg-[#070707] py-12 text-white md:py-20">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -z-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.12)_0%,transparent_70%)] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        {/* User Hero Header */}
        <div className="overflow-hidden rounded-3xl border border-brand-gold/30 bg-white/[0.03] p-8 md:p-10 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border-2 border-brand-gold bg-gold-gradient font-black text-brand-black text-2xl shadow-lg">
                {user.avatar ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  user.name.charAt(0)
                )}
              </div>

              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-2xl font-extrabold text-white md:text-3xl">
                    {user.name}
                  </h1>
                  <span className="rounded-full bg-brand-gold/15 border border-brand-gold/40 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-brand-gold-light">
                    {user.subscriptionTier}
                  </span>
                </div>
                <p className="mt-1 text-xs text-gray-400">
                  {user.email} {user.companyName ? `• ${user.companyName}` : ""}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/order-tracking"
                className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-gold-light hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer"
              >
                + New Shipment
              </Link>
              <button
                type="button"
                onClick={logout}
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 transition-all cursor-pointer"
              >
                {t.logoutLabel}
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-8 flex gap-2 border-t border-white/10 pt-6 overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === "overview"
                  ? "bg-gold-gradient text-brand-black shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              📊 {t.tabOverview}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("shipments")}
              className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === "shipments"
                  ? "bg-gold-gradient text-brand-black shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              📦 {t.tabShipments}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("profile")}
              className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === "profile"
                  ? "bg-gold-gradient text-brand-black shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              👤 {t.tabProfile}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("subscription")}
              className={`rounded-xl px-5 py-2.5 text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === "subscription"
                  ? "bg-gold-gradient text-brand-black shadow-md"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              💎 {t.tabSubscription}
            </button>
          </div>
        </div>

        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="mt-8 space-y-8">
            {/* Stat Cards */}
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {t.activeShipments}
                </span>
                <p className="mt-3 font-mono text-3xl font-extrabold text-brand-gold">
                  02
                </p>
                <p className="mt-1 text-xs text-gray-400">1 in transit, 1 customs</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {t.sourcingRequests}
                </span>
                <p className="mt-3 font-mono text-3xl font-extrabold text-white">
                  01
                </p>
                <p className="mt-1 text-xs text-brand-gold font-medium">
                  Paris Concierge Active
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {t.memberTier}
                </span>
                <p className="mt-3 font-mono text-xl font-extrabold text-brand-gold-light">
                  {user.subscriptionTier}
                </p>

                <p className="mt-1 text-xs text-emerald-400 font-semibold">
                  ✓ Priority Logistics Active
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Member Since
                </span>
                <p className="mt-3 font-mono text-lg font-bold text-white">
                  {user.createdAt}
                </p>
                <p className="mt-1 text-xs text-gray-400">Verified Client</p>
              </div>
            </div>

            {/* Recent Active Shipments Preview */}
            <div className="rounded-3xl border border-brand-gold/20 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-extrabold text-white">
                  Recent Cargo & Sourcing Activity
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveTab("shipments")}
                  className="text-xs font-bold text-brand-gold hover:underline"
                >
                  View All →
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {MOCK_SHIPMENTS.map((shipment) => (
                  <div
                    key={shipment.id}
                    className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 md:flex-row md:items-center md:justify-between hover:border-brand-gold/30 transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-brand-gold">
                          {shipment.trackingNo}
                        </span>
                        <span
                          className={`rounded-full border px-3 py-0.5 text-[11px] font-bold ${shipment.statusColor}`}
                        >
                          {shipment.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-white">
                        {shipment.itemDescription}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {shipment.origin} → {shipment.destination}
                      </p>
                    </div>

                    <Link
                      href={`/order-tracking?q=${shipment.trackingNo}`}
                      className="inline-flex shrink-0 items-center justify-center rounded-xl border border-brand-gold/40 bg-brand-gold/10 px-4 py-2 text-xs font-bold text-brand-gold-light hover:bg-brand-gold hover:text-brand-black transition-all"
                    >
                      Track Shipment
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SHIPMENTS */}
        {activeTab === "shipments" && (
          <div className="mt-8 rounded-3xl border border-brand-gold/20 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
            <h3 className="text-xl font-extrabold text-white">
              {t.tabShipments}
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              Real-time air freight, ocean cargo, and concierge acquisition status.
            </p>

            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400 font-semibold uppercase tracking-wider">
                    <th className="pb-3 px-3">Tracking ID</th>
                    <th className="pb-3 px-3">Description</th>
                    <th className="pb-3 px-3">Route</th>
                    <th className="pb-3 px-3">Status</th>
                    <th className="pb-3 px-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-medium">
                  {MOCK_SHIPMENTS.map((shp) => (
                    <tr key={shp.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-3 font-mono font-bold text-brand-gold">
                        {shp.trackingNo}
                      </td>
                      <td className="py-4 px-3 text-white max-w-xs">{shp.itemDescription}</td>
                      <td className="py-4 px-3 text-gray-300">
                        {shp.origin} → {shp.destination}
                      </td>
                      <td className="py-4 px-3">
                        <span className={`inline-block rounded-full border px-3 py-1 text-[10px] font-bold ${shp.statusColor}`}>
                          {shp.status}
                        </span>
                      </td>
                      <td className="py-4 px-3 text-right">
                        <Link
                          href={`/order-tracking?q=${shp.trackingNo}`}
                          className="rounded-lg bg-brand-gold/15 border border-brand-gold/40 px-3 py-1.5 text-[11px] font-bold text-brand-gold hover:bg-brand-gold hover:text-brand-black transition-all"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: PROFILE SETTINGS */}
        {activeTab === "profile" && (
          <div className="mt-8 max-w-2xl rounded-3xl border border-brand-gold/20 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
            <h3 className="text-xl font-extrabold text-white">
              {t.tabProfile}
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              Manage your personal information and contact details.
            </p>

            {saveSuccess && (
              <div className="mt-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-xs font-semibold text-emerald-400">
                ✓ {t.profileSaved}
              </div>
            )}

            <form onSubmit={handleProfileUpdate} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-2xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white focus:border-brand-gold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300">
                  {t.emailLabel} (Read only)
                </label>
                <input
                  type="email"
                  disabled
                  value={user.email}
                  className="mt-1.5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-400 cursor-not-allowed"
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
                  className="mt-1.5 w-full rounded-2xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white focus:border-brand-gold focus:outline-none"
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
                  className="mt-1.5 w-full rounded-2xl border border-white/15 bg-black/50 px-4 py-3 text-sm text-white focus:border-brand-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="mt-4 rounded-full bg-gold-gradient px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-brand-black shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                Save Changes
              </button>
            </form>
          </div>
        )}

        {/* TAB 4: SUBSCRIPTION */}
        {activeTab === "subscription" && (
          <div className="mt-8 rounded-3xl border border-brand-gold/20 bg-white/[0.03] p-6 md:p-8 backdrop-blur-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                  Current Plan
                </span>
                <h3 className="mt-1 text-2xl font-extrabold text-white">
                  {user.subscriptionTier}
                </h3>
                <p className="mt-1 text-xs text-gray-400">
                  Renews automatically every month. Priority customs clearance included.
                </p>
              </div>

              <Link
                href="/offers-and-subscriptions"
                className="inline-flex rounded-full bg-gold-gradient px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider text-brand-black shadow-lg hover:scale-105 transition-all"
              >
                Manage or Upgrade Plan →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
