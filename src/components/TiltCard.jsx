import { useRef, useCallback } from 'react';

export default function TiltCard({ children, className = '', glowColor = '0, 255, 65' }) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Glow effect following cursor
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    card.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(${glowColor}, 0.1) 0%, rgba(10, 10, 10, 0.85) 60%)`;
  }, [glowColor]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.background = 'rgba(10, 10, 10, 0.85)';
  }, []);

  return (
    <div
      ref={cardRef}
      className={`glass-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {children}
    </div>
  );
}
