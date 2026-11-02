import React from 'react';
import { STORE_INFO } from '../data/books';
import '../styles/footer.css';

export default function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const elem = document.querySelector(targetId);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo" data-name="Footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-brand-title">MARGIN</span>
          <span className="footer-brand-tagline">{STORE_INFO.tagline}</span>
        </div>

        <ul className="footer-links">
          {STORE_INFO.navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="footer-link"
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="footer-copy">
          © {new Date().getFullYear()} MARGIN. {STORE_INFO.visit}.
        </p>
      </div>
    </footer>
  );
}
