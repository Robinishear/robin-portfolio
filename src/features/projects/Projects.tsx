"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { useProjects } from "./useProjects";

export default function Projects() {
  const projects = useProjects();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((p) => p.category)))], [projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const haystack = [p.title, p.description, p.category, ...p.technologies].join(" ").toLowerCase();
      return matchesCategory && (!q || haystack.includes(q));
    });
  }, [projects, query, category]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of my work. Search by name or technology, or filter by category."
        />
      </Reveal>

      <Reveal>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or technologies"
              aria-label="Search projects"
              className="field !pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`chip cursor-pointer transition ${
                  category === c ? "!border-lime !bg-lime/15 !text-lime-soft" : "hover:border-white/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="glass p-10 text-center text-stone-400">No projects match your search.</div>
      )}
    </section>
  );
}
