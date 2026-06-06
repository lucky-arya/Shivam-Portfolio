"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--coffee)] text-[var(--cream)] shadow-[0_8px_24px_rgba(58,42,31,0.35)] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0_12px_32px_rgba(58,42,31,0.45)] ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
}
