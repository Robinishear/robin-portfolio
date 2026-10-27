import { skillCategories } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const accents = [
  { bar: "bg-lime", text: "text-lime", border: "hover:border-lime/50" },
  { bar: "bg-cyan", text: "text-cyan", border: "hover:border-cyan/50" },
  { bar: "bg-ember", text: "text-orange-300", border: "hover:border-ember/50" },
  { bar: "bg-lime", text: "text-lime", border: "hover:border-lime/50" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="The tools I build with"
          description="Technologies I use day to day, grouped by what they do."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {skillCategories.map((category, i) => {
          const accent = accents[i % accents.length];
          return (
            <Reveal key={category.name} delay={i * 80}>
              <div className={`glass relative h-full overflow-hidden p-6 transition ${accent.border}`}>
                <span className={`absolute inset-x-0 top-0 h-1 ${accent.bar} opacity-90`} />
                <div className="mb-4 flex items-center justify-between">
                  <h3 className={`text-lg font-bold ${accent.text}`}>{category.name}</h3>
                  <span className="chip">{String(category.items.length).padStart(2, "0")}</span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li key={item} className="chip !text-stone-100">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
