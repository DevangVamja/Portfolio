import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export function SkillCard({ icon, title, items }: SkillCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-slate-900/80">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/10 to-purple-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-center gap-3 text-indigo-300">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">{icon}</div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <ul className="mt-5 space-y-2 text-sm text-slate-300">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
