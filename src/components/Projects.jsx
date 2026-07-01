import TiltCard from './TiltCard';
import TerminalHeader from './TerminalHeader';
import ScrambleText from './ScrambleText';
import './Projects.css';

const PROJECTS = [
  {
    title: 'Port Vulnerability Scanner',
    description:
      'A security tool that scans network ports to identify open services and potential vulnerabilities. Helps security professionals and system administrators assess network exposure and strengthen defenses.',
    tags: ['Python', 'Networking', 'Cybersecurity'],
    github: 'https://github.com/MaverickTheFirst/Port-Vulnerability-Checker',
  },
];

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

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
                    <span className="project-link-icon">
                      <GithubIcon />
                    </span>{" "}
                    ./view_source.sh
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
