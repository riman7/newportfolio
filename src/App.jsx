import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SpaceBackground from './components/SpaceBackground';
import ConnectionRays from './components/ConnectionRays';
import { ProjectSkillProvider } from './context/ProjectSkillContext';

export default function App() {
  return (
    <ProjectSkillProvider>
      <div className="relative min-h-screen bg-black text-[#f1f5f9] overflow-hidden">
        {/* Ambient space background */}
        <SpaceBackground />

        {/* Dynamic connection rays between selected projects and linked skills */}
        <ConnectionRays />

        {/* Navigation Header */}
        <Navbar />

        {/* Main Content Layer */}
        <main className="relative z-10">
          <Hero />
          <About />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <AchievementsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ProjectSkillProvider>
  );
}
