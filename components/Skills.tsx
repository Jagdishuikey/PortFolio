import React from 'react';
import { SKILLS } from '../constants';
import { SectionId } from '../types';
import { Reveal } from './Reveal';

const Skills: React.FC = () => {
  return (
    <section id={SectionId.SKILLS} className="py-32">
      <div className="container mx-auto px-6 max-w-5xl">
        <Reveal>
            <div className="flex items-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-text flex items-center">
                    <span className="text-accent text-2xl mr-2 font-mono">02.</span> Skills
                </h2>
                <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
            </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((category, index) => (
            <Reveal key={category.name} delay={index * 100}>
                <div className="bg-secondary/50 p-8 rounded-lg hover:-translate-y-2 transition-transform duration-300 border border-slate-800 hover:border-accent/30 group h-full shadow-lg hover:shadow-xl hover:shadow-accent/5">
                    <h3 className="text-xl font-bold text-text mb-6 group-hover:text-accent transition-colors">{category.name}</h3>
                    <ul className="space-y-3">
                        {category.skills.map((skill) => (
                        <li key={skill} className="flex items-center text-slate-400 font-mono text-sm">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                            {skill}
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

export default Skills;
