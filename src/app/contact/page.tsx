"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle, Loader2, Mail, Phone, MapPin, Clock, Sparkles } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        setStatus("sent");
        reset();
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--cream)]">
      {/* Hero banner */}
      <div
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ backgroundColor: "var(--hero-bg)" }}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20">
          <Link
            href="/#contact"
            className="mb-6 inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.2em] text-[var(--forest-green)] transition hover:gap-3"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[var(--forest-green)]">
            Get In Touch
          </p>
          <h1
            className="mt-4 leading-[1.1] text-[var(--coffee)]"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
          >
            Let&apos;s Build Something
            <br />
            Amazing Together.
          </h1>
          <p className="mt-4 max-w-lg text-[0.92rem] leading-relaxed text-[var(--ink)]">
            Fill out the form below and I&apos;ll get back to you as soon as
            possible. Whether it&apos;s a project, collaboration, or just a chat —
            I&apos;d love to hear from you.
          </p>
        </div>

        {/* Decorative SVG wave */}
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full"
          style={{ lineHeight: 0 }}
        >
          <path
            d="M0 60C360 0 1080 0 1440 60V60H0V60Z"
            fill="var(--cream)"
          />
        </svg>
      </div>

      {/* Form Section */}
      <section className="pb-20 pt-10 md:pt-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-3xl border border-[var(--sage)] p-8 shadow-[0_20px_60px_rgba(20,59,46,0.08)] backdrop-blur-sm md:p-10"
              style={{ background: "var(--form-card-bg)" }}
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--forest-green)]"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    {...register("name")}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-5 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] transition focus:border-[var(--forest-green)] focus:outline-none focus:ring-2 focus:ring-[var(--forest-green)]/20"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--forest-green)]"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    {...register("email")}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-5 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] transition focus:border-[var(--forest-green)] focus:outline-none focus:ring-2 focus:ring-[var(--forest-green)]/20"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--forest-green)]"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    {...register("subject")}
                    placeholder="Project inquiry, collaboration, etc."
                    className="w-full rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-5 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] transition focus:border-[var(--forest-green)] focus:outline-none focus:ring-2 focus:ring-[var(--forest-green)]/20"
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-[var(--forest-green)]"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    {...register("message")}
                    placeholder="Tell me about your project, ideas, or anything you'd like to discuss..."
                    className="w-full resize-none rounded-xl border border-[var(--input-border)] bg-[var(--input-bg)] px-5 py-3.5 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] transition focus:border-[var(--forest-green)] focus:outline-none focus:ring-2 focus:ring-[var(--forest-green)]/20"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>
                  )}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--forest-green)] px-8 py-4 text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--cream)] shadow-[0_10px_30px_rgba(20,59,46,0.3)] transition hover:translate-y-[-2px] hover:shadow-[0_16px_40px_rgba(20,59,46,0.35)] disabled:opacity-70 disabled:hover:translate-y-0 md:w-auto"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="mt-4 text-center text-xs text-red-600">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>

            {/* Right: Info cards */}
            <div className="flex flex-col gap-6">
              {/* Quick info card */}
              <div className="rounded-3xl border border-[var(--sage)] p-8 shadow-[0_20px_60px_rgba(20,59,46,0.08)] backdrop-blur-sm" style={{ background: "var(--form-card-bg)" }}>
                <h3 className="text-xl font-semibold text-[var(--coffee)]">
                  Quick Contact
                </h3>
                <p className="mt-3 text-sm text-[var(--ink)]">
                  Prefer to reach out directly? Here are my details.
                </p>
                <div className="mt-6 space-y-4 text-sm">
                  <a
                    href="mailto:hello@shivam.dev"
                    className="flex items-center gap-3 text-[var(--forest-green)] transition hover:text-[var(--coffee)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--sage)]">
                      <Mail size={18} />
                    </span>
                    lklk112111@gmail.com
                  </a>
                  <a
                    href="tel:+917543927096"
                    className="flex items-center gap-3 text-[var(--forest-green)] transition hover:text-[var(--coffee)]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--sage)]">
                      <Phone size={18} />
                    </span>
                    +91 7543927096
                  </a>
                  <div className="flex items-center gap-3 text-[var(--forest-green)]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--sage)]">
                      <MapPin size={18} />
                    </span>
                    Delhi, India
                  </div>
                </div>
              </div>

              {/* Response time card */}
              <div className="rounded-3xl border border-[var(--forest-green)]/20 bg-[var(--forest-green)] p-8 text-[var(--cream)] shadow-[0_20px_60px_rgba(20,59,46,0.2)]">
                <h3 className="text-xl font-semibold">
                  Response Time
                </h3>
                <p className="mt-3 text-sm text-[var(--cream)]/80">
                  I typically respond within <strong className="text-[var(--gold)]">24 hours</strong>.
                  For urgent matters, feel free to call or connect with me on social media.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="inline-block h-3 w-3 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e]" />
                  <span className="text-sm font-medium">
                    Currently available for projects
                  </span>
                </div>
              </div>

              {/* Quote card */}
              <div className="rounded-3xl border border-[var(--sage)] p-8" style={{ backgroundColor: "var(--card-bg-solid)" }}>
                <p className="font-heading text-lg italic leading-relaxed text-[var(--coffee)]">
                  &ldquo;Great things are built by people who believe in the power
                  of collaboration.&rdquo;
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--forest-green)]">
                  — Let&apos;s create something extraordinary
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
