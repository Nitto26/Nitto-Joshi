import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';
import hero1Img from '../../assets/hero1.png';
import hero2Img from '../../assets/hero2.png';

export default function Hero() {
  const [isHit, setIsHit] = useState(false);
  const [hitCount, setHitCount] = useState(0);
  const [toastMessage, setToastMessage] = useState('');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const hitTimeoutRef = useRef(null);

  // Preload hero2.png immediately on mount so it appears with 0ms delay on Vercel
  useEffect(() => {
    const img1 = new Image();
    img1.src = hero1Img;
    const img2 = new Image();
    img2.src = hero2Img;
  }, []);

  // Subtle Mouse Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setMouseOffset({ x: x * 10, y: y * 8 });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle head tap Easter egg (NO SOUND, instant swap)
  const handleHeadClick = (e) => {
    e.stopPropagation();
    setIsHit(true);
    setHitCount((prev) => prev + 1);

    const msgs = [
      "OWCH! You tapped my head 😵",
      "Hey! Watch the hair! 💥",
      "Oof! Brain power rebooting... ⚡",
      "Critical hit! Thinking in progress... 🧠",
      "Ouch! Logic circuits calibrating! 🛠️"
    ];
    const msg = msgs[hitCount % msgs.length];
    setToastMessage(msg);

    // Playful small spark particles
    try {
      confetti({
        particleCount: 16,
        spread: 50,
        origin: {
          x: e.clientX / window.innerWidth || 0.7,
          y: e.clientY / window.innerHeight || 0.4
        },
        colors: ['#0C0C0E', '#2E828F', '#E53E3E', '#F5EFEB']
      });
    } catch (err) {}

    if (hitTimeoutRef.current) {
      clearTimeout(hitTimeoutRef.current);
    }

    hitTimeoutRef.current = setTimeout(() => {
      setIsHit(false);
      setToastMessage('');
    }, 1800);
  };

  const scrollToWork = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-20 pb-0 sm:pt-24 sm:pb-12 px-6 sm:px-12 lg:px-24 overflow-hidden bg-[#FAF9F6]"
      style={{
        backgroundColor: '#FAF9F6',
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center z-10">
        
        {/* Left Column: Editorial Headline & Identity */}
        <div className="lg:col-span-6 flex flex-col justify-center lg:pl-12 xl:pl-16 z-20">
          
          {/* Eyebrow: HELLO, I'M */}
          <div className="mb-4">
            <span
              className="text-xs sm:text-sm font-mono tracking-[0.35em] text-[#0C0C0E] uppercase font-semibold"
              style={{ fontFamily: "'Space Grotesk', monospace", letterSpacing: '0.35em' }}
            >
              HELLO, I'M
            </span>
          </div>

          {/* Main Headline: NITTO JOSHI */}
          <h1
            className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black text-[#0C0C0E] tracking-tight leading-[0.88] mb-6 select-none font-display"
            style={{
              fontFamily: "'Oswald', 'Syne', sans-serif",
              letterSpacing: '-0.02em',
              fontWeight: 900
            }}
          >
            <span className="block transform transition-transform hover:translate-x-1 duration-300">
              NITTO
            </span>
            <span className="block transform transition-transform hover:translate-x-1 duration-300">
              JOSHI
            </span>
          </h1>

          {/* Hairline separator with dot terminal */}
          <div className="flex items-center w-full max-w-md my-4">
            <div className="h-[1.5px] bg-[#0C0C0E] flex-grow" style={{ height: '1.5px', backgroundColor: '#0C0C0E' }} />
            <div
              className="w-2 h-2 rounded-full bg-[#0C0C0E] shrink-0"
              style={{ width: '7px', height: '7px', backgroundColor: '#0C0C0E', borderRadius: '50%' }}
            />
          </div>

          {/* Tagline: I BUILD • SOLVE • CREATE */}
          <div className="my-3">
            <p
              className="text-xs sm:text-sm md:text-base font-mono tracking-[0.25em] font-medium text-[#0C0C0E] uppercase"
              style={{ fontFamily: "'Space Grotesk', monospace", letterSpacing: '0.25em' }}
            >
              I BUILD &nbsp;•&nbsp; SOLVE &nbsp;•&nbsp; CREATE
            </p>
          </div>

          {/* CTA: VIEW MY WORK button */}
          <div className="mt-8">
            <button
              onClick={scrollToWork}
              data-cursor="EXPLORE"
              className="group inline-flex items-center gap-4 bg-[#0C0C0E] text-[#FAF9F6] px-8 py-4 text-xs sm:text-sm font-mono tracking-widest font-bold uppercase hover:bg-[#2E828F] transition-all duration-300 shadow-md hover:shadow-xl"
              style={{
                fontFamily: "'Space Grotesk', monospace",
                backgroundColor: '#0C0C0E',
                color: '#FAF9F6',
                border: 'none',
                letterSpacing: '0.15em'
              }}
            >
              <span>VIEW MY WORK</span>
              <ArrowUpRight
                size={16}
                className="transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>

        </div>

        {/* Right Column: Hero Cutout PNG & Graphic Elements */}
        <div className="lg:col-span-6 relative flex items-end justify-center min-h-[340px] sm:min-h-[460px] lg:min-h-[640px] mt-4 lg:mt-0 pb-0">
          
          {/* Circular Brush Paint Texture Behind Nitto */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] sm:w-[420px] lg:w-[520px] h-[270px] sm:h-[420px] lg:h-[520px] rounded-full pointer-events-none -z-0"
            style={{
              background: 'radial-gradient(circle at 45% 45%, rgba(225, 222, 218, 0.9) 0%, rgba(235, 232, 228, 0.6) 45%, rgba(250, 249, 246, 0) 72%)',
              border: '24px solid rgba(220, 216, 210, 0.45)',
              filter: 'blur(4px)'
            }}
          />

          {/* Upper Right Code Symbol: </> */}
          <div
            className="absolute top-2 right-2 sm:top-6 sm:right-6 z-20 text-[#0C0C0E] font-mono text-xl sm:text-2xl font-bold tracking-widest select-none"
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            &lt;/&gt;
          </div>

          {/* 3x3 Dot Grid Matrix */}
          <div className="absolute right-0 sm:right-4 top-1/2 translate-y-4 z-20 grid grid-cols-3 gap-2.5 opacity-80 select-none">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#0C0C0E]"
                style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#0C0C0E' }}
              />
            ))}
          </div>

          {/* Bottom Left Brush Stroke Scribble */}
          <svg
            className="absolute bottom-6 left-2 sm:left-8 w-16 sm:w-28 h-10 sm:h-12 text-[#9A9690] opacity-60 z-20 pointer-events-none"
            viewBox="0 0 100 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 32 L35 8 L55 30 L80 12 L95 24" />
          </svg>

          {/* Cutout PNG Container */}
          <div
            className={`relative w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[460px] lg:max-w-[540px] flex items-end justify-center cursor-pointer select-none transition-transform duration-300 z-10 ${
              isHit ? 'shake-active' : ''
            }`}
            style={{
              transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0px)`
            }}
            onClick={handleHeadClick}
            data-cursor-head="true"
            aria-label="Nitto Joshi interactive portrait - Tap head"
          >
            {/* Dual Images Loaded in DOM for 0ms Instant Swap on Vercel */}
            <div className="relative w-auto max-h-[350px] xs:max-h-[400px] sm:max-h-[540px] lg:max-h-[640px] flex items-end">
              {/* Default Hero Image (hero1.png) */}
              <img
                src={hero1Img}
                alt="Nitto Joshi"
                className={`w-auto max-h-[350px] xs:max-h-[400px] sm:max-h-[540px] lg:max-h-[640px] object-contain object-bottom drop-shadow-2xl transition-opacity duration-100 ${
                  isHit ? 'opacity-0 absolute inset-0 pointer-events-none' : 'opacity-100 relative'
                }`}
                style={{
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.12))'
                }}
              />

              {/* Reaction Image (hero2.png) pre-mounted */}
              <img
                src={hero2Img}
                alt="Nitto Joshi reacting: OWCH!"
                className={`w-auto max-h-[350px] xs:max-h-[400px] sm:max-h-[540px] lg:max-h-[640px] object-contain object-bottom drop-shadow-2xl transition-opacity duration-100 ${
                  isHit ? 'opacity-100 relative scale-103 brightness-95' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
                style={{
                  filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.12))'
                }}
              />
            </div>

            {/* Comic "OWCH!" Pop Bubble on Hit */}
            {isHit && (
              <div
                className="comic-pop absolute top-4 right-8 sm:top-6 sm:right-16 z-30 bg-[#0C0C0E] text-white px-5 py-2.5 rounded-xl border-2 border-white shadow-2xl flex items-center gap-2 pointer-events-none"
                style={{
                  backgroundColor: '#0C0C0E',
                  color: '#FAF9F6',
                  fontFamily: "'Oswald', sans-serif"
                }}
              >
                <span className="text-2xl sm:text-3xl font-black tracking-wider text-[#FFD166]">
                  OWCH!
                </span>
                <span className="text-xl dizzy-star">😵</span>
                <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#0C0C0E]" />
              </div>
            )}

            {/* Floating Dizzy Stars around Head on hit */}
            {isHit && (
              <>
                <div className="absolute top-2 left-14 text-2xl dizzy-star pointer-events-none">✨</div>
                <div className="absolute top-12 left-4 text-xl dizzy-star pointer-events-none" style={{ animationDelay: '0.2s' }}>⭐</div>
                <div className="absolute top-0 right-28 text-2xl dizzy-star pointer-events-none" style={{ animationDelay: '0.4s' }}>💫</div>
              </>
            )}
          </div>

        </div>

      </div>

      {/* Floating Toast Notification on Easter Egg trigger */}
      {toastMessage && (
        <div
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-[#0C0C0E]/95 text-white px-6 py-3 rounded-full border border-white/20 shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-mono tracking-wide animate-bounce"
          style={{
            position: 'fixed',
            bottom: '2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 50,
            backgroundColor: 'rgba(12, 12, 14, 0.95)',
            color: '#FAF9F6',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            fontFamily: "'Space Grotesk', monospace"
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#2E828F] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
}
