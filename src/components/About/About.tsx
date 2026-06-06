import Image from "next/image";
import { Lightbulb, Zap, Code2, Users } from "lucide-react";

const traits = [
  { label: "Problem Solver", icon: Lightbulb },
  { label: "Quick Learner", icon: Zap },
  { label: "Clean Coder", icon: Code2 },
  { label: "Team Player", icon: Users },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr]">
          {/* Left Column: Text */}
          <div className="flex flex-col justify-center">
            <p className="section-kicker">About Me</p>
            <h2 className="mt-4 leading-[1.15] text-[var(--coffee)]" style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)", fontWeight: 600 }}>
              Crafting Digital
              <br />
              Experiences That
              <br />
              Make Impact.
            </h2>
            <p className="mt-5 max-w-sm text-[0.88rem] leading-relaxed text-[var(--ink)]">
              I&apos;m a passionate Full Stack Developer and AI enthusiast who loves
              turning complex problems into simple, elegant solutions. I enjoy
              building web applications, experimenting with AI models and
              constantly learning new technologies.
            </p>
            <a
              href="#journey"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--forest-green)] px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--cream)] shadow-[0_8px_24px_rgba(20,59,46,0.25)] transition hover:translate-y-[-2px]"
            >
              More About Me
            </a>
          </div>

          {/* Right Column: Image + Trait Pills */}
          <div className="relative">
            <Image
              src="/images/about-workspace.svg"
              alt="Workspace"
              width={520}
              height={400}
              className="rounded-2xl shadow-[0_24px_50px_rgba(20,59,46,0.15)]"
            />

            {/* Trait pills - stacked on the right of the image */}
            <div className="absolute -right-2 top-4 hidden space-y-2.5 md:block lg:-right-6">
              {traits.map((trait) => {
                const Icon = trait.icon;
                return (
                  <div
                    key={trait.label}
                    className="flex items-center gap-2.5 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-[0.78rem] font-medium text-[var(--forest-green)] shadow-[0_8px_20px_rgba(20,59,46,0.08)] backdrop-blur-sm"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--sage)]">
                      <Icon size={12} />
                    </span>
                    {trait.label}
                  </div>
                );
              })}
            </div>

            {/* Dot grid decoration */}
            <div className="dot-grid absolute -right-12 -top-4 hidden md:grid">
              {Array.from({ length: 25 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>

            {/* Leaf decoration */}
            <div className="absolute -bottom-6 -right-10 hidden w-20 opacity-50 md:block">
              <Image
                src="/images/leaf.svg"
                alt="Decorative leaf"
                width={80}
                height={140}
              />
            </div>

            {/* Mobile traits */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 md:hidden">
              {traits.map((trait) => {
                const Icon = trait.icon;
                return (
                  <div
                    key={trait.label}
                    className="flex items-center gap-2 rounded-full border border-white/60 bg-white/80 px-3 py-2 text-[0.75rem] font-medium text-[var(--forest-green)]"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--sage)]">
                      <Icon size={10} />
                    </span>
                    {trait.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
