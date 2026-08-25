import React, { useState, useEffect } from 'react';
import { Trophy } from 'lucide-react';

export const ACHIEVEMENTS_DATA = [
  {
    id: '01',
    subtitle: 'State & Collegiate Tech Fests',
    title: 'AUTONOMOUS LINE FOLLOWER',
    badge: '1ST PLACE CHAMPION',
    desc: 'Engineered an autonomous high-speed line-following robot from scratch featuring custom PID tuning algorithms, optical sensor array calibration, and precision motor control.',
    tags: ['ROBOTICS', 'PID TUNING', 'EMBEDDED C++'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: '02',
    subtitle: 'National Robotics Challenges',
    title: 'AUTONOMOUS ROBO MAZE',
    badge: '1ST PLACE WINNER',
    desc: 'Designed and programmed an autonomous maze-navigating robot utilizing ultrasonic spatial mapping, real-time obstacle avoidance heuristics, and logical backtracking algorithms.',
    tags: ['MAZE SOLVER', 'ULTRASONIC SENSORS', 'LOGIC'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: '03',
    subtitle: 'Speed & Maneuvering Tournament',
    title: 'HIGH-TORQUE RC RACING',
    badge: '1ST PLACE PODIUM',
    desc: 'Engineered high-torque, responsive remote-controlled chassis with optimized weight distribution, mechanical steering geometry, and low-latency radio control link.',
    tags: ['RC RACING', 'CHASSIS DYNAMICS', 'SPEED'],
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: '04',
    subtitle: 'Inter-Collegiate CS Symposium',
    title: 'TECHNICAL CS TOURNAMENT',
    badge: '1ST PLACE WINNER',
    desc: 'Demonstrated deep conceptual mastery across operating systems, networking fundamentals, memory models, discrete algorithms, and computational theory against university teams.',
    tags: ['CS THEORY', 'NETWORKING', 'ALGORITHMS'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: '05',
    subtitle: 'Code & Syntax Tournaments',
    title: 'RAPID DEBUGGING SPRINT',
    badge: '1ST PLACE WINNER',
    desc: 'First-place finish in rapid defect hunting, runtime memory optimization, logic flaw detection, and code refactoring under aggressive sprint timers in C, Python & Java.',
    tags: ['DEBUGGING', 'CODE HUNTING', 'PERFORMANCE'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: '06',
    subtitle: '95.5% 12th & Full A+ 10th',
    title: 'ACADEMIC DISTINCTION',
    badge: 'HONORED RECIPIENT',
    desc: 'Honored with the Social Commitment Award alongside top-tier academic distinction (95.5% in 12th Grade & Full A+ in 10th Grade), reflecting relentless dedication and discipline.',
    tags: ['ACADEMIC DISTINCTION', '95.5%', 'FULL A+'],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80'
  }
];

export default function Competitions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandingTarget, setExpandingTarget] = useState(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isShifting, setIsShifting] = useState(false);

  const total = ACHIEVEMENTS_DATA.length;
  const current = ACHIEVEMENTS_DATA[activeIndex];

  const handleTileClick = (targetOriginalIndex, e) => {
    if (targetOriginalIndex === activeIndex || isExpanding) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const sectionEl = document.getElementById('achievements');
    const sectionRect = sectionEl ? sectionEl.getBoundingClientRect() : { top: 0, left: 0 };

    const startPos = {
      top: rect.top - sectionRect.top,
      left: rect.left - sectionRect.left,
      width: rect.width,
      height: rect.height
    };

    const targetItem = ACHIEVEMENTS_DATA[targetOriginalIndex];

    setExpandingTarget({
      item: targetItem,
      startPos
    });

    // Start expanding animation and queue shift simultaneously
    setIsExpanding(true);
    setIsShifting(true);

    setTimeout(() => {
      setActiveIndex(targetOriginalIndex);
      setExpandingTarget(null);
      setIsExpanding(false);
      setIsShifting(false);
    }, 650);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName) || isExpanding) return;
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % total);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + total) % total);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeIndex, isExpanding, total]);

  // Generate strictly the NEXT 2 QUEUED CARDS (+ 1 incoming behind for smooth slide-in inertia)
  const card1Index = (activeIndex + 1) % total;
  const card2Index = (activeIndex + 2) % total;
  const card3Index = (activeIndex + 3) % total;

  const queuedCards = [
    { ...ACHIEVEMENTS_DATA[card1Index], originalIndex: card1Index, slot: 0 },
    { ...ACHIEVEMENTS_DATA[card2Index], originalIndex: card2Index, slot: 1 },
    { ...ACHIEVEMENTS_DATA[card3Index], originalIndex: card3Index, slot: 2 }
  ];

  return (
    <section
      id="achievements"
      className="relative w-full min-h-[700px] lg:min-h-[780px] bg-[#0C0C0E] text-white overflow-hidden select-none flex flex-col justify-end p-6 sm:p-10 lg:p-14 border-b border-black/[0.08]"
      style={{ backgroundColor: '#0C0C0E' }}
    >
      {/* 1. BASE BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <img
          src={current.imageUrl}
          alt={current.title}
          className="w-full h-full object-cover object-center transition-transform duration-1000 scale-100"
        />
        {/* Atmospheric Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0E]/95 via-[#0C0C0E]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/40 to-[#0C0C0E]/20 z-10" />
      </div>

      {/* 2. EXPANDING CARD LAYER (Smoothly expands and covers the full screen) */}
      {expandingTarget && (
        <div
          className="absolute z-20 pointer-events-none overflow-hidden will-change-transform"
          style={{
            top: isExpanding ? '0px' : `${expandingTarget.startPos.top}px`,
            left: isExpanding ? '0px' : `${expandingTarget.startPos.left}px`,
            width: isExpanding ? '100%' : `${expandingTarget.startPos.width}px`,
            height: isExpanding ? '100%' : `${expandingTarget.startPos.height}px`,
            borderRadius: isExpanding ? '0px' : '24px',
            transition: 'all 0.65s cubic-bezier(0.19, 1, 0.22, 1)',
            boxShadow: isExpanding ? 'none' : '0 25px 50px rgba(0,0,0,0.5)'
          }}
        >
          <img
            src={expandingTarget.item.imageUrl}
            alt={expandingTarget.item.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0E]/95 via-[#0C0C0E]/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/40 to-[#0C0C0E]/20 z-10" />
        </div>
      )}

      {/* 3. MAIN CONTENT: LEFT DETAILS + EXACTLY 2 CARDS IN BOTTOM-RIGHT */}
      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-8 pb-4">
        
        {/* LEFT COLUMN: ACTIVE TITLE & DETAILS (Bottom-Left) */}
        <div className="w-full lg:max-w-xl space-y-4">
          
          {/* Eyebrow Subtitle */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-[#2E828F]" />
            <span className="text-xs sm:text-sm font-sans text-white/80 font-medium tracking-wide uppercase">
              {current.subtitle}
            </span>
          </div>

          {/* Huge Bold Title */}
          <h2
            key={`title-${current.id}`}
            className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-white uppercase leading-[0.92] animate-fadeIn"
            style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
          >
            {current.title}
          </h2>

          {/* Description */}
          <p
            key={`desc-${current.id}`}
            className="text-xs sm:text-sm font-sans text-white/80 leading-relaxed max-w-md animate-fadeIn"
          >
            {current.desc}
          </p>

          {/* Badge & Tags */}
          <div className="flex items-center flex-wrap gap-3 pt-1">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E828F] text-white text-xs font-mono font-bold tracking-wider shadow-lg">
              <Trophy size={13} className="fill-current" />
              <span>{current.badge}</span>
            </div>

            <div className="flex items-center gap-1.5">
              {current.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider bg-white/10 text-white/80 border border-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: ONLY 2 QUEUED CARDS IN BOTTOM-RIGHT WITH INERTIA SLIDE */}
        <div className="w-full lg:w-auto flex items-end justify-start lg:justify-end gap-4 overflow-hidden pb-1">
          {queuedCards.slice(0, 2).map((card, idx) => (
            <div
              key={card.id}
              onClick={(e) => handleTileClick(card.originalIndex, e)}
              className={`group relative shrink-0 w-[160px] sm:w-[190px] md:w-[220px] h-[240px] sm:h-[280px] md:h-[320px] rounded-3xl overflow-hidden cursor-pointer border border-white/20 hover:border-[#2E828F] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 select-none will-change-transform ${
                isShifting ? 'translate-x-[-12px]' : 'translate-x-0'
              }`}
              style={{
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, box-shadow 0.3s ease'
              }}
              data-cursor="EXPAND"
              role="button"
              aria-label={`Expand achievement ${card.title}`}
            >
              {/* Card Thumbnail Image */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Card Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/40 to-transparent opacity-85 group-hover:opacity-60 transition-opacity" />

              {/* Card Floating Content (NO NUMBER) */}
              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end text-white z-10">
                <div>
                  <span className="text-[10px] font-mono text-[#2E828F] font-bold uppercase tracking-wider block mb-1 truncate">
                    {card.badge}
                  </span>
                  <h4
                    className="text-sm sm:text-base font-black font-display uppercase tracking-tight text-white leading-tight group-hover:text-[#2E828F] transition-colors"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {card.title}
                  </h4>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
