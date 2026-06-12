"use client";

import { useState } from "react";
import { ChevronDown, Monitor, Server, Brain, Wrench, Smartphone } from "lucide-react";
import { skills } from "@/data/skills";

const categoryIcons = [Monitor, Server, Brain, Smartphone, Wrench];
const categoryIconClasses = [
  "tech-cat-icon tech-cat-icon--frontend",
  "tech-cat-icon tech-cat-icon--backend",
  "tech-cat-icon tech-cat-icon--ai",
  "tech-cat-icon tech-cat-icon--mobile",
  "tech-cat-icon tech-cat-icon--tools"
];

export default function TechStack() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="skills" className="section ">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20">
        <p className="section-kicker">Tech Stack</p>
        <h2 className="section-title mt-4">Technologies I Work With</h2>

        {/* Desktop: 4-column horizontal layout */}
        <div className="mt-10 hidden gap-6  md:grid md:grid-cols-4 ">
          {skills.map((group, index) => {
            const Icon = categoryIcons[index] || Wrench;
            return (
              <div key={group.category} className="glass-card p-6" style={{ backgroundColor: "var(--card-bg-solid)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={categoryIconClasses[index]}>
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm uppercase tracking-[0.3em] text-[var(--forest-green)]">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-[var(--ink)]">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--forest-green)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Mobile: Accordion */}
        <div className="mt-8 space-y-4 md:hidden">
          {skills.map((group, index) => {
            const Icon = categoryIcons[index] || Wrench;
            return (
              <div key={group.category} className="glass-card px-5 py-4">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={categoryIconClasses[index]}>
                      <Icon size={16} />
                    </div>
                    <span className="text-sm uppercase tracking-[0.3em] text-[var(--forest-green)]">
                      {group.category}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`transition ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="mt-4 w-full text-sm text-[var(--ink)]">
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--forest-green)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
