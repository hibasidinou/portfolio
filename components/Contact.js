"use client";
import { profile, ui } from "@/data/portfolio";
import { useLang } from "./LanguageProvider";
import Section from "./Section";

export default function Contact() {
  const { t } = useLang();
  const { email, linkedin, github } = profile.links;
  return (
    <Section id="contact" title={t(ui.titles.contact)}>
      <p className="mb-5 max-w-xl text-slate-300">{t(ui.contactText)}</p>
      <div className="flex flex-wrap gap-3">
        {email && (
          <a
            href={`mailto:${email}`}
            className="rounded-lg bg-emerald-500 px-5 py-2.5 font-medium text-slate-950 shadow-[0_0_20px_rgba(52,211,153,0.35)] hover:bg-emerald-400"
          >
            {email}
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass rounded-lg px-5 py-2.5 text-slate-200 hover:border-emerald-400/60"
          >
            LinkedIn
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="glass rounded-lg px-5 py-2.5 text-slate-200 hover:border-emerald-400/60"
          >
            GitHub
          </a>
        )}
      </div>
    </Section>
  );
}