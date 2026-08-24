import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(new Date());
        setLocalTime(timeString);
      } catch (e) {
        setLocalTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 sm:px-10 lg:px-16 bg-[#08080A] text-white/70 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-black font-display text-white tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
            N.
          </span>
          <span>•</span>
          <span className="text-white/90 uppercase font-semibold">
            NITTO JOSHI
          </span>
          <span>•</span>
          <span className="text-[#2E828F] uppercase">
            SKILLED CREATIVELY.
          </span>
        </div>

        {/* Live IST Clock */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-white/80">
          <Clock size={13} className="text-[#2E828F]" />
          <span>THRISSUR, IN: {localTime || '11:15 PM IST'}</span>
        </div>

        {/* Right Actions & Back to Top */}
        <div className="flex items-center gap-6">
          <span className="text-white/40">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </span>

          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            aria-label="Back to top"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2E828F] text-white flex items-center justify-center transition-colors"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
