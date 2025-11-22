import React from 'react';
import { EDUCATION } from '../constants';
import { SectionId } from '../types';
import { Reveal } from './Reveal';

const Education: React.FC = () => {
  return (
    <section id={SectionId.EDUCATION} className="py-32 bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal>
            <div className="flex items-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-text flex items-center">
                    <span className="text-accent text-2xl mr-2 font-mono">03.</span> Education
                </h2>
                <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
            </div>
        </Reveal>

        <div className="space-y-12">
          {EDUCATION.map((edu, index) => (
            <Reveal key={edu.id} delay={index * 100}>
                <div className="relative pl-8 border-l-2 border-slate-700 hover:border-accent transition-colors duration-300 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-accent group-hover:scale-110 transition-all duration-300"></div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                        <h3 className="text-2xl font-bold text-text group-hover:text-accent transition-colors">
                            {edu.institution}
                        </h3>
                        <span className="font-mono text-sm text-slate-400 whitespace-nowrap mt-1 md:mt-0">
                            {edu.period}
                        </span>
                    </div>
                    
                    <h4 className="text-xl text-slate-300 mb-4 font-medium">
                        {edu.degree}
                    </h4>
                    
                    <ul className="space-y-2">
                        {edu.description.map((point, i) => (
                            <li key={i} className="flex items-start text-slate-400 leading-relaxed text-sm">
                                <span className="text-accent mr-2 mt-1.5 text-[10px]">▹</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;