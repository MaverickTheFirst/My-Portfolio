import { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import './Hero.css';

const ROLES = [
  'CSE Student',
  'Cybersecurity Enthusiast',
  'Web Developer',
  'Problem Solver',
  'Tech Explorer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <ParticleBackground />
      <div className="hero-bg-orb hero-bg-orb-1" />
      <div className="hero-bg-orb hero-bg-orb-2" />
      <div className="hero-bg-orb hero-bg-orb-3" />

      <div className="hero-content">
        <p className="hero-greeting">Hello, I&apos;m</p>
        <h1 className="hero-name">
          <span className="hero-name-gradient">Deeptangshu Banerjee</span>
        </h1>
        <p className="hero-role">
          <span className="hero-typewriter">{displayText}</span>
        </p>
        <p className="hero-desc">
          Computer Science student passionate about cybersecurity, AI, and building innovative digital solutions.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            <span>🚀</span> View Projects
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
            <span>✉️</span> Contact Me
          </button>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="hero-scroll-mouse" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}
