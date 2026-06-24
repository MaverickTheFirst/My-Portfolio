import './Skills.css';

const SKILL_CATEGORIES = [
  {
    icon: '💻',
    title: 'Programming',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    icon: '🌐',
    title: 'Frontend Development',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
  },
  {
    icon: '🛡️',
    title: 'Cybersecurity',
    skills: ['CTFs', 'Web Security', 'Network Security', 'Vulnerability Assessment', 'OSINT', 'Linux'],
  },
  {
    icon: '🔧',
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Wireshark', 'Burp Suite', 'Nmap', 'Linux'],
  },
  {
    icon: '🤖',
    title: 'AI & Professional',
    skills: ['Prompt Engineering', 'Generative AI', 'ML Fundamentals', 'Leadership', 'Teamwork', 'Problem Solving', 'Communication'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">What I Work With</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A diverse toolkit spanning programming, cybersecurity, web development, and AI.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={category.title}
              className={`glass-card skill-card reveal reveal-delay-${index + 1}`}
            >
              <span className="skill-card-icon">{category.icon}</span>
              <h3 className="skill-card-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
