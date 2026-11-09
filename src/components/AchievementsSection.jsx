import React, { useState, useEffect } from 'react';
import { X, Github, ExternalLink, Users, Sparkles, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { achievements } from '../data/portfolioData';

// Slideshow component for cards with multiple images
function AutoSlideImage({ images, alt, isHovered }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((imgSrc, i) => (
        <img
          key={imgSrc}
          src={imgSrc}
          alt={`${alt} ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out filter brightness-90 group-hover:brightness-100 ${
            i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          loading="lazy"
        />
      ))}

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md">
        {images.map((_, i) => (
          <span
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-3 h-1 bg-white' : 'w-1 h-1 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AchievementsSection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [featuredHovered, setFeaturedHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [hoveredOtherIdx, setHoveredOtherIdx] = useState(null);

  const { srdc, hackathons } = achievements;
  const featured = hackathons.featured;

  // Details are visible if either image/card hovered or toggled via button
  const isDetailsVisible = featuredHovered || showDetails;

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements
          </h2>
        </div>

        <div className="space-y-16">
          
          {/* Bullet 1: SRDC Research Team Member */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {srdc.title}
              </h3>
            </div>
            <div className="pl-5 sm:pl-6 border-l border-gray-800/80 ml-1.5 space-y-2">
              <p className="text-sm font-mono text-cyan-400/90">
                {srdc.institution} • {srdc.organization}
              </p>
              <p className="text-base sm:text-lg text-gray-300 max-w-4xl leading-relaxed font-normal">
                {srdc.description}
              </p>
            </div>
          </div>

          {/* Bullet 2: Hackathons */}
          <div className="space-y-10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Hackathons
              </h3>
            </div>

            <div className="pl-5 sm:pl-6 border-l border-gray-800/80 ml-1.5 space-y-12">
              
              {/* Row 1: Featured Portrait Hackathon Winner (Gold Theme) */}
              <div className="w-full flex justify-center">
                <div className="relative max-w-5xl w-full flex flex-col items-center">
                  
                  {/* Centered Image Column + Title Block */}
                  <div className="flex flex-col items-center text-center">
                    
                    {/* Golden Frame with Shimmering Light Sweep & Glow on Hover (NO scale/zoom) */}
                    <div 
                      className="relative rounded-2xl p-[3px] bg-gradient-to-br from-[#BF953F] via-[#FCF6BA] to-[#B38728] shadow-[0_4px_24px_rgba(212,175,55,0.22)] hover:shadow-[0_0_35px_rgba(212,175,55,0.65)] cursor-pointer group transition-shadow duration-500 w-52 sm:w-60 md:w-64 max-w-full overflow-hidden"
                      onMouseEnter={() => setFeaturedHovered(true)}
                      onMouseLeave={() => setFeaturedHovered(false)}
                      onClick={() => setSelectedPhoto(featured)}
                    >
                      {/* Diagonal light sweep */}
                      <span className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out pointer-events-none" />

                      {/* Inner image container */}
                      <div className="relative rounded-[13px] overflow-hidden bg-black w-full">
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="w-full h-auto object-contain filter brightness-95 group-hover:brightness-105 transition-all duration-300 block"
                        />
                        
                        {/* Winner Badge on Photo with metallic gold styling */}
                        <div className="absolute top-2.5 left-2.5 pointer-events-none z-10">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/90 backdrop-blur-md text-[#FCF6BA] border border-[#D4AF37]/60 flex items-center gap-1.5 shadow-lg">
                            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>Winner</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Text content placed strictly BELOW image */}
                    <div className="mt-4 space-y-1 max-w-xs sm:max-w-sm">
                      <h4 className="text-base sm:text-lg font-bold tracking-tight leading-snug bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent drop-shadow-sm">
                        {featured.detailsTitle}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {featured.event} • {featured.organization}
                      </p>

                      {/* Very simple, neutral minimalist toggle button (NO cyan color) */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDetails(!showDetails);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium text-gray-400 hover:text-gray-100 bg-gray-900/60 hover:bg-gray-850 border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer"
                        >
                          <span>{showDetails ? 'Hide details' : 'Show details'}</span>
                          {showDetails ? (
                            <ChevronUp className="w-3.5 h-3.5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Companion Detail Card */}
                  <div 
                    onMouseEnter={() => setFeaturedHovered(true)}
                    onMouseLeave={() => setFeaturedHovered(false)}
                    className={`transition-all duration-300 z-30 ${
                      isDetailsVisible
                        ? 'opacity-100 translate-y-0 lg:translate-x-0 pointer-events-auto'
                        : 'opacity-0 translate-y-3 lg:translate-y-0 lg:translate-x-4 pointer-events-none'
                    } ${
                      /* Desktop: Positioned directly to the right side of the centered photo */
                      'lg:absolute lg:top-0 lg:left-[calc(50%+150px)] lg:w-[430px]'
                    } ${
                      /* Mobile / Tablet: Sits below the title block with clear separation */
                      'w-full max-w-md mt-6 lg:mt-0'
                    }`}
                  >
                    <div className="relative p-6 sm:p-7 rounded-2xl bg-[#09090c]/98 border border-[#D4AF37]/50 shadow-[0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-2xl space-y-4">
                      
                      {/* Top Header without star icon */}
                      <div className="flex items-center justify-between border-b border-gray-900 pb-3.5">
                        <span className="text-sm sm:text-[15px] font-mono font-semibold uppercase tracking-wider text-[#D4AF37]">
                          {featured.category}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 text-[#FCF6BA] border border-[#D4AF37]/30 font-medium">
                          1st Place
                        </span>
                      </div>

                      {/* Project Description */}
                      <div className="space-y-1.5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                          Project:
                        </span>
                        <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-normal">
                          {featured.project}
                        </p>
                      </div>

                      {/* Team Members */}
                      <div className="space-y-1.5 pt-1 border-t border-gray-900/80">
                        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gray-400">
                          <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>4 Team Members</span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-300 font-medium">
                          {featured.team.join(', ')}
                        </p>
                      </div>

                      {/* GitHub Repo Link */}
                      <div className="pt-2.5 border-t border-gray-900 flex items-center justify-between">
                        <a
                          href={featured.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 hover:bg-gray-850 border border-gray-800 hover:border-gray-700 text-sm font-semibold text-gray-200 hover:text-white transition-all group/btn shadow"
                        >
                          <Github className="w-4 h-4 text-gray-200" />
                          <span>GitHub Repository</span>
                          <ExternalLink className="w-4 h-4 text-gray-500 group-hover/btn:text-gray-200 transition-colors" />
                        </a>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              {/* Row 2: Remaining 2 Hackathons (Kathford Silver Theme + KEC White Theme) */}
              <div className="space-y-4 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-14 lg:gap-16 max-w-4xl mx-auto">
                  {hackathons.others.map((item, idx) => {
                    const isSilver = item.id === 'kathford';

                    return (
                      <div
                        key={idx}
                        className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 flex flex-col relative ${
                          isSilver
                            ? 'p-[2px] bg-gradient-to-br from-[#E6E8EC] via-[#A0A5B0] to-[#606570] shadow-[0_4px_20px_rgba(200,205,215,0.15)] hover:shadow-[0_0_24px_rgba(220,225,235,0.35)]'
                            : 'p-[2px] bg-gradient-to-br from-white/30 via-white/10 to-white/5 shadow-[0_4px_16px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                        }`}
                        onMouseEnter={() => setHoveredOtherIdx(idx)}
                        onMouseLeave={() => setHoveredOtherIdx(null)}
                        onClick={() => setSelectedPhoto(item)}
                      >
                        {/* Elegant subtle shimmer sweep for Silver theme on hover */}
                        {isSilver && (
                          <span className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out pointer-events-none" />
                        )}

                        {/* Subtle shimmer for white theme on hover */}
                        {!isSilver && (
                          <span className="absolute -inset-full top-0 block w-1/2 h-full z-20 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000 ease-out pointer-events-none" />
                        )}

                        <div className="bg-[#08080a] rounded-[14px] overflow-hidden flex flex-col flex-1 w-full">
                          
                          {/* Image Container */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                            {item.images && item.images.length > 1 ? (
                              <AutoSlideImage 
                                images={item.images} 
                                alt={item.title} 
                                isHovered={hoveredOtherIdx === idx}
                              />
                            ) : (
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                              />
                            )}

                            {/* Badge */}
                            <div className="absolute top-2.5 left-2.5 z-20 pointer-events-none">
                              {isSilver ? (
                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/95 backdrop-blur-md text-[#E6E8EC] border border-[#B0B5BF]/50 flex items-center gap-1 shadow">
                                  <Award className="w-3.5 h-3.5 text-[#D8DCE3]" />
                                  <span>Runner Up</span>
                                </span>
                              ) : (
                                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/90 backdrop-blur-md text-white border border-white/30 flex items-center gap-1 shadow">
                                  <Sparkles className="w-3 h-3 text-gray-300" />
                                  <span>{item.badge}</span>
                                </span>
                              )}
                            </div>

                            {/* Hover Details Overlay with heavy blur and ultra-dark tint for comfortable reading */}
                            <div 
                              className={`absolute inset-0 bg-black p-5 sm:p-6 flex flex-col justify-end transition-opacity duration-300 z-30 ${
                                hoveredOtherIdx === idx ? 'opacity-85' : 'opacity-0 pointer-events-none'
                              }`}
                            >
                              {isSilver ? (
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs sm:text-sm font-mono text-gray-300 font-semibold uppercase tracking-wider">
                                      {item.category} • 2nd Place
                                    </span>
                                  </div>

                                  <div>
                                    <h5 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                      Project: {item.project}
                                    </h5>
                                    <p className="text-sm sm:text-[15px] text-gray-200 mt-1 leading-relaxed font-normal">
                                      {item.projectDetail}
                                    </p>
                                  </div>

                                  <div className="pt-2 border-t border-gray-800/90">
                                    <p className="text-xs sm:text-sm text-gray-200 flex items-center gap-1.5 font-medium">
                                      <Users className="w-4 h-4 text-gray-300 shrink-0" />
                                      <span>Team: {item.team.join(', ')}</span>
                                    </p>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                      {item.event} • {item.organization}
                                    </p>
                                  </div>
                                </div>
                              ) : (
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs sm:text-sm font-mono text-gray-300 font-semibold uppercase tracking-wider">
                                      {item.category} • 3 Hackathons
                                    </span>
                                  </div>
                                  <h5 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                                    Key Participations
                                  </h5>
                                  <ul className="space-y-2 text-sm text-gray-200">
                                    {item.participationsList?.map((p, pIdx) => (
                                      <li key={pIdx} className="flex items-start gap-2 leading-snug">
                                        <span className="text-gray-400 font-mono text-sm mt-0.5">•</span>
                                        <div>
                                          <span className="font-semibold text-white text-sm sm:text-[15px]">{p.name}</span>
                                          <span className="text-gray-400 block text-xs">{p.organizer}</span>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>

                          </div>

                          {/* Default Card Footer below image */}
                          <div className="p-4 flex-1 flex flex-col justify-between">
                            <div className="space-y-0.5">
                              <h4 className={`text-base font-bold transition-colors ${
                                isSilver
                                  ? 'text-white group-hover:text-gray-200'
                                  : 'text-white group-hover:text-gray-200'
                              }`}>
                                {item.title} {isSilver && '— Kathford'}
                              </h4>
                              <p className="text-xs text-gray-400">
                                {item.event} • {item.organization}
                              </p>
                            </div>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-gray-950 border border-gray-800 rounded-2xl overflow-hidden p-4 sm:p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-850">
              <div>
                <h4 className="text-base font-semibold text-white">{selectedPhoto.title}</h4>
                <p className="text-xs text-gray-400">{selectedPhoto.event}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-gray-850 transition-colors"
                aria-label="Close photo view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[78vh] flex items-center justify-center bg-black rounded-xl overflow-hidden">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[78vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
