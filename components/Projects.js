"use client";
import { motion } from "framer-motion";
import { projects, ui, profile } from "@/data/portfolio";
import { useLang } from "./LanguageProvider";
import Section from "./Section";

function Card({ p, i }) {
  const { t } = useLang();
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <motion.article
      onMouseMove={onMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass group relative flex flex-col overflow-hidden rounded-2xl p-6 transition-colors hover:border-emerald-400/50"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(350px circle at var(--x) var(--y), rgba(52,211,153,0.15), transparent 60%)",
        }}
      />
      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-white">{t(p.title)}</h3>
          <span
            className={
              "shrink-0 rounded-full px-2.5 py-0.5 font-mono text-xs " +
              (p.upcoming
                ? "bg-amber-400/10 text-amber-300"
                : "bg-emerald-400/10 text-emerald-300")
            }
          >
            {t(p.status)}
          </span>
        </div>
        <p className="mt-1 font-mono text-xs text-slate-400">{t(p.context)}</p>
        <p className="mt-3 flex-1 text-sm text-slate-300">{t(p.description)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-slate-800/80 px-2 py-0.5 font-mono text-xs text-cyan-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {p.link && (
          <a
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 text-sm text-emerald-400 hover:underline"
          >
            {t(ui.viewOnGithub)}
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useLang();
  return (
    <Section id="projets" title={t(ui.titles.projects)}>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={p.title.en} p={p} i={i} />
        ))}
      </div>
      <a
        href={profile.links.github + "?tab=repositories"}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-block font-mono text-sm text-emerald-400 hover:underline"
      >
        {t(ui.allRepos)}
      </a>
    </Section>
  );
}
