import { X, ExternalLink, CheckCircle2, Layers, Cpu, Code2, Tag, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-md transition-opacity animate-fadeIn"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(12, 12, 14, 0.75)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF9F6] text-[#0C0C0E] rounded-2xl shadow-2xl overflow-y-auto border border-black/15 p-6 sm:p-10"
        style={{
          backgroundColor: '#FAF9F6',
          borderRadius: '1rem',
          maxWidth: '56rem',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Number & Close */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-black/10">
          <div className="flex items-center gap-3">
            <span
              className="text-2xl sm:text-3xl font-black font-display text-[#2E828F]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              PROJECT {project.number}
            </span>
            <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-black/5 text-[#0C0C0E]/80 border border-black/10">
              {project.status}
            </span>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            data-cursor="CLOSE"
            aria-label="Close project modal"
            className="w-9 h-9 rounded-full bg-black/5 hover:bg-[#0C0C0E] hover:text-white flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Project Title & Category */}
        <div className="mb-6">
          <span className="text-xs font-mono tracking-widest text-[#2E828F] font-bold uppercase">
            {project.category} • {project.type}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black font-display tracking-tight text-[#0C0C0E] mt-1"
            style={{ fontFamily: "'Oswald', 'Syne', sans-serif" }}
          >
            {project.title}
          </h2>
          <p className="text-sm sm:text-base font-mono text-[#0C0C0E]/70 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="p-4 rounded-xl bg-[#2E828F]/10 border border-[#2E828F]/25 mb-8 flex items-center gap-3">
          <Cpu className="text-[#2E828F] shrink-0" size={20} />
          <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#2E828F] uppercase">
            CORE HIGHLIGHT: {project.highlight}
          </span>
        </div>

        {/* Deep Dive Breakdown: Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          <div className="p-6 rounded-xl bg-[#F4EFEA] border border-black/10">
            <h3 className="text-xs font-mono font-bold tracking-widest text-[#E53E3E] uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E53E3E]" />
              THE CHALLENGE / PROBLEM
            </h3>
            <p className="text-sm leading-relaxed text-[#0C0C0E]/85">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#F4EFEA] border border-black/10">
            <h3 className="text-xs font-mono font-bold tracking-widest text-[#2E828F] uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2E828F]" />
              THE LOGICAL SOLUTION
            </h3>
            <p className="text-sm leading-relaxed text-[#0C0C0E]/85">
              {project.solution}
            </p>
          </div>

        </div>

        {/* Role & What Nitto Built */}
        <div className="mb-8 p-6 rounded-xl bg-white border border-black/10 shadow-sm">
          <h3 className="text-xs font-mono font-bold tracking-widest text-[#0C0C0E] uppercase mb-2">
            ROLE & WHAT WAS BUILT
          </h3>
          <p className="text-sm font-semibold text-[#2E828F] mb-2 font-mono">
            {project.role}
          </p>
          <p className="text-sm leading-relaxed text-[#0C0C0E]/80">
            {project.whatBuilt}
          </p>
        </div>

        {/* Technology Stack Tags */}
        <div className="mb-8">
          <h3 className="text-xs font-mono font-bold tracking-widest text-[#0C0C0E]/70 uppercase mb-3">
            TECHNOLOGIES & TOOLING USED
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0C0C0E] text-white tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-black/10 flex items-center justify-between">
          <span className="text-xs font-mono text-[#0C0C0E]/60">
            NITTO JOSHI CASE STUDY • LOGICAL ENGINEERING
          </span>
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-6 py-2.5 rounded-lg bg-[#0C0C0E] text-white text-xs font-mono tracking-widest font-semibold hover:bg-[#2E828F] transition-colors"
          >
            DONE READING
          </button>
        </div>

      </div>
    </div>
  );
}
