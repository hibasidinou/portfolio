"use client";
import { profile, ui } from "@/data/portfolio";
import { useLang, LangToggle } from "./LanguageProvider";

export default function Header() {
  const { t } = useLang();
  return (
    <header className="glass sticky top-0 z-40 border-x-0 border-t-0">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3">
        <a href="#" className="font-mono text-sm text-emerald-400">
          &lt;{profile.name} /&gt;
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-slate-300 sm:flex">
            {ui.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-emerald-400">
                  {t(item.label)}
                </a>
              </li>
            ))}
          </ul>
          <LangToggle />
        </div>
      </nav>
    </header>
  );
}