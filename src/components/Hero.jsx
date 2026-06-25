import { useState, useEffect } from 'react';

import './Hero.css';

const ROLES = [
  'CSE Student',
  'Cybersecurity Enthusiast',
  'Web Developer',
  'CTF Player',
  'Tech Explorer',
];

const ASCII_ART = `
 ██████╗ ███████╗███████╗██████╗ ████████╗ █████╗ ███╗   ██╗ ██████╗ ███████╗██╗  ██╗██╗   ██╗
 ██╔══██╗██╔════╝██╔════╝██╔══██╗╚══██╔══╝██╔══██╗████╗  ██║██╔════╝ ██╔════╝██║  ██║██║   ██║
 ██║  ██║█████╗  █████╗  ██████╔╝   ██║   ███████║██╔██╗ ██║██║  ███╗███████╗███████║██║   ██║
 ██║  ██║██╔══╝  ██╔══╝  ██╔═══╝    ██║   ██╔══██║██║╚██╗██║██║   ██║╚════██║██╔══██║██║   ██║
 ██████╔╝███████╗███████╗██║        ██║   ██║  ██║██║ ╚████║╚██████╔╝███████║██║  ██║╚██████╔╝
 ╚═════╝ ╚══════╝╚══════╝╚═╝        ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝╚══════╝╚═╝  ╚═╝ ╚═════╝

 ██████╗   █████╗  ███╗   ██╗ ███████╗ ██████╗     ██████╗  ███████╗ ███████╗
 ██╔══██╗ ██╔══██╗ ████╗  ██║ ██╔════╝ ██╔══██╗    ╚══██╔╝  ██╔════╝ ██╔════╝
 ██████╔╝ ███████║ ██╔██╗ ██║ █████╗   ██████╔╝       ██║   █████╗   █████╗  
 ██╔══██╗ ██╔══██║ ██║╚██╗██║ ██╔══╝   ██╔══██╗ ██    ██║   ██╔══╝   ██╔══╝  
 ██████╔╝ ██║  ██║ ██║ ╚████║ ███████╗ ██║  ██║ ╚██████╔╝   ███████╗ ███████╗
 ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚══════╝ ╚═╝  ╚═╝  ╚═════╝    ╚══════╝ ╚══════╝
`;

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

      <div className="hero-content">
        <p className="hero-greeting">
          <span className="prompt">&gt; </span>HELLO, WORLD_
        </p>

        <pre className="hero-ascii" aria-label="Deeptangshu Banerjee">{ASCII_ART}</pre>

        <p className="hero-role">
          <span style={{ color: 'var(--neon-cyan)' }}>$ echo </span>
          <span className="hero-typewriter">&quot;{displayText}&quot;</span>
          <span className="hero-cursor">|</span>
        </p>

        <p className="hero-desc">
          // Passionate about breaking &amp; building things.
          <br />
          // Cybersecurity · AI · Web Development
        </p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
            ./view_projects.sh
          </button>
          <button className="btn btn-secondary" onClick={() => scrollTo('contact')}>
            ./contact_me.sh
          </button>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span className="hero-scroll-arrow">⌄</span>
        <span className="hero-scroll-text">scroll</span>
      </div>
    </section>
  );
}
