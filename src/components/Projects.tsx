import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { Reveal } from './animations/Reveal';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    title: 'ETL-Pipeline-Project',
    description:
      'A scalable ETL pipeline automating ingestion, transformation, and loading into a cloud warehouse with monitoring and visualization dashboards.',
    image: 'https://res.cloudinary.com/dpgkwxrla/image/upload/v1758737439/etl2_dfhrqq.png',
    tags: ['Python', 'SQL', 'Airflow', 'Pandas', 'AWS'],
    github: 'https://github.com/DevangVamja/ETL-Pipeline-Project'
  },
  {
    title: 'Full Scale ML Project',
    description:
      'End-to-end ML platform for math score prediction with automated training, testing, and model management across multiple algorithms.',
    image:
      'https://plus.unsplash.com/premium_photo-1683134169138-9037062cba51?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Sci-kit Learn', 'AWS', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/DevangVamja/Full-Scale-ML-project'
  },
  {
    title: 'CORD-19 Summary Generator',
    description:
      'Retrieval-augmented NLP application that ranks CORD-19 articles for a query and produces abstractive summaries using transformer architectures.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800',
    tags: ['PyTorch', 'BART', 'nltk', 'scikit-learn'],
    github: 'https://github.com/DevangVamja/CORD19-SummaryGenerator'
  },
  {
    title: 'ATS-Analyzer-OpenAI',
    description:
      'Flask application that parses resumes, extracts structured insights, and evaluates ATS readiness using OpenAI-powered analysis.',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Flask', 'OpenAI GPT', 'PyPDF'],
    github: 'https://github.com/DevangVamja/ATS-Analyzer-OpenAI'
  },
  {
    title: 'Fraud Detection System',
    description:
      'Machine learning workflows that identify fraudulent transactions through feature engineering, model tuning, and performance monitoring.',
    image:
      'https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?t=st=1741985765~exp=1741989365~hmac=d946a7a2701df5aa6dac66f2ac5437b1dab3b48d659eb7fa9ba99fb8d538d4f1&w=1380',
    tags: ['Python', 'Tensorflow', 'Hyperparameter Tuning'],
    github: 'https://github.com/DevangVamja/Fraud-Detection'
  }
];

export default function Projects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent" />
      <div className="container relative mx-auto px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-white">Featured Work</h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            A selection of data science and machine learning projects that showcase production rigor and measurable business impact.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 100}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-lg backdrop-blur transition duration-500 hover:-translate-y-2 ${theme.projects.shadow} ${theme.projects.borderHover}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/0 to-transparent opacity-80" />
                </div>
                <div className="relative flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-slate-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${theme.projects.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <a
                      href={project.github}
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition hover:text-white ${theme.projects.link}`}
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                    <span
                      className={`inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition ${theme.projects.iconHover}`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
