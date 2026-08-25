import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const lastScrollYRef = useRef(0);

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

      // Scrolled style threshold
      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Smart Hide on Scroll:
      // When at top (< 60px), always visible
      if (currentScrollY < 60) {
        setVisible(true);
      } else {
        // If scrolling down, hide navbar; if scrolling up, show navbar
        if (currentScrollY > lastScrollYRef.current + 8) {
          setVisible(false); // Hide on scroll down
        } else if (currentScrollY < lastScrollYRef.current - 8) {
          setVisible(true); // Re-appear on scroll up
        }
      }

      lastScrollYRef.current = currentScrollY;

      // Detect active section
      const sections = ['hero', 'about', 'projects', 'achievements', 'skills', 'services', 'contact'];
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        } ${
          scrolled
            ? 'bg-[#FAF9F6]/90 backdrop-blur-md py-4 border-b border-black/[0.08] shadow-sm'
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
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            data-cursor="HOME"
            className="flex items-center gap-1 group no-underline"
          >
            <span
              className="text-3xl sm:text-4xl font-black font-display tracking-tighter text-[#0C0C0E] transition-transform duration-300 group-hover:scale-105"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900 }}
            >
              N.
            </span>
          </a>

          {/* Desktop Navigation: Links only */}
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
                    isActive ? 'text-[#0C0C0E]' : 'text-[#0C0C0E]/70 hover:text-[#0C0C0E]'
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
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0C0C0E]"
                      style={{ height: '2px', backgroundColor: '#0C0C0E' }}
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
              className="w-10 h-10 rounded-full bg-[#0C0C0E] text-white flex items-center justify-center hover:scale-105 transition-transform duration-200 shadow-sm"
              style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '9999px',
                backgroundColor: '#0C0C0E',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#0C0C0E]/96 text-white flex flex-col justify-between p-8 sm:p-12 md:hidden transition-opacity duration-300 backdrop-blur-xl animate-fadeIn"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 50,
            backgroundColor: 'rgba(12, 12, 14, 0.96)',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2.5rem'
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-4xl font-display font-black tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
              N.
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              style={{
                width: '2.75rem',
                height: '2.75rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                color: '#fff'
              }}
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
                className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white/90 hover:text-[#2E828F] transition-colors py-2 flex items-center justify-between border-b border-white/10"
                style={{
                  fontFamily: "'Oswald', 'Syne', sans-serif",
                  textDecoration: 'none',
                  color: 'rgba(255, 255, 255, 0.9)'
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
