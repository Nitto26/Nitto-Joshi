import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowUpRight, X, ChevronUp, ChevronDown, Cpu, CheckCircle2 } from 'lucide-react';

const PROJECTS = [
  {
    number: '01',
    name: 'SGS APP',
    category: 'ONGOING PROJECT',
    status: 'ONGOING',
    description: 'Geo-fence attendance app that automatically marks attendance using location-based logic.',
    role: 'App Developer & Logic Builder',
    technologies: ['KOTLIN', 'FASTAPI', 'GEOFENCING', 'API'],
    whatIBuilt: 'A cross-platform application for automatic attendance marking and its underlying geofence logic verification.',
    features: [
      'Automated location boundary detection with sub-300ms verification',
      'Lightweight FastAPI microservice endpoints with high concurrency',
      'Anti-spoofing and secure coordinate validation logic',
      'Seamless real-time device check-in workflows'
    ],
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
    whatIBuilt: 'Full relational database schema, administrative portal, student request workflows, and chemical stock tracking.',
    features: [
      'Comprehensive reagent & glassware digital inventory tracking',
      'Hazard level categorization and shelf-life expiration alerts',
      'Role-based access control for students, faculty, and lab managers',
      'Auditing log for chemical consumption and requisition requests'
    ],
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
    whatIBuilt: 'Constraint satisfaction engine, faculty workload balancer, and conflict-free schedule matrices.',
    features: [
      'Multi-variable constraint resolution (faculty hours, lab rooms, credits)',
      'Algorithmic conflict prevention reducing scheduling time from days to seconds',
      'Interactive matrix view with drag-and-adjust validation',
      'Exportable department and student timetable sheets'
    ],
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
    whatIBuilt: 'Multi-stage clue progression engine, cipher validation interfaces, and session state tracking.',
    features: [
      'Multi-stage interactive puzzle progression with cryptographic riddles',
      'Dynamic clue unlocking mechanism responding to user inputs',
      'Real-time team leaderboard and stage timers',
      'Engaging interactive animations and mystery game feedback'
    ],
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
    whatIBuilt: 'Interactive visual calendar picker, real-time availability indicator, and frictionless booking flow.',
    features: [
      'Instant slot allocation preventing concurrent double-booking',
      'Minimalist, frictionless step-by-step reservation workflow',
      'Automated confirmation notifications and calendar syncing',
      'Responsive design crafted for one-thumb mobile booking'
    ],
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
    whatIBuilt: 'Departmental portal layout, structured curriculum directory, and accessible responsive web components.',
    features: [
      'Semantic and fast-loading web architecture with 100/100 Lighthouse score',
      'Structured resource repository for academic materials and notices',
      'Mobile-first responsive interface with intuitive navigation hierarchy',
      'Clean typography adhering to institutional branding'
    ],
    cardBg: '#EDE7DE',
    textColor: '#0C0C0E'
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startYRef = useRef(0);
  const currentYRef = useRef(0);
  const stackRef = useRef(null);

  const total = PROJECTS.length;

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => Math.min(total - 1, prev + 1));
  }, [total]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  }, []);

  // Keyboard navigation & accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (expandedIndex !== null) {
        if (e.key === 'Escape') setExpandedIndex(null);
        return;
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevCard();
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextCard();
      if (e.key === 'Enter' || e.key === ' ') setExpandedIndex(activeIndex);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, expandedIndex, nextCard, prevCard]);

  // Touch / Mouse Drag Gesture Handling
  const handleTouchStart = (e) => {
    if (expandedIndex !== null) return;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startYRef.current = clientY;
    currentYRef.current = clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || expandedIndex !== null) return;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    currentYRef.current = clientY;
    const delta = clientY - startYRef.current;
    setDragY(delta);
  };

  const handleTouchEnd = () => {
    if (!isDragging || expandedIndex !== null) return;
    setIsDragging(false);
    const delta = currentYRef.current - startYRef.current;

    // Small movement (< 8px) is a tap / click to open details
    if (Math.abs(delta) < 8) {
      setExpandedIndex(activeIndex);
    } else if (delta < -45) {
      // Swiped UP -> Next Card
      nextCard();
    } else if (delta > 45) {
      // Swiped DOWN -> Previous Card
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
        
        {/* Section Header matching Reference */}
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
              Swipe through the stack. Tap a project to explore it.
            </p>
            
            <div className="hidden lg:flex w-20 h-10 rounded-full border border-black/25 items-center justify-center text-[#0C0C0E]">
              <ArrowUpRight size={14} />
            </div>
          </div>
        </div>

        {/* APPLE WALLET CARD STACK CONTAINER — Tight & cleanly sized */}
        <div
          ref={stackRef}
          className="relative w-full h-[460px] sm:h-[500px] lg:h-[530px] my-2 flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
          onMouseDown={handleTouchStart}
          onMouseMove={handleTouchMove}
          onMouseUp={handleTouchEnd}
          onMouseLeave={() => {
            if (isDragging) {
              setIsDragging(false);
              setDragY(0);
            }
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {PROJECTS.map((project, index) => {
            const isPassed = index < activeIndex;
            const isFront = index === activeIndex;
            const offset = index - activeIndex;

            // Apple Wallet Motion:
            // Passed cards slide UP & OUT (-120%)
            // Front card is at 0px / scale 1
            // Waiting cards stacked below with 18px offset
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
                onClick={() => isFront && setExpandedIndex(index)}
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
                aria-label={`Project ${project.number}: ${project.name}`}
              >
                {/* Top Category Header & Top-Right Expand Arrow */}
                <div className="flex items-center justify-between pb-2">
                  <span
                    className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] opacity-80 uppercase"
                    style={{ fontFamily: "'Space Grotesk', monospace" }}
                  >
                    {project.number} / {project.category}
                  </span>

                  <div className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center opacity-80 bg-white/40">
                    <ArrowUpRight size={15} />
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
            <span>SWIPE OR USE ARROWS</span>
          </div>

        </div>

      </div>

      {/* EXPANDED PROJECT DETAIL MODAL */}
      {expandedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md transition-opacity animate-fadeIn"
          onClick={() => setExpandedIndex(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#FAF9F6] text-[#0C0C0E] rounded-3xl shadow-2xl overflow-y-auto border border-black/15 p-6 sm:p-10 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/10">
              <div className="flex items-center gap-3">
                <span
                  className="text-2xl sm:text-3xl font-black font-display text-[#2E828F]"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  PROJECT {PROJECTS[expandedIndex].number}
                </span>
                <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-black/5 text-[#0C0C0E]/80 border border-black/10">
                  {PROJECTS[expandedIndex].status}
                </span>
              </div>

              <button
                onClick={() => setExpandedIndex(null)}
                data-cursor="CLOSE"
                aria-label="Close project details"
                className="w-10 h-10 rounded-full bg-black/5 hover:bg-[#0C0C0E] hover:text-white flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Title & Description */}
            <div className="mb-6">
              <span className="text-xs font-mono tracking-widest text-[#2E828F] font-bold uppercase">
                {PROJECTS[expandedIndex].category}
              </span>
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#0C0C0E] mt-1 uppercase leading-[0.95]"
                style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
              >
                {PROJECTS[expandedIndex].name}
              </h3>
              <p className="text-sm font-sans text-[#0C0C0E]/80 mt-3 leading-relaxed">
                {PROJECTS[expandedIndex].description}
              </p>
            </div>

            {/* Role & What Built */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-5 rounded-2xl bg-[#F4EFEA] border border-black/10">
                <p className="text-xs font-mono font-bold tracking-widest text-[#0C0C0E]/60 uppercase mb-1">
                  MY ROLE
                </p>
                <p className="text-sm font-bold font-mono text-[#2E828F]">
                  {PROJECTS[expandedIndex].role}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F4EFEA] border border-black/10">
                <p className="text-xs font-mono font-bold tracking-widest text-[#0C0C0E]/60 uppercase mb-1">
                  WHAT I BUILT
                </p>
                <p className="text-xs sm:text-sm font-sans text-[#0C0C0E]/85">
                  {PROJECTS[expandedIndex].whatIBuilt}
                </p>
              </div>
            </div>

            {/* Features */}
            {PROJECTS[expandedIndex].features && (
              <div className="mb-6 p-6 rounded-2xl bg-white border border-black/10 shadow-xs">
                <p className="text-xs font-mono font-bold tracking-widest text-[#0C0C0E] uppercase mb-3 flex items-center gap-2">
                  <Cpu size={14} className="text-[#2E828F]" />
                  KEY ARCHITECTURE & HIGHLIGHTS
                </p>
                <ul className="space-y-2">
                  {PROJECTS[expandedIndex].features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-[#0C0C0E]/80">
                      <CheckCircle2 size={15} className="text-[#2E828F] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="mb-8">
              <p className="text-xs font-mono font-bold tracking-widest text-[#0C0C0E]/60 uppercase mb-2">
                TECHNOLOGIES
              </p>
              <div className="flex flex-wrap gap-2">
                {PROJECTS[expandedIndex].technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-[#0C0C0E] text-white tracking-wider font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Close Button Footer */}
            <div className="pt-6 border-t border-black/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#0C0C0E]/50">
                PRESS ESC OR CLICK TO CLOSE
              </span>
              <button
                onClick={() => setExpandedIndex(null)}
                className="px-6 py-2.5 rounded-xl bg-[#0C0C0E] text-white text-xs font-mono tracking-widest font-semibold hover:bg-[#2E828F] transition-colors"
              >
                COLLAPSE CARD
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
