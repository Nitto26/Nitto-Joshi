import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, MapPin, Database, Calendar, Gamepad2, Layers, Globe, Radio } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['ALL', 'Full-Stack & Mobile', 'Logic & Automation', 'Web & Systems', 'Creative & Interactive'];

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory || p.tags.includes(selectedCategory));

  const featuredProject = PROJECTS_DATA.find((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured || selectedCategory !== 'ALL');

  const openProject = (project) => {
    sounds.playPop();
    setActiveModalProject(project);
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#FAF9F6] text-[#0C0C0E] border-b border-black/[0.08]"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-black/[0.12]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#2E828F] uppercase">
                SELECTED WORKS ✦ 2024–PRESENT
              </span>
            </div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-[#0C0C0E] leading-none"
              style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
            >
              THINGS I BUILD.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedCategory(cat);
                  }}
                  data-cursor="FILTER"
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 border ${
                    active
                      ? 'bg-[#0C0C0E] text-white border-[#0C0C0E]'
                      : 'bg-transparent text-[#0C0C0E]/70 border-black/15 hover:border-black/50'
                  }`}
                  style={{ fontFamily: "'Space Grotesk', monospace" }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED SPOTLIGHT: SGS APP */}
        {selectedCategory === 'ALL' && featuredProject && (
          <div
            onClick={() => openProject(featuredProject)}
            data-cursor="VIEW CASE"
            className="mb-14 p-8 sm:p-12 rounded-3xl bg-[#F4EFEA] border border-black/12 hover:border-[#2E828F]/50 transition-all duration-400 cursor-pointer group shadow-sm hover:shadow-xl relative overflow-hidden"
          >
            {/* Corner status tag */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2E828F] animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#2E828F] uppercase">
                  FEATURED WORK • {featuredProject.status}
                </span>
              </div>
              <span className="text-2xl sm:text-3xl font-black font-display text-black/30 group-hover:text-[#2E828F] transition-colors">
                {featuredProject.number}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h3
                  className="text-4xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-[#0C0C0E] mb-3 group-hover:translate-x-1 transition-transform"
                  style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
                >
                  {featuredProject.title}
                </h3>
                
                <p className="text-sm sm:text-base font-mono font-semibold text-[#2E828F] uppercase tracking-wider mb-4">
                  {featuredProject.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#0C0C0E]/80 leading-relaxed mb-6 font-sans">
                  {featuredProject.problem} Engineered with an automatic location-based check-in workflow using custom geofencing parameters and high-efficiency API communication.
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-[#0C0C0E] text-white tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0C0C0E] group-hover:text-[#2E828F] transition-colors">
                  <span>EXPLORE ARCHITECTURE & CASE STUDY</span>
                  <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Right Visual Architecture Banner */}
              <div className="lg:col-span-5 relative">
                <div className="w-full aspect-[4/3] rounded-2xl bg-[#0C0C0E] text-white p-6 sm:p-8 flex flex-col justify-between border border-white/10 shadow-lg relative overflow-hidden group-hover:scale-101 transition-transform">
                  
                  {/* Radar Pulse Simulation */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#2E828F]/30 animate-ping pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-[#2E828F]/60 pointer-events-none" />
                  
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#2E828F]">
                      <Radio size={14} className="animate-pulse" />
                      <span>GEOFENCE ACTIVE</span>
                    </div>
                    <span className="text-xs font-mono text-white/50">KOTLIN / FASTAPI</span>
                  </div>

                  <div className="my-auto text-center z-10">
                    <div className="text-3xl font-display font-black text-white tracking-wider mb-1">
                      {featuredProject.highlight}
                    </div>
                    <p className="text-xs font-mono text-white/60">
                      Coordinates Verified • Low-Latency Sync
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pt-4 border-t border-white/10 z-10">
                    <span>ROLE: {featuredProject.role}</span>
                    <span>STATUS: {featuredProject.status}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Asymmetrical Grid for Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {regularProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProject(project)}
              data-cursor="VIEW"
              className="project-card flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#F4EFEA] border border-black/10 hover:border-[#2E828F]/60 cursor-pointer group"
            >
              <div>
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-black/[0.08]">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#2E828F] uppercase">
                    {project.category}
                  </span>
                  <span className="text-xl font-black font-display text-black/30 group-hover:text-[#2E828F] transition-colors">
                    {project.number}
                  </span>
                </div>

                {/* Project Title */}
                <h3
                  className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#0C0C0E] mb-2 group-hover:translate-x-1 transition-transform"
                  style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
                >
                  {project.title}
                </h3>

                <p className="text-xs font-mono text-[#0C0C0E]/70 mb-4 uppercase tracking-wider">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#0C0C0E]/80 leading-relaxed mb-6 font-sans">
                  {project.solution}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-white text-[#0C0C0E] border border-black/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#0C0C0E] group-hover:text-[#2E828F] transition-colors">
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight
                    size={15}
                    className="project-arrow transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
