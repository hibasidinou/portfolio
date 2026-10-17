"use client";
import { useEffect, useRef, useState } from "react";
import { profile, ui } from "@/data/portfolio";
import { useLang } from "./LanguageProvider";

export default function CvMenu() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  if (!profile.cvs?.length) return null;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="glass flex items-center gap-2 rounded-lg px-5 py-2.5 text-slate-200 transition hover:border-emerald-400/60"
      >
        {t(ui.downloadCv)}
        <span className={"text-xs transition-transform " + (open ? "rotate-180" : "")}>▾</span>
      </button>
      {open && (
        <div className="glass absolute left-0 top-full z-30 mt-2 w-max min-w-full overflow-hidden rounded-lg bg-slate-900">
          {profile.cvs.map((cv) => (
            <a
              key={cv.label.en}
              href={cv.files[lang]}
              download
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-sm text-slate-200 transition hover:bg-emerald-400/10 hover:text-emerald-300"
            >
              {t(cv.label)}{" "}
              <span className="font-mono text-xs text-slate-500">PDF · {lang.toUpperCase()}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}