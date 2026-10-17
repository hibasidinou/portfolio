"use client";
import { skills, ui } from "@/data/portfolio";
import { useLang } from "./LanguageProvider";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  const { t } = useLang();
  return (
    <Section id="competences" title={t(ui.titles.skills)}>
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((cat, i) => (
          <Reveal key={cat.title.en} delay={i * 0.07}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="mb-4 font-mono text-sm text-emerald-400">{t(cat.title)}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <span
                    key={t(s)}
                    className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300 transition hover:border-emerald-400 hover:text-emerald-300 hover:shadow-[0_0_14px_rgba(52,211,153,0.35)]"
                  >
                    {t(s)}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}