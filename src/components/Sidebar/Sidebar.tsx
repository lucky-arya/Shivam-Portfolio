"use client";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Social links and availability">
      {/* Tagline — rotated upwards */}
      <div className="sidebar-tagline">
        <span className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--coffee)] animate-[pulse-dot_2s_ease-in-out_infinite] " />
        Available for Opportunities
      </div>

      <div className="sidebar-icons">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="sidebar-icon"
          >
            <link.icon size={16} />
          </a>
        ))}
      </div>
    </aside>
  );
}
