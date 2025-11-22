import React from 'react';
import { DEVELOPER_BIO } from '../constants';
import { SectionId } from '../types';
import { Reveal } from './Reveal';

const About: React.FC = () => {
    return (
        <section id={SectionId.ABOUT} className="py-32 bg-slate-900/50">
            <div className="container mx-auto px-6 max-w-5xl">
                <Reveal>
                    <div className="flex items-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-text flex items-center">
                            <span className="text-accent text-2xl mr-2 font-mono">01.</span> About Me
                        </h2>
                        <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-5 gap-12">
                    <div className="md:col-span-3 text-slate-400 text-lg leading-relaxed space-y-6">
                        <Reveal delay={200}>
                            <p>I’m Jagdish Uikey, a dedicated web developer with a strong interest in modern JavaScript technologies and full-stack development. I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and enjoy building functional, user-focused applications with clean architecture and intuitive UI/UX.

                            </p>
                        </Reveal>
                        <Reveal delay={300}>
                            <p>
                                I’m always exploring new concepts in full-stack development, experimenting with better ways to structure applications, and improving how I solve problems. Whether it’s creating a new feature, optimizing a workflow, or learning something new, I love the process of constant growth.
                            </p>
                        </Reveal>
                        <Reveal delay={400}>
                            <p>
                                My goal is to build impactful, scalable applications and continue evolving as a developer with every project I work on.
                            </p>
                        </Reveal>
                    </div>
                    <div className="md:col-span-2 flex justify-center md:justify-start">
                        <Reveal delay={500}>
                            <div className="relative group w-64 h-64 md:w-72 md:h-72">
                                <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                                <div className="relative w-full h-full bg-accent rounded-lg overflow-hidden">
                                    <img
                                        src="/Portrfolio.jpeg"
                                        alt="Profile"
                                        className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
