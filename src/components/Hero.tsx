import React from 'react';
import { Brain, BarChart, Database } from 'lucide-react';
import { Reveal } from './animations/Reveal';
import { useTheme } from '../context/ThemeContext';

const profileImage =
  'https://res.cloudinary.com/dpgkwxrla/image/upload/v1735864856/portfolio-data/jzhp1o82qavweqeh0mhj.png';

const highlights = [
  {
    Icon: Brain,
    title: 'End-to-End ML Systems',
    description: 'Designing resilient pipelines that take models from exploration to dependable production deployments.'
  },
  {
    Icon: Database,
    title: 'Scalable Data Engines',
    description: 'Modern data stacks on cloud-native infrastructure that transform messy data into reliable insights.'
  },
  {
    Icon: BarChart,
    title: 'Insightful Storytelling',
    description: 'Human-centered dashboards and narratives that make complex analyses clear for every stakeholder.'
  }
];

const stats = [
  { label: 'Production ML Pipelines', value: '15+' },
  { label: 'Stakeholder Dashboards', value: '30+' },
  { label: 'Terabytes of Data Tamed', value: '40+' }
];

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br py-28 transition-colors duration-700 ${theme.hero.gradient}`}
    >
      <div className={`absolute -left-16 top-10 h-72 w-72 rounded-full blur-3xl ${theme.hero.blobOne}`} />
      <div className={`absolute right-10 bottom-0 h-64 w-64 rounded-full blur-3xl ${theme.hero.blobTwo}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2)_0,_rgba(255,255,255,0)_45%)]" />
      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_minmax(0,_0.85fr)]">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Reveal>
              <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 backdrop-blur">
                AVAILABLE FOR COLLABORATION
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-8 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
                Building intelligent systems that turn{' '}
                <span className="bg-gradient-to-r from-amber-200 via-white to-amber-200 bg-clip-text text-transparent">
                  complex data
                </span>{' '}
                into confident decisions.
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className={`mt-6 max-w-2xl text-lg md:text-xl ${theme.hero.descriptionText}`}>
                Experienced data scientist and ML engineer with a track record of crafting scalable analytics products,
                production-ready models, and captivating data stories for enterprise stakeholders.
              </p>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur transition hover:border-white/70"
                >
                  <span
                    className={`absolute inset-0 scale-105 bg-gradient-to-r opacity-0 transition duration-300 group-hover:opacity-100 ${theme.hero.buttonGradient}`}
                  />
                  <span className="relative">Let&apos;s Collaborate</span>
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  View Portfolio
                </a>
              </div>
            </Reveal>
            <Reveal delay={420}>
              <div className="mt-12 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/20 bg-white/10 p-4 text-left backdrop-blur transition hover:border-white/60 hover:bg-white/20 sm:text-center"
                  >
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className={`mt-2 text-xs font-medium uppercase tracking-widest ${theme.hero.statsLabel}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="relative mx-auto w-60 shrink-0 sm:w-72 md:w-80">
              <div className="absolute -inset-10 rounded-[3rem] bg-white/20 opacity-30 blur-3xl" />
              <div
                className={`relative overflow-hidden rounded-[3rem] border border-white/20 bg-slate-950/40 backdrop-blur ${theme.hero.profileRing} ${theme.hero.profileShadow}`}
              >
                <img src={profileImage} alt="Portrait of Devang Vamja" className="h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-16 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={index * 120 + 520}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-6 text-left backdrop-blur transition-transform duration-500 hover:-translate-y-2 hover:border-white/40 hover:bg-white/20">
                <span className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/20 p-3">
                    <highlight.Icon className={`h-6 w-6 ${theme.hero.highlightIcon}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                  <p className={`mt-3 text-sm ${theme.hero.descriptionText}`}>{highlight.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
