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
          
          {/* Left Column: Headline & Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-4 lg:space-y-6">
            
            {/* Eyebrow Pill Badge */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/12 text-xs lg:text-sm font-mono font-medium text-white/80 backdrop-blur-md">
                <Sparkles size={13} className="text-[#2E828F]" />
                <span>Contact</span>
              </div>
            </div>

            {/* Heading & Subtitle */}
            <div className="space-y-1.5 lg:space-y-2.5">
              <h2
                className="contact-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-display text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Get in touch
              </h2>
              <p className="text-xs sm:text-sm lg:text-base font-sans text-white/60 leading-relaxed max-w-xs sm:max-w-sm lg:max-w-md">
                Have questions or ready to transform your ideas into exceptional software solutions?
              </p>
            </div>

            {/* 3 Info Cards */}
            <div className="space-y-2.5 sm:space-y-3 lg:space-y-3.5 pt-1">
              
              {/* Card 1: Email us */}
              <div
                onClick={copyEmail}
                className="contact-info-card bg-[#121316]/90 border border-white/10 hover:border-[#2E828F]/60 rounded-xl lg:rounded-2xl p-3 sm:p-3.5 lg:p-4 xl:p-5 flex items-center justify-between transition-all duration-300 group cursor-pointer shadow-lg backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 lg:gap-4.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:border-[#2E828F] group-hover:text-[#2E828F] transition-all shrink-0">
                    <Mail size={16} className="lg:w-5 lg:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] lg:text-xs font-mono text-white/50 uppercase tracking-wider">Email us</h4>
                    <p className="text-xs sm:text-sm lg:text-base font-sans font-medium text-white group-hover:text-[#2E828F] transition-colors truncate">
                      nittojoshi@example.com
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#2E828F] transition-all shrink-0 ml-2">
                  {copied ? <Check size={14} className="text-green-400" /> : <ArrowUpRight size={14} className="lg:w-4 lg:h-4" />}
                </div>
              </div>

              {/* Card 2: Call us / Direct */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card bg-[#121316]/90 border border-white/10 hover:border-[#2E828F]/60 rounded-xl lg:rounded-2xl p-3 sm:p-3.5 lg:p-4 xl:p-5 flex items-center justify-between transition-all duration-300 group cursor-pointer shadow-lg backdrop-blur-xl"
                style={{ textDecoration: 'none' }}
              >
                <div className="flex items-center gap-3 lg:gap-4.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:border-[#2E828F] group-hover:text-[#2E828F] transition-all shrink-0">
                    <Phone size={16} className="lg:w-5 lg:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] lg:text-xs font-mono text-white/50 uppercase tracking-wider">Direct channel</h4>
                    <p className="text-xs sm:text-sm lg:text-base font-sans font-medium text-white group-hover:text-[#2E828F] transition-colors truncate">
                      LinkedIn / GitHub (@nittojoshi)
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#2E828F] transition-all shrink-0 ml-2">
                  <ArrowUpRight size={14} className="lg:w-4 lg:h-4" />
                </div>
              </a>

              {/* Card 3: Our location */}
              <div className="contact-info-card bg-[#121316]/90 border border-white/10 hover:border-[#2E828F]/60 rounded-xl lg:rounded-2xl p-3 sm:p-3.5 lg:p-4 xl:p-5 flex items-center justify-between transition-all duration-300 group shadow-lg backdrop-blur-xl">
                <div className="flex items-center gap-3 lg:gap-4.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:border-[#2E828F] group-hover:text-[#2E828F] transition-all shrink-0">
                    <MapPin size={16} className="lg:w-5 lg:h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] lg:text-xs font-mono text-white/50 uppercase tracking-wider">Our location</h4>
                    <p className="text-xs sm:text-sm lg:text-base font-sans font-medium text-white truncate">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#2E828F] transition-all shrink-0 ml-2">
                  <ArrowUpRight size={14} className="lg:w-4 lg:h-4" />
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Glassmorphic Interactive Form */}
          <div className="lg:col-span-7">
            <div className="contact-form-box bg-[#121316]/90 border border-white/10 rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-5 sm:p-6 lg:p-8 xl:p-10 shadow-2xl backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 lg:space-y-5">
                
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 lg:px-5 lg:py-3.5 rounded-xl bg-[#1A1B1F] border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm lg:text-base font-sans focus:outline-none focus:border-[#2E828F] focus:ring-1 focus:ring-[#2E828F] transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 lg:px-5 lg:py-3.5 rounded-xl bg-[#1A1B1F] border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm lg:text-base font-sans focus:outline-none focus:border-[#2E828F] focus:ring-1 focus:ring-[#2E828F] transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message"
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 lg:px-5 lg:py-3.5 rounded-xl bg-[#1A1B1F] border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm lg:text-base font-sans focus:outline-none focus:border-[#2E828F] focus:ring-1 focus:ring-[#2E828F] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-3 sm:py-3.5 lg:py-4 rounded-xl bg-white text-black font-sans text-xs sm:text-sm lg:text-base font-bold tracking-wide hover:bg-white/90 active:scale-[0.99] transition-all duration-200 shadow-xl cursor-pointer"
                  >
                    Submit
                  </button>
                </div>

                {/* Status Indicator */}
                {status && (
                  <p className="text-xs sm:text-sm font-mono text-[#2E828F] text-center pt-1 animate-fadeIn">
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
