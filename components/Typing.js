"use client";
import { useEffect, useState } from "react";

export default function Typing({ words }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i];
    let t;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text === "") {
      t = setTimeout(() => {
        setDeleting(false);
        setI((i + 1) % words.length);
      }, 300);
    } else {
      t = setTimeout(
        () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
        deleting ? 30 : 70
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return <span>{text}</span>;
}