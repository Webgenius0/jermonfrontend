"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage, LANGUAGE_OPTIONS, type Language } from "@/context/LanguageContext";

type LanguageSwitcherProps = {
  variant?: "topbar" | "dark";
};

export default function LanguageSwitcher({ variant = "topbar" }: LanguageSwitcherProps) {
  const { language, setLanguage, currentOption } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isTopbar = variant === "topbar";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSelect(code: Language) {
    setLanguage(code);
    setIsOpen(false);
  }

  const triggerClass = isTopbar
    ? "inline-flex items-center gap-2 rounded-md border border-black/10 bg-[#e8e8e8] px-3 py-1.5 text-xs font-semibold text-brand-charcoal shadow-sm transition-all hover:bg-white focus:outline-none cursor-pointer"
    : "inline-flex items-center gap-2 rounded-xl border border-brand-gold/30 bg-brand-charcoal/90 px-3 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:border-brand-gold hover:bg-brand-black focus:outline-none cursor-pointer";

  const menuClass = isTopbar
    ? "absolute right-0 mt-1.5 w-40 origin-top-right rounded-md border border-black/10 bg-[#e8e8e8] py-1 shadow-lg z-50"
    : "absolute right-0 mt-2 w-36 origin-top-right rounded-2xl border border-brand-gold/40 bg-brand-charcoal py-1.5 shadow-2xl backdrop-blur-xl z-50";

  const itemClass = (selected: boolean) =>
    isTopbar
      ? `flex w-full items-center gap-3 px-3 py-2 text-xs font-semibold transition-colors cursor-pointer ${
          selected
            ? "bg-white text-brand-charcoal"
            : "text-brand-charcoal/90 hover:bg-white/70"
        }`
      : `flex w-full items-center gap-3 px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
          selected
            ? "bg-brand-gold/20 text-brand-gold font-extrabold"
            : "text-gray-200 hover:bg-white/10 hover:text-white"
        }`;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={triggerClass}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="text-base leading-none">{currentOption.flag}</span>
        <span>{currentOption.label}</span>
        <svg
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          } ${isTopbar ? "text-brand-charcoal/60" : "text-brand-gold"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className={menuClass}>
          {LANGUAGE_OPTIONS.map((option, index) => {
            const isSelected = option.code === language;
            return (
              <div key={option.code}>
                {index > 0 && isTopbar && (
                  <div className="mx-3 border-t border-dotted border-black/20" />
                )}
                <button
                  type="button"
                  onClick={() => handleSelect(option.code)}
                  className={itemClass(isSelected)}
                >
                  <span className="text-base leading-none">{option.flag}</span>
                  <span>{option.label}</span>
                  {isSelected && (
                    <span
                      className={`ml-auto text-xs ${isTopbar ? "text-brand-charcoal/50" : "font-bold text-brand-gold"}`}
                    >
                      {isTopbar ? "^" : "✓"}
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
