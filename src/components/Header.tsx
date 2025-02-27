import React from 'react';
import { Brain, Database, Mail, Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8" />
          <span className="text-xl font-bold">DataScientist</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#projects" className="hover:text-indigo-200 transition">Projects</a>
          <a href="#skills" className="hover:text-indigo-200 transition">Skills</a>
          <a href="#Experience" className="hover:text-indigo-200 transition">Experience</a>
          <a href="#contact" className="hover:text-indigo-200 transition">Contact</a>
        </div>
      </nav>
    </header>
  );
}