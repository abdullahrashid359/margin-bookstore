import React from 'react';
import BookCard from './BookCard';
import '../styles/featured.css';

export default function FeaturedBooks({ books, onSelectBook, searchQuery }) {
  const displayedBooks = searchQuery
    ? books.filter(
        (b) =>
          b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          b.genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : books;

  return (
    <section id="featured" className="featured-section" aria-label="Featured Books" data-name="Featured Books">
      <div className="featured-inner">
        {/* Header */}
        <header className="featured-header" data-name="Header">
          <p className="bookshelf-eyebrow">
            THE BOOKSHELF / 01
          </p>
          <h2 className="bookshelf-title">
            A few worth your time.
          </h2>
        </header>

        {/* Grid */}
        <div className="books-grid" data-name="Grid">
          {displayedBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onSelectBook={onSelectBook}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
