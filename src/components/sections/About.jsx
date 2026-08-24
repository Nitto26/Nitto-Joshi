import React from 'react';
import { MapPin, Code, Bot, Camera, Soup } from 'lucide-react';
import aboutImg from '../../assets/about.png';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 px-4 sm:px-8 lg:px-14 bg-[#FAF9F6] text-[#0C0C0E] border-t border-b border-black/[0.08] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Main Editorial Card with Cream Texture Background */}
        <div
          className="relative rounded-3xl overflow-hidden border border-black/10 shadow-xl bg-[#EDE6DA] p-6 sm:p-10 lg:p-14"
          style={{
            backgroundColor: '#EDE6DA',
            backgroundImage: `radial-gradient(#000000 0.5px, transparent 0.5px)`,
            backgroundSize: '32px 32px',
            backgroundPosition: '0 0',
            opacity: 1
          }}
        >
          {/* Four-Point Stars in Top Corners matching Reference */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 text-2xl sm:text-3xl text-[#0C0C0E] select-none four-star">
            ✦
          </div>
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-2xl sm:text-3xl text-[#0C0C0E] select-none four-star">
            ✦
          </div>

          {/* Background Image: about.png positioned on the right and blended with cream paper */}
          <div
            className="absolute top-0 right-0 w-full lg:w-[62%] h-[82%] pointer-events-none z-0 overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%), linear-gradient(to left, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 98%), linear-gradient(to left, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
              WebkitMaskComposite: 'destination-in',
              maskComposite: 'intersect'
            }}
          >
            <img
              src={aboutImg}
              alt="Nitto Joshi background composition"
              className="w-full h-full object-cover object-[75%_25%] sm:object-[70%_20%] opacity-95"
            />
          </div>

          {/* Foreground Content Container */}
          <div className="relative z-10">
            
            {/* Top Row: Left Spaced Text & Right Meta Details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-4">
              
              {/* Top Left: Random Simple Design */}
              <div className="flex items-center gap-6 text-xs sm:text-sm font-sans tracking-wide text-[#0C0C0E]/80 pl-8 sm:pl-10">
                <span>Random</span>
                <span>Simple</span>
                <span>Design</span>
              </div>

              {/* Top Right: Location Badge & Quote */}
              <div className="flex flex-col items-end gap-3 pr-8 sm:pr-10">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-sans text-[#0C0C0E]">
                  <MapPin size={13} className="text-[#0C0C0E]" />
                  <div className="text-right leading-tight">
                    <span className="block font-semibold">Thrissur,</span>
                    <span className="text-[11px] text-[#0C0C0E]/80">Kerala, India</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-lg font-serif font-black leading-none text-[#0C0C0E]">“</span>
                  <span className="text-xs font-sans font-medium text-[#0C0C0E] block -mt-1">
                    Skilled<br />Creatively.
                  </span>
                </div>
              </div>

            </div>

            {/* Section Eyebrow: ABOUT ME with line */}
            <div className="flex items-center gap-3 mb-6 pl-8 sm:pl-10">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#0C0C0E] uppercase">
                ABOUT ME
              </span>
              <div className="w-12 h-[1px] bg-[#0C0C0E]/60" />
            </div>

            {/* Main Narrative Block */}
            <div className="max-w-2xl pl-8 sm:pl-10">
              
              <p className="text-xl sm:text-2xl font-sans font-bold text-[#0C0C0E] mb-0.5">
                Hi, I’m
              </p>

              {/* Sky-Masked Oversized Typography: NITTO JOSHI. */}
              <h2
                className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black tracking-tight leading-[0.88] mb-6 font-display select-none uppercase"
                style={{
                  fontFamily: "'Oswald', 'Syne', sans-serif",
                  letterSpacing: '-0.02em',
                  backgroundImage: `url(${aboutImg}), linear-gradient(135deg, #2b7a8b 0%, #4696a8 50%, #6fb6c7 100%)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'left center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  textShadow: '0 0 1px rgba(0,0,0,0.1)'
                }}
              >
                <span className="block">NITTO</span>
                <span className="block">JOSHI.</span>
              </h2>

              {/* Roles Subtitle matching Reference */}
              <div className="mb-6 space-y-1 text-xs sm:text-sm font-sans font-bold tracking-wider text-[#0C0C0E] uppercase">
                <p>DEVELOPER &nbsp;•&nbsp; UI/UX DESIGNER &nbsp;•&nbsp; CREATIVE DEVELOPER</p>
                <p className="text-[#0C0C0E]/85">CONTENT CREATOR &nbsp;•&nbsp; VIDEOGRAPHER &nbsp;•&nbsp; VIDEO EDITOR</p>
              </div>

              {/* Academic & Personal Bio Text matching Reference */}
              <div className="space-y-3.5 text-xs sm:text-sm leading-relaxed text-[#0C0C0E] font-sans max-w-xl">
                <p>
                  I'm a final-year <strong className="font-bold">B.Sc. Computer Science</strong> student at{' '}
                  <strong className="font-bold">St. Thomas College (Autonomous), Thrissur.</strong>
                </p>
                <p className="text-[#0C0C0E]/90">
                  I love coding, robotics, videography, editing, cooking and creating things that solve real problems.
                  I enjoy taking an unfamiliar problem, understanding it logically and figuring out a way forward.
                </p>
                <p className="text-[#0C0C0E]/90">
                  Communication, curiosity and the willingness to learn are some of the things I bring into everything I build.
                </p>
              </div>

            </div>

            {/* Academic Stats Row matching Reference */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 pt-8 pl-8 sm:pl-10 max-w-3xl">
              
              {/* 95.5% 12th Grade */}
              <div className="flex flex-col">
                <span
                  className="text-4xl sm:text-5xl font-black font-display text-[#2B7A8B]"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  95.5%
                </span>
                <span className="text-xs font-sans text-[#0C0C0E]/80 mt-1">
                  12th Grade
                </span>
              </div>

              {/* A+ 10th Grade with divider */}
              <div className="flex flex-col sm:border-l border-black/20 sm:pl-8">
                <span
                  className="text-4xl sm:text-5xl font-black font-display text-[#2B7A8B]"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  A+
                </span>
                <span className="text-xs font-sans text-[#0C0C0E]/80 mt-1">
                  10th Grade
                </span>
              </div>

              {/* 2024-2028 B.Sc. CS with divider */}
              <div className="flex flex-col sm:border-l border-black/20 sm:pl-8">
                <span
                  className="text-4xl sm:text-5xl font-black font-display text-[#2B7A8B]"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  2024–2028
                </span>
                <span className="text-xs font-sans text-[#0C0C0E]/80 mt-1 leading-tight">
                  B.Sc. Computer Science<br />(Expected)
                </span>
              </div>

            </div>

            {/* Bottom 4 Feature Items Bar matching Reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-6 border-t border-black/15">
              
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/40 border border-black/5">
                <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#0C0C0E]">
                  <Code size={16} />
                </div>
                <p className="text-[11px] sm:text-xs font-sans text-[#0C0C0E] leading-tight">
                  Logical problem solver who loves challenges.
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/40 border border-black/5">
                <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#0C0C0E]">
                  <Bot size={16} />
                </div>
                <p className="text-[11px] sm:text-xs font-sans text-[#0C0C0E] leading-tight">
                  Passionate about robotics and building ideas.
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/40 border border-black/5">
                <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#0C0C0E]">
                  <Camera size={16} />
                </div>
                <p className="text-[11px] sm:text-xs font-sans text-[#0C0C0E] leading-tight">
                  Creative in videography, editing and storytelling.
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/40 border border-black/5">
                <div className="w-9 h-9 rounded-lg bg-black/5 flex items-center justify-center shrink-0 text-[#0C0C0E]">
                  <Soup size={16} />
                </div>
                <p className="text-[11px] sm:text-xs font-sans text-[#0C0C0E] leading-tight">
                  Cooking, exploring and creating in everyday life.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
