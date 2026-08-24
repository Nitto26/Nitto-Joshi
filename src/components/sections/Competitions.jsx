import React from 'react';
import { Trophy, Award, Bot, Code, Zap, CheckCircle2, ShieldAlert } from 'lucide-react';
import { COMPETITIONS_DATA, CERTIFICATIONS_DATA } from '../../data/portfolioData';

export default function Competitions() {
  return (
    <section
      id="achievements"
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#FAF9F6] text-[#0C0C0E] border-b border-black/[0.08]"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-16 border-b border-black/[0.12]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#2E828F] uppercase">
                PODIUM FINISHES ✦ COMPETITIVE ARENAS
              </span>
            </div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-[#0C0C0E] leading-none"
              style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
            >
              ACHIEVEMENTS.
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-[#0C0C0E]/70 max-w-sm">
            Proven engineering excellence under pressure across autonomous robotics tracks, rapid coding sprints, and collegiate hackathons.
          </p>
        </div>

        {/* 3-Column Energetic Arena Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {COMPETITIONS_DATA.map((col) => (
            <div
              key={col.category}
              className="p-8 rounded-2xl bg-[#F4EFEA] border border-black/10 flex flex-col justify-between"
            >
              <div>
                {/* Column Title */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/10">
                  <h3
                    className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-[#0C0C0E]"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {col.category}
                  </h3>
                  <Trophy size={18} className="text-[#2E828F]" />
                </div>

                {/* Items */}
                <div className="space-y-6">
                  {col.items.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold font-mono text-[#0C0C0E]">
                          {item.name}
                        </span>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-[#2E828F]/15 text-[#2E828F] uppercase tracking-wider shrink-0">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#0C0C0E]/70 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Editorial Certifications Area */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0C0C0E] text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#2E828F] uppercase">
                VERIFIED CREDENTIALS
              </span>
              <h3
                className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white mt-1"
                style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
              >
                CERTIFICATIONS & ARCHIVES
              </h3>
            </div>
            <span className="text-xs font-mono text-white/50">
              OFFICIAL RECORDS • ACADEMIC & TECHNICAL
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS_DATA.map((cert) => (
              <div
                key={cert.title}
                className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#2E828F]/50 transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#2E828F] mb-1">
                  <span>{cert.category}</span>
                  <CheckCircle2 size={13} />
                </div>
                <p className="text-xs font-mono font-bold text-white uppercase">
                  {cert.title}
                </p>
                <p className="text-[10px] font-mono text-white/40 mt-1">
                  {cert.status}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
