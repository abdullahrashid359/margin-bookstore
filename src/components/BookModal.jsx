import React, { useEffect } from 'react';
import '../styles/modal.css';

export default function BookModal({ book, onClose, onAddToCart }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!book) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-book-title"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>

        <div className="modal-body">
          {/* Cover image from design */}
          <div className="modal-book-cover">
            <img src={book.coverImage} alt={book.title} />
          </div>

          {/* Book Info */}
          <div className="modal-info">
            <span className="modal-genre-tag">{book.genre}</span>
            <h2 id="modal-book-title" className="modal-title">{book.title}</h2>
            <p className="modal-author">by {book.author}</p>
            <p className="modal-price">{book.priceFormatted}</p>

            {book.excerpt && (
              <p className="modal-quote">&ldquo;{book.excerpt}&rdquo;</p>
            )}

            <p className="modal-desc">{book.description}</p>

            <div className="modal-specs">
              <span>{book.format}</span>
              <span>•</span>
              <span>{book.pages} pages</span>
              <span>•</span>
              <span>ISBN: {book.isbn}</span>
            </div>

            <button
              type="button"
              className="btn-primary-figma"
              style={{ marginTop: 'auto', width: '100%' }}
              onClick={() => {
                onAddToCart(book);
                onClose();
              }}
            >
              Add to Bag ({book.priceFormatted})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
