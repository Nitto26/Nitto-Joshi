import React from 'react';
import { MapPin, Code, Bot, Camera, Soup } from 'lucide-react';
import aboutImg from '../../assets/about.png';
import darkAboutImg from '../../assets/dark about.png';

export default function About({ isDarkMode }) {
  const activeAboutImg = isDarkMode ? darkAboutImg : aboutImg;

  return (
    <section
      id="about"
      className={`relative z-10 w-full min-h-screen border-t border-b transition-colors duration-500 select-none flex flex-col justify-between p-4 sm:p-10 lg:p-14 overflow-hidden ${
        isDarkMode
          ? 'bg-[#060608] text-white border-white/10'
          : 'bg-[#EDE6DA] text-[#0C0C0E] border-black/[0.08]'
      }`}
      style={{
        backgroundColor: isDarkMode ? '#060608' : '#EDE6DA',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      {/* SINGLE BACKGROUND IMAGE: about.png or dark about.png */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <img
          key={isDarkMode ? 'darkAbout' : 'lightAbout'}
          src={activeAboutImg}
          alt="Nitto Joshi editorial background"
          className="w-full h-full object-cover object-[78%_20%] sm:object-[72%_20%] lg:object-[68%_15%]"
        />
        {/* Subtle tone equalizer */}
        <div
          className={`absolute inset-0 pointer-events-none ${
            isDarkMode ? 'bg-[#060608]/20 mix-blend-multiply' : 'bg-[#EDE6DA]/10 mix-blend-multiply'
          }`}
        />
      </div>

      {/* Dynamic Gradient Overlay - Keeps text clear on left, shows person clearly on right */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-1"
        style={{
          background: isDarkMode
            ? `
              linear-gradient(to right, 
                rgba(6, 6, 8, 0.98) 0%, 
                rgba(6, 6, 8, 0.90) 45%, 
                rgba(6, 6, 8, 0.25) 65%, 
                rgba(6, 6, 8, 0.0) 80%
              ),
              linear-gradient(to top, 
                rgba(6, 6, 8, 0.95) 0%, 
                rgba(6, 6, 8, 0.75) 12%, 
                rgba(6, 6, 8, 0.0) 28%
              )
            `
            : `
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
        <div className={`flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-sans tracking-wide pl-2 sm:pl-8 ${
          isDarkMode ? 'text-white/80' : 'text-[#0C0C0E]/80'
        }`}>
          <span>Random</span>
          <span>Simple</span>
          <span>Design</span>
        </div>

        {/* Top Right: Location Badge & Quote */}
        <div className="flex flex-col items-end gap-1 sm:gap-2 pr-2 sm:pr-8">
          <div className={`flex items-center gap-1.5 text-xs sm:text-sm font-sans ${
            isDarkMode ? 'text-white' : 'text-[#0C0C0E]'
          }`}>
            <MapPin size={14} className={isDarkMode ? 'text-[#E53E3E]' : 'text-[#0C0C0E]'} />
            <div className="text-right leading-tight">
              <span className="block font-semibold">Thrissur,</span>
              <span className={`text-[11px] ${isDarkMode ? 'text-white/80' : 'text-[#0C0C0E]/80'}`}>Kerala, India</span>
            </div>
          </div>

          <div className="text-right">
            <span className={`block text-base font-serif font-black leading-none ${
              isDarkMode ? 'text-[#E53E3E]' : 'text-[#0C0C0E]'
            }`}>“</span>
            <span className={`text-xs font-sans font-medium block -mt-1 ${
              isDarkMode ? 'text-white' : 'text-[#0C0C0E]'
            }`}>
              Skilled<br />Creatively.
            </span>
          </div>
        </div>

      </div>

      {/* Middle Main Content Block */}
      <div className="relative z-10 w-full max-w-7xl mx-auto my-auto py-4 sm:py-6">

        {/* Section Eyebrow: ABOUT ME with line */}
        <div className="flex items-center gap-3 mb-3 sm:mb-4 pl-2 sm:pl-8">
          <span className={`text-xs font-mono font-bold tracking-[0.25em] uppercase ${
            isDarkMode ? 'text-[#E53E3E]' : 'text-[#0C0C0E]'
          }`}>
            ABOUT ME
          </span>
          <div className={`w-12 h-[1px] ${isDarkMode ? 'bg-[#E53E3E]/60' : 'bg-[#0C0C0E]/60'}`} />
        </div>

        {/* Text Container with Right Barrier on Mobile */}
        <div className="w-full max-w-[62%] xs:max-w-[68%] sm:max-w-2xl pl-2 sm:pl-8">

          <p className={`text-xl sm:text-2xl font-sans font-bold mb-1 ${
            isDarkMode ? 'text-white' : 'text-[#0C0C0E]'
          }`}>
            Hi, I’m
          </p>

          {/* SEE-THROUGH TYPOGRAPHY: NITTO JOSHI */}
          <h2
            className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tight leading-[0.88] mb-3 sm:mb-5 font-display select-none uppercase"
            style={{
              fontFamily: "'Oswald', 'Syne', sans-serif",
              letterSpacing: '-0.02em',
              backgroundImage: `url(${activeAboutImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center right',
              backgroundRepeat: 'no-repeat',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              filter: isDarkMode ? 'contrast(135%) brightness(120%)' : 'contrast(125%) brightness(95%)',
              WebkitTextStroke: isDarkMode ? '1.5px rgba(255, 255, 255, 0.85)' : 'none'
            }}
          >
            <span className="block">NITTO</span>
            <span className="block">JOSHI</span>
          </h2>

          {/* Roles Subtitle */}
          <div className={`mb-3 sm:mb-5 space-y-1 text-[11px] sm:text-sm font-sans font-bold tracking-wider uppercase leading-snug ${
            isDarkMode ? 'text-white' : 'text-[#0C0C0E]'
          }`}>
            <p>DEVELOPER &nbsp;•&nbsp; UI/UX DESIGNER &nbsp;•&nbsp; CREATIVE DEVELOPER</p>
            <p className={isDarkMode ? 'text-white/80' : 'text-[#0C0C0E]/85'}>CONTENT CREATOR &nbsp;•&nbsp; VIDEOGRAPHER &nbsp;•&nbsp; VIDEO EDITOR</p>
          </div>

          {/* Academic & Personal Bio Text */}
          <div className={`space-y-2.5 text-xs sm:text-sm leading-relaxed font-sans font-medium sm:font-normal ${
            isDarkMode ? 'text-white/90' : 'text-[#0C0C0E]'
          }`}>
            <p>
              I'm a final-year <strong className="font-bold">B.Sc. Computer Science</strong> student at{' '}
              <strong className="font-bold">St. Thomas College (Autonomous), Thrissur.</strong>
            </p>
            <p className={isDarkMode ? 'text-white/80' : 'text-[#0C0C0E]/90'}>
              I love coding, robotics, videography, editing, cooking and creating things that solve real problems.
              I enjoy taking an unfamiliar problem, understanding it logically and figuring out a way forward.
            </p>
            <p className={isDarkMode ? 'text-white/80' : 'text-[#0C0C0E]/90'}>
              Communication, curiosity and the willingness to learn are some of the things I bring into everything I build.
            </p>
          </div>

        </div>

        {/* Academic Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-5 sm:mt-8 pt-4 sm:pt-6 pl-2 sm:pl-8 max-w-3xl">

          {/* 95.5% 12th Grade */}
          <div className="flex flex-col">
            <span
              className={`text-3xl sm:text-5xl font-black font-display ${
                isDarkMode ? 'text-[#E53E3E]' : 'text-[#2B7A8B]'
              }`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              95.5%
            </span>
            <span className={`text-[11px] sm:text-xs font-sans mt-0.5 sm:mt-1 ${
              isDarkMode ? 'text-white/80' : 'text-[#0C0C0E]/80'
            }`}>
              12th Grade
            </span>
          </div>

          {/* A+ 10th Grade with divider */}
          <div className={`flex flex-col sm:border-l ${
            isDarkMode ? 'border-white/20' : 'border-black/20'
          } sm:pl-8`}>
            <span
              className={`text-3xl sm:text-5xl font-black font-display ${
                isDarkMode ? 'text-[#E53E3E]' : 'text-[#2B7A8B]'
              }`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              A+
            </span>
            <span className={`text-[11px] sm:text-xs font-sans mt-0.5 sm:mt-1 ${
              isDarkMode ? 'text-white/80' : 'text-[#0C0C0E]/80'
            }`}>
              10th Grade
            </span>
          </div>

          {/* 2024-2028 B.Sc. CS with divider */}
          <div className={`flex flex-col sm:border-l ${
            isDarkMode ? 'border-white/20' : 'border-black/20'
          } sm:pl-8`}>
            <span
              className={`text-3xl sm:text-5xl font-black font-display ${
                isDarkMode ? 'text-[#E53E3E]' : 'text-[#2B7A8B]'
              }`}
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              2024–2028
            </span>
            <span className={`text-[11px] sm:text-xs font-sans mt-0.5 sm:mt-1 leading-tight ${
              isDarkMode ? 'text-white/80' : 'text-[#0C0C0E]/80'
            }`}>
              B.Sc. Computer Science<br />(Expected)
            </span>
          </div>

        </div>

      </div>

      {/* Bottom 4 Feature Items Bar */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t ${
        isDarkMode ? 'border-white/15' : 'border-black/15'
      }`}>

        <div className={`flex items-center gap-3 p-3.5 rounded-xl border backdrop-blur-sm shadow-xs ${
          isDarkMode ? 'bg-[#121316]/85 border-white/10 text-white' : 'bg-[#EDE6DA]/85 border-black/10 text-[#0C0C0E]'
        }`}>
          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
            <Code size={16} />
          </div>
          <p className="text-[11px] sm:text-xs font-sans leading-tight">
            Logical problem solver who loves challenges.
          </p>
        </div>

        <div className={`flex items-center gap-3 p-3.5 rounded-xl border backdrop-blur-sm shadow-xs ${
          isDarkMode ? 'bg-[#121316]/85 border-white/10 text-white' : 'bg-[#EDE6DA]/85 border-black/10 text-[#0C0C0E]'
        }`}>
          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
            <Bot size={16} />
          </div>
          <p className="text-[11px] sm:text-xs font-sans leading-tight">
            Passionate about robotics and building ideas.
          </p>
        </div>

        <div className={`flex items-center gap-3 p-3.5 rounded-xl border backdrop-blur-sm shadow-xs ${
          isDarkMode ? 'bg-[#121316]/85 border-white/10 text-white' : 'bg-[#EDE6DA]/85 border-black/10 text-[#0C0C0E]'
        }`}>
          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
            <Camera size={16} />
          </div>
          <p className="text-[11px] sm:text-xs font-sans leading-tight">
            Creative in videography, editing and storytelling.
          </p>
        </div>

        <div className={`flex items-center gap-3 p-3.5 rounded-xl border backdrop-blur-sm shadow-xs ${
          isDarkMode ? 'bg-[#121316]/85 border-white/10 text-white' : 'bg-[#EDE6DA]/85 border-black/10 text-[#0C0C0E]'
        }`}>
          <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
            <Soup size={16} />
          </div>
          <p className="text-[11px] sm:text-xs font-sans leading-tight">
            Cooking, exploring and creating in everyday life.
          </p>
        </div>

      </div>

    </section>
  );
}
