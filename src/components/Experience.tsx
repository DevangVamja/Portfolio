import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: "Network Engineer/Data Scientist",
    company: "Ericsson Inc.",
    duration: "May 2023 - Nov 2024",
    description: " Designed and implemented scalable data pipelines to automate large-scale analyses, reducing preparation time by 30 hours per project.  Led the development of a random forest classifier for anomaly detection in network data, reducing false positivesby 25% and enabling improved operational decision-making.  Collaborated with cross-functional teams to deploy machine learning models on AWS using Docker and Kubernetes, improving scalability by 30% during peak loads.  Delivered actionable insights using data visualization tools such as Pandas and Matplotlib, driving operational improvements and enhancing stakeholder decision-making.  Utilized Hadoop and Hive to process and analyze large-scale data, enabling advanced analytics for operationalefficiency.  Conducted statistical analysis and predictive modeling using R to uncover trends and optimize business processes."
    
  },
  {
    title: "Data Science Intern",
    company: "Ericsson Inc.",
    duration: "May 2022 - Aug 2022",
    description: " Conducted exploratory data analysis (EDA) on large datasets to uncover patterns and root causes in network system anomalies.  Developed a TensorFlow-based framework for LTE network performance assessment, increasing service availability by 20%.  Partnered with engineers and product managers to refine machine learning models, improving accuracy andinterpretability through team collaboration.  Leveraged Hive queries to extract and transform structured data, enhancing the quality of EDA and modeling processes.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition">
              <div className="flex items-start">
                <Briefcase className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-gray-600 mb-2">
                    {exp.company} • {exp.duration}
                  </p>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}