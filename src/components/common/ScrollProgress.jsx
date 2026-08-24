import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2.5px] bg-[#2E828F] z-[10001] transition-all duration-75"
      style={{
        width: `${progress}%`,
        position: 'fixed',
        top: 0,
        left: 0,
        height: '2.5px',
        backgroundColor: '#2E828F',
        zIndex: 10001
      }}
      aria-hidden="true"
    />
  );
}
