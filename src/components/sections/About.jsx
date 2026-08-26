import React from 'react';
import { MapPin, Code, Bot, Camera, Soup } from 'lucide-react';
import aboutImg from '../../assets/about.png';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#EDE6DA] text-[#0C0C0E] border-t border-b border-black/[0.08] select-none flex flex-col justify-between p-4 sm:p-10 lg:p-14 overflow-hidden"
      style={{
        backgroundColor: '#EDE6DA',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* SINGLE BACKGROUND IMAGE: about.png spanning the entire full-screen section */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          src={aboutImg}
          alt="Nitto Joshi editorial background"
          className="w-full h-full object-cover object-[78%_20%] sm:object-[72%_20%] lg:object-[68%_15%]"
        />
        {/* Subtle tone equalizer */}
        <div className="absolute inset-0 bg-[#EDE6DA]/10 mix-blend-multiply pointer-events-none" />
      </div>

      {/* Dynamic Cream Gradient Overlay - Keeps text clear on left, shows person clearly on right */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-1"
        style={{
          background: `
            linear-gradient(to right, 
              rgba(237, 230, 218, 0.98) 0%, 
              rgba(237, 230, 218, 0.90) 45%, 
              rgba(237, 230, 218, 0.25) 65%, 
              rgba(237, 230, 218, 0.0) 80%
            ),
            linear-gradient(to top, 
              rgba(237, 230, 218, 0.95) 0%, 
              rgba(237, 230, 218, 0.75) 12%, 
              rgba(237, 230, 218, 0.0) 28%
            )
          `
        }}
      />

      {/* Top Header Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-row items-start sm:items-center justify-between gap-4 pb-2">

        {/* Top Left: Design Taglines */}
        <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-sans tracking-wide text-[#0C0C0E]/80 pl-2 sm:pl-8">
          <span>Random</span>
          <span>Simple</span>
          <span>Design</span>
        </div>

        {/* Top Right: Location Badge & Quote */}
        <div className="flex flex-col items-end gap-1 sm:gap-2 pr-2 sm:pr-8">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-sans text-[#0C0C0E]">
            <MapPin size={14} className="text-[#0C0C0E]" />
            <div className="text-right leading-tight">
              <span className="block font-semibold">Thrissur,</span>
              <span className="text-[11px] text-[#0C0C0E]/80">Kerala, India</span>
            </div>
          </div>

          <div className="text-right">
            <span className="block text-base font-serif font-black leading-none text-[#0C0C0E]">“</span>
            <span className="text-xs font-sans font-medium text-[#0C0C0E] block -mt-1">
              Skilled<br />Creatively.
            </span>
          </div>
        </div>

      </div>

      {/* Middle Main Content Block */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-4 sm:py-6">

        {/* Section Eyebrow: ABOUT ME with line */}
        <div className="flex items-center gap-3 mb-3 sm:mb-4 pl-2 sm:pl-8">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#0C0C0E] uppercase">
            ABOUT ME
          </span>
          <div className="w-12 h-[1px] bg-[#0C0C0E]/60" />
        </div>

        {/* Text Container with Right Barrier on Mobile (max-w-[60%] on narrow screens) */}
        <div className="w-full max-w-[62%] xs:max-w-[68%] sm:max-w-2xl pl-2 sm:pl-8">

          <p className="text-xl sm:text-2xl font-sans font-bold text-[#0C0C0E] mb-1">
            Hi, I’m
          </p>

          {/* SEE-THROUGH TYPOGRAPHY: NITTO JOSHI */}
          <h2
            className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tight leading-[0.88] mb-3 sm:mb-5 font-display select-none uppercase"
            style={{
              fontFamily: "'Oswald', 'Syne', sans-serif",
              letterSpacing: '-0.02em',
              backgroundImage: `url(${aboutImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              backgroundRepeat: 'no-repeat',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              filter: 'contrast(125%) brightness(95%)'
            }}
          >
            <span className="block">NITTO</span>
            <span className="block">JOSHI</span>
          </h2>

          {/* Roles Subtitle */}
          <div className="mb-3 sm:mb-5 space-y-1 text-[11px] sm:text-sm font-sans font-bold tracking-wider text-[#0C0C0E] uppercase leading-snug">
            <p>DEVELOPER &nbsp;•&nbsp; UI/UX DESIGNER &nbsp;•&nbsp; CREATIVE DEVELOPER</p>
            <p className="text-[#0C0C0E]/85">CONTENT CREATOR &nbsp;•&nbsp; VIDEOGRAPHER &nbsp;•&nbsp; VIDEO EDITOR</p>
          </div>

          {/* Academic & Personal Bio Text - Bounded by mobile right barrier so it never touches Nitto's face */}
          <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-[#0C0C0E] font-sans font-medium sm:font-normal">
            <p>
              I'm a final-year <strong className="font-bold">B.Sc. Computer Science</strong> student at{' '}
              <strong className="font-bold">St. Thomas College (Autonomous), Thrissur.</strong>
            </p>
            <p className="text-[#0C0C0E]/95">
              I love coding, robotics, videography, editing, cooking and creating things that solve real problems.
              I enjoy taking an unfamiliar problem, understanding it logically and figuring out a way forward.
            </p>
            <p className="text-[#0C0C0E]/95">
              Communication, curiosity and the willingness to learn are some of the things I bring into everything I build.
            </p>
          </div>

        </div>

        {/* Academic Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-5 sm:mt-8 pt-4 sm:pt-6 pl-2 sm:pl-8 max-w-3xl">

          {/* 95.5% 12th Grade */}
          <div className="flex flex-col">
            <span
              className="text-3xl sm:text-5xl font-black font-display text-[#2B7A8B]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              95.5%
            </span>
            <span className="text-[11px] sm:text-xs font-sans text-[#0C0C0E]/80 mt-0.5 sm:mt-1">
              12th Grade
            </span>
          </div>

          {/* A+ 10th Grade with divider */}
          <div className="flex flex-col sm:border-l border-black/20 sm:pl-8">
            <span
              className="text-3xl sm:text-5xl font-black font-display text-[#2B7A8B]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              A+
            </span>
            <span className="text-[11px] sm:text-xs font-sans text-[#0C0C0E]/80 mt-0.5 sm:mt-1">
              10th Grade
            </span>
          </div>

          {/* 2024-2028 B.Sc. CS with divider */}
          <div className="flex flex-col sm:border-l border-black/20 sm:pl-8">
            <span
              className="text-3xl sm:text-5xl font-black font-display text-[#2B7A8B]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              2024–2028
            </span>
            <span className="text-[11px] sm:text-xs font-sans text-[#0C0C0E]/80 mt-0.5 sm:mt-1 leading-tight">
              B.Sc. Computer Science<br />(Expected)
            </span>
          </div>

        </div>

      </div>

      {/* Bottom 4 Feature Items Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-black/15">

        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EDE6DA]/85 backdrop-blur-sm border border-black/10 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#0C0C0E]">
            <Code size={16} />
          </div>
          <p className="text-[11px] sm:text-xs font-sans text-[#0C0C0E] leading-tight">
            Logical problem solver who loves challenges.
          </p>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EDE6DA]/85 backdrop-blur-sm border border-black/10 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#0C0C0E]">
            <Bot size={16} />
          </div>
          <p className="text-[11px] sm:text-xs font-sans text-[#0C0C0E] leading-tight">
            Passionate about robotics and building ideas.
          </p>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EDE6DA]/85 backdrop-blur-sm border border-black/10 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#0C0C0E]">
            <Camera size={16} />
          </div>
          <p className="text-[11px] sm:text-xs font-sans text-[#0C0C0E] leading-tight">
            Creative in videography, editing and storytelling.
          </p>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EDE6DA]/85 backdrop-blur-sm border border-black/10 shadow-xs">
          <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#0C0C0E]">
            <Soup size={16} />
          </div>
          <p className="text-[11px] sm:text-xs font-sans text-[#0C0C0E] leading-tight">
            Cooking, exploring and creating in everyday life.
          </p>
        </div>

      </div>

    </section>
  );
}
