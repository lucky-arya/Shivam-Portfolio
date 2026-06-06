"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Download, Settings, Code2, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );
    }

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 6,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20"
      style={{ backgroundColor: "#dcdbd0" }}
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:pl-20">
        {/* ── Left Column: Text Content ── */}
        <div className="flex flex-col justify-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[var(--forest-green)]">
            AI Engineer & Full Stack Developer
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-5 text-balance leading-[1.1] text-[var(--coffee)]"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.5rem)" }}
          >
            Building Digital
            <br />
            Experiences
            <br />
            Powered by AI & Code.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md text-[0.92rem] leading-relaxed text-[var(--ink)]"
          >
            I&apos;m Shivam Kumar, a passionate developer who loves building
            beautiful, functional and intelligent web applications that solve
            real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--coffee)] px-7 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--cream)] shadow-[0_8px_24px_rgba(58,42,31,0.3)] transition hover:translate-y-[-2px] hover:shadow-[0_12px_32px_rgba(58,42,31,0.35)] "
            >
              View My Work
            </a>
            <a
              href="/resume/Shivam-Kumar-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--coffee)] px-7 py-3 text-[0.75rem] font-medium uppercase tracking-[0.2em] text-[var(--coffee)] transition hover:translate-y-[-2px] hover:bg-[var(--forest-green)] hover:text-[var(--cream)]"
            >
              Download Resume
              <Download size={15} strokeWidth={2.2} />
            </a>
          </motion.div>
        </div>

        {/* ── Right Column: Portrait + Card ── */}
        <div className="relative flex items-start justify-center" ref={imageRef}>
          {/* Leaf decoration */}


          <div className="relative">
            {/* Portrait image */}
            <Image
              src="/images/portrait.svg"
              alt="Shivam Kumar portrait"
              width={380}
              height={480}
              className="rounded-[2rem] shadow-[0_30px_60px_rgba(20,59,46,0.2)]"
              style={{ objectFit: "cover" }}
            />

            {/* Identity card - bottom right */}
            <div
              ref={cardRef}
              className="absolute -left-28 bottom-8 hidden w-[190px] rounded-2xl border border-white/60 bg-white/75 p-4 shadow-[0_16px_40px_rgba(20,59,46,0.12)] backdrop-blur-md md:block"
            >
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-[0.8rem] text-[var(--forest-green)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sage)]">
                    <Settings size={12} />
                  </span>
                  AI Engineer
                </li>
                <li className="flex items-center gap-2.5 text-[0.8rem] text-[var(--forest-green)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sage)]">
                    <Code2 size={12} />
                  </span>
                  Full Stack Dev
                </li>
                <li className="flex items-center gap-2.5 text-[0.8rem] text-[var(--forest-green)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sage)]">
                    <Shield size={12} />
                  </span>
                  Cybersecurity
                  <br />
                  Enthusiast
                </li>
              </ul>
            </div>

            {/* Dot grid decoration - bottom right of image */}
            <div className="dot-grid absolute -bottom-3 -right-14 hidden md:grid">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
