import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { SectionId } from '../types';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';
import { Reveal } from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-32 text-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <Reveal>
            <p className="text-accent font-mono mb-4">05. What's Next?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Get In Touch</h2>
            <p className="text-slate-400 text-lg mb-12">
            I'm currently looking for new opportunities. Whether you have a question, a project idea, 
            or just want to say hi, my inbox is always open.
            </p>
            
            <a 
            href="mailto:juikey697@gmail.com" 
            className="inline-block px-8 py-4 border border-accent text-accent hover:bg-accent/10 transition-all duration-300 rounded font-mono text-sm hover:scale-105"
            >
            Say Hello
            </a>
        </Reveal>

        <Reveal delay={200}>
            <div className="mt-24 flex justify-center space-x-10">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                    <GithubIcon className="w-6 h-6" />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-accent transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                    <LinkedinIcon className="w-6 h-6" />
                </a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-400 hover:text-accent transition-all duration-300 transform hover:-translate-y-1 hover:scale-110">
                    <MailIcon className="w-6 h-6" />
                </a>
            </div>
            
            <div className="mt-12 text-slate-500 font-mono text-xs">
                <p>Designed & Built by {SOCIAL_LINKS.email.split('@')[0]}</p>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
