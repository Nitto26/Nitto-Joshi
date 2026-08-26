import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

export const ACHIEVEMENTS_DATA = [
  {
    id: '01',
    subtitle: 'State & Collegiate Tech Fests',
    title: 'AUTONOMOUS LINE\nFOLLOWER',
    badge: '1ST PLACE CHAMPION',
    desc: 'Engineered an autonomous high-speed line-following robot from scratch featuring custom PID tuning algorithms, optical sensor array calibration, and precision motor control.',
    tags: ['ROBOTICS', 'PID TUNING', 'EMBEDDED C++'],
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: '02',
    subtitle: 'National Robotics Challenges',
    title: 'AUTONOMOUS\nROBO MAZE',
    badge: '1ST PLACE WINNER',
    desc: 'Designed and programmed an autonomous maze-navigating robot utilizing ultrasonic spatial mapping, real-time obstacle avoidance heuristics, and logical backtracking algorithms.',
    tags: ['MAZE SOLVER', 'ULTRASONIC SENSORS', 'LOGIC'],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: '03',
    subtitle: 'Speed & Maneuvering Tournament',
    title: 'HIGH-TORQUE\nRC RACING',
    badge: '1ST PLACE PODIUM',
    desc: 'Engineered high-torque, responsive remote-controlled chassis with optimized weight distribution, mechanical steering geometry, and low-latency radio control link.',
    tags: ['RC RACING', 'CHASSIS DYNAMICS', 'SPEED'],
    imageUrl: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: '04',
    subtitle: 'Inter-Collegiate CS Symposium',
    title: 'TECHNICAL\nCS TOURNAMENT',
    badge: '1ST PLACE WINNER',
    desc: 'Demonstrated deep conceptual mastery across operating systems, networking fundamentals, memory models, discrete algorithms, and computational theory against university teams.',
    tags: ['CS THEORY', 'NETWORKING', 'ALGORITHMS'],
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: '05',
    subtitle: 'Code & Syntax Tournaments',
    title: 'RAPID\nDEBUGGING SPRINT',
    badge: '1ST PLACE WINNER',
    desc: 'First-place finish in rapid defect hunting, runtime memory optimization, logic flaw detection, and code refactoring under aggressive sprint timers in C, Python & Java.',
    tags: ['DEBUGGING', 'CODE HUNTING', 'PERFORMANCE'],
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: '06',
    subtitle: '95.5% 12th & Full A+ 10th',
    title: 'ACADEMIC\nDISTINCTION',
    badge: 'HONORED RECIPIENT',
    desc: 'Honored with the Social Commitment Award alongside top-tier academic distinction (95.5% in 12th Grade & Full A+ in 10th Grade), reflecting relentless dedication and discipline.',
    tags: ['ACADEMIC DISTINCTION', '95.5%', 'FULL A+'],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80'
  }
];

const TOTAL = ACHIEVEMENTS_DATA.length;
const AUTO_INTERVAL = 3500;
const EXPAND_DURATION = 650;
const CARD_GAP = 14;

