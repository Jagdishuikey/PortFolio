import React from 'react';
import { PROJECTS } from '../constants';
import { SectionId } from '../types';
import { ExternalLinkIcon, GithubIcon } from './Icons';
import { Reveal } from './Reveal';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-32">
      <div className="container mx-auto px-6 max-w-6xl">
        <Reveal>
            <div className="flex items-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-text flex items-center">
                    <span className="text-accent text-2xl mr-2 font-mono">04.</span> Some Things I've Built
                </h2>
                <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
            </div>
        </Reveal>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
                <div className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 !== 0 ? 'md:text-left' : 'md:text-right'}`}>
                
                {/* Project Image */}
                <div className={`md:col-span-7 relative group ${index % 2 !== 0 ? 'md:col-start-6 md:row-start-1' : 'md:col-start-1 md:row-start-1'}`}>
                    <div className="relative overflow-hidden rounded-lg bg-slate-800 border border-slate-700 shadow-2xl group-hover:border-accent/50 transition-colors duration-300">
                        <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105 mix-blend-multiply group-hover:mix-blend-normal" 
                        />
                    </div>
                </div>

                {/* Project Content */}
                <div className={`md:col-span-6 relative z-20 ${index % 2 !== 0 ? 'md:col-start-1 md:row-start-1 text-left' : 'md:col-start-7 md:row-start-1 text-right'}`}>
                    <p className="text-accent font-mono text-sm mb-2">Featured Project</p>
                    <h3 className="text-2xl font-bold text-text mb-6 hover:text-accent transition-colors cursor-pointer">{project.title}</h3>
                    
                    <div className="bg-secondary/95 backdrop-blur-sm p-6 rounded shadow-xl text-slate-300 mb-6 text-base leading-relaxed border border-slate-800 hover:border-slate-700 transition-colors">
                        <p>{project.description}</p>
                    </div>

                    <ul className={`flex flex-wrap gap-4 font-mono text-xs text-slate-400 mb-8 ${index % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                    {project.techStack.map(tech => (
                        <li key={tech} className="text-accent/80">{tech}</li>
                    ))}
                    </ul>

                    <div className={`flex gap-6 ${index % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent transition-colors hover:-translate-y-1 transform duration-300">
                        <GithubIcon className="w-6 h-6" />
                        </a>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-accent transition-colors hover:-translate-y-1 transform duration-300">
                        <ExternalLinkIcon className="w-6 h-6" />
                    </a>
                    </div>
                </div>

                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
