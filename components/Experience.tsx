import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import { SectionId } from '../types';
import { Reveal } from './Reveal';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id={SectionId.EXPERIENCE} className="py-32 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal>
            <div className="flex items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text flex items-center">
                    <span className="text-accent text-2xl mr-2 font-mono">03.</span> Education
                </h2>
                <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
            </div>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <Reveal delay={200}>
              <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-slate-700 min-w-max scrollbar-hide">
                {EXPERIENCE.map((exp, index) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-3 text-left font-mono text-sm transition-all duration-300 whitespace-nowrap border-l-2 md:border-l-[3px] md:border-b-0 border-b-0 ${
                      activeTab === index
                        ? 'text-accent bg-accent/5 border-accent'
                        : 'text-slate-400 hover:text-text hover:bg-slate-800/50 border-transparent'
                    } -ml-[2px] md:-ml-[3px]`}
                  >
                    {exp.company}
                  </button>
                ))}
              </div>
          </Reveal>

          {/* Content */}
          <div className="flex-1 min-h-[300px]">
             {EXPERIENCE.map((exp, index) => (
                activeTab === index && (
                    <div key={exp.id} className="animate-fade-in-down">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-bold text-text">
                                {exp.role} <span className="text-accent">@ {exp.company}</span>
                            </h3>
                            <p className="text-sm font-mono text-slate-400 mb-6">
                                {exp.period}
                            </p>
                        </div>
                        
                        <ul className="space-y-4 mt-6">
                        {exp.description.map((point, i) => (
                            <li key={i} className="flex items-start text-slate-400 leading-relaxed">
                                <span className="text-accent mr-3 mt-2 text-xs">▹</span>
                                <span>{point}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                )
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
