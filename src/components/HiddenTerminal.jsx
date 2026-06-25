import { useState, useRef, useEffect } from 'react';
import './HiddenTerminal.css';

const COMMANDS = {
  help: () => [
    { text: 'Available commands:', type: 'cyan' },
    { text: '  help          — Show this help menu', type: '' },
    { text: '  whoami        — Who is Deeptangshu?', type: '' },
    { text: '  ls projects   — List projects', type: '' },
    { text: '  cat about.txt — Read about me', type: '' },
    { text: '  skills        — Display skills', type: '' },
    { text: '  contact       — Contact info', type: '' },
    { text: '  sudo rm -rf / — Try it ;)', type: '' },
    { text: '  clear         — Clear terminal', type: '' },
    { text: '  exit          — Close terminal', type: '' },
    { text: '', type: '' },
    { text: 'Tip: You found this via the Konami Code! ↑↑↓↓←→←→BA', type: 'system' },
  ],
  whoami: () => [
    { text: '╔══════════════════════════════════════╗', type: 'cyan' },
    { text: '║  DEEPTANGSHU BANERJEE                ║', type: 'cyan' },
    { text: '║  CSE Student | Cyber Enthusiast      ║', type: 'cyan' },
    { text: '║  KIIT University | Class of 2028     ║', type: 'cyan' },
    { text: '║  GFG KIIT Chapter — Cybersecurity    ║', type: 'cyan' },
    { text: '╚══════════════════════════════════════╝', type: 'cyan' },
  ],
  'ls projects': () => [
    { text: 'drwxr-xr-x  deeptangshu  ./projects/', type: '' },
    { text: '  📁 port-vulnerability-scanner/', type: 'cyan' },
    { text: '     └── Python | Networking | Cybersecurity', type: 'system' },
    { text: '', type: '' },
    { text: 'Total: 1 project(s) | More coming soon...', type: 'yellow' },
  ],
  'cat about.txt': () => [
    { text: '--- about.txt ---', type: 'pink' },
    { text: '', type: '' },
    { text: 'Hello! I\'m a Computer Science and Engineering', type: '' },
    { text: 'student at KIIT University with a strong passion', type: '' },
    { text: 'for technology, cybersecurity, and software', type: '' },
    { text: 'development.', type: '' },
    { text: '', type: '' },
    { text: 'I enjoy building innovative digital solutions,', type: '' },
    { text: 'exploring emerging technologies, and continuously', type: '' },
    { text: 'expanding my technical expertise.', type: '' },
    { text: '', type: '' },
    { text: '--- EOF ---', type: 'pink' },
  ],
  skills: () => [
    { text: '⚡ SKILL SCAN RESULTS:', type: 'yellow' },
    { text: '', type: '' },
    { text: '  [████████████████] C / C++ / Java / Python / JS', type: 'cyan' },
    { text: '  [██████████████░░] React.js / HTML5 / CSS3', type: 'cyan' },
    { text: '  [████████████████] CTFs / Web Security / OSINT', type: 'pink' },
    { text: '  [██████████████░░] Git / Wireshark / Burp Suite', type: '' },
    { text: '  [████████████░░░░] AI / ML / Prompt Engineering', type: '' },
    { text: '', type: '' },
    { text: 'Threat Level: MAXIMUM 💀', type: 'pink' },
  ],
  contact: () => [
    { text: '📡 ESTABLISHING SECURE CHANNEL...', type: 'yellow' },
    { text: '', type: '' },
    { text: '  📧 deeptangshubanerjee@gmail.com', type: 'cyan' },
    { text: '  🐙 github.com/MaverickTheFirst', type: 'cyan' },
    { text: '  💼 linkedin.com/in/deeptangshu-banerjee-ba98352b4', type: 'cyan' },
    { text: '', type: '' },
    { text: 'Connection secured ✓', type: '' },
  ],
  'sudo rm -rf /': () => [
    { text: '⚠️  Nice try, hacker!', type: 'pink' },
    { text: '', type: '' },
    { text: '  Permission denied: PORTFOLIO_PROTECTION_ENABLED', type: 'yellow' },
    { text: '  Your IP has been logged 😎', type: 'system' },
    { text: '  (Just kidding... or am I?)', type: 'system' },
  ],
};

export default function HiddenTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { text: '╔════════════════════════════════════════════════╗', type: 'cyan' },
    { text: '║  🔒 DEEPTANGSHU\'S SECRET TERMINAL v1.0        ║', type: 'cyan' },
    { text: '║  You found the Easter egg! Type "help"        ║', type: 'cyan' },
    { text: '╚════════════════════════════════════════════════╝', type: 'cyan' },
    { text: '', type: '' },
  ]);
  const [input, setInput] = useState('');
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();

    const newLines = [
      { text: `guest@portfolio:~$ ${cmd}`, type: '' },
    ];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'exit') {
      onClose();
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      newLines.push(...handler());
    } else if (trimmed === '') {
      // empty command
    } else {
      newLines.push(
        { text: `bash: ${trimmed}: command not found`, type: 'pink' },
        { text: 'Type "help" for available commands', type: 'system' },
      );
    }

    newLines.push({ text: '', type: '' });
    setHistory((prev) => [...prev, ...newLines]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="hidden-terminal-overlay" onClick={onClose}>
      <div className="hidden-terminal" onClick={(e) => e.stopPropagation()}>
        <div className="hidden-terminal-header">
          <span className="hidden-terminal-dot" />
          <span className="hidden-terminal-dot" />
          <span className="hidden-terminal-dot" />
          <span className="hidden-terminal-title">guest@deeptangshu-portfolio — bash</span>
          <button className="hidden-terminal-close" onClick={onClose}>✕</button>
        </div>

        <div className="hidden-terminal-body" ref={bodyRef} onClick={() => inputRef.current?.focus()}>
          {history.map((line, index) => (
            <div key={index} className={`terminal-output-line ${line.type}`}>
              {line.text}
            </div>
          ))}

          <div className="terminal-input-line">
            <span className="terminal-prompt">guest@portfolio:~$ </span>
            <input
              ref={inputRef}
              className="terminal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
