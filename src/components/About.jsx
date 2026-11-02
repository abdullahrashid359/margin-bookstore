import React from 'react';
import '../styles/about.css';

export default function About() {
  return (
    <section id="about" className="about-section" aria-label="About MARGIN" data-name="About">
      <div className="about-content" data-name="Content">
        <h2 className="about-headline">
          Not just a place to buy books.
        </h2>

        <p className="about-body-text">
          MARGIN is an independent bookshop in Lahore, built around the belief that the right book can open up an entirely new way of seeing the world.
        </p>

        <p className="about-accent-quote">
          Less noise. More meaningful pages.
        </p>
      </div>
    </section>
  );
}
