import React from "react";
import { Brain, Github, Linkedin, Mail } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#projects", label: "Data Engineering Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3">
          <div
            className={`rounded-full border p-2 transition ${theme.header.iconRing}`}
          >
            <Brain className={`h-6 w-6 ${theme.header.iconColor}`} />
          </div>
          <div>
            <span className="text-lg font-semibold tracking-wide text-white">
              Devang Vamja
            </span>
            <p className="text-xs text-slate-400">
              Data Engineer · Scalable Pipelines & Cloud ETL
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-indigo-400 to-purple-400 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="mailto:devangvamja2000@gmail.com"
            className={`hidden rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition sm:inline-flex ${theme.header.socialHover}`}
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/DevangVamja"
            className={`rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition ${theme.header.socialHover}`}
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/devangvamja/"
            className={`rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition ${theme.header.socialHover}`}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
