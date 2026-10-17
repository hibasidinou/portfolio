"use client";
import { experiences, ui } from "@/data/portfolio";
import { useLang } from "./LanguageProvider";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useLang();
  return (
    <Section id="experiences" title={t(ui.titles.experiences)}>
      <div className="space-y-8 border-l border-emerald-400/30 pl-8">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.08}>
            <article className="glass relative rounded-2xl p-6 transition hover:border-emerald-400/50">
              <span className="absolute -left-[41px] top-7 h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{t(exp.role)}</h3>
                <span className="font-mono text-sm text-slate-400">{t(exp.period)}</span>
              </div>
              <p className="text-emerald-400">{exp.company}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {t(exp.points).map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="font-mono text-emerald-400">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}