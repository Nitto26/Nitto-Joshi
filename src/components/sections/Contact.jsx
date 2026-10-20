import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import stickmanAnimation from '../../assets/stickman.json';
import Lanyard from './Lanyard';

export default function Contact() {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (!lottieRef.current) return;

    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: stickmanAnimation,
    });

    return () => anim.destroy();
  }, []);

  return (
    <>
      <style>{`
        @keyframes walkLeftToRight {
          0% {
            transform: translateX(-165px);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        .walking-stickman-anim {
          animation: walkLeftToRight 7s linear infinite;
        }

        @media (min-width: 640px) {
          .walking-stickman-anim {
            animation-duration: 11s;
          }
        }

        @media (min-width: 1024px) {
          .walking-stickman-anim {
            animation-duration: 15s;
          }
        }

        /* Wide & 4K Desktop Monitors */
        @media (min-width: 1536px) {
          #contact .contact-container {
            max-width: 84rem !important;
          }
          #contact .contact-heading {
            font-size: 3.5rem !important;
          }
        }
      `}</style>

      <section
        id="contact"
        className="relative w-full min-h-screen bg-[#0A0A0C] text-white flex flex-col justify-center items-center overflow-hidden select-none px-4 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16 transition-all duration-300"
      >
        {/* Top Center Radial Glow Aura */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] lg:w-[750px] h-[220px] sm:h-[320px] lg:h-[450px] pointer-events-none opacity-30 blur-[70px] sm:blur-[90px] lg:blur-[140px]"
          style={{
            background: 'radial-gradient(circle, rgba(46, 130, 143, 0.45) 0%, rgba(10, 10, 12, 0) 70%)',
          }}
        />

        {/* Background Watermark Text "CONTACT" */}
        <div className="absolute top-8 lg:top-6 left-0 right-0 text-center pointer-events-none z-0">
          <span
            className="text-[12vw] lg:text-[10vw] xl:text-[8.5vw] font-black uppercase text-white/[0.025] tracking-widest leading-none block select-none"
            style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
          >
            CONTACT
          </span>
        </div>

        {/* Decorative Corner Lines */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 w-10 sm:w-16 h-10 sm:h-16 border-t border-l border-white/10 pointer-events-none" />
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 w-10 sm:w-16 h-10 sm:h-16 border-t border-r border-white/10 pointer-events-none" />

        {/* Main Section Content (VERTICALLY CENTERED ON DESKTOP) */}
        <div className="contact-container max-w-4xl sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center my-auto">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-5 space-y-4 lg:space-y-6 text-center lg:text-left">
            
            {/* Heading & Subtitle */}
            <div className="space-y-2 lg:space-y-3">
              <h2
                className="contact-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Get in touch
              </h2>
              <p className="text-xs sm:text-sm lg:text-base font-sans text-white/60 leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0">
                Have questions or ready to collaborate? Click or drag the access pass to flip and reveal all contact details.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive 3D Lanyard Card */}
          <div className="lg:col-span-7 flex justify-center items-center w-full">
            <div className="relative w-full h-[580px] sm:h-[640px] lg:h-[700px] flex items-center justify-center">
              <Lanyard
                frontImage="/card-front.png?v=9"
                backImage="/card-back.png?v=8"
                strapImage="/band.png?v=5"
                cardColor="#ffffff"
                finish="glossy"
                size={0.65}
                strapLength={0.24}
              />
            </div>
          </div>

        </div>

        {/* Larger Walking Stickman Animation aligned precisely at bottom screen edge */}
        <div
          className="walking-stickman-anim"
          style={{
            position: 'absolute',
            bottom: '0px',
            left: '0px',
            width: '165px',
            height: '98px',
            pointerEvents: 'none',
            zIndex: 30,
            willChange: 'transform',
          }}
        >
          <div
            ref={lottieRef}
            style={{ width: '100%', height: '100%' }}
          />
        </div>

      </section>
    </>
  );
}
