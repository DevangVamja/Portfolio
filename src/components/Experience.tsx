import React from "react";
import { Briefcase } from "lucide-react";
import { Reveal } from "./animations/Reveal";
import { useTheme } from "../context/ThemeContext";

const experiences = [
  {
    title: "Data Engineer",
    company: "Telecom Gateway LLC",
    duration: "Dec 2024 - Present",
    description: [
      "Engineered scalable data pipelines to ingest, clean, and transform high-frequency telecom network KPIs, improving data reliability and reducing downtime analysis delays by 20%.",
      "Designed cloud-based ETL workflows using Python and SQL to unify multi-source network traffic data for analytics and ML-readiness.",
      "Built modular transformation layers for feature generation, window aggregations, and anomaly-flagging logic used across forecasting workloads.",
      "Automated schema validation and data-quality checks, ensuring consistent delivery of analytics-ready datasets to downstream teams.",
      "Collaborated with DS/ML teams by delivering optimized training datasets and integrating model outputs back into the pipeline for monitoring.",
    ],
  },
  {
    title: "Network Engineer / Data Engineer",
    company: "Ericsson Inc.",
    duration: "May 2023 - Nov 2024",
    description: [
      "Developed end-to-end data pipelines to automate large-scale network analytics, reducing manual preparation by 30 hours per project.",
      "Built ETL workflows for anomaly detection datasets and implemented feature-processing logic supporting ML models deployed across telecom operations.",
      "Containerized data services using Docker and deployed them on Kubernetes clusters, improving scalability and reliability during high-load periods by 30%.",
      "Designed internal analytics datasets using Hadoop and Hive, enabling faster query performance and supporting operational reporting.",
      "Created Python-based tooling for data transformations, validation, and batch processing, improving consistency across engineering teams.",
      "Performed exploratory and statistical analysis to optimize network performance dashboards and business process workflows.",
    ],
  },
  {
    title: "Student Intern",
    company: "Ericsson Inc.",
    duration: "May 2022 - Aug 2022",
    description: [
      "Analyzed large-scale network telemetry and log data to identify leading indicators of system anomalies and outages.",
      "Developed preprocessing and transformation scripts using Python and SQL to prepare LTE performance datasets for downstream modeling.",
      "Worked closely with engineering and product teams to refine data requirements and improve data-quality workflows.",
      "Leveraged Hive queries to extract, aggregate, and structure distributed data, enabling reliable analysis and experimentation.",
    ],
  },
  {
    title: "Student Intern",
    company: "AlphaDev Infotech Pvt Ltd",
    duration: "Jul 2019 – Aug 2021",
    description: [
      "Built ETL workflows integrating logs, semi-structured files, and relational data into standardized analytical models.",
      "Developed SQL data summaries, validation routines, and automation scripts powering operational dashboards.",
      "Produced documentation for data flows, integration logic, and governance requirements.",
    ],
  },
];

export default function Experience() {
  const { theme } = useTheme();

  return (
    <section id="experience" className="relative py-24">
      <div className="container mx-auto px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl text-white">
            Professional Journey
          </h2>
          <p className="mt-4 text-base text-slate-300 md:text-lg">
            Proven impact delivering scalable data pipelines, cloud ETL
            workflows, and analytics-ready datasets across telecom systems.
          </p>
        </Reveal>
        <div className="mx-auto mt-14 max-w-5xl">
          {experiences.map((exp, index) => (
            <Reveal
              key={exp.title}
              delay={index * 120}
              className="relative pb-12 last:pb-0"
            >
              <div className="grid grid-cols-[auto_1px_minmax(0,1fr)] items-start gap-x-8">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border text-white ${theme.experience.timelineRing} ${theme.experience.shadow}`}
                >
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="relative h-full">
                  <span
                    className={`absolute left-1/2 w-px -translate-x-1/2 bg-gradient-to-b ${theme.experience.timelineLine}`}
                    style={{
                      top: 0,
                      bottom: index === experiences.length - 1 ? 0 : "-3rem",
                    }}
                  />
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition duration-300 hover:border-white/30 hover:bg-slate-900/80">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <span
                      className={`text-sm font-medium uppercase tracking-wide ${theme.experience.durationText}`}
                    >
                      {exp.duration}
                    </span>
                  </div>
                  <p
                    className={`mt-2 text-sm font-medium ${theme.experience.companyText}`}
                  >
                    {exp.company}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    {exp.description.map((sentence) => (
                      <li key={sentence} className="flex items-start gap-2">
                        <span
                          className={`mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full ${theme.experience.bullet}`}
                        />
                        <span>{sentence}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
