import React from 'react';
import { 
  Github, 
  ExternalLink, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  BookOpen, 
  Cpu, 
  Sparkles
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useProjectSkill } from '../context/ProjectSkillContext';

export default function ProjectsSection() {
  const { activeProject, setActiveProject } = useProjectSkill();

  const handleCardClick = (e, project) => {
    // If clicking an action button or link, don't toggle card
    if (e.target.closest('a, button, input, textarea')) return;
    setActiveProject(project);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Projects
            </h2>
            <p className="text-xl text-gray-200  mt-2">
              Click on a project card to see the linked skills in skills section visually  &gt;&lt;
            </p>
          </div>

        </div>

        {/* Projects Horizontal Cards */}
        <div className="space-y-10">
          {projects.map((project, idx) => {
            const isSelected = activeProject?.id === project.id;
            const isOtherSelected = activeProject && !isSelected;
            // Alternating layout: even (0, 2) => Left preview, Right details.
            // Odd (1) => Left details, Right preview.
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`transition-all duration-500 rounded-3xl relative ${
                  isOtherSelected ? 'opacity-35 blur-[1.5px] scale-[0.99]' : 'opacity-100'
                }`}
              >
                {/* Main Card Container  */}
                <div
                  onClick={(e) => handleCardClick(e, project)}
                  className={`rounded-3xl p-5 sm:p-6 lg:p-7 transition-all duration-300 relative overflow-hidden backdrop-blur-xl cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#0a101d] via-[#080d16] to-[#05070c] border-2 border-cyan-400 shadow-[0_0_45px_rgba(0,210,255,0.32)] ring-1 ring-cyan-400/50'
                      : 'bg-gray-950/80 border border-gray-800/80 hover:border-cyan-500/40 hover:shadow-[0_6px_25px_rgba(0,210,255,0.12)] hover:-translate-y-0.5'
                  }`}
                >
                  {/* Top indicator for selected project */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500" />
                  )}

                  {/* Horizontal Two-Column Layout */}
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${
                    isEven ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'
                  }`}>
                    
                    {/* Media Column (4 cols): Compact preview image (horizontally centered) */}
                    <div className="lg:col-span-4 flex justify-center items-center w-full">
                      <div 
                        className={`overflow-hidden rounded-2xl bg-black border border-gray-800/80 group shadow-lg relative ${
                          project.imageAspect === 'square'
                            ? 'aspect-square w-56 sm:w-64 md:w-80 '
                            : 'aspect-[16/10] w-full max-w-[340px] sm:max-w-[380px]'
                        }`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Hover hint */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md text-cyan-300 border border-cyan-500/40">
                            {isSelected ? 'Collapse' : 'Explore'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Details Column (8 cols): Title + Action buttons side-by-side, short description, skills, show details */}
                    <div className="lg:col-span-8 space-y-3.5">
                      
                      {/* Header row: Project Index & Title on Left, Action buttons on Right */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-0.5">
                          <span className="text-xs font-mono text-cyan-100/80 font-bold uppercase tracking-wider">
                            Project 0{idx + 1}
                          </span>
                          <h3 className="text-2xl sm:text-3xl font-bold text-gray-300 tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-sm font-medium text-gray-400">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Action buttons positioned next to the title */}
                        <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-center shrink-0">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-900 hover:bg-gray-850 border border-gray-800 hover:border-cyan-400/60 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white transition-all shadow-sm"
                            >
                              <Github className="w-4 h-4 text-cyan-400" />
                              <span>Source Code</span>
                            </a>
                          )}

                          {project.apkDownload && (
                            <a
                              href={project.apkDownload}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-950 text-xs sm:text-sm font-bold transition-all shadow-sm"
                            >
                              <Download className="w-4 h-4 text-gray-950" />
                              <span>Download APK</span>
                            </a>
                          )}

                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-950 text-xs sm:text-sm font-bold transition-all shadow-sm"
                            >
                              <span>Live App</span>
                              <ExternalLink className="w-4 h-4 text-gray-950" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Crisp Shortened Description */}
                      <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Skills Demonstrated badges */}
                      <div className="space-y-2 pt-0.5">
                        <span className="text-sm font-bold tracking-wider text-gray-500 block">
                          Skills Demonstrated:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.skillsDemonstrated.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs font-medium px-3 py-1.5 rounded-lg border transition-all bg-gray-900 border-gray-800 text-gray-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Horizontally centered trigger text positioned down at the bottom of the card */}
                      <div className="pt-2 sm:pt-4 flex justify-center w-full">
                        <button
                          type="button"
                          onClick={() => setActiveProject(project)}
                          className="group/trigger inline-flex flex-col items-center gap-1 cursor-pointer py-1"
                        >
                          <span className="text-xs sm:text-sm font-medium tracking-wide text-gray-400 group-hover:text-gray-200 group-hover/trigger:!text-cyan-300 transition-colors drop-shadow-sm group-hover/trigger:drop-shadow-[0_0_10px_rgba(0,210,255,0.85)]">
                            {isSelected ? 'click to collapse project details' : 'click to see project details and architecture'}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-gray-500 group-hover:text-gray-300 group-hover/trigger:!text-cyan-400 transition-all transform group-hover/trigger:translate-y-1 group-hover/trigger:drop-shadow-[0_0_12px_rgba(0,210,255,1)]">
                            {isSelected ? '⮝' : '⮟'}
                          </span>
                        </button>
                      </div>

                    </div>

                  </div>

                  {/* Extended Details Drawer (Architecture diagram, Story behind the project, Tech stack) */}
                  {isSelected && (
                    <div className="mt-8 pt-6 border-t border-cyan-500/30 space-y-6 animate-fadeIn">
                      
                      {/* Details Content: Full-width stacked for TriCalendar / Diagram Image, Side-by-side for others */}
                      {project.architecture.diagramImage ? (
                        <div className="space-y-6">
                          {/* Full-width Story & Motivation on top */}
                          <div className="w-full space-y-2.5 p-5 sm:p-6 rounded-2xl bg-black/40 border border-gray-800/80">
                            <div className="flex items-center gap-2 text-white font-bold text-base">

                              <h4>The Story & Motivation</h4>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                              {project.story}
                            </p>
                          </div>

                          {/* Full-width Architecture Diagram below */}
                          <div className="w-full space-y-3.5 p-5 sm:p-6 rounded-2xl bg-black/40 border border-gray-800/80">
                            <div className="flex items-center gap-2 text-white font-bold text-base">
                              <h4>System Architecture & Flow</h4>
                            </div>
                            
                            <div className="space-y-3.5 pt-1">
                              <div className="rounded-xl overflow-hidden border border-gray-800 bg-black/80 group">
                                <a
                                  href={project.architecture.diagramImage}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title="Click to view full diagram"
                                  className="block relative cursor-pointer"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <img
                                    src={project.architecture.diagramImage}
                                    alt={`${project.title} Architecture Diagram`}
                                    className="w-full h-auto object-contain max-h-[620px] mx-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                                  />
                                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 bg-black/85 backdrop-blur-sm rounded text-[11px] text-gray-300 border border-gray-700 pointer-events-none flex items-center gap-1 shadow-md">
                                    <span>Expand full schema</span> ↗
                                  </div>
                                </a>
                              </div>

                              {project.architecture.note && (
                                <div className="p-3.5 rounded-xl bg-cyan-950/25 border border-cyan-800/40 text-xs sm:text-sm text-gray-300 leading-relaxed">
                                  <span className="font-semibold text-cyan-400">Note: </span>
                                  {project.architecture.note}
                                </div>
                              )}

                              {project.architecture.diagram && (
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 border-t border-gray-800/60">
                                  {project.architecture.diagram.map((item, dIdx) => (
                                    <div key={dIdx} className="p-3 rounded-lg bg-black/50 border border-gray-800/70 text-xs">
                                      <div className="flex items-center gap-2 font-semibold text-white mb-1.5">
                                        <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/50 text-cyan-400 flex items-center justify-center font-mono text-[11px] font-bold shrink-0">
                                          {dIdx + 1}
                                        </span>
                                        <span>{item.step}</span>
                                      </div>
                                      <p className="text-gray-400 text-[11px] leading-snug">
                                        {item.detail}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Side-by-side Grid for projects without visual diagram */
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                          {/* Story Column */}
                          <div className="lg:col-span-6 space-y-2.5 p-5 rounded-2xl bg-black/40 border border-gray-800/80">
                            <div className="flex items-center gap-2 text-white font-bold text-base">
  
                              <h4>The Story & Motivation</h4>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                              {project.story}
                            </p>
                          </div>

                          {/* Architecture Pipeline */}
                          <div className="lg:col-span-6 space-y-2.5 p-5 rounded-2xl bg-black/40 border border-gray-800/80">
                            <div className="flex items-center gap-2 text-white font-bold text-base">

                              <h4>System Architecture & Flow</h4>
                            </div>
                            
                            <div className="space-y-2.5 pt-1">
                              {project.architecture.diagram.map((item, dIdx) => (
                                <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                                  <span className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/50 text-cyan-400 flex items-center justify-center font-mono text-[11px] font-bold shrink-0 mt-0.5">
                                    {dIdx + 1}
                                  </span>
                                  <div className="space-y-0.5">
                                    <span className="font-semibold text-white block">
                                      {item.step}
                                    </span>
                                    <span className="text-gray-400 text-xs">
                                      {item.detail}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tech Used Tags */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 pr-1">
                          Complete Stack:
                        </span>
                        {project.techUsed.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-gray-900 border border-gray-800 text-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
