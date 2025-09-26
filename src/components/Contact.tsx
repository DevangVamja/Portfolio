import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { Reveal } from './animations/Reveal';
import { useTheme } from '../context/ThemeContext';

const channels = [
  {
    href: 'mailto:devangvamja2000@gmail.com',
    label: 'Email',
    icon: <Mail className="h-5 w-5" />,
    description: 'Let’s discuss your next data challenge.'
  },
  {
    href: 'https://github.com/DevangVamja',
    label: 'GitHub',
    icon: <Github className="h-5 w-5" />,
    description: 'Explore open-source experiments and utilities.'
  },
  {
    href: 'https://www.linkedin.com/in/devangvamja/',
    label: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    description: 'Connect for collaborations and opportunities.'
  }
];

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className={`absolute inset-0 bg-gradient-to-br ${theme.contact.gradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25)_0,_rgba(255,255,255,0)_45%)]" />
      <div className="container relative mx-auto px-6">
        <Reveal className="mx-auto max-w-2xl text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">Let&apos;s Build Something Impactful</h2>
          <p className={`mt-4 text-base md:text-lg ${theme.contact.accentText}`}>
            I&apos;m always excited to meet collaborators, founders, and teams who care deeply about data-driven experiences.
          </p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {channels.map((channel, index) => (
            <Reveal key={channel.label} delay={index * 120}>
              <a
                href={channel.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-white/60 hover:bg-white/20"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10">
                      {channel.icon}
                    </span>
                    <span className="text-lg font-semibold">{channel.label}</span>
                  </div>
                  <p className={`mt-4 text-sm ${theme.contact.accentMutedText}`}>{channel.description}</p>
                </div>
                <span className={`mt-6 inline-flex items-center text-sm font-semibold transition group-hover:text-white ${theme.contact.callToAction}`}>
                  Get in touch
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
