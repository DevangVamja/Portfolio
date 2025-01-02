import React from 'react';
import { Brain, BarChart, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-indigo-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">John Doe</h1>
          <h2 className="text-xl md:text-2xl mb-6">Data Scientist & ML Engineer</h2>
          <p className="text-lg max-w-2xl mb-8">
            Transforming complex data into actionable insights. Specializing in machine learning,
            statistical analysis, and predictive modeling with 5+ years of experience.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-indigo-100 transition">
              Contact Me
            </a>
            <a href="#projects" className="border-2 border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}