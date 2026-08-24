import React from 'react';
import NoiseOverlay from './components/common/NoiseOverlay';
import ScrollProgress from './components/common/ScrollProgress';
import CustomCursor from './components/common/CustomCursor';
import KeyboardHelper from './components/common/KeyboardHelper';
import Navbar from './components/navigation/Navbar';
import SocialSidebar from './components/navigation/SocialSidebar';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import LogicHighlight from './components/sections/LogicHighlight';
import Experience from './components/sections/Experience';
import Competitions from './components/sections/Competitions';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-[#0C0C0E] overflow-x-hidden selection:bg-[#2E828F] selection:text-white">
      {/* Global Interactive Utilities */}
      <NoiseOverlay />
      <ScrollProgress />
      <CustomCursor />
      <KeyboardHelper />

      {/* Navigation & Fixed Elements */}
      <Navbar />
      <SocialSidebar />

      {/* Main Single Page Sections */}
      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <LogicHighlight />
        <Experience />
        <Competitions />
        <Skills />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
