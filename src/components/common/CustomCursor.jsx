import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHeadHovered, setIsHeadHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      const headTarget = e.target.closest('[data-cursor-head]');
      const clickable = e.target.closest('a, button, input, textarea, select, [role="button"]');

      if (headTarget) {
        setIsHeadHovered(true);
        setHovered(true);
        setCursorText('TAP?');
      } else if (target) {
        setIsHeadHovered(false);
        setHovered(true);
        setCursorText(target.getAttribute('data-cursor') || '');
      } else if (clickable) {
        setIsHeadHovered(false);
        setHovered(true);
        setCursorText('');
      } else {
        setIsHeadHovered(false);
        setHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth trailing follower animation
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrame;
    const follow = () => {
      setFollowerPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2
      }));
      animationFrame = requestAnimationFrame(follow);
    };
    animationFrame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrame);
  }, [pos, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        className="custom-cursor-dot"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          opacity: pos.x === -100 ? 0 : 1
        }}
      />
      <div
        className={`custom-cursor-follower ${hovered ? 'is-hovered' : ''} ${isHeadHovered ? 'is-head-hovered' : ''}`}
        style={{
          left: `${followerPos.x}px`,
          top: `${followerPos.y}px`,
          opacity: followerPos.x === -100 ? 0 : 1
        }}
      >
        {cursorText}
      </div>
    </>
  );
}
