import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Predictive Customer Analytics",
    description: "Developed a machine learning model to predict customer churn with 92% accuracy using historical transaction data and customer behavior patterns.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "TensorFlow", "SQL", "AWS"],
    github: "#",
    demo: "#"
  },
  {
    title: "Natural Language Processing Pipeline",
    description: "Built an end-to-end NLP pipeline for sentiment analysis on social media data, processing over 1M tweets daily.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
    tags: ["PyTorch", "BERT", "Docker", "GCP"],
    github: "#",
    demo: "#"
  },
  {
    title: "Time Series Forecasting",
    description: "Implemented an LSTM-based model for financial market prediction, achieving 15% improvement over baseline models.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Keras", "Pandas", "Plotly"],
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.github} className="flex items-center text-gray-600 hover:text-indigo-600">
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center text-gray-600 hover:text-indigo-600">
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}