import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone, Sparkles } from 'lucide-react';
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
            transform: translateX(-200px);
          }
          100% {
            transform: translateX(100vw);
          }
        }
      `}</style>

      <section
        id="contact"
        className="relative w-full h-screen min-h-[620px] max-h-[960px] bg-[#0A0A0C] text-white flex flex-col justify-between overflow-hidden select-none px-6 sm:px-12 lg:px-16 py-8 sm:py-10"
      >
        {/* Top Center Radial Glow Aura */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[300px] pointer-events-none opacity-35 blur-[90px]"
          style={{
            background: 'radial-gradient(circle, rgba(46, 130, 143, 0.45) 0%, rgba(10, 10, 12, 0) 70%)',
          }}
        />

        {/* Background Watermark Text "CONTACT" */}
        <div className="absolute top-6 left-0 right-0 text-center pointer-events-none z-0">
          <span
            className="text-[11vw] sm:text-[13vw] font-black uppercase text-white/[0.03] tracking-widest leading-none block select-none"
            style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
          >
            CONTACT
          </span>
        </div>

        {/* Decorative Corner Lines */}
        <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-white/10 pointer-events-none" />
        <div className="absolute top-8 right-8 w-20 h-20 border-t border-r border-white/10 pointer-events-none" />

        {/* Main 16:9 Section Content (Centered in Viewport) */}
        <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          
          {/* Left Column: Headline & Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Eyebrow Pill Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/12 text-xs font-mono font-medium text-white/80 backdrop-blur-md">
                <Sparkles size={12} className="text-[#2E828F]" />
                <span>Contact</span>
              </div>
            </div>

            {/* Heading & Subtitle */}
            <div className="space-y-2">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Get in touch
              </h2>
              <p className="text-xs sm:text-sm font-sans text-white/60 leading-relaxed max-w-sm">
                Have questions or ready to transform your ideas into exceptional software solutions?
              </p>
            </div>

            {/* 3 Info Cards */}
            <div className="space-y-3 pt-1">
              
              {/* Card 1: Email us */}
              <div
                onClick={copyEmail}
                className="bg-[#121316]/90 border border-white/10 hover:border-[#2E828F]/60 rounded-xl p-3.5 flex items-center justify-between transition-all duration-300 group cursor-pointer shadow-lg backdrop-blur-xl"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:border-[#2E828F] group-hover:text-[#2E828F] transition-all">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Email us</h4>
                    <p className="text-xs font-sans font-medium text-white group-hover:text-[#2E828F] transition-colors">
                      nittojoshi@example.com
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#2E828F] transition-all">
                  {copied ? <Check size={14} className="text-green-400" /> : <ArrowUpRight size={14} />}
                </div>
              </div>

              {/* Card 2: Call us / Direct */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#121316]/90 border border-white/10 hover:border-[#2E828F]/60 rounded-xl p-3.5 flex items-center justify-between transition-all duration-300 group cursor-pointer shadow-lg backdrop-blur-xl"
                style={{ textDecoration: 'none' }}
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:border-[#2E828F] group-hover:text-[#2E828F] transition-all">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Direct channel</h4>
                    <p className="text-xs font-sans font-medium text-white group-hover:text-[#2E828F] transition-colors">
                      LinkedIn / GitHub (@nittojoshi)
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#2E828F] transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </a>

              {/* Card 3: Our location */}
              <div className="bg-[#121316]/90 border border-white/10 hover:border-[#2E828F]/60 rounded-xl p-3.5 flex items-center justify-between transition-all duration-300 group shadow-lg backdrop-blur-xl">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-white group-hover:border-[#2E828F] group-hover:text-[#2E828F] transition-all">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Our location</h4>
                    <p className="text-xs font-sans font-medium text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-[#2E828F] transition-all">
                  <ArrowUpRight size={14} />
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Compact Glassmorphic Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121316]/90 border border-white/10 rounded-[24px] p-5 sm:p-7 md:p-8 shadow-2xl backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1B1F] border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#2E828F] focus:ring-1 focus:ring-[#2E828F] transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1B1F] border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#2E828F] focus:ring-1 focus:ring-[#2E828F] transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message"
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1B1F] border border-white/10 text-white placeholder-white/40 text-xs sm:text-sm font-sans focus:outline-none focus:border-[#2E828F] focus:ring-1 focus:ring-[#2E828F] transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-white text-black font-sans text-xs sm:text-sm font-bold tracking-wide hover:bg-white/90 active:scale-[0.99] transition-all duration-200 shadow-xl cursor-pointer"
                  >
                    Submit
                  </button>
                </div>

                {/* Status Indicator */}
                {status && (
                  <p className="text-xs font-mono text-[#2E828F] text-center pt-1 animate-fadeIn">
                    {status}
                  </p>
                )}

              </form>
            </div>
          </div>

        </div>

        {/* Larger Walking Stickman Animation aligned precisely at bottom screen edge */}
        <div
          style={{
            position: 'absolute',
            bottom: '0px',
            left: '0px',
            width: '165px',
            height: '98px',
            pointerEvents: 'none',
            zIndex: 30,
            animation: 'walkLeftToRight 18s linear infinite',
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
