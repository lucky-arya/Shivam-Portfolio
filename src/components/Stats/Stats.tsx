"use client";

import { useEffect, useRef, useState } from "react";
import { FolderOpen, Code2, Trophy, Briefcase } from "lucide-react";

const metrics = [
  { label: "Projects\nCompleted", value: 10, suffix: "+", icon: FolderOpen },
  { label: "DSA Problems\nSolved", value: 500, suffix: "+", icon: Code2 },
  { label: "Hackathons\nParticipated", value: 5, suffix: "+", icon: Trophy },
  { label: "Internships\nCompleted", value: 3, suffix: "+", icon: Briefcase }
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) {
      return;
    }

    const start = performance.now();
    const duration = 1400;

    const step = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCounts(
        metrics.map((metric) => Math.floor(metric.value * progress))
      );
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [active]);

  return (
    <section ref={sectionRef} className="pb-12 pt-2 md:pb-16">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20">
        <p className="section-kicker mb-8">My Achievements</p>
        <div className="rounded-2xl border border-[var(--sage)] bg-[#dcdbd0] px-6 py-12 shadow-[0_12px_40px_rgba(20,59,46,0.06)] md:px-10 sm:py-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-0">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              const labelParts = metric.label.split("\n");
              return (
                <div
                  key={metric.label}
                  className={`flex flex-row items-center gap-2 text-center ${
                    index < metrics.length - 1
                      ? "lg:border-r lg:border-[var(--sage)]"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center ">
                    <Icon size={18} className="text-[var(--forest-green)]" />
                  </div>
                  <span className="mt-1 text-2xl font-semibold text-[var(--coffee)] md:text-3xl">
                    {counts[index]}
                    {metric.suffix}
                  </span>
                  <span className="text-[0.7rem] leading-tight uppercase tracking-[0.15em] text-[var(--muted)]">
                    {labelParts.map((part, i) => (
                      <span key={i}>
                        {part}
                        {i < labelParts.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
