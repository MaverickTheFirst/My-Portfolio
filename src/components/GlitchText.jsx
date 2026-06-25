import { useState, useEffect, useRef } from 'react';

export default function GlitchText({ text, className = '', tag: Tag = 'span', intensity = 'low' }) {
  const [isHovered, setIsHovered] = useState(false);
  const elRef = useRef(null);

  const glitchClass = intensity === 'high' ? 'glitch-text glitch-high' : 'glitch-text';

  return (
    <Tag
      ref={elRef}
      className={`${glitchClass} ${isHovered ? 'glitch-hover' : ''} ${className}`}
      data-text={text}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {text}
      <style>{`
        .glitch-text {
          position: relative;
          display: inline-block;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .glitch-text::before {
          color: #0ff;
          animation: glitchBefore 3s infinite linear alternate-reverse;
          clip-path: inset(0 0 65% 0);
          opacity: 0.6;
        }
        .glitch-text::after {
          color: #ff0080;
          animation: glitchAfter 2s infinite linear alternate-reverse;
          clip-path: inset(65% 0 0 0);
          opacity: 0.6;
        }
        .glitch-text.glitch-hover::before {
          animation: glitchBeforeIntense 0.3s infinite linear alternate-reverse;
          opacity: 0.9;
        }
        .glitch-text.glitch-hover::after {
          animation: glitchAfterIntense 0.3s infinite linear alternate-reverse;
          opacity: 0.9;
        }
        .glitch-high::before {
          animation: glitchBeforeIntense 2s infinite linear alternate-reverse;
          opacity: 0.8;
        }
        .glitch-high::after {
          animation: glitchAfterIntense 1.5s infinite linear alternate-reverse;
          opacity: 0.8;
        }
        @keyframes glitchBefore {
          0% { clip-path: inset(0 0 85% 0); transform: translate(-2px, 0); }
          20% { clip-path: inset(15% 0 60% 0); transform: translate(2px, 0); }
          40% { clip-path: inset(40% 0 30% 0); transform: translate(-1px, 0); }
          60% { clip-path: inset(60% 0 15% 0); transform: translate(1px, 0); }
          80% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 0); }
          100% { clip-path: inset(10% 0 70% 0); transform: translate(2px, 0); }
        }
        @keyframes glitchAfter {
          0% { clip-path: inset(85% 0 0 0); transform: translate(2px, 0); }
          20% { clip-path: inset(60% 0 15% 0); transform: translate(-2px, 0); }
          40% { clip-path: inset(30% 0 40% 0); transform: translate(1px, 0); }
          60% { clip-path: inset(15% 0 60% 0); transform: translate(-1px, 0); }
          80% { clip-path: inset(5% 0 80% 0); transform: translate(2px, 0); }
          100% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, 0); }
        }
        @keyframes glitchBeforeIntense {
          0% { clip-path: inset(0 0 85% 0); transform: translate(-5px, 1px); }
          10% { clip-path: inset(20% 0 50% 0); transform: translate(4px, -1px); }
          20% { clip-path: inset(50% 0 20% 0); transform: translate(-3px, 2px); }
          30% { clip-path: inset(10% 0 70% 0); transform: translate(5px, 0); }
          40% { clip-path: inset(70% 0 10% 0); transform: translate(-4px, -2px); }
          50% { clip-path: inset(30% 0 40% 0); transform: translate(3px, 1px); }
          60% { clip-path: inset(60% 0 20% 0); transform: translate(-5px, 0); }
          70% { clip-path: inset(5% 0 80% 0); transform: translate(4px, 2px); }
          80% { clip-path: inset(40% 0 30% 0); transform: translate(-3px, -1px); }
          90% { clip-path: inset(80% 0 5% 0); transform: translate(5px, 0); }
          100% { clip-path: inset(15% 0 60% 0); transform: translate(-4px, 1px); }
        }
        @keyframes glitchAfterIntense {
          0% { clip-path: inset(85% 0 0 0); transform: translate(5px, -1px); }
          10% { clip-path: inset(50% 0 20% 0); transform: translate(-4px, 1px); }
          20% { clip-path: inset(20% 0 50% 0); transform: translate(3px, -2px); }
          30% { clip-path: inset(70% 0 10% 0); transform: translate(-5px, 0); }
          40% { clip-path: inset(10% 0 70% 0); transform: translate(4px, 2px); }
          50% { clip-path: inset(40% 0 30% 0); transform: translate(-3px, -1px); }
          60% { clip-path: inset(20% 0 60% 0); transform: translate(5px, 0); }
          70% { clip-path: inset(80% 0 5% 0); transform: translate(-4px, -2px); }
          80% { clip-path: inset(30% 0 40% 0); transform: translate(3px, 1px); }
          90% { clip-path: inset(5% 0 80% 0); transform: translate(-5px, 0); }
          100% { clip-path: inset(60% 0 15% 0); transform: translate(4px, -1px); }
        }
      `}</style>
    </Tag>
  );
}
