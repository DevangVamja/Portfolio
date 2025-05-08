import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Data Scientist",
    company: "Telecom Gateway LLC",
    duration: "Dec 2024 - Present",
    description: [
      "Designed and implemented LSTM-based neural network models to forecast network load and detect anomalies in telecom traffic using high-frequency time-series data, reducing unexpected downtimes by 20%.",
      "Developed NLP pipelines to analyze customer service transcripts and technician notes, extracting key failure patterns and sentiment trends to improve issue resolution time by 25%.",
      "Built end-to-end deep learning solutions using TensorFlow and PyTorch for classifying signal degradation events and predicting maintenance needs.",
      "Created interactive dashboards in Tableau and Streamlit to communicate insights from telecom data, aiding strategic planning and operational efficiency.",
      "Worked with large-scale datasets stored in cloud environments (AWS S3, BigQuery) and optimized data ingestion workflows using Python and SQL."
    ]
  },
  {
    title: "Network Engineer/Data Scientist",
    company: "Ericsson Inc.",
    duration: "May 2023 - Nov 2024",
    description: [
      "Designed and implemented scalable data pipelines to automate large-scale analyses, reducing preparation time by 30 hours per project.",
      "Led the development of a random forest classifier for anomaly detection in network data, reducing false positives by 25% and enabling improved operational decision-making.",
      "Collaborated with cross-functional teams to deploy machine learning models on AWS using Docker and Kubernetes, improving scalability by 30% during peak loads.",
      "Delivered actionable insights using data visualization tools such as Pandas and Matplotlib, driving operational improvements and enhancing stakeholder decision-making.",
      "Utilized Hadoop and Hive to process and analyze large-scale data, enabling advanced analytics for operational efficiency.",
      "Conducted statistical analysis and predictive modeling using R to uncover trends and optimize business processes."
    ]
  },
  {
    title: "Data Science Intern",
    company: "Ericsson Inc.",
    duration: "May 2022 - Aug 2022",
    description: [
      "Conducted exploratory data analysis (EDA) on large datasets to uncover patterns and root causes in network system anomalies.",
      "Developed a TensorFlow-based framework for LTE network performance assessment, increasing service availability by 20%.",
      "Partnered with engineers and product managers to refine machine learning models, improving accuracy and interpretability through team collaboration.",
      "Leveraged Hive queries to extract and transform structured data, enhancing the quality of EDA and modeling processes."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex items-start">
                <Briefcase className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-gray-600 mb-2">
                    {exp.company} • {exp.duration}
                  </p>
                  <div className="text-gray-700 mb-4">
                    {exp.description.map((sentence, idx) => (
                      <p key={idx} className="mb-2">{sentence}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}