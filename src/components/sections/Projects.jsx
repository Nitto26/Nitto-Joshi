import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUpRight, ChevronUp, ChevronDown, Play } from 'lucide-react';

export const PROJECTS = [
  {
    number: '01',
    name: 'SGS APP',
    category: 'ONGOING PROJECT',
    status: 'ONGOING',
    description: 'Geo-fence attendance app that automatically marks attendance using location-based logic.',
    role: 'App Developer & Logic Builder',
    technologies: ['KOTLIN', 'FASTAPI', 'GEOFENCING', 'API'],
    videoUrl: 'https://youtube.com', // Video Link Variable: Replace with your project video URL
    cardBg: '#DCE7E7',
    textColor: '#0C0C0E'
  },
  {
    number: '02',
    name: 'CHEMISTRY LAB SYSTEM',
    category: 'COLLEGE / CLIENT PROJECT',
    status: 'COMPLETED / PROJECT WORK',
    description: 'Laboratory management system designed to organize laboratory resources and simplify chemical inventory operations.',
    role: 'Lead Developer',
    technologies: ['WEB DEV', 'DATABASE', 'SYSTEM DESIGN'],
    videoUrl: 'https://youtube.com', // Video Link Variable: Replace with your project video URL
    cardBg: '#F3ECE2',
    textColor: '#0C0C0E'
  },
  {
    number: '03',
    name: 'TIMETABLE CREATOR',
    category: 'COLLEGE PROJECT',
    status: 'COMPLETED',
    description: 'An automated timetable creation system focused on constraint satisfaction logic and reducing academic conflicts.',
    role: 'Developer & Logic Builder',
    technologies: ['AUTOMATION', 'SCHEDULING', 'LOGIC'],
    videoUrl: 'https://youtube.com', // Video Link Variable: Replace with your project video URL
    cardBg: '#E2ECF0',
    textColor: '#0C0C0E'
  },
  {
    number: '04',
    name: 'TREASURE HUNT',
    category: 'COLLEGE PROJECT',
    status: 'COMPLETED',
    description: 'An interactive web project based around cryptic puzzles, clues, exploration and game-like interactions.',
    role: 'Developer & Game Architect',
    technologies: ['WEB', 'GAME LOGIC', 'INTERACTIVE UI'],
    videoUrl: 'https://youtube.com', // Video Link Variable: Replace with your project video URL
    cardBg: '#E9E4DC',
    textColor: '#0C0C0E'
  },
  {
    number: '05',
    name: 'TIME SLOT BOOKING',
    category: 'WEB PROJECT',
    status: 'COMPLETED',
    description: 'A scheduling and booking website designed around a simple, clean, and frictionless user experience.',
    role: 'Developer & UI Designer',
    technologies: ['WEB', 'UI/UX', 'SCHEDULING'],
    videoUrl: 'https://youtube.com', // Video Link Variable: Replace with your project video URL
    cardBg: '#D8E4E8',
    textColor: '#0C0C0E'
  },
  {
    number: '06',
    name: 'CCD WEBSITE',
    category: 'WEB PROJECT',
    status: 'COMPLETED',
    description: 'A responsive departmental web portal developed for an institutional showcase with a clean interface.',
    role: 'Web Developer',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'UI/UX'],
    videoUrl: 'https://youtube.com', // Video Link Variable: Replace with your project video URL
    cardBg: '#EDE7DE',
    textColor: '#0C0C0E'
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startYRef = useRef(0);
  const currentYRef = useRef(0);
  const activeIndexRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const stackRef = useRef(null);

  const total = PROJECTS.length;

  // Keep ref synchronized with activeIndex for event listeners
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => {
      const next = Math.min(total - 1, prev + 1);
      activeIndexRef.current = next;
      return next;
    });
  }, [total]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => {
      const p = Math.max(0, prev - 1);
      activeIndexRef.current = p;
      return p;
    });
  }, []);

  const handleCardClick = (project) => {
    if (project && project.videoUrl) {
      window.open(project.videoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Immediate Wheel Event Listener (Works instantly on hover without clicking first)
  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < 12) return;

      const current = activeIndexRef.current;

      if (e.deltaY > 0) {
        // Scroll DOWN: flip to next card if not at end
        if (current < total - 1) {
          e.preventDefault();
          if (!isTransitioningRef.current) {
            isTransitioningRef.current = true;
            nextCard();
            setTimeout(() => {
              isTransitioningRef.current = false;
            }, 350);
          }
        }
      } else if (e.deltaY < 0) {
        // Scroll UP: flip to previous card if not at start
        if (current > 0) {
          e.preventDefault();
          if (!isTransitioningRef.current) {
            isTransitioningRef.current = true;
            prevCard();
            setTimeout(() => {
              isTransitioningRef.current = false;
            }, 350);
          }
        }
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [total, nextCard, prevCard]);

  // Mobile Touch Event Handling (Prevents main page scroll while flipping cards)
  useEffect(() => {
    const el = stackRef.current;
    if (!el) return;

    let touchStartY = 0;
    let touchEndY = 0;
    let isSwiping = false;

    const onTouchStart = (e) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
        touchEndY = touchStartY;
        startYRef.current = touchStartY;
        currentYRef.current = touchStartY;
        isSwiping = true;
        setIsDragging(true);
      }
    };

    const onTouchMove = (e) => {
      if (!isSwiping || e.touches.length === 0) return;
      touchEndY = e.touches[0].clientY;
      currentYRef.current = touchEndY;
      const deltaY = touchEndY - touchStartY;
      const current = activeIndexRef.current;

      // Swiping UP (moving to next card or page scroll down)
      if (deltaY < -10) {
        if (current < total - 1) {
          if (e.cancelable) e.preventDefault();
          setDragY(deltaY);
        } else {
          setDragY(0);
        }
      }
      // Swiping DOWN (moving to prev card or page scroll up)
      else if (deltaY > 10) {
        if (current > 0) {
          if (e.cancelable) e.preventDefault();
          setDragY(deltaY);
        } else {
          setDragY(0);
        }
      }
    };

    const onTouchEnd = () => {
      if (!isSwiping) return;
      isSwiping = false;
      setIsDragging(false);

      const deltaY = touchEndY - touchStartY;
      const current = activeIndexRef.current;

      // Small movement (< 8px) is a Tap -> Open Video
      if (Math.abs(deltaY) < 8) {
        handleCardClick(PROJECTS[current]);
      } else if (deltaY < -40 && current < total - 1) {
        nextCard();
      } else if (deltaY > 40 && current > 0) {
        prevCard();
      }

      setDragY(0);
    };

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [total, nextCard, prevCard]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevCard();
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextCard();
      if (e.key === 'Enter') handleCardClick(PROJECTS[activeIndex]);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, nextCard, prevCard]);

  // Desktop Mouse Drag Handling
  const handleMouseDown = (e) => {
    startYRef.current = e.clientY;
    currentYRef.current = e.clientY;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    currentYRef.current = e.clientY;
    const delta = e.clientY - startYRef.current;
    setDragY(delta);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = currentYRef.current - startYRef.current;
    const current = activeIndexRef.current;

    if (Math.abs(delta) < 8) {
      handleCardClick(PROJECTS[current]);
    } else if (delta < -45 && current < total - 1) {
      nextCard();
    } else if (delta > 45 && current > 0) {
      prevCard();
    }
    setDragY(0);
  };

  return (
    <section
      id="projects"
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF9F6] text-[#0C0C0E] border-b border-black/[0.08] select-none"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-between">
        
        {/* Section Header */}
        <div className="w-full flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-6 mb-8 sm:mb-10 border-b border-black/[0.12]">
          <div>
            <span
              className="text-xs sm:text-sm font-mono font-bold tracking-[0.3em] text-[#0C0C0E] uppercase block mb-1"
              style={{ fontFamily: "'Space Grotesk', monospace" }}
            >
              02 / PROJECTS
            </span>
            
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-[#0C0C0E] leading-[0.9] flex items-baseline gap-1"
              style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
            >
              <span>THINGS</span>
              <br />
              <span>I BUILD</span>
              <span className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#3A8B9F] -mb-0.5 ml-1" />
            </h2>
          </div>

          <div className="flex items-center gap-6 sm:pb-1">
            <p className="text-xs sm:text-sm font-sans text-[#0C0C0E]/80 max-w-xs sm:text-right">
              Scroll on the cards to cycle. Click card to watch project video.
            </p>
            
            <div className="hidden lg:flex w-20 h-10 rounded-full border border-black/25 items-center justify-center text-[#0C0C0E]">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>

        {/* APPLE WALLET CARD STACK CONTAINER */}
        <div
          ref={stackRef}
          className="relative w-full h-[460px] sm:h-[500px] lg:h-[530px] my-2 flex items-center justify-center cursor-pointer active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            if (isDragging) {
              setIsDragging(false);
              setDragY(0);
            }
          }}
          data-cursor="WATCH"
          style={{ touchAction: 'pan-y' }}
        >
          {PROJECTS.map((project, index) => {
            const isPassed = index < activeIndex;
            const isFront = index === activeIndex;
            const offset = index - activeIndex;

            let translateY = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = total - index;
            let rotate = 0;

            if (isPassed) {
              translateY = -120;
              scale = 1.02;
              opacity = 0;
              zIndex = 30 + index;
            } else if (isFront) {
              translateY = isDragging ? dragY : 0;
              rotate = isDragging ? (dragY / 300) * -6 : 0;
              scale = 1;
              opacity = 1;
              zIndex = 20;
            } else {
              translateY = offset * 18;
              scale = Math.max(0.88, 1 - offset * 0.03);
              zIndex = 20 - offset;
              opacity = offset > 4 ? 0 : 1;
            }

            return (
              <div
                key={project.number}
                onClick={() => isFront && handleCardClick(project)}
                className={`absolute inset-0 w-full h-full rounded-[28px] sm:rounded-[34px] p-6 sm:p-10 lg:p-12 flex flex-col justify-between shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] select-none will-change-transform ${
                  isFront ? 'cursor-pointer hover:shadow-3xl' : 'pointer-events-none'
                }`}
                style={{
                  backgroundColor: project.cardBg,
                  color: project.textColor,
                  border: '1.5px solid rgba(12, 12, 14, 0.12)',
                  transform: `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`,
                  zIndex,
                  opacity,
                  transformOrigin: 'top center',
                  boxShadow: isFront
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.18), 0 0 0 1px rgba(0,0,0,0.04)'
                    : '0 8px 20px -4px rgba(0, 0, 0, 0.08)'
                }}
                role="button"
                tabIndex={isFront ? 0 : -1}
                aria-label={`Project ${project.number}: ${project.name} - Click to watch video`}
              >
                {/* Top Category Header & Watch Video Pill */}
                <div className="flex items-center justify-between pb-2">
                  <span
                    className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] opacity-80 uppercase"
                    style={{ fontFamily: "'Space Grotesk', monospace" }}
                  >
                    {project.number} / {project.category}
                  </span>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/20 bg-white/50 text-xs font-mono font-bold tracking-wider group-hover:bg-[#0C0C0E] group-hover:text-white transition-colors">
                    <Play size={12} className="fill-current" />
                    <span>WATCH VIDEO ↗</span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto">
                  
                  {/* Left Details */}
                  <div className="lg:col-span-7 z-10">
                    <h3
                      className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-sans tracking-tight mb-3 text-[#0C0C0E]"
                      style={{ letterSpacing: '-0.03em' }}
                    >
                      {project.name}
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base font-sans leading-relaxed text-[#0C0C0E]/80 max-w-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Right Graphic Artwork */}
                  <div className="lg:col-span-5 relative hidden lg:flex items-center justify-end h-full min-h-[200px] pointer-events-none">
                    
                    {/* Concentric Circle Arc */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-52 h-52 rounded-full border-[1.5px] border-black/15" />
                    
                    {/* Matrix Grid Lines */}
                    <div
                      className="absolute right-6 top-1/2 -translate-y-1/2 w-40 h-40 opacity-15"
                      style={{
                        backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}
                    />

                    {/* Smartphone / System Wireframe */}
                    <div className="relative w-20 h-36 rounded-2xl border-2 border-black/80 bg-white/70 shadow-lg flex items-center justify-center mr-8 rotate-[8deg]">
                      <div className="w-2.5 h-2.5 rounded-full border border-[#2E828F] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#2E828F]" />
                      </div>
                    </div>

                  </div>

                </div>

                {/* Bottom Pill Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider bg-transparent border border-black/25 text-[#0C0C0E]"
                      style={{ fontFamily: "'Space Grotesk', monospace" }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Navigation & Indicator Bar */}
        <div className="w-full flex items-center justify-between pt-6 text-xs font-mono text-[#0C0C0E]/75">
          
          <div className="flex items-center gap-2">
            <button
              onClick={prevCard}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className={`w-7 h-7 rounded-full border border-black/20 flex items-center justify-center transition-colors ${
                activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#0C0C0E] hover:text-white'
              }`}
            >
              <ChevronUp size={14} />
            </button>
            <button
              onClick={nextCard}
              disabled={activeIndex === total - 1}
              aria-label="Next project"
              className={`w-7 h-7 rounded-full border border-black/20 flex items-center justify-center transition-colors ${
                activeIndex === total - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#0C0C0E] hover:text-white'
              }`}
            >
              <ChevronDown size={14} />
            </button>
          </div>

          <div className="font-bold tracking-widest text-xs">
            <span className="text-[#2E828F]">0{activeIndex + 1}</span>
            <span className="opacity-40 mx-1">/</span>
            <span>0{total}</span>
          </div>

          <div className="opacity-70 text-[11px]">
            <span>SWIPE ON CARDS OR USE ARROWS</span>
          </div>

        </div>

      </div>
    </section>
  );
}
