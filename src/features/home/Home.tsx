"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { ArrowRight, Github, Mail, MapPin } from "lucide-react";
import { profile, skillCategories } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";
import { useProjects } from "@/features/projects/useProjects";

const phrases = ["Full Stack Web Apps", "Secure REST APIs", "Web3 & Blockchain Products", "Chatbots & AI Tools", "Fast, Scalable Systems"];

const marquee = ["React", "Next.js", "Node.js", "Express.js", "TypeScript", "MongoDB", "PostgreSQL", "Docker", "Solidity", "Ethereum", "Solana", "Redis", "Prisma", "Python"];

const orbitChips = [
  { label: "React", pos: "-left-5 top-10", color: "text-cyan border-cyan/40", delay: "0s" },
  { label: "Next.js", pos: "-right-4 top-28", color: "text-white border-white/30", delay: "-1.2s" },
  { label: "Node.js", pos: "-left-9 bottom-28", color: "text-lime border-lime/40", delay: "-2.4s" },
  { label: "Solidity", pos: "-right-7 bottom-12", color: "text-orange-300 border-ember/40", delay: "-3.4s" },
  { label: "Docker", pos: "left-20 -bottom-6", color: "text-blue-300 border-blue-400/40", delay: "-0.6s" },
];

/* All animations for this section live here, so only this one file needs to be copied. */
const css = `
@keyframes hm-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
@keyframes hm-shimmer { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
@keyframes hm-blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
@keyframes hm-spin { to{transform:rotate(360deg)} }
@keyframes hm-line { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:none} }
@keyframes hm-glow { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.6;transform:scale(1.08)} }
@keyframes hm-scroll { 0%{opacity:0;transform:translateY(0)} 30%{opacity:1} 100%{opacity:0;transform:translateY(14px)} }
@keyframes hm-marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
@keyframes hm-shine { from{transform:translateX(-120%) skewX(-20deg)} to{transform:translateX(320%) skewX(-20deg)} }

.hm-float { animation: hm-float 5s ease-in-out infinite; }
.hm-shimmer { background-size: 200% auto; animation: hm-shimmer 6s ease infinite; }
.hm-blink { animation: hm-blink 1s steps(1) infinite; }
.hm-spin { animation: hm-spin 26s linear infinite; }
.hm-spin-rev { animation: hm-spin 34s linear infinite reverse; }
.hm-line { opacity:0; animation: hm-line .5s ease-out forwards; }
.hm-glow { animation: hm-glow 5s ease-in-out infinite; }
.hm-scroll { animation: hm-scroll 1.8s ease-in-out infinite; }
.hm-marquee { animation: hm-marquee 32s linear infinite; }
.hm-marquee:hover { animation-play-state: paused; }
.hm-shine::after { content:""; position:absolute; top:0; left:0; height:100%; width:30%; background:rgba(255,255,255,.35); transform:translateX(-120%) skewX(-20deg); }
.hm-shine:hover::after { animation: hm-shine .8s ease; }
.hm-grid {
  background-image: radial-gradient(rgba(255,255,255,.14) 1px, transparent 1px);
  background-size: 26px 26px;
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
  mask-image: radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%);
}
@media (prefers-reduced-motion: reduce) {
  .hm-float,.hm-shimmer,.hm-blink,.hm-spin,.hm-spin-rev,.hm-glow,.hm-scroll,.hm-marquee { animation: none !important; }
  .hm-line { animation: none !important; opacity: 1; }
}
`;

/** Types and deletes a list of phrases in a loop. Shows the first phrase only if motion is reduced. */
function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));

      let delay = deleting ? 35 : 75;
      if (!deleting && charIndex === word.length) {
        deleting = true;
        delay = 1600;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };

    setText("");
    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

function CodeCard() {
  const lines: { delay: number; node: React.ReactNode }[] = [
    { delay: 0.6, node: (<><span className="text-violet-300">const</span> <span className="text-cyan">developer</span> = {"{"}</>) },
    { delay: 0.9, node: (<>&nbsp;&nbsp;name: <span className="text-lime">&quot;{profile.name}&quot;</span>,</>) },
    { delay: 1.2, node: (<>&nbsp;&nbsp;role: <span className="text-lime">&quot;{profile.title}&quot;</span>,</>) },
    { delay: 1.5, node: (<>&nbsp;&nbsp;stack: [<span className="text-orange-300">&quot;React&quot;</span>, <span className="text-orange-300">&quot;Node&quot;</span>, <span className="text-orange-300">&quot;MongoDB&quot;</span>],</>) },
    { delay: 1.8, node: (<>&nbsp;&nbsp;location: <span className="text-lime">&quot;Mymensingh, BD&quot;</span>,</>) },
    { delay: 2.1, node: (<>&nbsp;&nbsp;openToWork: <span className="text-violet-300">true</span>,</>) },
    { delay: 2.4, node: <>{"};"}</> },
  ];

  return (
    <div className="glass relative overflow-hidden">
      <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lime via-cyan to-ember" />
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-300/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-stone-500">developer.ts</span>
      </div>
      <pre className="overflow-hidden p-5 font-mono text-[13px] leading-7 text-stone-300 sm:text-sm">
        {lines.map((line, i) => (
          <div key={i} className="hm-line whitespace-pre" style={{ animationDelay: `${line.delay}s` }}>
            {line.node}
          </div>
        ))}
        <div className="hm-line" style={{ animationDelay: "2.7s" }}>
          <span className="text-stone-500">{"// ready to build something great"}</span>
          <span className="hm-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-lime" />
        </div>
      </pre>
    </div>
  );
}

