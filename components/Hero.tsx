import React from 'react';
import { DEVELOPER_NAME, DEVELOPER_TITLE, DEVELOPER_BIO } from '../constants';
import { SectionId } from '../types';
import { Reveal } from './Reveal';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HERO} className="min-h-screen flex flex-col justify-center relative px-6 pt-20 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <Reveal delay={100}>
            <p className="text-accent font-mono mb-4 ml-1">Hi, my name is</p>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold text-text tracking-tight leading-none mb-2">
              Jagdish.
            </h1>
          </Reveal>
          
          <Reveal delay={300}>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-400 tracking-tight leading-tight">
              I build things for the web.
            </h2>
          </Reveal>
          
          <Reveal delay={400}>
            <p className="max-w-lg text-slate-400 text-lg leading-relaxed mt-6">
               MERN Stack Developer. I specialize in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
            </p>
          </Reveal>
          
          <Reveal delay={500}>
            <div className="pt-8 flex flex-wrap gap-4">
              <button 
                  onClick={() => document.getElementById(SectionId.PROJECTS)?.scrollIntoView({behavior:'smooth'})}
                  className="px-8 py-4 border border-accent text-accent hover:bg-accent/10 transition-all duration-300 rounded font-mono text-sm hover:shadow-[0_0_15px_rgba(45,212,191,0.3)]"
              >
                Check out my work
              </button>
              <button 
                  onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior:'smooth'})}
                  className="px-8 py-4 bg-accent text-primary font-bold rounded font-mono text-sm hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-accent/50"
              >
                Contact Me
              </button>
            </div>
          </Reveal>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <Reveal delay={600} className="w-full max-w-md">
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-slate-900 ring-1 ring-slate-800 rounded-lg leading-none flex items-top justify-start space-x-6 p-8 pt-10 pb-10 shadow-2xl">
                         <div className="space-y-2 font-mono text-sm md:text-base">
                            <div className="flex space-x-2">
                                <span className="text-pink-500">const</span>
                                <span className="text-blue-300">developer</span>
                                <span className="text-pink-500">=</span>
                                <span className="text-yellow-300">{'{'}</span>
                            </div>
                            <div className="pl-4 flex space-x-2">
                                <span className="text-slate-400">name:</span>
                                <span className="text-green-400">'Jagdish'</span>,
                            </div>
                            <div className="pl-4 flex space-x-2">
                                <span className="text-slate-400">skills:</span>
                                <span className="text-purple-400">['React', 'Node', 'EXPRESS']</span>,
                            </div>
                            <div className="pl-4 flex space-x-2">
                                <span className="text-slate-400">hardWorker:</span>
                                <span className="text-orange-400">true</span>,
                            </div>
                            <div className="pl-4 flex space-x-2">
                                <span className="text-slate-400">problemSolver:</span>
                                <span className="text-orange-400">true</span>,
                            </div>
                            <div className="pl-4 flex space-x-2">
                                <span className="text-slate-400">hireable:</span>
                                <span className="text-green-400">function</span>() {'{'}
                            </div>
                            <div className="pl-8 flex space-x-2">
                                <span className="text-pink-500">return</span>
                                <span className="text-orange-400">true</span>;
                            </div>
                            <div className="pl-4">{'}'}</div>
                            <div>{'}'};</div>
                         </div>
                    </div>
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
