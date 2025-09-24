import React from 'react';
import { Brain, Database, BarChart, Code, Share2, TestTube } from 'lucide-react';

export const skillsData = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "NLTK", "SpaCy"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Processing",
    items: ["Python", "R", "SQL", "Pandas", "NumPy"]
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Data Visualization",
    items: ["Matplotlib", "Seaborn", "Plotly", "Tableau"]
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Programming",
    items: ["Python", "C#", "C++", "Java", "Java Script"]
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Big Data",
    items: ["Spark", "Hadoop", "AWS", "Google Cloud"]
  },
  {
    icon: <TestTube className="w-8 h-8" />,
    title: "Statistics",
    items: ["Hypothesis Testing", "A/B Testing", "Regression Analysis"]
  }
];