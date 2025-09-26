import React from 'react';
import { Briefcase } from 'lucide-react';
import { Reveal } from './animations/Reveal';
import { useTheme } from '../context/ThemeContext';

const experiences = [
  {
    title: 'Data Scientist',
    company: 'Telecom Gateway LLC',
    duration: 'Dec 2024 - Present',
    description: [
      'Designed and implemented LSTM-based neural network models to forecast network load and detect anomalies in telecom traffic using high-frequency time-series data, reducing unexpected downtimes by 20%.',
      'Developed NLP pipelines to analyze customer service transcripts and technician notes, extracting key failure patterns and sentiment trends to improve issue resolution time by 25%.',
      'Built end-to-end deep learning solutions using TensorFlow and PyTorch for classifying signal degradation events and predicting maintenance needs.',
      'Created interactive dashboards in Tableau and Streamlit to communicate insights from telecom data, aiding strategic planning and operational efficiency.',
      'Worked with large-scale datasets stored in cloud environments (AWS S3, BigQuery) and optimized data ingestion workflows using Python and SQL.'
    ]
  },
  {
    title: 'Network Engineer/Data Scientist',
    company: 'Ericsson Inc.',
    duration: 'May 2023 - Nov 2024',
    description: [
      'Designed and implemented scalable data pipelines to automate large-scale analyses, reducing preparation time by 30 hours per project.',
      'Led the development of a random forest classifier for anomaly detection in network data, reducing false positives by 25% and enabling improved operational decision-making.',
      'Collaborated with cross-functional teams to deploy machine learning models on AWS using Docker and Kubernetes, improving scalability by 30% during peak loads.',
      'Delivered actionable insights using data visualization tools such as Pandas and Matplotlib, driving operational improvements and enhancing stakeholder decision-making.',
      'Utilized Hadoop and Hive to process and analyze large-scale data, enabling advanced analytics for operational efficiency.',
      'Conducted statistical analysis and predictive modeling using R to uncover trends and optimize business processes.'
    ]
  },
  {
    title: 'Data Science Intern',
    company: 'Ericsson Inc.',
    duration: 'May 2022 - Aug 2022',
    description: [
      'Conducted exploratory data analysis (EDA) on large datasets to uncover patterns and root causes in network system anomalies.',
      'Developed a TensorFlow-based framework for LTE network performance assessment, increasing service availability by 20%.',
      'Partnered with engineers and product managers to refine machine learning models, improving accuracy and interpretability through team collaboration.',
      'Leveraged Hive queries to extract and transform structured data, enhancing the quality of EDA and modeling processes.'
    ]
  }
];

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section id="experience" className="relative py-24">
      <div className="container mx-auto px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-white">Professional Journey</h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            Proven impact delivering scalable, data-driven solutions across telecom operations and enterprise analytics teams.
          </p>
        </Reveal>
        <div className="relative mx-auto mt-14 max-w-5xl border-l border-white/10 pl-8 md:pl-12">
          <div className={`absolute -left-[1px] top-0 h-full w-px bg-gradient-to-b ${theme.experience.timelineLine}`} />
          {experiences.map((exp, index) => (
            <Reveal key={exp.title} delay={index * 120} className="relative pb-12 last:pb-0">
              <div
                className={`absolute -left-[50px] top-1.5 flex h-12 w-12 items-center justify-center rounded-full border text-white md:-left-[55px] ${theme.experience.timelineRing} ${theme.experience.shadow}`}
              >
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:border-white/30 hover:bg-slate-900/80">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <span className={`text-sm font-medium uppercase tracking-wide ${theme.experience.durationText}`}>
                    {exp.duration}
                  </span>
                </div>
                <p className={`mt-2 text-sm font-medium ${theme.experience.companyText}`}>{exp.company}</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  {exp.description.map((sentence) => (
                    <li key={sentence} className="flex items-start gap-2">
                      <span className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${theme.experience.bullet}`} />
                      <span>{sentence}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
