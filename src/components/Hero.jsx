import React from 'react';
import { Download, ArrowRight, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import LightRays from './LightRays';

// Minimal custom icons
const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

      {/* WebGL light ray — mouse responsive, hero only */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-[0.42]">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={0.6}
          lightSpread={2.2}
          rayLength={1.3}
          fadeDistance={0.75}
          saturation={0.0}
          followMouse={true}
          mouseInfluence={0.12}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-7 z-10">
            
            <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-extrabold tracking-tight text-white leading-[1.06]">
              Riman <br className="hidden sm:inline" />
              Maharjan.
            </h1>

            <p className="text-lg sm:text-[21px] text-gray-300 font-normal leading-relaxed max-w-xl">
              Undergraduate in Electronics, Communication & Information Engineering at Sagarmatha Engineering College (IOE) and research member of SRDC.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold text-[15px] transition-colors shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.cvPath}
                download="Riman_Maharjan_CV.pdf"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg text-gray-200 hover:text-white border border-gray-800 hover:border-cyan-400/60 text-[15px] font-semibold transition-colors"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Coordinates */}
            <div className="flex items-center gap-6 pt-3 text-gray-400">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Photo Column (5 cols) - me-no-bg.png even larger */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-[340px] sm:w-[520px] md:w-[600px] lg:w-[680px] xl:w-[760px] max-w-none select-none pointer-events-none">
              <img
                src={personalInfo.heroPhoto}
                alt={personalInfo.name}
                className="w-full h-auto object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
