import React, { useEffect, useState, useRef } from 'react';
import { useProjectSkill } from '../context/ProjectSkillContext';

export default function ConnectionRays() {
  const { activeProject, linkedSkills } = useProjectSkill();
  const [basePoints, setBasePoints] = useState([]);
  const [waveOffset, setWaveOffset] = useState(0);
  const rafRef = useRef(null);

  // Smooth gentle breeze wave animation loop
  useEffect(() => {
    if (!activeProject || linkedSkills.length === 0) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    let startTime = performance.now();
    const animateWave = (currentTime) => {
      const elapsed = (currentTime - startTime) * 0.001; // in seconds
      setWaveOffset(elapsed);
      rafRef.current = requestAnimationFrame(animateWave);
    };

    rafRef.current = requestAnimationFrame(animateWave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeProject, linkedSkills]);

  // Calculate coordinates of start (project card) and end (floating skill badges)
  useEffect(() => {
    if (!activeProject || linkedSkills.length === 0) {
      setBasePoints([]);
      return;
    }

    const updatePoints = () => {
      const cardEl = document.getElementById(`project-card-${activeProject.id}`);
      if (!cardEl) return;

      const cardRect = cardEl.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      // Card anchor point: bottom center
      const startX = cardRect.left + cardRect.width / 2 + scrollX;
      const startY = cardRect.bottom + scrollY - 2;

      const points = [];

      linkedSkills.forEach((skillName, idx) => {
        const skillEl = document.querySelector(`[data-skill-name="${skillName}"]`);
        if (!skillEl) return;

        const skillRect = skillEl.getBoundingClientRect();
        const endX = skillRect.left + skillRect.width / 2 + scrollX;
        const endY = skillRect.top + scrollY + 4;

        points.push({
          startX,
          startY,
          endX,
          endY,
          skillName,
          phaseOffset: idx * 1.35, // Unique breeze wave phase for each individual string
        });
      });

      setBasePoints(points);
    };

    updatePoints();

    window.addEventListener('resize', updatePoints);
    window.addEventListener('scroll', updatePoints, { passive: true });

    const interval = setInterval(updatePoints, 200);

    return () => {
      window.removeEventListener('resize', updatePoints);
      window.removeEventListener('scroll', updatePoints);
      clearInterval(interval);
    };
  }, [activeProject, linkedSkills]);

  if (!activeProject || basePoints.length === 0) return null;

  return (
    <svg
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-30 overflow-visible"
      style={{ minHeight: '100%' }}
    >
      <defs>
        <linearGradient id="solidRayGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.75" />
          <stop offset="85%" stopColor="#818cf8" stopOpacity="0.80" />
          <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.90" />
        </linearGradient>

        <filter id="stringGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {basePoints.map((item, idx) => {
        const { startX, startY, endX, endY, phaseOffset } = item;

        // Gentle wind / breeze calculation (subtle horizontal & vertical deviation)
        const wind1 = Math.sin(waveOffset * 1.6 + phaseOffset) * 14;
        const wind2 = Math.cos(waveOffset * 1.2 + phaseOffset) * 12;

        const deltaY = Math.max(120, (endY - startY) * 0.55);
        const cp1x = startX + wind1;
        const cp1y = startY + deltaY * 0.65;
        const cp2x = endX + wind2;
        const cp2y = endY - deltaY * 0.75;

        const pathD = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;

        return (
          <g key={idx}>
            {/* Subtle soft outer glow aura */}
            <path
              d={pathD}
              fill="none"
              stroke="#00d2ff"
              strokeWidth="3.5"
              strokeOpacity="0.16"
              strokeLinecap="round"
            />
            {/* Thin, solid, glowing light string */}
            <path
              d={pathD}
              fill="none"
              stroke="url(#solidRayGradient)"
              strokeWidth="1.35"
              strokeLinecap="round"
              filter="url(#stringGlow)"
              opacity="0.9"
            />

            {/* Prominent glowing origin node / dot at the project card border */}
            <circle
              cx={startX}
              cy={startY}
              r="8"
              fill="#00d2ff"
              opacity="0.25"
              className="animate-pulse"
            />
            <circle
              cx={startX}
              cy={startY}
              r="5"
              fill="#00d2ff"
              filter="url(#stringGlow)"
              opacity="0.95"
            />
            <circle
              cx={startX}
              cy={startY}
              r="2.5"
              fill="#ffffff"
            />

            {/* Spark endpoint badge landing dot */}
            <circle
              cx={endX}
              cy={endY}
              r="2.5"
              fill="#00d2ff"
              opacity="0.85"
            />
            <circle
              cx={endX}
              cy={endY}
              r="1.2"
              fill="#ffffff"
            />
          </g>
        );
      })}
    </svg>
  );
}
