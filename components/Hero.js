"use client";
import Image from "next/image";
import { profile, ui, experiences, projects } from "@/data/portfolio";
import { useLang } from "./LanguageProvider";
import Typing from "./Typing";
import Reveal from "./Reveal";
import CvMenu from "./CvMenu";

export default function Hero() {
  const { lang, t } = useLang();
  const { name, school, tagline, links, photo } = profile;
  const stats = [
    [experiences.length, t(ui.stats.experiences)],
    [projects.length, t(ui.stats.projects)],
    [t(ui.stats.date), t(ui.stats.available)],
  ];

  return (
    <section className="flex min-h-[90vh] flex-col-reverse items-center justify-center gap-12 py-20 md:flex-row md:justify-between">
      <div className="w-full md:max-w-xl">
        <Reveal>
          <p className="font-mono text-sm text-emerald-400">hiba@ensa-marrakech:~$ whoami</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="text-gradient mt-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
            {name}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 h-8 font-mono text-lg text-slate-200 sm:text-xl">
            <span className="text-emerald-400">&gt; </span>
            <span className="caret">
              <Typing key={lang} words={ui.roles[lang]} />
            </span>
          </p>
          <p className="mt-1 text-slate-400">{school}</p>
        </Reveal>
        <Reveal delay={0.3} className="relative z-20">
          <p className="mt-6 text-slate-300">{t(tagline)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projets"
              className="rounded-lg bg-emerald-500 px-5 py-2.5 font-medium text-slate-950 shadow-[0_0_20px_rgba(52,211,153,0.35)] transition hover:bg-emerald-400 hover:shadow-[0_0_32px_rgba(52,211,153,0.6)]"
            >
              {t(ui.seeProjects)}
            </a>
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-lg px-5 py-2.5 text-slate-200 transition hover:border-emerald-400/60"
              >
                GitHub
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-lg px-5 py-2.5 text-slate-200 transition hover:border-emerald-400/60"
              >
                LinkedIn
              </a>
            )}
            <CvMenu />
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap gap-4">
            {stats.map(([value, label]) => (
              <div key={label} className="glass rounded-xl px-5 py-3">
                <p className="text-xl font-bold text-white">{value}</p>
                <p className="font-mono text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {photo && (
        <Reveal delay={0.3}>
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-violet-500 opacity-70 blur-xl" />
            <div className="relative rounded-full bg-gradient-to-tr from-emerald-400 via-cyan-400 to-violet-500 p-[3px]">
              <Image
                src={photo}
                alt={name}
                width={320}
                height={320}
                priority
                className="h-64 w-64 rounded-full bg-slate-950 object-cover sm:h-80 sm:w-80"
              />
            </div>
          </div>
        </Reveal>
      )}
    </section>
  );
}