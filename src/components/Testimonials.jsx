import { useState, useEffect } from 'react';
import TiltCard from './TiltCard';
import TerminalHeader from './TerminalHeader';
import ScrambleText from './ScrambleText';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    text: 'Deeptangshu is a highly dedicated and talented individual. His passion for cybersecurity and development is evident in everything he does. A true asset to any team.',
    name: 'Faculty Mentor',
    role: 'KIIT University',
    initials: 'FM',
  },
  {
    text: 'Working with Deeptangshu on CTF competitions was a great experience. His problem-solving skills and attention to detail make him stand out among his peers.',
    name: 'Team Colleague',
    role: 'GFG KIIT Chapter',
    initials: 'TC',
  },
  {
    text: 'A quick learner who consistently delivers quality work. Deeptangshu\'s ability to grasp complex concepts and apply them practically is impressive.',
    name: 'Senior Developer',
    role: 'Ayudyog MetaspeQ',
    initials: 'SD',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <TerminalHeader command='cat /var/log/testimonials.log' />
          <p className="section-label">// Intercepted Transmissions</p>
          <h2 className="section-title">
            <ScrambleText text="Testimonials" tag="span" />
          </h2>
          <p className="section-subtitle">
            Kind words from mentors, colleagues, and collaborators.
          </p>
        </div>

        <div className="testimonials-slider reveal">
          <TiltCard className="testimonial-card" glowColor="255, 0, 128" key={activeIndex}>
            <span className="testimonial-quote-icon">&ldquo;</span>
            <p className="testimonial-text">{current.text}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{current.initials}</div>
              <span className="testimonial-name">{current.name}</span>
              <span className="testimonial-role">{current.role}</span>
            </div>
          </TiltCard>

          <div className="testimonial-dots">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
