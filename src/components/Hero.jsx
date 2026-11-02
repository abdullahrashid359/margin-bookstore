import React from 'react';
import '../styles/hero.css';

export default function Hero({ onExploreClick, onSelectBook, books }) {
  const book1 = books && books[0];
  const book2 = books && books[1];

  const handleScrollToShelves = (e) => {
    e.preventDefault();
    if (onExploreClick) {
      onExploreClick();
    } else {
      const elem = document.getElementById('featured');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Section" data-name="Hero">
      <div className="hero-inner">
        {/* Left: Copy */}
        <div className="hero-copy" data-name="Copy">
          <p className="hero-eyebrow" data-name="Eyebrow">
            EDITORIAL PICKS
          </p>

          <h1 className="hero-title">
            Stories worth making room for.
          </h1>

          <p className="hero-description">
            An independent bookshop for curious minds, slow afternoons and stories that stay with you. Find your next favourite between these pages.
          </p>

          <button
            type="button"
            className="btn-primary-figma"
            onClick={handleScrollToShelves}
            aria-label="Explore the Shelves"
          >
            <span>Explore the Shelves</span>
            <img 
              src="/assets/501351f90c49732b31d7571dffa36f5f3da7fa82.svg" 
              alt="" 
              style={{ width: '18px', height: '18px' }} 
              aria-hidden="true" 
            />
          </button>
        </div>

        {/* Right: Book covers */}
        <div className="hero-covers-wrapper" data-name="Book covers">
          <div className="hero-covers-row" data-name="Row 1">
            <div 
              className="hero-cover-1" 
              data-name="Cover 1"
              onClick={() => book1 && onSelectBook(book1)}
              role="button"
              tabIndex="0"
              aria-label={`View details for ${book1 ? book1.title : 'The Covenant of Water'}`}
            >
              <img 
                src="/assets/9bae2811978b6a936728a08bfbdedf12cc5b434a.png" 
                alt="The Covenant of Water by Abraham Verghese" 
              />
            </div>

            <div 
              className="hero-cover-2" 
              data-name="Cover 2"
              onClick={() => book2 && onSelectBook(book2)}
              role="button"
              tabIndex="0"
              aria-label={`View details for ${book2 ? book2.title : 'A Field Guide to Getting Lost'}`}
            >
              <img 
                src="/assets/57b5a384fa48b719a0b77d52636d3cb873370bba.png" 
                alt="A Field Guide to Getting Lost by Rebecca Solnit" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
