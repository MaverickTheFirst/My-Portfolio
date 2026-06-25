import { useState, useEffect, useRef } from 'react';
import TiltCard from './TiltCard';
import TerminalHeader from './TerminalHeader';
import ScrambleText from './ScrambleText';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    icon: '💻',
    title: 'Programming',
    skills: [
      { name: 'C / C++', pct: 85 },
      { name: 'Python', pct: 80 },
      { name: 'Java', pct: 75 },
      { name: 'JavaScript', pct: 78 },
      { name: 'SQL', pct: 70 },
    ],
  },
  {
    icon: '🌐',
    title: 'Frontend Dev',
    skills: [
      { name: 'HTML5 / CSS3', pct: 85 },
      { name: 'JavaScript', pct: 78 },
      { name: 'React.js', pct: 72 },
      { name: 'Responsive Design', pct: 80 },
    ],
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    skills: [
      { name: 'CTF Challenges', pct: 82 },
      { name: 'Web Security', pct: 78 },
      { name: 'Network Security', pct: 75 },
      { name: 'OSINT', pct: 70 },
      { name: 'Vuln Assessment', pct: 73 },
    ],
  },
  {
    icon: '🔧',
    title: 'Tools & Tech',
    skills: [
      { name: 'Git / GitHub', pct: 85 },
      { name: 'Linux', pct: 80 },
      { name: 'Wireshark', pct: 72 },
      { name: 'Burp Suite', pct: 68 },
      { name: 'Nmap', pct: 75 },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Soft Skills',
    skills: [
      { name: 'Prompt Engineering', pct: 82 },
      { name: 'Generative AI', pct: 70 },
      { name: 'ML Fundamentals', pct: 65 },
      { name: 'Leadership', pct: 85 },
      { name: 'Communication', pct: 88 },
    ],
  },
];

function SkillBar({ name, pct }) {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-item-header">
        <span className="skill-item-name">{name}</span>
        <span className="skill-item-pct">{animate ? `${pct}%` : '0%'}</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${animate ? 'animate' : ''}`}
          style={{ width: animate ? `${pct}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <TerminalHeader command="ls -la skills/" />
          <p className="section-label">// Threat Arsenal</p>
          <h2 className="section-title">
            <ScrambleText text="Skills & Technologies" tag="span" />
          </h2>
          <p className="section-subtitle">
            A diverse toolkit spanning programming, cybersecurity, web development, and AI.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category, index) => (
            <TiltCard
              key={category.title}
              className={`skill-card reveal reveal-delay-${index + 1}`}
            >
              <span className="skill-card-icon">{category.icon}</span>
              <h3 className="skill-card-title">{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} pct={skill.pct} />
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
