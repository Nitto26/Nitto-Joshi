import React, { useState } from 'react';
import { Sparkles, Code2, Layers, Database, Palette, Wrench, Bot } from 'lucide-react';

// DYNAMIC SKILLS REPOSITORY (Add skills here to automatically update the counter & marquee)
export const SKILLS_DATA = [
  // Languages & Core
  { name: 'C', category: 'LANGUAGES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'C++', category: 'LANGUAGES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Java', category: 'LANGUAGES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Kotlin', category: 'LANGUAGES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
  { name: 'Python', category: 'LANGUAGES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'PHP', category: 'LANGUAGES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'JavaScript', category: 'LANGUAGES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', category: 'LANGUAGES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', category: 'LANGUAGES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'SQL', category: 'LANGUAGES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Bash', category: 'LANGUAGES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },

  // Frameworks & Web
  { name: 'React', category: 'FRAMEWORKS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', category: 'FRAMEWORKS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'FastAPI', category: 'FRAMEWORKS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Flask', category: 'FRAMEWORKS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'Flutter', category: 'FRAMEWORKS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },

  // Databases
  { name: 'MySQL', category: 'DATABASES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
  { name: 'PostgreSQL', category: 'DATABASES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'SQLite', category: 'DATABASES', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },

  // Creative & Media
  { name: 'Photoshop', category: 'CREATIVE', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
  { name: 'Blender', category: 'CREATIVE', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
  { name: 'Canva', category: 'CREATIVE', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  { name: 'Videography', category: 'CREATIVE', iconFallback: '🎥' },
  { name: 'Video Editing', category: 'CREATIVE', iconFallback: '✂️' },
  { name: 'Content Creation', category: 'CREATIVE', iconFallback: '✨' },
  { name: 'Social Media Content', category: 'CREATIVE', iconFallback: '📱' },
  { name: 'Visual Storytelling', category: 'CREATIVE', iconFallback: '🎨' },

  // Tools & DevOps
  { name: 'Git', category: 'TOOLS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', category: 'TOOLS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Docker', category: 'TOOLS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Firebase', category: 'TOOLS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },

  // Robotics & Hardware
  { name: 'Robotics', category: 'ROBOTICS', iconFallback: '🤖' },
  { name: 'Line Follower Robots', category: 'ROBOTICS', iconFallback: '⚡' },
  { name: 'RC Car', category: 'ROBOTICS', iconFallback: '🏎️' },
  { name: 'Robo Maze', category: 'ROBOTICS', iconFallback: '🧭' },
  { name: 'Automation', category: 'ROBOTICS', iconFallback: '⚙️' },
  { name: 'Hardware Problem Solving', category: 'ROBOTICS', iconFallback: '🛠️' }
];

export default function Skills({ isDarkMode }) {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const totalSkillsCount = SKILLS_DATA.length;

  // Split into 3 immersive alternating streams
  const row1 = SKILLS_DATA.slice(0, 12);
  const row2 = SKILLS_DATA.slice(12, 24);
  const row3 = SKILLS_DATA.slice(24);

  const renderIcon = (skill) => {
    if (skill.iconUrl) {
      return (
        <img
          src={skill.iconUrl}
          alt={skill.name}
          className={`w-9 h-9 sm:w-11 sm:h-11 object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110 ${
            isDarkMode && skill.name === 'Next.js' ? 'invert' : ''
          }`}
          loading="lazy"
        />
      );
    }
    return (
      <span className="text-2xl sm:text-3xl select-none filter drop-shadow-sm transform transition-transform duration-300 group-hover:scale-110">
        {skill.iconFallback || '⚡'}
      </span>
    );
  };

  return (
    <section
      id="skills"
      className={`py-24 sm:py-32 transition-colors duration-500 relative overflow-hidden select-none ${
        isDarkMode
          ? 'bg-[#060608] text-white border-b border-white/10'
          : 'bg-[#F4EFEA] text-[#0C0C0E] border-b border-black/[0.08]'
      }`}
      style={{ backgroundColor: isDarkMode ? '#060608' : '#F4EFEA' }}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-14 sm:mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span
            className={`text-xs font-mono font-bold tracking-[0.25em] uppercase ${
              isDarkMode ? 'text-[#E53E3E]' : 'text-[#2E828F]'
            }`}
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            04 / CAPABILITIES & ARSENAL
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2
            className={`text-5xl sm:text-6xl md:text-7xl font-black font-display tracking-tight leading-none flex items-baseline gap-1 ${
              isDarkMode ? 'text-white' : 'text-[#0C0C0E]'
            }`}
            style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
          >
            <span>TOOLS & CRAFT</span>
            <span className={`inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 ${
              isDarkMode ? 'bg-[#E53E3E]' : 'bg-[#2E828F]'
            }`} />
          </h2>

          {/* DYNAMIC SKILLS COUNTER TEXT */}
          <div className="flex items-center gap-2 pb-1">
            <p className={`text-sm sm:text-base font-mono font-semibold ${
              isDarkMode ? 'text-white/90' : 'text-[#0C0C0E]/80'
            }`}>
              Skilled in{' '}
              <span className={isDarkMode ? 'text-[#E53E3E]' : 'text-[#2E828F]'}>
                {totalSkillsCount} skills
              </span>{' '}
              in different categories
            </p>
          </div>
        </div>
      </div>

      {/* IMMERSIVE INFINITE STREAM MARQUEE */}
      <div className="relative w-full space-y-6 sm:space-y-8 overflow-hidden py-4">
        
        {/* Left & Right Gradient Fade Edges */}
        <div className={`absolute top-0 bottom-0 left-0 w-24 sm:w-48 z-20 pointer-events-none ${
          isDarkMode
            ? 'bg-gradient-to-r from-[#060608] to-transparent'
            : 'bg-gradient-to-r from-[#F4EFEA] to-transparent'
        }`} />
        <div className={`absolute top-0 bottom-0 right-0 w-24 sm:w-48 z-20 pointer-events-none ${
          isDarkMode
            ? 'bg-gradient-to-l from-[#060608] to-transparent'
            : 'bg-gradient-to-l from-[#F4EFEA] to-transparent'
        }`} />

        {/* Row 1: Gliding Left */}
        <div className="flex w-max animate-stream-left hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((skill, idx) => (
            <div
              key={`row1-${idx}`}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="flex items-center gap-3.5 mx-5 sm:mx-8 group cursor-default transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                {renderIcon(skill)}
              </div>
              <div>
                <span
                  className={`text-xl sm:text-2xl md:text-3xl font-black font-display tracking-tight uppercase block leading-none transition-colors ${
                    isDarkMode ? 'text-white group-hover:text-[#E53E3E]' : 'text-[#0C0C0E] group-hover:text-[#2E828F]'
                  }`}
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {skill.name}
                </span>
                <span className={`text-[10px] font-mono tracking-widest uppercase ${
                  isDarkMode ? 'text-white/50' : 'text-[#0C0C0E]/50'
                }`}>
                  {skill.category}
                </span>
              </div>
              <span className={`text-lg ml-4 select-none ${
                isDarkMode ? 'text-[#E53E3E]' : 'text-black/20'
              }`}>•</span>
            </div>
          ))}
        </div>

        {/* Row 2: Gliding Right */}
        <div className="flex w-max animate-stream-right hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2].map((skill, idx) => (
            <div
              key={`row2-${idx}`}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="flex items-center gap-3.5 mx-5 sm:mx-8 group cursor-default transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                {renderIcon(skill)}
              </div>
              <div>
                <span
                  className={`text-xl sm:text-2xl md:text-3xl font-black font-display tracking-tight uppercase block leading-none transition-colors ${
                    isDarkMode ? 'text-white group-hover:text-[#E53E3E]' : 'text-[#0C0C0E] group-hover:text-[#2E828F]'
                  }`}
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {skill.name}
                </span>
                <span className={`text-[10px] font-mono tracking-widest uppercase ${
                  isDarkMode ? 'text-white/50' : 'text-[#0C0C0E]/50'
                }`}>
                  {skill.category}
                </span>
              </div>
              <span className={`text-lg ml-4 select-none ${
                isDarkMode ? 'text-[#E53E3E]' : 'text-black/20'
              }`}>•</span>
            </div>
          ))}
        </div>

        {/* Row 3: Gliding Left */}
        <div className="flex w-max animate-stream-left-slow hover:[animation-play-state:paused]">
          {[...row3, ...row3, ...row3].map((skill, idx) => (
            <div
              key={`row3-${idx}`}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="flex items-center gap-3.5 mx-5 sm:mx-8 group cursor-default transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                {renderIcon(skill)}
              </div>
              <div>
                <span
                  className={`text-xl sm:text-2xl md:text-3xl font-black font-display tracking-tight uppercase block leading-none transition-colors ${
                    isDarkMode ? 'text-white group-hover:text-[#E53E3E]' : 'text-[#0C0C0E] group-hover:text-[#2E828F]'
                  }`}
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {skill.name}
                </span>
                <span className={`text-[10px] font-mono tracking-widest uppercase ${
                  isDarkMode ? 'text-white/50' : 'text-[#0C0C0E]/50'
                }`}>
                  {skill.category}
                </span>
              </div>
              <span className={`text-lg ml-4 select-none ${
                isDarkMode ? 'text-[#E53E3E]' : 'text-black/20'
              }`}>•</span>
            </div>
          ))}
        </div>

      </div>

      {/* Live Interactive Focus Strip */}
      <div className={`max-w-7xl mx-auto px-6 sm:px-12 mt-12 flex items-center justify-between text-xs font-mono pt-6 border-t ${
        isDarkMode ? 'text-white/60 border-white/10' : 'text-[#0C0C0E]/60 border-black/10'
      }`}>
        <div className="flex items-center gap-2">
          <Sparkles size={14} className={isDarkMode ? 'text-[#E53E3E]' : 'text-[#2E828F]'} />
          <span>
            {hoveredSkill ? (
              <>
                EXPLORING <strong className={isDarkMode ? 'text-white uppercase' : 'text-[#0C0C0E] uppercase'}>{hoveredSkill.name}</strong> ({hoveredSkill.category})
              </>
            ) : (
              'HOVER ANY SKILL TO PAUSE & INSPECT'
            )}
          </span>
        </div>

        <span className="hidden sm:inline tracking-wider">
          FULL-STACK • CREATIVE • ROBOTICS
        </span>
      </div>
    </section>
  );
}
