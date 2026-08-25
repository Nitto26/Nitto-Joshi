import React from 'react';
import { Briefcase, Code, Terminal, Zap, Shield, Camera, Cpu, Layers } from 'lucide-react';
import { EXPERIENCE_DATA } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#F4EFEA] text-[#0C0C0E] border-b border-black/[0.08]"
      style={{ backgroundColor: '#F4EFEA' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-16 border-b border-black/[0.12]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-xs font-mono font-bold tracking-[0.25em] text-[#2E828F] uppercase"
                style={{ fontFamily: "'Space Grotesk', monospace" }}
              >
                03 / PRACTICAL TRACK RECORD
              </span>
            </div>
            
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-[#0C0C0E] leading-none"
              style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
            >
              WHERE I HAVE BUILT.
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-[#0C0C0E]/70 max-w-sm">
            Hands-on development across institutional web systems, automated mobile apps, hardware deployments, and technical projects.
          </p>
        </div>

        {/* Experience Blocks Grouped by Category */}
        <div className="space-y-16">
          {EXPERIENCE_DATA.map((group, groupIdx) => (
            <div key={group.category} className="space-y-6">
              
              {/* Category Subheading */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2E828F] uppercase bg-black/5 px-3 py-1.5 rounded-md">
                  0{groupIdx + 1}. {group.category}
                </span>
                <div className="flex-grow h-[1px] bg-black/[0.08]" />
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.items.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 sm:p-8 rounded-2xl bg-white/80 border border-black/10 hover:border-[#2E828F]/50 transition-all duration-300 hover:bg-white hover:shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3
                          className="text-xl sm:text-2xl font-black font-display text-[#0C0C0E]"
                          style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
                        >
                          {item.title}
                        </h3>
                        <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-black/5 text-[#0C0C0E]/70 shrink-0">
                          {item.type}
                        </span>
                      </div>

                      <p className="text-xs font-mono font-bold text-[#2E828F] uppercase tracking-wider mb-3">
                        {item.role}
                      </p>

                      <p className="text-xs sm:text-sm text-[#0C0C0E]/80 leading-relaxed font-sans mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-black/[0.06]">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-mono bg-black/5 text-[#0C0C0E]/80 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
