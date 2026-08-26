import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Check, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import lottie from 'lottie-web';
import { PERSONAL_INFO } from '../../data/portfolioData';
import stickmanAnimation from '../../assets/stickman.json';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
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

  const copyEmail = () => {
    navigator.clipboard.writeText('nittojoshi@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    setStatus('Message registered! Thank you for reaching out.');

    try {
      confetti({
        particleCount: 35,
        spread: 65,
        origin: { y: 0.75 },
        colors: ['#2E828F', '#FFFFFF', '#141416']
      });
    } catch (e) {}

    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 4500);
  };

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
      `}</style>

      <section
        id="contact"
        className="relative w-full h-screen min-h-[600px] bg-[#0A0A0C] text-white flex flex-col justify-end overflow-hidden select-none px-4 sm:px-8 lg:px-12 pt-6 pb-24 sm:pb-28 lg:pb-14"
      >
        {/* Top Center Radial Glow Aura */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] h-[180px] sm:h-[260px] pointer-events-none opacity-30 blur-[70px] sm:blur-[90px]"
          style={{
            background: 'radial-gradient(circle, rgba(46, 130, 143, 0.45) 0%, rgba(10, 10, 12, 0) 70%)',
          }}
        />

        {/* Background Watermark Text "CONTACT" - Cleanly placed behind content */}
        <div className="absolute top-4 lg:top-2 left-0 right-0 text-center pointer-events-none z-0">
          <span
            className="text-[12vw] lg:text-[10vw] font-black uppercase text-white/[0.025] tracking-widest leading-none block select-none"
            style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
          >
            CONTACT
          </span>
        </div>

        {/* Decorative Corner Lines */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 sm:w-16 h-10 sm:h-16 border-t border-l border-white/10 pointer-events-none" />
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 sm:w-16 h-10 sm:h-16 border-t border-r border-white/10 pointer-events-none" />

        {/* Main Section Content (Compact 16:9 inner width, aligned to bottom of screen) */}
        <div className="max-w-4xl sm:max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-end mb-2 sm:mb-4 lg:mb-6">
          
          {/* Left Column: Headline & Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            
            {/* Eyebrow Pill Badge */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/[0.06] border border-white/12 text-[11px] sm:text-xs font-mono font-medium text-white/80 backdrop-blur-md">
                <Sparkles size={11} className="text-[#2E828F]" />
                <span>Contact</span>
              </div>
            </div>

            {/* Heading & Subtitle */}
            <div className="space-y-1">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Get in touch
              </h2>
              <p className="text-[11px] sm:text-xs font-sans text-white/60 leading-relaxed max-w-xs sm:max-w-sm">
                Have questions or ready to transform your ideas into exceptional software solutions?
              </p>
            </div>

            {/* 3 Info Cards */}
            <div className="space-y-2 sm:space-y-2.5 pt-0.5">
              
              {/* Card 1: Email us */}
              <div
                onClick={copyEmail}
                className="bg-[#121316]/90 border border-white/10 hover:border-[#2E828F]/60 rounded-xl p-2.5 sm:p-3 flex items-center justify-between transition-all duration-300 group cursor-pointer shadow-lg backdrop-blur-xl"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:border-[#2E828F] group-hover:text-[#2E828F] transition-all shrink-0">
                    <Mail size={14} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[9px] font-mono text-white/50 uppercase tracking-wider">Email us</h4>
                    <p className="text-[11px] sm:text-xs font-sans font-medium text-white group-hover:text-[#2E828F] transition-colors truncate">
                      nittojoshi@example.com
                    </p>
                  </div>
                </div>

                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#2E828F] transition-all shrink-0 ml-1.5">
                  {copied ? <Check size={12} className="text-green-400" /> : <ArrowUpRight size={12} />}
                </div>
              </div>

              {/* Card 2: Call us / Direct */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121316]/90 border border-white/10 hover:border-[#2E828F]/60 rounded-xl p-2.5 sm:p-3 flex items-center justify-between transition-all duration-300 group cursor-pointer shadow-lg backdrop-blur-xl"
                style={{ textDecoration: 'none' }}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:border-[#2E828F] group-hover:text-[#2E828F] transition-all shrink-0">
                    <Phone size={14} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[9px] font-mono text-white/50 uppercase tracking-wider">Direct channel</h4>
                    <p className="text-[11px] sm:text-xs font-sans font-medium text-white group-hover:text-[#2E828F] transition-colors truncate">
                      LinkedIn / GitHub (@nittojoshi)
                    </p>
                  </div>
                </div>

                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#2E828F] transition-all shrink-0 ml-1.5">
                  <ArrowUpRight size={12} />
                </div>
              </a>

              {/* Card 3: Our location */}
              <div className="bg-[#121316]/90 border border-white/10 hover:border-[#2E828F]/60 rounded-xl p-2.5 sm:p-3 flex items-center justify-between transition-all duration-300 group shadow-lg backdrop-blur-xl">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:border-[#2E828F] group-hover:text-[#2E828F] transition-all shrink-0">
                    <MapPin size={14} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[9px] font-mono text-white/50 uppercase tracking-wider">Our location</h4>
                    <p className="text-[11px] sm:text-xs font-sans font-medium text-white truncate">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#2E828F] transition-all shrink-0 ml-1.5">
                  <ArrowUpRight size={12} />
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Compact Glassmorphic Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121316]/90 border border-white/10 rounded-[18px] sm:rounded-[22px] p-3.5 sm:p-6 shadow-2xl backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-[#1A1B1F] border border-white/10 text-white placeholder-white/40 text-xs font-sans focus:outline-none focus:border-[#2E828F] focus:ring-1 focus:ring-[#2E828F] transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-[#1A1B1F] border border-white/10 text-white placeholder-white/40 text-xs font-sans focus:outline-none focus:border-[#2E828F] focus:ring-1 focus:ring-[#2E828F] transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message"
                    className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-lg bg-[#1A1B1F] border border-white/10 text-white placeholder-white/40 text-xs font-sans focus:outline-none focus:border-[#2E828F] focus:ring-1 focus:ring-[#2E828F] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-0.5">
                  <button
                    type="submit"
                    className="w-full py-2.5 sm:py-3 rounded-xl bg-white text-black font-sans text-xs font-bold tracking-wide hover:bg-white/90 active:scale-[0.99] transition-all duration-200 shadow-xl cursor-pointer"
                  >
                    Submit
                  </button>
                </div>

                {/* Status Indicator */}
                {status && (
                  <p className="text-[11px] font-mono text-[#2E828F] text-center pt-0.5 animate-fadeIn">
                    {status}
                  </p>
                )}

              </form>
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
