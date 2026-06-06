"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#journey" },
  { label: "Skills", href: "/#skills" },
  { label: "Blog", href: "/#ai-experiments" },
  { label: "Contact", href: "/#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(scrollPercent, 100));
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition duration-300 ${
        scrolled
          ? "bg-[rgba(20,59,46,0.88)] shadow-lg backdrop-blur-md"
          : "bg-[rgba(20,59,46,1)]"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/#home" className="flex items-center gap-3 text-white">
          <Image
            src="/images/logo.svg"
            alt="Shivam logo"
            width={40}
            height={40}
          />
          <span className="text-sm uppercase tracking-[0.3em]">
            Shivam
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.25em] text-white lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#d8c39b]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-[#d8c39b] px-5 py-2 text-[#d8c39b] transition hover:bg-[#d8c39b] hover:text-[#143b2e]"
          >
            Let&apos;s Talk
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-white/40 p-2 text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="bg-[var(--forest-green)] px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-4 text-xs uppercase tracking-[0.25em] text-white">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 pb-3"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full border border-[#d8c39b] px-5 py-2 text-center text-[#d8c39b]"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="h-[3px] w-full bg-transparent">
        <div
          className="h-full origin-left bg-[var(--gold)]"
          style={{
            transform: `scaleX(${progress / 100})`,
            willChange: "transform",
          }}
        />
      </div>
    </header>
  );
}
