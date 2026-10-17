import { profile } from "@/data/portfolio";
import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Particles from "@/components/Particles";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-slate-950 text-slate-100">
        <ScrollProgress />
        <div className="bg-grid pointer-events-none fixed inset-0 z-0" />
        <Particles />
        <CursorGlow />

        <Header />

        <main className="relative z-10 mx-auto max-w-5xl px-6">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>

        <footer className="relative z-10 border-t border-slate-800 py-6 text-center font-mono text-sm text-slate-500">
          © 2026 {profile.name}
        </footer>
      </div>
    </LanguageProvider>
  );
}