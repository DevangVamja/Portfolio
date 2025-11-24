import React from "react";
import {
  Database,
  Layers,
  Cloud,
  Code2,
  BarChart2,
  BrainCircuit,
} from "lucide-react";

export const skillsData = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Engineering",
    items: [
      "ETL / ELT Pipelines",
      "Data Modeling",
      "Dimensional Modeling",
      "SQL (Advanced)",
      "dbt (experience)",
      "Batch & Streaming Workflows",
    ],
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & Big Data",
    items: ["AWS (S3, EC2)", "Google Cloud", "Hadoop", "Hive", "Spark"],
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Data Processing & Wrangling",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "R",
      "Data Cleaning & Feature Engineering",
    ],
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "Analytics & Visualization",
    items: ["Tableau", "Plotly", "Matplotlib", "Seaborn"],
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: "Machine Learning (Supporting Skill)",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP (NLTK, SpaCy)"],
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Programming",
    items: ["Python", "Java", "C++", "C#", "JavaScript"],
  },
];
