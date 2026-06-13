"use client";

import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20">
        <div className="grid gap-10 rounded-[2.5rem] border border-white/70 bg-[var(--forest-green)] p-8 text-[var(--cream)] shadow-[0_40px_80px_rgba(20,59,46,0.3)] md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Let&apos;s Work Together
            </p>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3.5rem)]">
              Have a Project in Mind?
            </h2>
            <p className="mt-4 text-sm text-[var(--cream)]/80">
              I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--cream)] transition hover:bg-[var(--cream)] hover:text-[var(--forest-green)]"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-6">
            {/* Contact info + social links */}
            <div className="flex flex-col justify-center md:flex-1">
              <div className="space-y-5 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
                    <Mail size={16} />
                  </div>
                  <span>lklk112111@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
                    <Phone size={16} />
                  </div>
                  <span>+91 7543927096</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
                    <MapPin size={16} />
                  </div>
                  <span>Delhi, India</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                {[
                  { icon: Github, href: "https://github.com/lucky-arya", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/shivam254r", label: "LinkedIn" },
                  {icon: Twitter, href: "https://twitter.com/shivam254r", label: "Twitter"},
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 transition hover:bg-white/20"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact image — blends with background */}
            <div className="relative flex-shrink-0 overflow-hidden rounded-2xl md:w-[220px] lg:w-[260px]">
              <Image
                src="/images/contact.png"
                alt="Contact decoration"
                width={260}
                height={300}
                className="w-full rounded-2xl object-cover"
              />
              {/* Gradient overlay to merge image into the green bg */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(31,59,46,0.35) 0%, transparent 50%, rgba(31,59,46,0.5) 100%)",
                }}
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/3 rounded-b-2xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(31,59,46,0.8) 0%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
