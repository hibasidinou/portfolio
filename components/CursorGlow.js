"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      style={{ transform: "translate(-1000px, -1000px)" }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-3xl"
    />
  );
}