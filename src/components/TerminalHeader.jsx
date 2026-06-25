import { useState, useEffect, useRef } from 'react';

export default function TerminalHeader({ command, section }) {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);
  const ref = useRef(null);

  const fullText = `root@deeptangshu:~$ ${command}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTyped) {
          setIsTyping(true);
          setHasTyped(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasTyped]);

  useEffect(() => {
    if (!isTyping) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [isTyping, fullText]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div ref={ref} className="terminal-header" style={{
      fontFamily: "var(--font-mono)",
      fontSize: '0.85rem',
      color: 'var(--neon-green)',
      marginBottom: '16px',
      textShadow: '0 0 8px rgba(0, 255, 65, 0.5)',
      opacity: hasTyped ? 1 : 0,
      transition: 'opacity 0.3s ease',
    }}>
      <span>{typedText}</span>
      <span style={{
        opacity: showCursor ? 1 : 0,
        color: 'var(--neon-green)',
        fontWeight: 'bold',
      }}>█</span>
    </div>
  );
}
