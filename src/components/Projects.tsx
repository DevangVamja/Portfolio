import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  // {
  //   title: "Predictive Customer Analytics",
  //   description: "Developed a machine learning model to predict customer churn with 92% accuracy using historical transaction data and customer behavior patterns.",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  //   tags: ["Python", "TensorFlow", "SQL", "AWS"],
  //   github: "#",
  //   demo: "#"
  // },
  {
    title: "ETL-Pipeline-Project",
    description: "A scalable ETL (Extract, Transform, Load) pipeline designed to automate data ingestion, cleaning, transformation, and loading into a cloud data warehouse. The project demonstrates best practices in building modular, efficient, and production-ready ETL workflows with monitoring and visualization dashboards.",
    image: "https://res.cloudinary.com/dpgkwxrla/image/upload/v1758736976/etl_yczlk2.png",
    tags: ["Python", "SQL", "Airflow", "Pandas", "AWS"],
    github: "https://github.com/DevangVamja/ETL-Pipeline-Project"
  },  
  {
    title: "Full Scale ML Project",
    description: "Built an end-to-end ML project with train and test pipeline for Math score prediction using various categorical and numerical features with various models and hyper-parameters.",
    image: "https://plus.unsplash.com/premium_photo-1683134169138-9037062cba51?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Sci-kit Learn", "AWS", "Docker", "Github Actions"],
    github: "https://github.com/DevangVamja/Full-Scale-ML-project",
  },
  {
    title: "CORD-19 Summary Generator",
    description: "The CORD-19 Summary Generator is a Natural Language Processing (NLP) application designed to retrieve and summarize relevant articles from the COVID-19 Open Research Dataset (CORD-19). Given a user query, the system retrieves the top 5 most relevant documents and generates an abstractive summary of the retrieved articles.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
    tags: ["PyTorch", "BART", "nltk", "scikit-learn", "scikit-learn"],
    github: "https://github.com/DevangVamja/CORD19-SummaryGenerator",
  },
  {
    title: "ATS-Analyzer-OpenAI",
    description: "The ATS Analyzer App is a Flask-based web application designed to help job seekers analyze their resumes for ATS (Applicant Tracking System) friendliness. The app extracts key details from resumes and presents them in JSON format, allowing users to optimize their resumes for better visibility in recruitment processes.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=8002a0a7236a3?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "Flask", "OpenAI GPT", "PyPDF"],
    github: "https://github.com/DevangVamja/ATS-Analyzer-OpenAI",
  },
  {
    title: "Fraud Detection System",
    description: "This project focuses on detecting fraudulent transactions using machine learning techniques. The goal is to build a model that can accurately classify transactions as either fraudulent or non-fraudulent based on historical data. The project includes data preprocessing, exploratory data analysis (EDA), model training, and evaluation.",
    image: "https://img.freepik.com/free-photo/html-css-collage-concept-with-hacker_23-2150061984.jpg?t=st=1741985765~exp=1741989365~hmac=d946a7a2701df5aa6dac66f2ac5437b1dab3b48d659eb7fa9ba99fb8d538d4f1&w=1380",
    tags: ["Python", "Tensorflow", "Hyperparameter Tuning"],
    github: "https://github.com/DevangVamja/Fraud-Detection",
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
                  {/* <a href={project.demo} className="flex items-center text-gray-600 hover:text-indigo-600">
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Demo
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}