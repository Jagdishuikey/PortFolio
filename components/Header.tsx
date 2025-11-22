import React, { useState, useEffect } from 'react';
import { DEVELOPER_NAME } from '../constants';
import { MenuIcon, XIcon } from './Icons';
import { SectionId } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'About', id: SectionId.ABOUT },
    { label: 'Skills', id: SectionId.SKILLS },
    { label: 'Education', id: SectionId.EDUCATION },
    { label: 'Projects', id: SectionId.PROJECTS },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isScrolled 
          ? 'bg-primary/80 backdrop-blur-md shadow-lg py-3 border-b border-slate-800' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection(SectionId.HERO)} 
          className="group relative z-50"
        >
          <div className="text-xl font-bold text-text tracking-tight flex items-center gap-1">
             <span className="text-accent font-mono text-2xl">&lt;</span>
             Jagdish Uikey
             <span className="text-accent font-mono text-2xl">/&gt;</span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-mono text-slate-300 hover:text-accent transition-colors relative group"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-text focus:outline-none relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-primary/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-mono text-slate-300 hover:text-accent transition-colors"
            >
              {item.label}
            </button>
          ))}
      </div>
    </header>
  );
};

export default Header;
