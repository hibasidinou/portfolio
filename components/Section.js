import Reveal from "./Reveal";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-16">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
          <span className="font-mono text-emerald-400">{"//"}</span>
          {title}
          <span className="h-px flex-1 bg-gradient-to-r from-emerald-400/50 to-transparent" />
        </h2>
      </Reveal>
      {children}
    </section>
  );
}