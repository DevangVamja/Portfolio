import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';

const publications = [
  {
    title: "Deep Learning Approaches to Time Series Forecasting",
    journal: "Journal of Machine Learning Research",
    year: 2023,
    link: "#"
  },
  {
    title: "Efficient Natural Language Processing in Healthcare",
    journal: "Applied AI Conference",
    year: 2022,
    link: "#"
  },
  {
    title: "Novel Approaches to Customer Segmentation Using Neural Networks",
    journal: "Data Science Quarterly",
    year: 2022,
    link: "#"
  }
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Publications</h2>
        <div className="max-w-3xl mx-auto">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition">
              <div className="flex items-start">
                <BookOpen className="w-6 h-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                  <p className="text-gray-600 mb-2">
                    {pub.journal} • {pub.year}
                  </p>
                  <a href={pub.link} className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    Read Paper <ExternalLink className="w-4 h-4 ml-1" />
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