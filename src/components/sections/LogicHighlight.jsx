import React from 'react';
import { Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

function GithubIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function LogicHighlight() {
  const socialLinks = PERSONAL_INFO.socials.filter(
    (s) => s.name.toLowerCase() !== 'youtube'
  );

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <GithubIcon size={30} />;
      case 'linkedin':
        return <LinkedinIcon size={30} />;
      case 'instagram':
        return <InstagramIcon size={30} />;
      case 'email':
      case 'mail':
        return <Mail size={30} />;
      default:
        return <Mail size={30} />;
    }
  };

  return (
    <section
      id="hot-links"
      className="py-12 sm:py-16 px-6 sm:px-12 bg-[#0C0C0E] text-white border-t border-b border-white/10 select-none flex items-center justify-center"
      style={{ backgroundColor: '#0C0C0E' }}
    >
      <div className="flex items-center justify-center gap-10 sm:gap-16 md:gap-20 max-w-2xl mx-auto">
        {socialLinks.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor={item.name.toUpperCase()}
            aria-label={`Nitto Joshi on ${item.name}`}
            className="text-white/80 hover:text-[#2E828F] hover:scale-125 transition-all duration-300 flex items-center justify-center no-underline"
          >
            {getSocialIcon(item.name)}
          </a>
        ))}
      </div>
    </section>
  );
}
