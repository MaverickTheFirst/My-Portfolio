import { useState, useEffect } from 'react';
import './BootScreen.css';

const BOOT_LINES = [
  { text: 'BIOS v3.14.159 — Initializing system...', delay: 0, type: '' },
  { text: '[OK] Loading kernel modules...', delay: 200, type: 'success' },
  { text: '[OK] Mounting filesystem /dev/portfolio', delay: 400, type: 'success' },
  { text: '[OK] Starting network daemon...', delay: 550, type: 'success' },
  { text: '[WARN] Firewall detected — bypassing...', delay: 700, type: 'warning' },
  { text: '[OK] Firewall bypassed ✓', delay: 900, type: 'success' },
  { text: '[OK] Loading cybersecurity modules...', delay: 1050, type: 'success' },
  { text: '[OK] Initializing neural network...', delay: 1200, type: 'cyan' },
  { text: '[OK] Decrypting portfolio data...', delay: 1400, type: 'cyan' },
  { text: '[OK] Establishing secure connection (TLS 1.3)', delay: 1600, type: 'success' },
  { text: '> Scanning vulnerabilities... 0 found', delay: 1800, type: '' },
  { text: '> System integrity verified ✓', delay: 2000, type: 'success' },
  { text: '', delay: 2200, type: 'access' },
];

export default function BootScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [phase, setPhase] = useState('booting'); // booting, hiding, hidden

  useEffect(() => {
    const timers = [];

    BOOT_LINES.forEach((line) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, line]);
        }, line.delay)
      );
    });

    // Start hiding
    timers.push(
      setTimeout(() => {
        setPhase('hiding');
      }, 2800)
    );

    // Complete
    timers.push(
      setTimeout(() => {
        setPhase('hidden');
        onComplete?.();
      }, 3300)
    );

    return () => {
      timers.forEach(clearTimeout);
      setVisibleLines([]);
    };
  }, []);

  if (phase === 'hidden') return null;

  return (
    <div className={`boot-screen ${phase === 'hiding' ? 'hiding' : ''}`}>
      {visibleLines.map((line, index) => {
        if (line.type === 'access') {
          return (
            <div key={index} className="boot-line boot-access success">
              [ ACCESS GRANTED ]
            </div>
          );
        }
        return (
          <div
            key={index}
            className={`boot-line ${line.type}`}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {line.text}
          </div>
        );
      })}
    </div>
  );
}
