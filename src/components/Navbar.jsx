import React, { useState } from 'react';
import { STORE_INFO } from '../data/books';
import '../styles/navbar.css';

export default function Navbar({ activeSection, onSearch, searchQuery, onShopBooksClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchFlyoutOpen, setSearchFlyoutOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="navbar" role="banner" data-name="Navbar">
        <div className="navbar-inner">
          {/* Brand */}
          <a 
            href="#hero" 
            className="navbar-brand" 
            onClick={(e) => handleNavClick(e, '#hero')}
            aria-label="MARGIN - A little more room for good books."
          >
            <span className="brand-title">MARGIN</span>
            <span className="brand-tagline">{STORE_INFO.tagline}</span>
          </a>

          {/* Navigation Links & Actions */}
          <div className="nav-actions-wrapper">
            <nav className="nav-links" aria-label="Main Navigation">
              <ul className="nav-links-list">
                {STORE_INFO.navLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="bookshop-actions">
              {/* Search Action */}
              <button
                type="button"
                className="search-action-btn"
                onClick={() => setSearchFlyoutOpen(!searchFlyoutOpen)}
                aria-label="Search bookstore titles"
              >
                <img src={`${import.meta.env.BASE_URL}assets/34d2fe9db9e49f1d95e31c0a1104bf438dd08483.svg`} alt="Search" />
              </button>

              {/* Shop Books Action Button */}
              <button
                type="button"
                className="btn-secondary-figma"
                onClick={onShopBooksClick}
              >
                Shop Books
              </button>

              {/* Mobile Toggle */}
              <button
                type="button"
                className="mobile-nav-toggle"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileOpen}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Flyout */}
        {searchFlyoutOpen && (
          <div className="search-flyout" role="search">
            <input
              type="text"
              placeholder="Search books by title, author, or keyword..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              autoFocus
              aria-label="Search books"
            />
            <button
              type="button"
              className="btn-primary-figma"
              style={{ padding: '0.6rem 1.25rem' }}
              onClick={() => {
                setSearchFlyoutOpen(false);
                const elem = document.getElementById('featured');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Filter Books
            </button>
          </div>
        )}

        {/* Mobile Nav Menu */}
        {mobileOpen && (
          <div className="mobile-nav-menu">
            {STORE_INFO.navLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="nav-link-item"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>
      <div className="figma-divider" data-name="Navbar divider"></div>
    </>
  );
}
