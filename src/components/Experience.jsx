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
    title: 'B.Tech in Computer Science & Engineering',
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
          <p className="section-label">My Journey</p>
          <h2 className="section-title">Education & Experience</h2>
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
              <div className="glass-card timeline-card">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-subtitle">{exp.subtitle}</p>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
