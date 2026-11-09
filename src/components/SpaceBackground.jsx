import React from 'react';

// ── Refined space icon set ──────────────────────────────────────────────────

// Crescent moon – clean filled half-disc
const Moon = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2zm0 25a11 11 0 0 1 0-22 11 11 0 0 1 0 22z" opacity="0"/>
    <path d="M25.4 20.4A11 11 0 0 1 12 6.6a12 12 0 1 0 13.4 13.8z"/>
  </svg>
);

// Six-point star / sparkle
const Sparkle = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 0l2.5 10.5a1 1 0 0 0 .6.6L29.5 13.5l-10.4 2.4a1 1 0 0 0-.6.6L16 27l-2.5-10.5a1 1 0 0 0-.6-.6L2.5 13.5l10.4-2.4a1 1 0 0 0 .6-.6L16 0z"/>
  </svg>
);

// Small 4-point diamond star
const DiamondStar = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1 L14.4 9.6 L23 12 L14.4 14.4 L12 23 L9.6 14.4 L1 12 L9.6 9.6 Z"/>
  </svg>
);

// Rocket – solid fill with detail
const Rocket = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 2C9 2 5 10 5 18h3l-2 10 10-4 10 4-2-10h3C29 10 23 2 16 2zm0 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" opacity="0.9"/>
    <path d="M16 2C9 2 5 10 5 18h3l-2 10 10-4 10 4-2-10h3C29 10 23 2 16 2zm0 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
    <path d="M10.5 25l1.5-7h8l1.5 7-5.5-2.2L10.5 25z" fill="currentColor" opacity="0.6"/>
  </svg>
);

// Ringed planet – bold filled planet + ring
const Planet = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" fill="currentColor">
    <ellipse cx="24" cy="30" rx="22" ry="6" fill="currentColor" opacity="0.35" transform="rotate(-20 24 30)"/>
    <circle cx="24" cy="24" r="12"/>
    <ellipse cx="24" cy="24" rx="22" ry="5.5" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(-20 24 24)"/>
    <circle cx="24" cy="24" r="12"/>
  </svg>
);

// Comet / shooting star
const Comet = ({ className }) => (
  <svg className={className} viewBox="0 0 48 24" fill="currentColor">
    <circle cx="40" cy="12" r="6"/>
    <ellipse cx="22" cy="12" rx="16" ry="4" opacity="0.5"/>
    <ellipse cx="10" cy="12" rx="8" ry="2.5" opacity="0.25"/>
  </svg>
);

// Satellite – cross body with solar panels
const Satellite = ({ className }) => (
  <svg className={className} viewBox="0 0 36 36" fill="currentColor">
    <rect x="13" y="13" width="10" height="10" rx="2"/>
    <rect x="1" y="15" width="10" height="6" rx="1.5" opacity="0.75"/>
    <rect x="25" y="15" width="10" height="6" rx="1.5" opacity="0.75"/>
    <rect x="15" y="1" width="6" height="10" rx="1.5" opacity="0.75"/>
    <rect x="15" y="25" width="6" height="10" rx="1.5" opacity="0.75"/>
    <line x1="18" y1="13" x2="18" y2="11" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="18" cy="10" r="1.5" opacity="0.9"/>
  </svg>
);

// Asteroid – irregular blob
const Asteroid = ({ className }) => (
  <svg className={className} viewBox="0 0 32 32" fill="currentColor">
    <path d="M8 4l5-2 7 1 6 5 2 7-2 6-5 5-7 2-7-2-4-6 1-8z"/>
    <circle cx="11" cy="11" r="1.5" fill="white" opacity="0.4"/>
    <circle cx="19" cy="18" r="2" fill="white" opacity="0.25"/>
    <circle cx="13" cy="20" r="1" fill="white" opacity="0.3"/>
  </svg>
);

// Dot cluster / constellation
const StarCluster = ({ className }) => (
  <svg className={className} viewBox="0 0 36 36" fill="currentColor">
    <circle cx="6" cy="8" r="2.2"/>
    <circle cx="18" cy="4" r="1.8"/>
    <circle cx="30" cy="10" r="2.5"/>
    <circle cx="26" cy="24" r="2"/>
    <circle cx="10" cy="27" r="1.8"/>
    <circle cx="18" cy="18" r="1.4"/>
    <line x1="6" y1="8" x2="18" y2="4" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
    <line x1="18" y1="4" x2="30" y2="10" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
    <line x1="30" y1="10" x2="26" y2="24" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
    <line x1="26" y1="24" x2="10" y2="27" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
    <line x1="10" y1="27" x2="18" y2="18" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
    <line x1="18" y1="18" x2="6" y2="8" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
  </svg>
);

