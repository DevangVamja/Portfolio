import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-950 via-slate-950 to-slate-900" />
      <div className="fixed inset-0 -z-10 bg-grid opacity-40" />
      <Header />
      <main className="relative">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-slate-900/60 border-t border-white/10 text-slate-300 py-6 backdrop-blur">
        <div className="container mx-auto px-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Devang Vamja. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
