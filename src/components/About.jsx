import TerminalHeader from './TerminalHeader';
import ScrambleText from './ScrambleText';
import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="section-header reveal">
          <TerminalHeader command="cat about.txt" />
          <p className="section-label">// Get To Know Me</p>
          <h2 className="section-title">
            <ScrambleText text="About Me" tag="span" />
          </h2>
          <p className="section-subtitle">
            A passionate student at the intersection of cybersecurity, AI, and software development.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <h3>
              <ScrambleText text="Building the future, one exploit at a time" tag="span" />
            </h3>
            <p>
              I&apos;m <span className="about-highlight">Deeptangshu Banerjee</span>, a Computer Science
              and Engineering student at <span className="about-highlight">KIIT University</span> with
              a strong passion for technology, cybersecurity, and software development.
            </p>
            <p>
              As a member of the cybersecurity department of the{' '}
              <span className="about-highlight">GeeksforGeeks KIIT Student Chapter Society</span>,
              I actively engage in security research, Capture The Flag (CTF) competitions, and
              hands-on learning experiences.
            </p>
            <p>
              I believe technology is most impactful when it solves real-world problems, which
              motivates me to continuously learn, build, and contribute to meaningful initiatives.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-number">15+</span>
                <span className="about-stat-label">Skills</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">1+</span>
                <span className="about-stat-label">Projects</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">1</span>
                <span className="about-stat-label">Internship</span>
              </div>
            </div>
          </div>

          <div className="about-visual reveal reveal-delay-2">
            <div className="about-code-block">
              <div className="about-code-dots">
                <span className="about-code-dot" />
                <span className="about-code-dot" />
                <span className="about-code-dot" />
              </div>
              <code>
                <span className="code-comment">{'// about_me.js'}</span>
                <br />
                <span className="code-keyword">const</span>{' '}
                <span className="code-property">hacker</span>{' '}
                <span className="code-bracket">= {'{'}</span>
                <br />
                {'  '}<span className="code-property">name</span>:{' '}
                <span className="code-string">&quot;Deeptangshu&quot;</span>,
                <br />
                {'  '}<span className="code-property">alias</span>:{' '}
                <span className="code-string">&quot;MaverickTheFirst&quot;</span>,
                <br />
                {'  '}<span className="code-property">role</span>:{' '}
                <span className="code-string">&quot;CSE Student&quot;</span>,
                <br />
                {'  '}<span className="code-property">threat_level</span>:{' '}
                <span className="code-string">&quot;MAXIMUM&quot;</span>,
                <br />
                {'  '}<span className="code-property">skills</span>:{' '}
                <span className="code-bracket">[</span>
                <br />
                {'    '}<span className="code-string">&quot;Cybersecurity&quot;</span>,
                <br />
                {'    '}<span className="code-string">&quot;AI / ML&quot;</span>,
                <br />
                {'    '}<span className="code-string">&quot;Web Dev&quot;</span>,
                <br />
                {'  '}<span className="code-bracket">]</span>,
                <br />
                {'  '}<span className="code-property">status</span>:{' '}
                <span className="code-string">&quot;ACTIVE&quot;</span>,
                <br />
                <span className="code-bracket">{'};'}</span>
              </code>
              <div className="about-code-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
