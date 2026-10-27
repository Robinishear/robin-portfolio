
"use client";

import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Github,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";

import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate mx-auto max-w-6xl overflow-hidden px-5 py-24 sm:py-28"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-72 w-72 rounded-full bg-cyan/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-lime/10 blur-[100px]"
      />

      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1018]/80 shadow-[0_25px_100px_-35px_rgba(34,211,238,0.18)] backdrop-blur-2xl">
          {/* Animated gradient border */}
          <div className="absolute inset-x-0 top-0 h-[2px] overflow-hidden">
            <div className="h-full w-[200%] animate-[contact-border_6s_linear_infinite] bg-gradient-to-r from-transparent via-lime via-cyan to-transparent" />
          </div>

          {/* Decorative circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/[0.06]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-cyan/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-16 top-16 text-lime/[0.08]"
          >
            <Sparkles size={110} strokeWidth={0.7} />
          </div>

          <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:p-14">
            {/* Left: Main CTA */}
            <div className="flex flex-col justify-center">
              <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-lime/20 bg-lime/[0.06] px-4 py-2 text-xs font-medium tracking-[0.16em] text-lime uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                </span>
                Let&apos;s connect
              </div>

              <h2 className="max-w-xl text-4xl leading-[1.12] font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s turn your{" "}
                <span className="bg-gradient-to-r from-lime via-cyan to-cyan-soft bg-clip-text text-transparent">
                  ideas
                </span>{" "}
                into reality.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-stone-400 sm:text-base">
                Have an exciting project, a job opportunity, or an idea
                worth building? I&apos;m always happy to connect, discuss
                possibilities, and create something meaningful together.
              </p>

              {/* Primary CTA */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-lime px-6 py-3.5 text-sm font-bold text-[#10150b] shadow-[0_0_25px_rgba(198,255,94,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d5ff88] hover:shadow-[0_8px_35px_rgba(198,255,94,0.22)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                >
                  <Mail size={18} />
                  Let&apos;s talk
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-medium text-stone-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:bg-cyan/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan"
                >
                  <Github size={18} />
                  GitHub
                  <ArrowDownRight
                    size={15}
                    className="rotate-[-45deg] text-stone-500"
                  />
                </a>
              </div>

              <div className="mt-9 flex items-center gap-2 text-xs text-stone-500">
                <CheckCircle2 size={15} className="text-lime/80" />
                Open to meaningful opportunities
              </div>
            </div>

            {/* Right: Contact information */}
            <div className="flex flex-col justify-center gap-4">
              <div className="mb-2">
                <p className="text-xs font-semibold tracking-[0.2em] text-cyan uppercase">
                  Contact information
                </p>
                <h3 className="mt-2 text-xl font-bold text-white">
                  Find me here
                </h3>
                <p className="mt-2 text-sm leading-6 text-stone-500">
                  Choose your preferred way to get in touch.
                </p>
              </div>

              {/* Email card */}
              <a
                href={`mailto:${profile.email}`}
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30 hover:bg-cyan/[0.04]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-cyan/15 bg-cyan/10 text-cyan transition-transform duration-300 group-hover:scale-110">
                  <Mail size={21} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-stone-500">
                    Email me
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-stone-200 transition-colors group-hover:text-cyan">
                    {profile.email}
                  </span>
                </span>

                <ArrowRight
                  size={17}
                  className="shrink-0 text-stone-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan"
                />
              </a>

              {/* GitHub card */}
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-lime/30 hover:bg-lime/[0.035]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-lime/15 bg-lime/10 text-lime transition-transform duration-300 group-hover:scale-110">
                  <Github size={21} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs text-stone-500">
                    Explore my code
                  </span>
                  <span className="mt-1 block text-sm font-medium text-stone-200 transition-colors group-hover:text-lime">
                    GitHub Profile
                  </span>
                </span>

                <ArrowRight
                  size={17}
                  className="shrink-0 text-stone-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-lime"
                />
              </a>

              {/* Location card */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-orange-400/15 bg-orange-400/[0.07] text-orange-300">
                  <MapPin size={21} />
                </span>

                <div className="min-w-0">
                  <p className="text-xs text-stone-500">Based in</p>
                  <p className="mt-1 text-sm font-medium text-stone-200">
                    {profile.location}
                  </p>
                  <p className="mt-1 text-xs text-stone-500">
                    Available for remote collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom footer strip */}
          <div className="relative flex flex-col gap-3 border-t border-white/[0.07] bg-white/[0.015] px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
            <p className="text-xs leading-5 text-stone-500">
              Great things start with a conversation.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-fit items-center gap-2 text-xs font-semibold text-stone-300 transition-colors hover:text-lime"
            >
              Start a conversation
              <Send size={13} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
