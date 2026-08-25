import React, { useState } from 'react';
import { Terminal, Database, Palette, Wrench, Sparkles, Check } from 'lucide-react';
import { SKILLS_DATA } from '../../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('development');
  const [inspectedSkill, setInspectedSkill] = useState(null);

  const tabs = [
    { id: 'development', label: 'DEVELOPMENT', icon: Terminal },
    { id: 'database', label: 'DATABASE', icon: Database },
    { id: 'creative', label: 'DESIGN & CREATIVE', icon: Palette },
    { id: 'tools', label: 'TOOLS & INTEGRATION', icon: Wrench }
  ];

  const currentSkills = SKILLS_DATA[activeTab] || [];

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#F4EFEA] text-[#0C0C0E] border-b border-black/[0.08]"
      style={{ backgroundColor: '#F4EFEA' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-12 border-b border-black/[0.12]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#2E828F] uppercase">
                CAPABILITIES & ARSENAL
              </span>
            </div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-[#0C0C0E] leading-none"
              style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
            >
              TOOLS. THINKING.
            </h2>
          </div>

          {/* Interactive Category Selector */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  data-cursor="SELECT"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 border ${
                    active
                      ? 'bg-[#0C0C0E] text-white border-[#0C0C0E]'
                      : 'bg-white/60 text-[#0C0C0E]/70 border-black/15 hover:border-black/50'
                  }`}
                  style={{ fontFamily: "'Space Grotesk', monospace" }}
                >
                  <Icon size={13} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Inspector Bar */}
        <div className="mb-8 p-4 rounded-xl bg-white border border-black/10 flex items-center justify-between min-h-[52px]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#2E828F] animate-pulse" />
            <span className="text-xs font-mono font-bold text-[#0C0C0E] uppercase">
              {inspectedSkill ? (
                <>
                  <span className="text-[#2E828F]">{inspectedSkill.name}</span> — {inspectedSkill.category} ({inspectedSkill.level})
                </>
              ) : (
                'HOVER ANY SKILL TO INSPECT ARCHITECTURE ROLE'
              )}
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#0C0C0E]/40 hidden sm:inline">
            SYSTEM ENGINEERING MATRIX
          </span>
        </div>

        {/* Interactive Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {currentSkills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => setInspectedSkill(skill)}
              onMouseLeave={() => setInspectedSkill(null)}
              data-cursor="SKILL"
              className="p-5 rounded-2xl bg-white/80 border border-black/10 hover:border-[#2E828F] hover:bg-white hover:shadow-lg transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#2E828F] block mb-1">
                  {skill.level}
                </span>
                <h3
                  className="text-lg sm:text-xl font-black font-display text-[#0C0C0E] group-hover:text-[#2E828F] transition-colors"
                  style={{ fontFamily: "'Oswald', sans-serif" }}
                >
                  {skill.name}
                </h3>
              </div>

              <p className="text-[11px] font-mono text-[#0C0C0E]/60 mt-3 pt-3 border-t border-black/[0.06]">
                {skill.category}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
