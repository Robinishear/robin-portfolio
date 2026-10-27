import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-8 md:flex-row">
        <p className="text-sm text-stone-500">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-stone-400 transition hover:text-lime">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#home" className="btn btn-ghost !px-4 !py-2 text-sm" aria-label="Back to top">
          <ArrowUp size={16} /> Back to top
        </a>
      </div>
    </footer>
  );
}
