import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isDarkMode, onToggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const lastScrollYRef = useRef(0);
  const clickTimerRef = useRef(null);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ACHIEVEMENTS', href: '#achievements' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'CONTACT', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY < 60) {
        setVisible(true);
      } else {
        if (currentScrollY > lastScrollYRef.current + 8) {
          setVisible(false);
        } else if (currentScrollY < lastScrollYRef.current - 8) {
          setVisible(true);
        }
      }

      lastScrollYRef.current = currentScrollY;

      const sections = ['hero', 'about', 'projects', 'achievements', 'skills', 'contact'];
      const scrollPos = currentScrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lastTapTimeRef = useRef(0);

  // Instant Pointer/Touch Down handler for maximum sensitivity & zero touch delay
  const handleLogoPointerDown = (e) => {
    // Only handle primary touch / left mouse click
    if (e.button && e.button !== 0) return;

    const now = Date.now();
    const timeDelta = now - lastTapTimeRef.current;

    if (timeDelta > 0 && timeDelta < 450) {
      // INSTANT DOUBLE TAP DETECTED!
      e.preventDefault();
      lastTapTimeRef.current = 0;

      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
        clickTimerRef.current = null;
      }

      if (onToggleDarkMode) {
        onToggleDarkMode();
      }
    } else {
      // FIRST TAP -> start 220ms window for single-tap scroll
      lastTapTimeRef.current = now;
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

      clickTimerRef.current = setTimeout(() => {
        clickTimerRef.current = null;
        lastTapTimeRef.current = 0;
        setMobileMenuOpen(false);
        const target = document.querySelector('#hero');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 220);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          scrolled
            ? isDarkMode
              ? 'bg-[#060608]/90 backdrop-blur-md py-4 border-b border-white/10 shadow-lg'
              : 'bg-[#FAF9F6]/90 backdrop-blur-md py-4 border-b border-black/[0.08] shadow-sm'
            : 'bg-transparent py-7 border-b border-transparent'
        }`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 40,
          transition: 'transform 0.35s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.25s ease, background-color 0.3s ease'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Logo with Single Tap (Hero) / Double Tap (Dark Theme Toggle) */}
          <a
            href="#hero"
            onPointerDown={handleLogoPointerDown}
            onClick={(e) => e.preventDefault()}
            onDoubleClick={(e) => {
              e.preventDefault();
              if (clickTimerRef.current) clearTimeout(clickTimerRef.current);
              if (onToggleDarkMode) onToggleDarkMode();
            }}
            data-cursor={isDarkMode ? "DARK THEME" : "HOME"}
            className="flex items-center gap-1 group no-underline select-none cursor-pointer p-3 -m-3"
            style={{ touchAction: 'manipulation' }}
            title="Single tap: Go to Home | Double tap: Toggle Dark Theme"
          >
            <span
              className={`text-3xl sm:text-4xl font-black font-display tracking-tighter transition-transform duration-300 group-hover:scale-105 ${
                isDarkMode ? 'text-[#E53E3E]' : 'text-[#0C0C0E]'
              }`}
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900 }}
            >
              N.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  data-cursor="GOTO"
                  className={`text-xs font-mono font-bold tracking-[0.15em] transition-all duration-200 relative py-1 ${
                    isDarkMode
                      ? isActive
                        ? 'text-[#E53E3E]'
                        : 'text-white/80 hover:text-[#E53E3E]'
                      : isActive
                      ? 'text-[#0C0C0E]'
                      : 'text-[#0C0C0E]/70 hover:text-[#0C0C0E]'
                  }`}
                  style={{
                    fontFamily: "'Space Grotesk', monospace",
                    letterSpacing: '0.15em',
                    textDecoration: 'none'
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] ${
                        isDarkMode ? 'bg-[#E53E3E]' : 'bg-[#0C0C0E]'
                      }`}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Only: Circular Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-cursor="MENU"
              aria-label="Toggle navigation menu"
              className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-sm ${
                isDarkMode ? 'bg-white text-black' : 'bg-[#0C0C0E] text-white'
              }`}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-50 flex flex-col justify-between p-8 sm:p-12 md:hidden transition-opacity duration-300 backdrop-blur-xl animate-fadeIn ${
            isDarkMode ? 'bg-[#060608]/98 text-white' : 'bg-[#0C0C0E]/96 text-white'
          }`}
        >
          <div className="flex items-center justify-between">
            <span
              className={`text-4xl font-display font-black tracking-tighter ${
                isDarkMode ? 'text-[#E53E3E]' : 'text-white'
              }`}
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              N.
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col gap-5 my-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-3xl sm:text-4xl font-display font-extrabold tracking-tight transition-colors py-2 flex items-center justify-between border-b border-white/10 ${
                  isDarkMode ? 'text-white/90 hover:text-[#E53E3E]' : 'text-white/90 hover:text-[#2E828F]'
                }`}
                style={{
                  fontFamily: "'Oswald', 'Syne', sans-serif",
                  textDecoration: 'none'
                }}
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-white/40">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
            <span>NITTO JOSHI</span>
            <span>THRISSUR, INDIA</span>
          </div>
        </div>
      )}
    </>
  );
}
