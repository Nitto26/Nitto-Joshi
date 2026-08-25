import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Send, Mail, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText('nittojoshi@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    setStatus('Message registered! Thank you for reaching out.');
    
    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#2E828F', '#0C0C0E', '#FAF9F6']
      });
    } catch (e) {}

    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 4000);
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 bg-[#0C0C0E] text-white relative overflow-hidden"
    >
      {/* Editorial stars in corners */}
      <div className="absolute top-10 left-10 text-2xl text-white/20 select-none four-star">✦</div>
      <div className="absolute bottom-10 right-10 text-2xl text-white/20 select-none four-star">✦</div>

      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-[#2E828F] uppercase">
            COMMUNICATION & INQUIRIES
          </span>
          <div className="w-12 h-[1px] bg-[#2E828F]" />
        </div>

        {/* Large Editorial Headline */}
        <div className="mb-16">
          <h2
            className="text-6xl sm:text-7xl md:text-8xl xl:text-9xl font-black font-display tracking-tight leading-[0.88] uppercase"
            style={{
              fontFamily: "'Oswald', 'Syne', sans-serif",
              letterSpacing: '-0.02em'
            }}
          >
            LET'S <span className="text-[#2E828F]">BUILD.</span>
          </h2>

          <p className="text-lg sm:text-2xl font-mono text-white/80 mt-6 max-w-2xl">
            Have an idea, an engineering problem, or something worth creating?
          </p>
        </div>

        {/* Main Grid: Left Details & Socials + Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 border-t border-white/10">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            
            <div>
              <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-1">
                CONTACT PERSON
              </p>
              <h3 className="text-3xl font-black font-display text-white" style={{ fontFamily: "'Oswald', sans-serif" }}>
                NITTO JOSHI
              </h3>
              <p className="text-sm font-mono text-[#2E828F] mt-0.5">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm font-mono text-white/80">
              <MapPin size={16} className="text-[#2E828F]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Direct Copy Email Box */}
            <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#2E828F]" />
                <span className="text-xs sm:text-sm font-mono text-white select-all">
                  nittojoshi@example.com
                </span>
              </div>
              <button
                onClick={copyEmail}
                data-cursor="COPY"
                aria-label="Copy email address"
                className="p-2 rounded-lg bg-white/10 hover:bg-[#2E828F] text-white transition-colors"
              >
                {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Social Links List with placeholders */}
            <div>
              <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-3">
                DIRECT CHANNELS
              </p>
              <div className="flex flex-wrap gap-3">
                {PERSONAL_INFO.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="VISIT"
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 hover:border-[#2E828F] hover:text-[#2E828F] text-xs font-mono tracking-wider transition-colors inline-flex items-center gap-1.5"
                    style={{ textDecoration: 'none', color: '#fff' }}
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-white/60 uppercase tracking-wider mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Maya Chen"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#2E828F] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-white/60 uppercase tracking-wider mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. maya@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#2E828F] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-white/60 uppercase tracking-wider mb-2">
                  PROJECT / MESSAGE
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the problem, vision, or system you want to build..."
                  className="w-full px-4 py-3.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-white/30 text-sm font-sans focus:outline-none focus:border-[#2E828F] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                data-cursor="SEND"
                className="w-full py-4 rounded-xl bg-[#2E828F] text-white font-mono text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-[#256c77] transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>TRANSMIT MESSAGE</span>
                <Send size={15} />
              </button>

              {status && (
                <p className="text-xs font-mono text-[#2E828F] text-center pt-2 animate-fadeIn">
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
