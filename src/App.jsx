import { useEffect, useState, useCallback } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import BootScreen from './components/BootScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MatrixRain from './components/MatrixRain';
import ScanlineOverlay from './components/ScanlineOverlay';
import HiddenTerminal from './components/HiddenTerminal';
import './App.css';

const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'b', 'a',
];

function App() {
  const [booted, setBooted] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);

  // Konami code listener
  const handleKeyDown = useCallback((e) => {
    const key = e.key;
    if (key === KONAMI_CODE[konamiIndex] || key.toLowerCase() === KONAMI_CODE[konamiIndex]) {
      const nextIndex = konamiIndex + 1;
      if (nextIndex === KONAMI_CODE.length) {
        setTerminalOpen(true);
        setKonamiIndex(0);
      } else {
        setKonamiIndex(nextIndex);
      }
    } else {
      setKonamiIndex(0);
    }
  }, [konamiIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Scroll-triggered reveal animations
  useEffect(() => {
    if (!booted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [booted]);

  return (
    <>
      {!booted && <BootScreen onComplete={() => setBooted(true)} />}

      {booted && (
        <div className="app">
          <MatrixRain />

          <ScanlineOverlay />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      )}

      <HiddenTerminal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
