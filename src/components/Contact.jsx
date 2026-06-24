import { useState } from 'react';
import './Contact.css';

const CONTACT_LINKS = [
  {
    icon: '📧',
    label: 'Email',
    value: 'deeptangshubanerjee@gmail.com',
    href: 'mailto:deeptangshubanerjee@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'Deeptangshu Banerjee',
    href: 'https://www.linkedin.com/in/deeptangshu-banerjee-ba98352b4/',
  },
  {
    icon: '🐙',
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
      setStatus({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }
    // In a real app, send to a backend/email service
    setStatus({ type: 'success', text: 'Message sent! I\'ll get back to you soon. 🚀' });
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Let&apos;s connect</h3>
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

          <div className="glass-card contact-form-card reveal reveal-delay-2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
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
                <label className="form-label" htmlFor="contact-email">Your Email</label>
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
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                <span>🚀</span> Send Message
              </button>

              {status && (
                <div className={`form-status ${status.type}`}>
                  {status.text}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