// ── Object placement map ────────────────────────────────────────────────────
const spaceObjects = [
  // Top Hero Region
  { Component: Moon,        top: '2.5%',  left: '86%', size: 44, duration: '15s', delay: '0s',   opacity: 0.14, color: 'text-sky-400' },
  { Component: Sparkle,     top: '5%',    left: '11%', size: 24, duration: '9s',  delay: '1s',   opacity: 0.18, color: 'text-cyan-400' },
  { Component: Rocket,      top: '11%',   left: '74%', size: 38, duration: '18s', delay: '2s',   opacity: 0.13, color: 'text-gray-300' },
  { Component: Comet,       top: '8%',    left: '42%', size: 54, duration: '13s', delay: '3s',   opacity: 0.11, color: 'text-cyan-300' },
  { Component: Asteroid,    top: '15%',   left: '22%', size: 24, duration: '16s', delay: '0.8s', opacity: 0.11, color: 'text-gray-400' },
  { Component: DiamondStar, top: '17%',   left: '92%', size: 20, duration: '10s', delay: '2.5s', opacity: 0.16, color: 'text-blue-300' },

  // Transition to About Region
  { Component: Planet,      top: '22%',   left: '5%',  size: 58, duration: '22s', delay: '0.5s', opacity: 0.14, color: 'text-cyan-300' },
  { Component: StarCluster, top: '25%',   left: '83%', size: 36, duration: '17s', delay: '1.4s', opacity: 0.13, color: 'text-cyan-400' },
  { Component: DiamondStar, top: '29%',   left: '38%', size: 18, duration: '8s',  delay: '1.8s', opacity: 0.14, color: 'text-sky-400' },
  { Component: Satellite,   top: '33%',   left: '72%', size: 34, duration: '19s', delay: '1s',   opacity: 0.12, color: 'text-gray-400' },
  { Component: Moon,        top: '36%',   left: '14%', size: 36, duration: '16s', delay: '3.2s', opacity: 0.12, color: 'text-blue-300' },
  { Component: Sparkle,     top: '39%',   left: '95%', size: 22, duration: '11s', delay: '2.2s', opacity: 0.16, color: 'text-cyan-400' },

  // Projects Region
  { Component: Moon,        top: '43%',   left: '90%', size: 38, duration: '14s', delay: '0.7s', opacity: 0.11, color: 'text-sky-400' },
  { Component: Comet,       top: '46%',   left: '8%',  size: 52, duration: '12s', delay: '2.9s', opacity: 0.12, color: 'text-cyan-400' },
  { Component: Asteroid,    top: '49%',   left: '79%', size: 26, duration: '17s', delay: '1.6s', opacity: 0.11, color: 'text-gray-400' },
  { Component: DiamondStar, top: '52%',   left: '28%', size: 20, duration: '9s',  delay: '0.9s', opacity: 0.15, color: 'text-cyan-300' },
  { Component: Rocket,      top: '55%',   left: '87%', size: 36, duration: '20s', delay: '3.1s', opacity: 0.12, color: 'text-gray-300' },
  { Component: StarCluster, top: '58%',   left: '12%', size: 34, duration: '15s', delay: '1.1s', opacity: 0.12, color: 'text-cyan-400' },

  // Skills & Education Region
  { Component: Planet,      top: '63%',   left: '92%', size: 54, duration: '21s', delay: '2.4s', opacity: 0.13, color: 'text-cyan-300' },
  { Component: Sparkle,     top: '66%',   left: '6%',  size: 22, duration: '10s', delay: '1.3s', opacity: 0.17, color: 'text-cyan-400' },
  { Component: Satellite,   top: '70%',   left: '81%', size: 32, duration: '18s', delay: '0.6s', opacity: 0.12, color: 'text-gray-400' },
  { Component: Moon,        top: '73%',   left: '18%', size: 40, duration: '16s', delay: '2.8s', opacity: 0.12, color: 'text-blue-300' },
  { Component: DiamondStar, top: '76%',   left: '64%', size: 18, duration: '9s',  delay: '1.7s', opacity: 0.14, color: 'text-sky-400' },
  { Component: Asteroid,    top: '79%',   left: '94%', size: 22, duration: '15s', delay: '3.4s', opacity: 0.10, color: 'text-gray-400' },

  // Achievements & Contact Region
  { Component: Comet,       top: '83%',   left: '4%',  size: 56, duration: '16s', delay: '1.5s', opacity: 0.11, color: 'text-sky-400' },
  { Component: Sparkle,     top: '86%',   left: '76%', size: 26, duration: '13s', delay: '2.1s', opacity: 0.15, color: 'text-cyan-300' },
  { Component: DiamondStar, top: '89%',   left: '24%', size: 22, duration: '10s', delay: '0.4s', opacity: 0.16, color: 'text-cyan-400' },
  { Component: Rocket,      top: '92%',   left: '88%', size: 36, duration: '22s', delay: '2.8s', opacity: 0.12, color: 'text-gray-300' },
  { Component: StarCluster, top: '95%',   left: '11%', size: 36, duration: '17s', delay: '1.8s', opacity: 0.12, color: 'text-cyan-400' },
  { Component: Planet,      top: '97.5%', left: '79%', size: 50, duration: '20s', delay: '0.9s', opacity: 0.13, color: 'text-cyan-300' },
  { Component: DiamondStar, top: '98.5%', left: '44%', size: 20, duration: '11s', delay: '3.2s', opacity: 0.15, color: 'text-blue-300' },
];

export default function SpaceBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0"
      aria-hidden="true"
    >
      {spaceObjects.map((item, index) => {
        const { Component } = item;
        return (
          <div
            key={index}
            className={`absolute ${item.color} cosmic-float-${index % 4}`}
            style={{
              top: item.top,
              left: item.left,
              width: item.size,
              height: item.size,
              opacity: item.opacity,
              animationDuration: item.duration,
              animationDelay: item.delay,
            }}
          >
            <Component className="w-full h-full" />
          </div>
        );
      })}
    </div>
  );
}