export default function Home() {
  const typed = useTypewriter(phrases);
  const projects = useProjects();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const totalSkills = skillCategories.reduce((sum, c) => sum + c.items.length, 0);

  const stats = [
    { value: `${totalSkills}+`, label: "Technologies" },
    { value: String(skillCategories.length), label: "Skill areas" },
    { value: String(projects.length), label: "Projects" },
  ];

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 12 });
  };

  return (
    <section id="home" className="relative">
      <style>{css}</style>

      <div className="hm-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl items-center px-5 pb-28 pt-16">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left: text */}
          <div>
            <Reveal>
              <span className="chip mb-6 !border-lime/40 !bg-lime/10 !text-lime-soft">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                </span>
                Open to new opportunities
              </span>
            </Reveal>

            <Reveal delay={100}>
              <p className="text-lg font-medium text-stone-400">Hello, I&apos;m</p>
              <h1 className="hm-shimmer mt-1 bg-gradient-to-r from-lime via-cyan to-lime bg-clip-text text-5xl font-extrabold leading-[1.05] tracking-tight text-transparent sm:text-7xl">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 text-xl font-semibold text-stone-200 sm:text-2xl">{profile.title}</p>
              <p className="mt-3 h-9 font-mono text-lg text-stone-400 sm:text-xl" aria-live="off">
                <span className="text-cyan">{"> "}</span>
                building <span className="text-lime">{typed}</span>
                <span className="hm-blink ml-0.5 inline-block h-5 w-[3px] translate-y-1 bg-lime" aria-hidden="true" />
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-stone-400">{profile.intro}</p>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/#projects" className="btn btn-primary hm-shine group relative overflow-hidden">
                  View Projects <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                </Link>
                <Link href="/#contact" className="btn btn-ghost">
                  Contact Me
                </Link>
                <div className="ml-1 flex items-center gap-2">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-stone-200 transition hover:-translate-y-1 hover:border-lime hover:text-lime"
                  >
                    <Github size={19} />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Send an email"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-stone-200 transition hover:-translate-y-1 hover:border-cyan hover:text-cyan"
                  >
                    <Mail size={19} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-extrabold text-white">{s.value}</p>
                    <p className="text-xs uppercase tracking-widest text-stone-500">{s.label}</p>
                  </div>
                ))}
                <p className="inline-flex items-center gap-1.5 text-sm text-stone-500">
                  <MapPin size={15} /> {profile.location}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: code card with mouse tilt and floating tech chips */}
          <Reveal delay={300} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2"
              aria-hidden="true"
            >
              <div className="hm-glow absolute inset-0 rounded-full bg-ember/25 blur-3xl" />
              <div className="hm-spin absolute inset-[8%] rounded-full border border-dashed border-lime/25" />
              <div className="hm-spin-rev absolute inset-[18%] rounded-full border border-cyan/20" />
            </div>

            <div
              onMouseMove={onMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              style={{ perspective: 900 }}
            >
              <div className="hm-float">
                <div
                  style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transition: "transform .2s ease-out",
                    transformStyle: "preserve-3d",
                  }}
                >
                  <CodeCard />
                </div>
              </div>
            </div>

            {orbitChips.map((chip) => (
              <span
                key={chip.label}
                className={`chip hm-float absolute hidden bg-black/60 font-semibold backdrop-blur sm:inline-flex ${chip.pos} ${chip.color}`}
                style={{ animationDelay: chip.delay }}
                aria-hidden="true"
              >
                {chip.label}
              </span>
            ))}
          </Reveal>
        </div>

        {/* Scroll hint */}
        <Link
          href="/#about"
          aria-label="Scroll to About section"
          className="absolute bottom-24 left-1/2 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border border-white/25 pt-2 xl:flex"
        >
          <span className="hm-scroll h-2 w-1 rounded-full bg-lime" />
        </Link>
      </div>

      {/* Tech marquee */}
      <div
        className="relative overflow-hidden border-y border-white/10 bg-black/25 py-4 backdrop-blur"
        aria-hidden="true"
        style={{
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
      >
        <div className="hm-marquee flex w-max gap-10 whitespace-nowrap">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-sm font-semibold uppercase tracking-widest text-stone-400">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-lime/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}