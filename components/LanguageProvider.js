"use client";
import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext({ lang: "fr", setLang: () => {}, t: (v) => v });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fr" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  const t = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[lang] : v);

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="glass flex rounded-full p-0.5 font-mono text-xs">
      {["fr", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={
            "rounded-full px-3 py-1 uppercase transition " +
            (lang === l
              ? "bg-emerald-500 text-slate-950"
              : "text-slate-300 hover:text-emerald-300")
          }
        >
          {l}
        </button>
      ))}
    </div>
  );
}