
"use client";

import {
  Brain,
  Rocket,
  Sparkles,
  Target,
  ArrowUpRight,
  Code2,
  type LucideIcon,
} from "lucide-react";

import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const icons: LucideIcon[] = [Brain, Sparkles, Rocket, Target];

const animations = [
  "about-card-one",
  "about-card-two",
  "about-card-three",
  "about-card-four",
];

export default function About() {
  const { about } = profile;

  return (
    <section
      id="about"
      className="relative isolate mx-auto max-w-6xl overflow-hidden px-5 py-24 sm:py-28"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-72 w-72 rounded-full bg-cyan/10 blur-[100px] animate-pulse"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-72 w-72 rounded-full bg-lime/10 blur-[100px] animate-pulse [animation-delay:1s]"
      />

      {/* Section heading */}
      <Reveal>
        <div className="mb-12">
          <SectionHeading
            eyebrow="About me"
            title="A developer who likes finishing what he starts"
          />

          <p className="mt-5 max-w-2xl text-sm leading-7 text-stone-400 sm:text-base">
            I believe great development is more than writing code.
            It is about solving problems, staying curious, and turning
            ideas into meaningful digital experiences.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* About content */}
        <Reveal className="lg:col-span-3">
          <article className="glass glass-hover group relative h-full overflow-hidden rounded-3xl border border-white/10 p-6 transition-all duration-500 hover:border-cyan/30 sm:p-8">
            {/* Animated top accent */}
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan/80 to-transparent" />

            <div className="mb-7 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/5 px-3 py-1.5 text-xs font-medium tracking-wide text-cyan-soft">
                <Code2 size={14} />
                MY JOURNEY
              </span>

              <Sparkles
                size={20}
                className="text-lime/70 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125"
              />
            </div>

            <div className="space-y-5 leading-8 text-stone-300">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className="text-sm sm:text-base"
                  style={{
                    animation: `about-text-in 700ms ease-out ${index * 150}ms both`,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Career goal */}
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-cyan/20 bg-gradient-to-br from-cyan/[0.09] via-white/[0.02] to-lime/[0.06] p-5">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />

              <div className="relative flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan/20 bg-cyan/10 text-cyan">
                  <Target size={20} />
                </span>

                <div>
                  <h3 className="mb-2 text-sm font-semibold text-cyan">
                    Career Goal
                  </h3>

                  <p className="text-sm leading-7 text-stone-300">
                    {about.goals}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom decoration */}
            <div className="mt-7 flex items-center gap-2 text-xs text-stone-500">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime" />
              Always learning. Always building.
            </div>
          </article>
        </Reveal>

        {/* Strength cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {about.strengths.map((strength, index) => {
            const Icon = icons[index % icons.length];

            return (
              <Reveal
                key={strength.title}
                delay={index * 100}
                className="h-full"
              >
                <article
                  className={`glass glass-hover group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-lime/30 hover:shadow-[0_12px_40px_-20px_rgba(198,255,94,0.25)] ${animations[index % animations.length]}`}
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-lime/10 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-lime/15 bg-gradient-to-br from-lime/15 to-cyan/5 text-lime transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:border-lime/30">
                      <Icon size={21} strokeWidth={1.8} />
                    </span>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-white transition-colors duration-300 group-hover:text-lime">
                        {strength.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-stone-400">
                        {strength.text}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-stone-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-lime"
                    />
                  </div>

                  {/* Bottom hover line */}
                  <div className="absolute bottom-0 left-5 right-5 h-px origin-left scale-x-0 bg-gradient-to-r from-lime/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
