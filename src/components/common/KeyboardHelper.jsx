import React, { useEffect } from 'react';

export default function KeyboardHelper() {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger when user is typing in form inputs
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        return;
      }

      const key = e.key.toLowerCase();
      if (key === 'a') {
        e.preventDefault();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      } else if (key === 'p') {
        e.preventDefault();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      } else if (key === 'e') {
        e.preventDefault();
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
      } else if (key === 's') {
        e.preventDefault();
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      } else if (key === 'c') {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return null;
}
