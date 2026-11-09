import React, { useState, useEffect, useRef } from 'react';
import { educationStages } from '../data/portfolioData';

export default function EducationSection() {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [pathLength, setPathLength] = useState(1000);
  const [activeStage, setActiveStage] = useState(0);

  // Centered curved path definition (opposite order: SEE -> +2 -> Bachelor)
  // Coordinates in a 500 x 780 viewBox:
  // Node 0 (SEE): x = 180, y = 130
  // Node 1 (+2 Science): x = 320, y = 390
  // Node 2 (Bachelor): x = 190, y = 650
  const pathD = `
    M 250 30
    C 170 70, 170 90, 180 130
    C 210 230, 350 300, 320 390
    C 290 500, 150 570, 190 650
    C 210 700, 230 730, 250 750
  `;

  const milestoneNodes = [
    { x: 180, y: 130, index: 0, stage: educationStages[0] }, // SEE
    { x: 320, y: 390, index: 1, stage: educationStages[1] }, // +2 Science
    { x: 190, y: 650, index: 2, stage: educationStages[2] }  // Bachelor
  ];

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Reveal point is at the middle of the viewport (0.52)
      const viewportMiddle = windowHeight * 0.52;
      const scrolledDist = viewportMiddle - rect.top;
      
      const totalRange = rect.height * 0.86;

      let progress = scrolledDist / totalRange;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      // Auto-activate stage as milestone passes the middle of the screen
      if (progress < 0.35) {
        setActiveStage(0);
      } else if (progress < 0.72) {
        setActiveStage(1);
      } else {
        setActiveStage(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="education" 
      ref={containerRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-sm text-gray-400">
            Scroll or touch any milestone bullet along the path to view details.
          </p>
        </div>

        {/* Centered Curved Path Layout */}
        <div className="relative min-h-[780px] w-full">
          
          {/* Centered SVG Canvas */}
          <div className="absolute inset-0 flex justify-center pointer-events-none">
            <svg
              viewBox="0 0 500 780"
              className="h-full w-full max-w-[550px] overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Background Dotted Curved Path */}
              <path
                d={pathD}
                fill="none"
                stroke="#242838"
                strokeWidth="5"
                strokeDasharray="8 12"
                strokeLinecap="round"
              />

              {/* Smoothly colored continuous solid path on scroll - Cyan-Blue */}
              <path
                ref={pathRef}
                d={pathD}
                fill="none"
                stroke="#00d2ff"
                strokeWidth="5.5"
                strokeLinecap="round"
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: pathLength * (1 - scrollProgress),
                  transition: 'stroke-dashoffset 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />

              {/* Milestone Bullets */}
              {milestoneNodes.map((node) => {
                const isActive = activeStage === node.index;
                const isPassed = scrollProgress >= (node.index === 0 ? 0.15 : node.index === 1 ? 0.48 : 0.82);

                return (
                  <g 
                    key={node.index} 
                    transform={`translate(${node.x}, ${node.y})`}
                    className="cursor-pointer pointer-events-auto"
                    onClick={() => setActiveStage(node.index)}
                    onMouseEnter={() => setActiveStage(node.index)}
                  >
                    {/* Enlarged Hit Area */}
                    <circle r="26" fill="transparent" />

                    {/* Outer Bullet Ring */}
                    <circle
                      r={isActive ? "15" : "11"}
                      fill="#090a0f"
                      stroke={isActive ? "#00d2ff" : isPassed ? "#38bdf8" : "#475569"}
                      strokeWidth="3"
                      className="transition-all duration-300"
                    />

                    {/* Inner Bullet Dot */}
                    <circle
                      r={isActive ? "7" : "5"}
                      fill={isActive ? "#00d2ff" : isPassed ? "#38bdf8" : "#64748b"}
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Alternating Left-Right Cards Content Layer */}
          <div className="relative z-10 flex flex-col justify-between h-[780px] pointer-events-none">
            
            {/* Stage 1: SEE (Left on Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
              <div 
                onClick={() => setActiveStage(0)}
                className={`pointer-events-auto cursor-pointer transition-all duration-300 md:text-right md:pr-20 p-4 md:p-0 rounded-xl bg-[#090a0f]/85 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none ${
                  activeStage === 0 ? 'opacity-100 scale-100' : 'opacity-60 md:opacity-45 hover:opacity-85'
                }`}
              >
                <div className="flex items-center gap-3 md:justify-end">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    {educationStages[0].period}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    GPA {educationStages[0].score}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {educationStages[0].level}
                </h3>
                <p className="text-sm font-medium text-gray-200 mt-0.5">
                  {educationStages[0].institution}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-sm md:ml-auto">
                  {educationStages[0].note}
                </p>
              </div>
              <div className="hidden md:block" />
            </div>

            {/* Stage 2: +2 Science (Right on Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="hidden md:block" />
              <div 
                onClick={() => setActiveStage(1)}
                className={`pointer-events-auto cursor-pointer transition-all duration-300 md:pl-20 p-4 md:p-0 rounded-xl bg-[#090a0f]/85 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none ${
                  activeStage === 1 ? 'opacity-100 scale-100' : 'opacity-60 md:opacity-45 hover:opacity-85'
                }`}
              >
                <div className="flex items-center gap-3 md:justify-start">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    {educationStages[1].period}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    GPA {educationStages[1].score}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {educationStages[1].level}
                </h3>
                <p className="text-sm font-medium text-gray-200 mt-0.5">
                  {educationStages[1].institution}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-sm">
                  {educationStages[1].note}
                </p>
              </div>
            </div>

            {/* Stage 3: Bachelor (Left on Desktop) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-4">
              <div 
                onClick={() => setActiveStage(2)}
                className={`pointer-events-auto cursor-pointer transition-all duration-300 md:text-right md:pr-20 p-4 md:p-0 rounded-xl bg-[#090a0f]/85 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none ${
                  activeStage === 2 ? 'opacity-100 scale-100' : 'opacity-60 md:opacity-45 hover:opacity-85'
                }`}
              >
                <div className="flex items-center gap-3 md:justify-end">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    {educationStages[2].period}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    Undergrad
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {educationStages[2].program}
                </h3>
                <p className="text-sm font-medium text-gray-200 mt-0.5">
                  {educationStages[2].institution}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-sm md:ml-auto">
                  {educationStages[2].note}
                </p>
              </div>
              <div className="hidden md:block" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