export default function Competitions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(true);

  // Card expanding overlay
  const [expandTarget, setExpandTarget] = useState(null); // { imageUrl, rect }
  const [isExpanded, setIsExpanded] = useState(false);

  // Card track slide state
  // trackSlide: pixel amount the track is shifted left (negative = slide left)
  // trackAnimate: whether CSS transition is active on the track
  const [trackSlide, setTrackSlide] = useState(0);
  const [trackAnimate, setTrackAnimate] = useState(true);
  // Increments each transition → forces last card to remount with spawn animation
  const [spawnKey, setSpawnKey] = useState(0);
  // Which card slot is hidden during expansion (so only the overlay is visible)
  const [hiddenSlot, setHiddenSlot] = useState(-1);

  const sectionRef = useRef(null);
  const cardRefs = useRef([]); // refs for each card slot (5 cards)
  const rafRef = useRef(null);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const isAnimatingRef = useRef(false);

  // ── progress bar via rAF ──────────────────────────────────────────
  const startProgress = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startTimeRef.current = performance.now();
    const tick = (now) => {
      const pct = Math.min(((now - startTimeRef.current) / AUTO_INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const stopAll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  // Measure card step (width + gap) from first card ref
  const getCardStep = useCallback(() => {
    const el = cardRefs.current[0];
    if (el) return el.offsetWidth + CARD_GAP;
    return 182; // fallback
  }, []);

  // ── Core transition ───────────────────────────────────────────────
  // clickedSlot: which card slot (0..3) was clicked/auto-advanced
  // nextIndex: the ACHIEVEMENTS_DATA index to make active
  const triggerTransition = useCallback((nextIndex, clickedSlot) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    stopAll();

    // Measure clicked card position relative to section for expanding overlay
    const cardEl = cardRefs.current[clickedSlot];
    const sectionEl = sectionRef.current;
    let startRect = { top: 0, left: 0, width: 168, height: 232 };
    if (cardEl && sectionEl) {
      const cRect = cardEl.getBoundingClientRect();
      const sRect = sectionEl.getBoundingClientRect();
      startRect = {
        top: cRect.top - sRect.top,
        left: cRect.left - sRect.left,
        width: cRect.width,
        height: cRect.height,
      };
    }

    // How many card steps to slide the track left
    // Clicking slot 0 → slide 1 step, slot 1 → slide 2 steps, etc.
    const step = getCardStep();
    const slideAmount = (clickedSlot + 1) * step;

    const incoming = ACHIEVEMENTS_DATA[nextIndex];

    // 1. Hide left text immediately
    setTextVisible(false);

    // 2. Hide the clicked card so only the expanding overlay is visible,
    //    making it look like THE CARD ITSELF is expanding.
    setHiddenSlot(clickedSlot);

    // 3. Mount expanding overlay at card position (not yet expanded)
    setExpandTarget({ imageUrl: incoming.imageUrl, rect: startRect });
    setIsExpanded(false);

    // 4. Slide the card track left simultaneously
    setTrackAnimate(true);
    setTrackSlide(-slideAmount);

    // 5. Trigger overlay expansion (two rAF to let DOM mount first)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsExpanded(true);
      });
    });

    // 6. After expansion completes: snap track back (no animation), swap active
    setTimeout(() => {
      // ─ Disable track transition ─
      setTrackAnimate(false);
      // ─ Reset track to 0 ─
      setTrackSlide(0);
      // ─ Update active slide ─
      setActiveIndex(nextIndex);
      // ─ Remove overlay ─
      setExpandTarget(null);
      setIsExpanded(false);
      // ─ Un-hide the slot (new card is now in position) ─
      setHiddenSlot(-1);
      // ─ Restore left text ─
      setTextVisible(true);
      // ─ Trigger spawn on newly entered last card ─
      setSpawnKey(k => k + 1);

      // Re-enable track animation after snap settles (2 frames)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTrackAnimate(true);
          isAnimatingRef.current = false;
        });
      });
    }, EXPAND_DURATION - 50);

  }, [stopAll, getCardStep]);

  // ── Navigation ────────────────────────────────────────────────────
  const goNext = useCallback((slot = 0) => {
    if (isAnimatingRef.current) return;
    const nextIdx = (activeIndex + 1 + slot) % TOTAL;
    triggerTransition(nextIdx, slot);
  }, [activeIndex, triggerTransition]);

  const goPrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    stopAll();
    setTextVisible(false);
    setTimeout(() => {
      setActiveIndex(prev => (prev - 1 + TOTAL) % TOTAL);
      setTextVisible(true);
      isAnimatingRef.current = false;
    }, 420);
  }, [stopAll]);

  const goToCard = useCallback((slot) => {
    if (isAnimatingRef.current) return;
    const nextIdx = (activeIndex + 1 + slot) % TOTAL;
    triggerTransition(nextIdx, slot);
  }, [activeIndex, triggerTransition]);

  // ── Auto-advance ──────────────────────────────────────────────────
  useEffect(() => {
    setProgress(0);
    startProgress();
    timerRef.current = setTimeout(() => goNext(0), AUTO_INTERVAL);
    return () => stopAll();
  }, [activeIndex, goNext, startProgress, stopAll]);

  // ── Keyboard ──────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
      if (e.key === 'ArrowRight') goNext(0);
      else if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goNext, goPrev]);

  const current = ACHIEVEMENTS_DATA[activeIndex];

  // Render 5 queued cards:
  // slots 0,1,2 → fully visible
  // slot 3      → partially visible (clips at section edge)
  // slot 4      → hidden just off-screen right (slides in during transition)
  const cards = [0, 1, 2, 3, 4].map(offset => {
    const idx = (activeIndex + 1 + offset) % TOTAL;
    return { ...ACHIEVEMENTS_DATA[idx], originalIndex: idx, slot: offset };
  });

  return (
    <>
    <style>{`
      @keyframes cardSpawn {
        0%   { opacity: 0; transform: scale(0.82) translateY(18px); }
        45%  { opacity: 1; }
        100% { opacity: 1; transform: scale(1) translateY(0px); }
      }
    `}</style>
    <section
      id="achievements"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '600px',
        maxHeight: '900px',
        backgroundColor: '#0a0a0b',
        overflow: 'hidden',
        userSelect: 'none',
      }}
    >

      {/* ── BACKGROUND IMAGE ───────────────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          key={current.id}
          src={current.imageUrl}
          alt={current.title}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            transform: 'scale(1.03)',
          }}
        />
      </div>

      {/* ── GRADIENT OVERLAYS ──────────────────────────────────── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to right, rgba(10,10,11,0.93) 0%, rgba(10,10,11,0.55) 48%, rgba(10,10,11,0.08) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
        background: 'linear-gradient(to top, rgba(10,10,11,0.97) 0%, rgba(10,10,11,0.35) 42%, transparent 100%)',
      }} />

      {/* ── EXPANDING CARD OVERLAY ─────────────────────────────── */}
      {expandTarget && (
        <div
          style={{
            position: 'absolute',
            zIndex: 10,
            pointerEvents: 'none',
            overflow: 'hidden',
            willChange: 'top, left, width, height, border-radius',
            // Start at card position → expand to full section
            top:          isExpanded ? 0 : expandTarget.rect.top,
            left:         isExpanded ? 0 : expandTarget.rect.left,
            width:        isExpanded ? '100%' : expandTarget.rect.width,
            height:       isExpanded ? '100%' : expandTarget.rect.height,
            borderRadius: isExpanded ? '0px' : '18px',
            transition: [
              `top    ${EXPAND_DURATION}ms cubic-bezier(0.19,1,0.22,1)`,
              `left   ${EXPAND_DURATION}ms cubic-bezier(0.19,1,0.22,1)`,
              `width  ${EXPAND_DURATION}ms cubic-bezier(0.19,1,0.22,1)`,
              `height ${EXPAND_DURATION}ms cubic-bezier(0.19,1,0.22,1)`,
              `border-radius ${EXPAND_DURATION}ms cubic-bezier(0.19,1,0.22,1)`,
            ].join(', '),
          }}
        >
          <img
            src={expandTarget.imageUrl}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.03)' }}
          />
          {/* Gradients fade in as card expands so it looks like the BG */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(10,10,11,0.93) 0%, rgba(10,10,11,0.55) 48%, rgba(10,10,11,0.08) 100%)',
            opacity: isExpanded ? 1 : 0,
            transition: `opacity ${EXPAND_DURATION}ms ease`,
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(10,10,11,0.97) 0%, rgba(10,10,11,0.35) 42%, transparent 100%)',
            opacity: isExpanded ? 1 : 0,
            transition: `opacity ${EXPAND_DURATION}ms ease`,
          }} />
        </div>
      )}

      {/* ── MAIN CONTENT LAYER ─────────────────────────────────── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 20,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      }}>

        {/* Content row: left text + right card queue */}
        <div style={{
          width: '100%',
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          padding: '0 0 88px 4%',
        }}>

          {/* ── LEFT TEXT ────────────────────────────────────────── */}
          <div style={{
            maxWidth: '440px',
            display: 'flex', flexDirection: 'column', gap: '12px',
            opacity:   textVisible ? 1 : 0,
            transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.24s ease, transform 0.24s ease',
            flexShrink: 0,
          }}>
            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '28px', height: '1.5px', background: '#e8c840', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px', fontWeight: 600,
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>
                {current.subtitle}
              </span>
            </div>

            {/* Big title */}
            <h2 style={{
              fontFamily: "'Oswald', 'Barlow Condensed', sans-serif",
              fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)',
              fontWeight: 700, color: '#ffffff',
              lineHeight: 1.0, textTransform: 'uppercase',
              letterSpacing: '-0.01em', margin: 0, whiteSpace: 'pre-line',
            }}>
              {current.title}
            </h2>

            {/* Description */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '12.5px', color: 'rgba(255,255,255,0.70)',
              lineHeight: 1.65, maxWidth: '380px', margin: 0,
            }}>
              {current.desc}
            </p>

            {/* Badge */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '7px',
                background: '#e8c840', color: '#111',
                padding: '5px 14px', borderRadius: '999px',
                fontSize: '10px', fontFamily: "'Inter', sans-serif",
                fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>
                <Trophy size={11} />
                <span>{current.badge}</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: SLIDING CARD QUEUE ────────────────────────── */}
          {/*
            The track holds 5 cards. During transition we slide the entire
            track left by (clickedSlot+1) card-steps using CSS transform.
            After animation: snap track back to 0 (no transition) while
            simultaneously updating activeIndex — the new cards land
            at exactly the same visual positions, so the snap is invisible.
            The 5th card (hidden off-screen right) slides into view naturally.
          */}
          <div style={{
            flexShrink: 0,
            // Allow cards to overflow right (section clips them)
            overflow: 'visible',
            paddingRight: '3.5%',
          }}>
            <div
              style={{
                display: 'flex',
                gap: `${CARD_GAP}px`,
                alignItems: 'flex-end',
                // The slide animation
                transform: `translateX(${trackSlide}px)`,
                transition: trackAnimate
                  ? `transform ${EXPAND_DURATION}ms cubic-bezier(0.22,1,0.36,1)`
                  : 'none',
                willChange: 'transform',
              }}
            >
              {cards.map((card, slotIdx) => (
                <div
                  key={slotIdx === 4 ? `spawn-${spawnKey}-${card.originalIndex}` : card.originalIndex}
                  ref={el => cardRefs.current[slotIdx] = el}
                  onClick={() => slotIdx <= 2 && goToCard(slotIdx)}
                  style={{
                    position: 'relative',
                    width: 'clamp(128px, 11.5vw, 168px)',
                    height: 'clamp(170px, 17vw, 234px)',
                    flexShrink: 0,
                    borderRadius: '18px',
                    overflow: 'hidden',
                    cursor: slotIdx <= 2 ? 'pointer' : 'default',
                    border: '1px solid rgba(255,255,255,0.18)',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.55)',
                    // Hide the card being expanded — overlay takes its visual role
                    opacity: slotIdx === hiddenSlot ? 0 : 1,
                    pointerEvents: slotIdx === hiddenSlot ? 'none' : 'auto',
                    // Spawn animation on the new card that enters from the right
                    animation: slotIdx === 4
                      ? `cardSpawn 0.48s cubic-bezier(0.22,1,0.36,1) both`
                      : 'none',
                    animationDelay: slotIdx === 4 ? '20ms' : '0ms',
                  }}
                  role={slotIdx <= 2 ? 'button' : undefined}
                  aria-label={slotIdx <= 2 ? `View: ${card.title.replace('\n', ' ')}` : undefined}
                >
                  <img
                    src={card.imageUrl}
                    alt={card.title.replace('\n', ' ')}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', objectPosition: 'center',
                      display: 'block',
                      transition: 'transform 0.45s ease',
                    }}
                    onMouseEnter={e => { if (slotIdx <= 2) e.currentTarget.style.transform = 'scale(1.07)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                  />

                  {/* Card gradient */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)',
                  }} />

                  {/* Card label */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '14px 12px', zIndex: 2,
                  }}>
                    <span style={{
                      display: 'block',
                      fontSize: '9px', fontFamily: "'Inter', sans-serif",
                      color: 'rgba(255,255,255,0.58)',
                      letterSpacing: '0.09em', textTransform: 'uppercase',
                      marginBottom: '3px',
                    }}>
                      {card.subtitle}
                    </span>
                    <span style={{
                      display: 'block',
                      fontFamily: "'Oswald', 'Barlow Condensed', sans-serif",
                      fontSize: 'clamp(10.5px, 1vw, 13.5px)',
                      fontWeight: 600, color: '#ffffff',
                      textTransform: 'uppercase',
                      lineHeight: 1.15, letterSpacing: '0.02em',
                    }}>
                      {card.title.replace('\n', ' ')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR: Arrows + Progress ──────────────────────── */}
        <div style={{
          position: 'absolute', bottom: '32px', left: '4%', right: '4%',
          display: 'flex', alignItems: 'center', gap: '16px', zIndex: 30,
        }}>
          {/* Prev */}
          <button
            onClick={goPrev}
            style={{
              width: '36px', height: '36px', borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.28)',
              background: 'rgba(255,255,255,0.07)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(6px)',
              transition: 'background 0.2s, border-color 0.2s',
              flexShrink: 0, outline: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; }}
            aria-label="Previous achievement"
          >
            <ChevronLeft size={15} />
          </button>

          {/* Next */}
          <button
            onClick={() => goNext(0)}
            style={{
              width: '36px', height: '36px', borderRadius: '50%',
              border: '1.5px solid rgba(255,255,255,0.28)',
              background: 'rgba(255,255,255,0.07)', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(6px)',
              transition: 'background 0.2s, border-color 0.2s',
              flexShrink: 0, outline: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; }}
            aria-label="Next achievement"
          >
            <ChevronRight size={15} />
          </button>

          {/* Progress bar */}
          <div style={{
            width: '130px', height: '2px',
            background: 'rgba(255,255,255,0.15)',
            borderRadius: '2px', overflow: 'hidden', flexShrink: 0,
          }}>
            <div style={{
              height: '100%', width: `${progress}%`,
              background: '#e8c840', borderRadius: '2px',
            }} />
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
