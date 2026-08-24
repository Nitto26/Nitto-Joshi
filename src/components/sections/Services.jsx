import React from 'react';
import { Layers, Film, Cpu, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/portfolioData';

export default function Services() {
  const getIcon = (tier) => {
    switch (tier) {
      case 'DIGITAL':
        return Layers;
      case 'CREATIVE':
        return Film;
      case 'EXPERIMENTAL':
        return Cpu;
      default:
        return Layers;
    }
  };

  return (
    <section
      id="services"
      className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-[#FAF9F6] text-[#0C0C0E] border-b border-black/[0.08]"
      style={{ backgroundColor: '#FAF9F6' }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-16 border-b border-black/[0.12]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#2E828F] uppercase">
                EXPERTISE & SOLUTIONS
              </span>
            </div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-[#0C0C0E] leading-none"
              style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
            >
              WHAT I BUILD.
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono text-[#0C0C0E]/70 max-w-sm">
            Bridging robust computational logic with editorial visual design and experimental hardware robotics.
          </p>
        </div>

        {/* 3 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getIcon(service.tier);
            return (
              <div
                key={service.tier}
                className="p-8 sm:p-10 rounded-3xl bg-[#F4EFEA] border border-black/10 hover:border-[#2E828F]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg"
              >
                <div>
                  {/* Top Tier Badge & Icon */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/10">
                    <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2E828F] uppercase bg-black/5 px-3 py-1.5 rounded-full">
                      0{index + 1} • {service.tier}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#0C0C0E] text-white flex items-center justify-center group-hover:bg-[#2E828F] transition-colors">
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Pillar Title */}
                  <h3
                    className="text-2xl sm:text-3xl font-black font-display tracking-tight text-[#0C0C0E] mb-3"
                    style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
                  >
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#0C0C0E]/80 leading-relaxed mb-8 font-sans">
                    {service.desc}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-3 pt-6 border-t border-black/[0.08]">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0C0C0E]/60 block mb-2">
                      CORE CAPABILITIES
                    </span>
                    {service.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5 text-xs font-mono text-[#0C0C0E]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2E828F]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-black/[0.08] flex items-center justify-between text-xs font-mono text-[#0C0C0E]/70 group-hover:text-[#2E828F] transition-colors">
                  <span>READY TO DEPLOY</span>
                  <ArrowUpRight size={15} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
