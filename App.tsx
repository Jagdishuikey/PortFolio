import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <div className="bg-primary text-slate-400 antialiased selection:bg-accent/30 selection:text-accent">
      <Header />
      
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Education/>
        <Projects />
        <Contact />
      </main>

      <AIChat />
    </div>
  );
};

export default App;