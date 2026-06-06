"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Rocket, Cpu } from "lucide-react";
import { journey } from "@/data/experience";

const journeyIcons = [Code2, Code2, Rocket, Brain];

export default function Journey() {
  return (
    <section id="journey" className="section bg-[#dcdbd0]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20 ">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title mt-4">My Journey</h2>

        {/* Horizontal Timeline — Desktop */}
        <div className="journey-horizontal">
          {journey.map((item, index) => {
            const Icon = journeyIcons[index] || Cpu;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="journey-h-item"
              >
                <div className="journey-h-dot">
                  <div className="journey-h-dot-inner" />
                </div>
                <div className="journey-h-icon">
                  <Icon size={18} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--forest-green)]">
                  {item.year}
                </p>
                <h3 className="mt-2 text-lg text-[var(--coffee)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink)] max-w-[200px]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Vertical Timeline — Mobile */}
        <div className="journey-vertical mt-10">
          <div className="relative space-y-8 border-l-2 border-[var(--coffee)] pl-6">
            {journey.map((item, index) => {
              const Icon = journeyIcons[index] || Cpu;
              return (
                <div key={item.year} className="relative">
                  <span
                    className="absolute top-1 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-[var(--coffee)] bg-[#dcdbd0]"
                    style={{ left: "-25px", transform: "translateX(-50%)" }}
                  >
                    <span className="h-2 w-2 rounded-full bg-[var(--coffee)]" />
                  </span>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="journey-h-icon">
                      <Icon size={16} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--forest-green)]">
                      {item.year}
                    </p>
                  </div>
                  <h3 className="text-xl text-[var(--coffee)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink)]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
