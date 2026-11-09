import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsGrouped } from '../data/portfolioData';
import { useProjectSkill } from '../context/ProjectSkillContext';

// Separate component for each individual draggable skill badge
function DraggableSkillBadge({ skill, animationIndex }) {
  const [isDragging, setIsDragging] = useState(false);
  const { activeProject, linkedSkills } = useProjectSkill();
  
  const isLinked = linkedSkills.includes(skill);
  const floatClass = isDragging ? '' : `float-smooth-${animationIndex % 4}`;

  return (
    <motion.div
      drag
      dragMomentum={true}
      dragTransition={{ power: 0.18, timeConstant: 240 }}
      dragElastic={0.08}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
      whileDrag={{ scale: 1.08 }}
      data-skill-name={skill}
      className={`inline-block cursor-grab active:cursor-grabbing select-none z-10 touch-none ${
        activeProject && !isLinked ? 'opacity-35 blur-[0.6px]' : 'opacity-100'
      }`}
    >
      <div
        className={`${floatClass} px-4 py-2 rounded-xl text-[15px] sm:text-base font-medium shadow-sm transition-colors duration-200 ${
          isLinked
            ? 'text-white bg-cyan-950/90 border-2 border-cyan-400 shadow-[0_0_24px_rgba(0,210,255,0.7)] ring-2 ring-cyan-400/40'
            : 'text-gray-200 bg-gray-900/90 hover:bg-gray-850 hover:text-white border border-gray-800 hover:border-cyan-400/80'
        } ${isDragging ? 'shadow-2xl ring-2 ring-cyan-400/60 !border-cyan-400' : ''}`}
      >
        <span>{skill}</span>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { activeProject } = useProjectSkill();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Label / Heading (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Skills
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Software engineering stack focused on full-stack web platforms, algorithms, and system programming.
            </p>
            {activeProject ? (
              <div className="p-3 rounded-xl bg-cyan-950/50 border border-cyan-500/40 text-xs sm:text-sm text-cyan-300 space-y-1">
                <p className="font-semibold text-white">Connected to {activeProject.title}</p>
                <p className="text-cyan-400/80">Highlighting skills and technologies applied in this project.</p>
              </div>
            ) : (
              <p className="text-xs font-mono text-cyan-400/80 hidden sm:block pt-2">
                Tip: Drag & move any skill around — it floats wherever you leave it.
              </p>
            )}
          </div>

          {/* Categorized Skills (8 cols) - Ultra-smooth grabbable floating pills */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {skillsGrouped.map((group, groupIdx) => (
              <div key={group.category} className="space-y-4">
                <h3 className="text-base sm:text-lg font-bold uppercase text-gray-200 tracking-wider">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, skillIdx) => (
                    <DraggableSkillBadge
                      key={skill}
                      skill={skill}
                      animationIndex={groupIdx + skillIdx}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
