import TiltCard from './TiltCard';
import TerminalHeader from './TerminalHeader';
import ScrambleText from './ScrambleText';
import './Skills.css';

const SKILL_CATEGORIES = [
  {
    icon: '⟨/⟩',
    title: 'Programming',
    skills: [
      { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    icon: '🌐',
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    ],
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    skills: [
      { name: 'Network Security', icon: null },
      { name: 'Web Security', icon: null },
      { name: 'Penetration Testing', icon: null },
      { name: 'OSINT', icon: null },
      { name: 'Cryptography', icon: null },
    ],
  },
  {
    icon: '🔧',
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Other',
    skills: [
      { name: 'Prompt Eng.', icon: null },
      { name: 'Gen AI', icon: null },
      { name: 'ML Basics', icon: null },
    ],
  },
];

/* Fallback icon for cybersecurity / non-devicon skills */
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
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

        <div className="skills-rows">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <TiltCard
              key={category.title}
              className={`skills-row-card reveal reveal-delay-${catIdx + 1}`}
            >
              <div className="skills-row-label">
                <span className="skills-row-icon">{category.icon}</span>
                <span className="skills-row-title">{category.title}</span>
              </div>
              <div className="skills-row-chips">
                {category.skills.map((skill) => (
                  <span key={skill.name} className="skill-chip">
                    {skill.icon ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-chip-icon"
                        loading="lazy"
                      />
                    ) : (
                      <span className="skill-chip-icon skill-chip-fallback">
                        <ShieldIcon />
                      </span>
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
