"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type TrackTab = "order" | "tracking" | "email";

const tabs: {
  id: TrackTab;
  label: string;
  placeholder: string;
  inputType: "text" | "email";
}[] = [
  {
    id: "order",
    label: "Número de pedido",
    placeholder: "Número de pedido",
    inputType: "text",
  },
  {
    id: "tracking",
    label: "Número de seguimiento",
    placeholder: "Número de seguimiento",
    inputType: "text",
  },
  {
    id: "email",
    label: "Correo electrónico",
    placeholder: "Correo electrónico",
    inputType: "email",
  },
];

export default function TrackOrderSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TrackTab>("order");
  const [value, setValue] = useState("");

  const current = tabs.find((tab) => tab.id === activeTab)!;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;

    const params = new URLSearchParams({ type: activeTab, q: trimmed });
    router.push(`/seguimiento?${params.toString()}`);
  }

  return (
    <section className="border-y border-brand-light bg-white py-14 md:py-16">
      <div className="mx-auto max-w-xl px-4 lg:px-6">
        <h2 className="text-center text-2xl font-bold text-brand-dark md:text-3xl">
          Siga su pedido
        </h2>

        <form onSubmit={handleSubmit} className="mt-8">
          <div
            role="tablist"
            aria-label="Método de seguimiento"
            className="grid grid-cols-3"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setValue("");
                  }}
                  className={`border border-b-0 px-2 py-3 text-center text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                    isActive
                      ? "border-brand-gray bg-white text-brand-dark"
                      : "border-transparent bg-transparent text-brand-muted hover:text-brand-dark"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="border border-brand-gray bg-white p-4 sm:p-5">
            <label htmlFor="track-input" className="sr-only">
              {current.placeholder}
            </label>
            <input
              id="track-input"
              type={current.inputType}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder={current.placeholder}
              className="w-full border-0 bg-transparent text-base text-brand-dark placeholder:text-brand-muted/60 focus:outline-none"
              autoComplete={activeTab === "email" ? "email" : "off"}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="min-w-[140px] rounded-md bg-brand-gold px-10 py-3 text-sm font-bold uppercase tracking-wide text-brand-black transition-colors hover:bg-brand-gold-light"
            >
              Rastrear
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
