import React from 'react';

export default function BookCard({ book, onSelectBook }) {
  return (
    <article className="book-card-item" data-name="Book Card" aria-label={book.title}>
      {/* Book Cover */}
      <div 
        className="book-cover-frame" 
        data-name="Cover"
        onClick={() => onSelectBook(book)}
        role="button"
        tabIndex="0"
        aria-label={`View details for ${book.title}`}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelectBook(book); }}
      >
        <img src={book.coverImage} alt={`${book.title} cover`} />
      </div>

      {/* Action Row */}
      <div className="book-action-line" data-name="Action">
        <span className="book-genre-tag">{book.genre}</span>
        <button
          type="button"
          className="book-view-btn"
          data-name="View action"
          onClick={() => onSelectBook(book)}
          aria-label={`View book details for ${book.title}`}
        >
          <span>View Book</span>
          <img 
            src={`${import.meta.env.BASE_URL}assets/0b86eec4c60bc1bc20f9f777135d8eeb2ed68e4f.svg`} 
            alt="" 
            aria-hidden="true" 
          />
        </button>
      </div>

      {/* Metadata */}
      <div className="book-metadata" data-name="Metadata">
        <h3 
          className="book-card-title"
          onClick={() => onSelectBook(book)}
        >
          {book.title}
        </h3>
        <p className="book-card-author">{book.author}</p>
        <p className="book-card-price">{book.priceFormatted}</p>
      </div>
    </article>
  );
}
