"use client";

import { motion } from "framer-motion";
import { aiExperiments } from "@/data/aiExperiments";

export default function AIExperiments() {
  return (
    <section id="ai-experiments" className="section" style={{ backgroundColor: "var(--hero-bg)" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">AI Experiments</p>
            <h2 className="section-title mt-4">
              A Dedicated AI Showcase
            </h2>
            <p className="mt-6 text-[var(--ink)]">
              Exploring advanced AI systems to differentiate this portfolio from
              standard developer websites, from retrieval-augmented generation to
              multi-agent automation.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {aiExperiments.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest-green)]">
                  {item.focus}
                </p>
                <h3 className="mt-4 text-xl text-[var(--coffee)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-[var(--ink)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
