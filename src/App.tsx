import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen text-slate-100 transition-colors duration-500 ${theme.app.background}`}>
      <div className={`fixed inset-0 -z-10 bg-gradient-to-br transition-colors duration-700 ${theme.app.gradient}`} />
      <div className="fixed inset-0 -z-10 bg-grid opacity-40" />
      <Header />
      <main className="relative">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className={`border-t border-white/10 py-6 text-slate-300 backdrop-blur transition-colors duration-500 ${theme.app.footer}`}>
        <div className="container mx-auto px-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Devang Vamja. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
