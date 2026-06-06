import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20">
        <p className="section-kicker">What People Say</p>
        <h2 className="section-title mt-4">Kind Words</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.name} className="glass-card p-6">
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={56}
                  height={56}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-base font-semibold text-[var(--coffee)]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)]">
                    {item.role}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-[var(--ink)]">
                &ldquo;{item.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
