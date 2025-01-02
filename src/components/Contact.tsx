import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-indigo-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? Let's connect and discuss how we can work together.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:john@example.com" className="hover:text-indigo-200 transition flex items-center">
              <Mail className="w-6 h-6 mr-2" />
              Email
            </a>
            <a href="#" className="hover:text-indigo-200 transition flex items-center">
              <Github className="w-6 h-6 mr-2" />
              Github
            </a>
            <a href="#" className="hover:text-indigo-200 transition flex items-center">
              <Linkedin className="w-6 h-6 mr-2" />
              LinkedIn
            </a>
            <a href="#" className="hover:text-indigo-200 transition flex items-center">
              <Twitter className="w-6 h-6 mr-2" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}