import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ['contact', 'achievements', 'education', 'skills', 'projects', 'about'];
      const scrollPosition = window.scrollY + 180;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-md py-4 [mask-image:linear-gradient(to_bottom,black_calc(100%-16px),transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_calc(100%-16px),transparent_100%)] pb-7'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero', 'hero')}
          className="text-2xl sm:text-[26px] font-bold tracking-tight text-white hover:text-cyan-400 transition-colors"
        >
          {personalInfo.name}
        </a>

        {/* Desktop Nav - Increased size with sliding active underline */}
        <nav className="hidden md:flex items-center gap-9 lg:gap-11">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`relative py-1 text-[17px] font-medium transition-colors ${
                  isActive ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-cyan-400 rounded-full"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Download CV */}
        <div className="hidden md:flex items-center">
          <a
            href={personalInfo.cvPath}
            download="Riman_Maharjan_CV.pdf"
            className="inline-flex items-center gap-2.5 text-base font-semibold text-gray-200 hover:text-white px-5 py-2.5 rounded-lg border border-gray-800 hover:border-cyan-400/70 transition-all"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.id)}
                className={`flex items-center justify-between text-lg font-medium ${
                  isActive ? 'text-cyan-400 font-semibold' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
              </a>
            );
          })}
          <div className="pt-3">
            <a
              href={personalInfo.cvPath}
              download="Riman_Maharjan_CV.pdf"
              className="inline-flex items-center gap-2 text-base text-white bg-cyan-500 hover:bg-cyan-400 px-4 py-3 rounded-lg w-full justify-center font-semibold"
            >
              <Download className="w-5 h-5" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
