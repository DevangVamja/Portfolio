export interface Theme {
  id: string;
  name: string;
  app: {
    background: string;
    gradient: string;
    footer: string;
  };
  header: {
    iconRing: string;
    iconColor: string;
    socialHover: string;
    themeButtonBorder: string;
  };
  hero: {
    gradient: string;
    blobOne: string;
    blobTwo: string;
    highlightIcon: string;
    descriptionText: string;
    statsLabel: string;
    buttonGradient: string;
    profileRing: string;
    profileShadow: string;
  };
  skills: {
    headingGradient: string;
  };
  experience: {
    timelineLine: string;
    timelineRing: string;
    durationText: string;
    companyText: string;
    bullet: string;
    shadow: string;
  };
  projects: {
    borderHover: string;
    shadow: string;
    tag: string;
    link: string;
    iconHover: string;
  };
  contact: {
    gradient: string;
    accentText: string;
    accentMutedText: string;
    callToAction: string;
  };
  preview: string;
}

export const themes: Theme[] = [
  {
    id: 'aurora',
    name: 'Aurora',
    app: {
      background: 'bg-slate-950',
      gradient: 'from-indigo-950 via-slate-950 to-slate-900',
      footer: 'bg-slate-900/60'
    },
    header: {
      iconRing: 'border-indigo-400/40 bg-indigo-500/10',
      iconColor: 'text-indigo-300',
      socialHover: 'hover:border-indigo-400/60 hover:text-white',
      themeButtonBorder: 'hover:border-indigo-400/60 hover:text-white'
    },
    hero: {
      gradient: 'from-indigo-600 via-purple-600 to-indigo-700',
      blobOne: 'bg-indigo-400/30',
      blobTwo: 'bg-purple-400/40',
      highlightIcon: 'text-indigo-200',
      descriptionText: 'text-indigo-100',
      statsLabel: 'text-indigo-100/80',
      buttonGradient: 'from-indigo-400 via-purple-400 to-indigo-500',
      profileRing: 'border-indigo-200/60',
      profileShadow: 'shadow-[0_30px_60px_-18px_rgba(79,70,229,0.55)]'
    },
    skills: {
      headingGradient: 'from-indigo-300 via-purple-300 to-indigo-200'
    },
    experience: {
      timelineLine: 'from-indigo-400 via-purple-400/60 to-transparent',
      timelineRing: 'border-indigo-400/60 bg-indigo-500/20',
      durationText: 'text-indigo-200/80',
      companyText: 'text-indigo-100/90',
      bullet: 'bg-indigo-300',
      shadow: 'shadow-[0_25px_45px_-18px_rgba(79,70,229,0.5)]'
    },
    projects: {
      borderHover: 'hover:border-indigo-400/50 hover:shadow-[0_35px_70px_-28px_rgba(79,70,229,0.55)]',
      shadow: 'shadow-[0_35px_70px_-28px_rgba(79,70,229,0.45)]',
      tag: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-100',
      link: 'text-indigo-200',
      iconHover: 'group-hover:border-indigo-300/60 group-hover:bg-indigo-500/20'
    },
    contact: {
      gradient: 'from-indigo-600 via-purple-600 to-slate-900',
      accentText: 'text-indigo-100',
      accentMutedText: 'text-indigo-100/90',
      callToAction: 'text-indigo-100'
    },
    preview: 'from-indigo-500 via-purple-500 to-indigo-500'
  },
  {
    id: 'sunset',
    name: 'Sunset',
    app: {
      background: 'bg-stone-950',
      gradient: 'from-rose-950 via-stone-950 to-stone-900',
      footer: 'bg-stone-900/60'
    },
    header: {
      iconRing: 'border-rose-400/40 bg-rose-500/10',
      iconColor: 'text-rose-200',
      socialHover: 'hover:border-rose-400/60 hover:text-white',
      themeButtonBorder: 'hover:border-rose-400/60 hover:text-white'
    },
    hero: {
      gradient: 'from-orange-600 via-pink-600 to-rose-600',
      blobOne: 'bg-orange-400/30',
      blobTwo: 'bg-rose-400/40',
      highlightIcon: 'text-rose-100',
      descriptionText: 'text-rose-100',
      statsLabel: 'text-rose-100/80',
      buttonGradient: 'from-orange-400 via-pink-400 to-rose-500',
      profileRing: 'border-rose-200/60',
      profileShadow: 'shadow-[0_30px_60px_-18px_rgba(244,114,182,0.55)]'
    },
    skills: {
      headingGradient: 'from-orange-200 via-pink-200 to-rose-200'
    },
    experience: {
      timelineLine: 'from-orange-400 via-rose-400/60 to-transparent',
      timelineRing: 'border-rose-400/60 bg-rose-500/20',
      durationText: 'text-rose-200/80',
      companyText: 'text-rose-100/90',
      bullet: 'bg-rose-300',
      shadow: 'shadow-[0_25px_45px_-18px_rgba(244,114,182,0.5)]'
    },
    projects: {
      borderHover: 'hover:border-rose-400/50 hover:shadow-[0_35px_70px_-28px_rgba(244,114,182,0.55)]',
      shadow: 'shadow-[0_35px_70px_-28px_rgba(244,114,182,0.45)]',
      tag: 'border-rose-400/30 bg-rose-500/10 text-rose-100',
      link: 'text-rose-200',
      iconHover: 'group-hover:border-rose-300/60 group-hover:bg-rose-500/20'
    },
    contact: {
      gradient: 'from-orange-600 via-rose-600 to-amber-700',
      accentText: 'text-rose-100',
      accentMutedText: 'text-rose-100/90',
      callToAction: 'text-rose-100'
    },
    preview: 'from-orange-500 via-pink-500 to-rose-500'
  },
  {
    id: 'lagoon',
    name: 'Lagoon',
    app: {
      background: 'bg-slate-950',
      gradient: 'from-cyan-950 via-slate-950 to-slate-900',
      footer: 'bg-slate-900/60'
    },
    header: {
      iconRing: 'border-teal-400/40 bg-teal-500/10',
      iconColor: 'text-teal-200',
      socialHover: 'hover:border-teal-400/60 hover:text-white',
      themeButtonBorder: 'hover:border-teal-400/60 hover:text-white'
    },
    hero: {
      gradient: 'from-teal-600 via-cyan-600 to-blue-700',
      blobOne: 'bg-teal-400/30',
      blobTwo: 'bg-cyan-400/40',
      highlightIcon: 'text-teal-100',
      descriptionText: 'text-teal-100',
      statsLabel: 'text-teal-100/80',
      buttonGradient: 'from-teal-400 via-cyan-400 to-blue-500',
      profileRing: 'border-teal-200/60',
      profileShadow: 'shadow-[0_30px_60px_-18px_rgba(20,184,166,0.55)]'
    },
    skills: {
      headingGradient: 'from-teal-200 via-cyan-200 to-blue-200'
    },
    experience: {
      timelineLine: 'from-teal-400 via-cyan-400/60 to-transparent',
      timelineRing: 'border-teal-400/60 bg-teal-500/20',
      durationText: 'text-teal-200/80',
      companyText: 'text-teal-100/90',
      bullet: 'bg-teal-300',
      shadow: 'shadow-[0_25px_45px_-18px_rgba(20,184,166,0.5)]'
    },
    projects: {
      borderHover: 'hover:border-teal-400/50 hover:shadow-[0_35px_70px_-28px_rgba(20,184,166,0.55)]',
      shadow: 'shadow-[0_35px_70px_-28px_rgba(20,184,166,0.45)]',
      tag: 'border-teal-400/30 bg-teal-500/10 text-teal-100',
      link: 'text-teal-200',
      iconHover: 'group-hover:border-teal-300/60 group-hover:bg-teal-500/20'
    },
    contact: {
      gradient: 'from-teal-600 via-cyan-600 to-slate-900',
      accentText: 'text-teal-100',
      accentMutedText: 'text-teal-100/90',
      callToAction: 'text-teal-100'
    },
    preview: 'from-teal-500 via-cyan-500 to-blue-500'
  }
];
