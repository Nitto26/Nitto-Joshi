import React from 'react';
import { Cpu, Terminal, Compass, ArrowRight } from 'lucide-react';

export default function LogicHighlight() {
  return (
    <section className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#0C0C0E] text-white relative overflow-hidden border-t border-b border-white/10">
      
      {/* Background Matrix Lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#2E828F 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Header Tag */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-[#2E828F] animate-pulse" />
          <span
            className="text-xs font-mono font-bold tracking-[0.3em] text-[#2E828F] uppercase"
            style={{ fontFamily: "'Space Grotesk', monospace" }}
          >
            CORE ADVANTAGE & MENTAL MODEL
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Main Manifesto Typography */}
          <div className="lg:col-span-8">
            <h2
              className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-display tracking-tight uppercase leading-[0.92] mb-8"
              style={{
                fontFamily: "'Oswald', 'Syne', sans-serif",
                letterSpacing: '-0.02em'
              }}
            >
              MY STRONGEST TOOL: <span className="text-[#2E828F]">LOGIC.</span>
            </h2>

            <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-white/90 leading-snug mb-6 max-w-3xl">
              Not a syntax trick. Not a transient framework.
            </p>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans max-w-2xl">
              The innate ability to understand an unfamiliar problem, dissect it into first principles, learn whatever tools or technologies are necessary, and engineer a robust solution.
            </p>
          </div>

          {/* Right Engineering Steps Card */}
          <div className="lg:col-span-4 bg-white/[0.04] border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm space-y-6">
            
            <div className="flex items-start gap-4">
              <span className="text-xl font-mono font-bold text-[#2E828F]">01</span>
              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">Understand</h3>
                <p className="text-xs text-white/60 mt-1">Deep-dive into constraints, root causes, and user friction points.</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <div className="flex items-start gap-4">
              <span className="text-xl font-mono font-bold text-[#2E828F]">02</span>
              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">Deconstruct</h3>
                <p className="text-xs text-white/60 mt-1">Break complex problems into verifiable, algorithmic components.</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-white/10" />

            <div className="flex items-start gap-4">
              <span className="text-xl font-mono font-bold text-[#2E828F]">03</span>
              <div>
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">Learn & Build</h3>
                <p className="text-xs text-white/60 mt-1">Master unfamiliar languages or hardware rapidly to deliver working software.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
