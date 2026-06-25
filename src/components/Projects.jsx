import TiltCard from './TiltCard';
import TerminalHeader from './TerminalHeader';
import ScrambleText from './ScrambleText';
import './Projects.css';

const PROJECTS = [
  {
    icon: '🔍',
    title: 'Port Vulnerability Scanner',
    description:
      'A security tool that scans network ports to identify open services and potential vulnerabilities. Helps security professionals and system administrators assess network exposure and strengthen defenses.',
    tags: ['Python', 'Networking', 'Cybersecurity', 'CLI'],
    github: 'https://github.com/MaverickTheFirst',
    featured: true,
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <TerminalHeader command="./scan_projects --verbose" />
          <p className="section-label">// Deployed Exploits</p>
          <h2 className="section-title">
            <ScrambleText text="Featured Projects" tag="span" />
          </h2>
          <p className="section-subtitle">
            Projects that showcase my skills in cybersecurity, development, and problem-solving.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <TiltCard
              key={project.title}
              className={`project-card reveal reveal-delay-${index + 1}`}
              glowColor="0, 255, 255"
            >
              <div className="project-card-header">
                <div className="project-card-icon">{project.icon}</div>
                {project.featured && (
                  <span className="project-featured">★ Featured</span>
                )}
                <h3 className="project-card-title">{project.title}</h3>
              </div>

              <p className="project-card-desc">{project.description}</p>

              <div className="project-card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-card-footer">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <span className="project-link-icon">⚡</span> ./view_source.sh
                  </a>
                )}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
