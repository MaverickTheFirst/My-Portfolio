import './Footer.css';

const SOCIALS = [
  { icon: '🐙', href: 'https://github.com/MaverickTheFirst', label: 'GitHub' },
  { icon: '💼', href: 'https://www.linkedin.com/in/deeptangshu-banerjee-ba98352b4/', label: 'LinkedIn' },
  { icon: '📧', href: 'mailto:deeptangshubanerjee@gmail.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} <span>Deeptangshu Banerjee</span>. Built with React & ❤️
        </p>

        <div className="footer-socials">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <button
          className="footer-back-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}
