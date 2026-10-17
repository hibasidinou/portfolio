"use client";
import { education, ui } from "@/data/portfolio";
import { useLang } from "./LanguageProvider";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Education() {
  const { t } = useLang();
  return (
    <Section id="formation" title={t(ui.titles.education)}>
      {education.map((e) => (
        <Reveal key={e.school}>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-white">{e.school}</h3>
            <p className="mt-1 text-slate-300">{t(e.degree)}</p>
            <p className="mt-1 font-mono text-sm text-slate-400">{t(e.period)}</p>
          </div>
        </Reveal>
      ))}
    </Section>
  );
}