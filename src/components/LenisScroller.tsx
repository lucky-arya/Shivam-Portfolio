"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Expose lenis instance so other components (e.g. modals) can stop/start it
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function LenisScroller() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.08
    });

    window.__lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
