import TiltCard from './TiltCard';
import TerminalHeader from './TerminalHeader';
import ScrambleText from './ScrambleText';
import './Experience.css';

const EXPERIENCES = [
  {
    date: '2008 — 2024',
    title: 'Schooling',
    subtitle: 'The Future Foundation School',
    description:
      'Completed primary and secondary education with a strong foundation in science, mathematics, and technology. Developed early interest in computers and programming.',
  },
  {
    date: '2024 — 2028',
    title: 'B.Tech in CSE',
    subtitle: 'Kalinga Institute of Industrial Technology (KIIT)',
    description:
      'Pursuing a Bachelor\'s degree in CSE. Active member of the GeeksforGeeks KIIT Student Chapter — Cybersecurity Department. Participating in CTFs, hackathons, and tech events.',
  },
  {
    date: 'April 2026 — June 2026',
    title: 'Internship',
    subtitle: 'Ayudyog MetaspeQ',
    description:
      'Gained hands-on industry experience working on real-world projects. Applied technical skills in a professional environment, contributing to development and security initiatives.',
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header reveal">
          <TerminalHeader command="git log --oneline --graph" />
          <p className="section-label">// Timeline</p>
          <h2 className="section-title">
            <ScrambleText text="Education & Experience" tag="span" />
          </h2>
          <p className="section-subtitle">
            A timeline of my academic journey and professional growth.
          </p>
        </div>

        <div className="experience-timeline">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.title}
              className={`timeline-item reveal reveal-delay-${index + 1}`}
            >
              <div className="timeline-node" />
              <TiltCard className="timeline-card">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-subtitle">{exp.subtitle}</p>
                <p className="timeline-desc">{exp.description}</p>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
