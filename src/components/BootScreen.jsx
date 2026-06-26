import { useState, useEffect, useRef, useCallback } from 'react';
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
];

const HOLD_DURATION = 2000; // ms to fill the bar
const FILL_INTERVAL = 16; // ~60fps updates

export default function BootScreen({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [phase, setPhase] = useState('booting');
  // booting → holdPrompt → holding → denied → holdPrompt → ... → granted → hiding → hidden

  const [progress, setProgress] = useState(0);
  const holdTimerRef = useRef(null);
  const holdStartRef = useRef(null);

  // Boot sequence
  useEffect(() => {
    const timers = [];

    BOOT_LINES.forEach((line) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, line]);
        }, line.delay)
      );
    });

    // After lines finish, show the hold prompt
    timers.push(
      setTimeout(() => {
        setPhase('holdPrompt');
      }, 3000)
    );

    return () => {
      timers.forEach(clearTimeout);
      setVisibleLines([]);
    };
  }, []);

  const startHold = useCallback(() => {
    if (phase !== 'holdPrompt') return;
    setPhase('holding');
    holdStartRef.current = Date.now();
    setProgress(0);

    holdTimerRef.current = setInterval(() => {
      const elapsed = Date.now() - holdStartRef.current;
      const pct = Math.min(elapsed / HOLD_DURATION, 1);
      setProgress(pct);

      if (pct >= 1) {
        clearInterval(holdTimerRef.current);
        holdTimerRef.current = null;
        setPhase('granted');

        // Begin hiding after a short delay to show "ACCESS GRANTED"
        setTimeout(() => setPhase('hiding'), 800);
        setTimeout(() => {
          setPhase('hidden');
          onComplete?.();
        }, 1300);
      }
    }, FILL_INTERVAL);
  }, [phase, onComplete]);

  const endHold = useCallback(() => {
    if (phase !== 'holding') return;

    // They released early → denied
    if (holdTimerRef.current) {
      clearInterval(holdTimerRef.current);
      holdTimerRef.current = null;
    }

    setPhase('denied');
    setProgress(0);

    // Reset back to holdPrompt after a moment
    setTimeout(() => {
      setPhase('holdPrompt');
    }, 1500);
  }, [phase]);

  // Attach touch events for mobile
  useEffect(() => {
    const handleTouchEnd = () => endHold();
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);
    return () => {
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [endHold]);

  if (phase === 'hidden') return null;

  const isDenied = phase === 'denied';
  const isGranted = phase === 'granted';
  const showBar = phase === 'holdPrompt' || phase === 'holding' || isDenied || isGranted;

  return (
    <div
      className={`boot-screen ${phase === 'hiding' ? 'hiding' : ''} ${isDenied ? 'denied' : ''}`}
    >
      {/* Terminal lines */}
      {visibleLines.map((line, index) => (
        <div
          key={index}
          className={`boot-line ${line.type} ${isDenied ? 'denied-line' : ''}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {line.text}
        </div>
      ))}

      {/* Hold bar area */}
      {showBar && (
        <div className="hold-area">
          {isDenied && (
            <div className="boot-result denied-text">[ ACCESS DENIED ]</div>
          )}
          {isGranted && (
            <div className="boot-result granted-text">[ ACCESS GRANTED ]</div>
          )}

          {!isDenied && !isGranted && (
              <div
                className="hold-bar-container"
                onMouseDown={startHold}
                onMouseUp={endHold}
                onMouseLeave={endHold}
                onTouchStart={startHold}
              >
                <div
                  className="hold-bar-fill"
                  style={{ width: `${progress * 100}%` }}
                />
                <span className="hold-bar-text">
                  {phase === 'holding' ? 'AUTHENTICATING...' : 'PRESS AND HOLD TO GAIN ACCESS'}
                </span>
              </div>
          )}
        </div>
      )}
    </div>
  );
}
