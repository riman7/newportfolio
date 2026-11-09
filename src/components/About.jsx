import React from 'react';
import { MapPin } from 'lucide-react';
import { FaCode, FaHeadphonesSimple, FaChessKnight, FaFutbol } from 'react-icons/fa6';
import { personalInfo, languagesAndHobbies } from '../data/portfolioData';

const getHobbyIcon = (hobby) => {
  const lower = hobby.toLowerCase();
  if (lower.includes('code') || lower.includes('coding')) {
    return <FaCode className="w-5 h-5 text-cyan-300" />;
  }
  if (lower.includes('music') || lower.includes('listening') || lower.includes('headphone')) {
    return <FaHeadphonesSimple className="w-5 h-5 text-yellow-200" />;
  }
  if (lower.includes('chess')) {
    return <FaChessKnight className="w-5 h-5 text-gray-300" />;
  }
  if (lower.includes('football') || lower.includes('soccer')) {
    return <FaFutbol className="w-5 h-5 text-gray-400" />;
  }
  return <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />;
};

export default function About() {
  // Dynamic age calculation based on birth year 2004
  const currentYear = new Date().getFullYear();
  const age = currentYear - 2004;

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Photo & Profile Metadata Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-4">
            <div className="relative">
              {/* Photo Box */}
              <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gray-950 border border-gray-850">
                <img
                  src={personalInfo.aboutPhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter brightness-95 contrast-[1.05]"
                />
              </div>

              {/* Top-Left Corner Slanted White Tape */}
              <div 
                className="absolute -top-3.5 -left-4 w-24 h-7 bg-white/25 backdrop-blur-[2px] -rotate-[32deg] shadow-md border-y border-white/20 pointer-events-none z-20"
                style={{
                  clipPath: 'polygon(0% 12%, 6% 0%, 94% 0%, 100% 12%, 97% 88%, 100% 100%, 0% 100%, 3% 88%)'
                }}
              />

              {/* Bottom-Right Corner Slanted White Tape */}
              <div 
                className="absolute -bottom-3.5 -right-4 w-24 h-7 bg-white/25 backdrop-blur-[2px] -rotate-[32deg] shadow-md border-y border-white/20 pointer-events-none z-20"
                style={{
                  clipPath: 'polygon(0% 0%, 94% 0%, 100% 15%, 96% 85%, 100% 100%, 6% 100%, 0% 88%, 4% 15%)'
                }}
              />
            </div>

            {/* Name, Dynamic Age (born 2004), Address */}
            <div className="space-y-1 text-center lg:text-left w-full pl-1">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </h3>
              <p className="text-sm font-mono text-cyan-100">
                Age: {age} <span className="text-gray-400 text-xs font-sans">(Born 2004)</span>
              </p>
              <p className="text-sm text-gray-300 flex items-center justify-center lg:justify-start gap-1.5 pt-0.5">
                <MapPin className="w-4 h-4 text-cyan-100 shrink-0" />
                <span>{personalInfo.location}</span>
              </p>
            </div>
          </div>

          {/* Narrative & Details (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              About Me
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
              <p>
                I am an undergraduate student in <strong>Electronics, Communication and Information Engineering</strong> at <strong>Sagarmatha Engineering College (IOE)</strong>, Kathmandu. My core focus is on Information Technology and  software engineering  architecting full-stack web platforms, real-time communication systems, and backend algorithmic engines.
              </p>
              <p className="text-gray-400">
                As a research member at the <strong>Sagarmatha Research and Development Centre (SRDC)</strong>, I collaborate directly with college faculty and teammates on technical documentation and ongoing research.
              </p>
            </div>

            {/* Languages (Bulleted) & Hobbies (NO boxes, clean text with icons) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              
              {/* Bulleted Languages */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-300">
                  Languages
                </h3>
                <ul className="space-y-2.5">
                  {languagesAndHobbies.languages.map((lang) => (
                    <li key={lang} className="flex items-center gap-2.5 text-base text-gray-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                      <span>{lang}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hobbies - completely unboxed, clean text with icons */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-300">
                  Interests & Hobbies
                </h3>
                <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-3.5 pt-1">
                  {languagesAndHobbies.hobbies.map((hobby) => (
                    <div 
                      key={hobby}
                      className="inline-flex items-center gap-2.5 text-base text-gray-400 font-medium"
                    >
                      {getHobbyIcon(hobby)}
                      <span>{hobby}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
