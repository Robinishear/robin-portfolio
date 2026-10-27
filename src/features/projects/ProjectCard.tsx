import { ExternalLink, Github, Star } from "lucide-react";
import type { Project } from "./schema";

const statusStyle: Record<Project["status"], string> = {
  completed: "border-lime/40 bg-lime/10 text-lime-soft",
  "in-progress": "border-cyan/40 bg-cyan/10 text-cyan-soft",
  planned: "border-white/20 bg-white/5 text-stone-300",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass glass-hover flex h-full flex-col overflow-hidden">
      <div className="relative aspect-video overflow-hidden bg-black/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
        <span className={`chip absolute left-3 top-3 backdrop-blur ${statusStyle[project.status]}`}>
          {project.status.replace("-", " ")}
        </span>
        {project.featured && (
          <span className="chip absolute right-3 top-3 !border-ember/40 !bg-ember/15 !text-orange-200 backdrop-blur">
            <Star size={12} /> Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan">{project.category}</p>
        <h3 className="mt-1 text-lg font-bold text-white">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-400">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <li key={tech} className="chip !px-2.5 !py-0.5 !text-xs">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-4 text-sm font-medium">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-200 transition hover:text-lime"
            >
              <Github size={16} /> Code
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-stone-200 transition hover:text-cyan"
            >
              <ExternalLink size={16} /> Live demo
            </a>
          )}
          {!project.github && !project.liveDemo && <span className="text-xs text-stone-500">Links coming soon</span>}
        </div>
      </div>
    </article>
  );
}
