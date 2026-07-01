import { useState } from 'react';
import TiltCard from './TiltCard';
import TerminalHeader from './TerminalHeader';
import ScrambleText from './ScrambleText';
import './Contact.css';

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

const CONTACT_LINKS = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'deeptangshubanerjee@gmail.com',
    href: 'mailto:deeptangshubanerjee@gmail.com',
  },
  {
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
    value: 'Deeptangshu Banerjee',
    href: 'https://www.linkedin.com/in/deeptangshu-banerjee-ba98352b4/',
  },
  {
    icon: <GithubIcon />,
    label: 'GitHub',
    value: 'MaverickTheFirst',
    href: 'https://github.com/MaverickTheFirst',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: '[ERROR] All fields required.' });
      return;
    }
    setStatus({ type: 'success', text: '[OK] Message transmitted successfully. 📡' });
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <TerminalHeader command="ssh deeptangshu@contact --secure" />
          <p className="section-label">// Establish Connection</p>
          <h2 className="section-title">
            <ScrambleText text="Contact Me" tag="span" />
          </h2>
          <p className="section-subtitle">
            Have a question or want to work together? Initiate a secure connection.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>
              <ScrambleText text="Let's connect" tag="span" />
            </h3>
            <p>
              I&apos;m always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Whether it&apos;s a collaboration, internship, or just a
              tech conversation — drop me a message!
            </p>

            <div className="contact-links">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <div className="contact-link-icon">{link.icon}</div>
                  <div className="contact-link-text">
                    <span className="contact-link-label">{link.label}</span>
                    <span className="contact-link-value">{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <TiltCard className="contact-form-card reveal reveal-delay-2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">$ your_name</label>
                <input
                  id="contact-name"
                  className="form-input"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">$ your_email</label>
                <input
                  id="contact-email"
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">$ message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  name="message"
                  placeholder="echo 'Your message here...'"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                ./send_message.sh
              </button>

              {status && (
                <div className={`form-status ${status.type}`}>
                  {status.text}
                </div>
              )}
            </form>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
