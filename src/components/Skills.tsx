import React from 'react';
import { SkillCard } from './skills/SkillCard';
import { skillsData } from '../data/skillsData';
import { Reveal } from './animations/Reveal';
import { useTheme } from '../context/ThemeContext';

export default function Skills() {
  const { theme } = useTheme();

  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent" />
      <div className="container relative mx-auto px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            <span
              className={`bg-gradient-to-r bg-clip-text text-transparent ${theme.skills.headingGradient}`}
            >
              Skills &amp; Expertise
            </span>
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            A multidisciplinary toolkit that bridges advanced analytics, robust engineering, and compelling storytelling.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 90}>
              <SkillCard {...skill} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
