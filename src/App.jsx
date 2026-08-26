import React, { useState } from 'react';
import NoiseOverlay from './components/common/NoiseOverlay';
import ScrollProgress from './components/common/ScrollProgress';
import CustomCursor from './components/common/CustomCursor';
import KeyboardHelper from './components/common/KeyboardHelper';
import Navbar from './components/navigation/Navbar';
import SocialSidebar from './components/navigation/SocialSidebar';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import LogicHighlight from './components/sections/LogicHighlight';
import Projects from './components/sections/Projects';
import Competitions from './components/sections/Competitions';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 overflow-x-hidden ${
        isDarkMode
          ? 'bg-[#060608] text-white selection:bg-[#E53E3E] selection:text-white'
          : 'bg-[#FAF9F6] text-[#0C0C0E] selection:bg-[#2E828F] selection:text-white'
      }`}
    >
      {/* Global Interactive Utilities */}
      <NoiseOverlay />
      <ScrollProgress />
      <CustomCursor />
      <KeyboardHelper />

      {/* Navigation & Fixed Elements */}
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <SocialSidebar isDarkMode={isDarkMode} />

      {/* Main Single Page Sections */}
      <main id="main-content" className="relative z-10">
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <LogicHighlight isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Competitions isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
