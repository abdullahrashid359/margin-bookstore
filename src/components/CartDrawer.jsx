import React, { useEffect } from 'react';
import '../styles/cart.css';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="cart-backdrop" onClick={onClose} role="presentation">
      <div 
        className="cart-drawer" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Your Reading Bag"
      >
        <div className="cart-header">
          <h2 className="cart-title">Your Reading Bag</h2>
          <button 
            type="button" 
            className="cart-close-btn" 
            onClick={onClose}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ opacity: 0.4 }}>
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <p>Your bag is currently empty.</p>
            <button 
              type="button" 
              className="btn btn-secondary" 
              style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}
              onClick={onClose}
            >
              Browse Catalog
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div 
                    className="cart-item-visual" 
                    style={{ backgroundColor: item.coverBg || '#2E3D34', color: '#FFF' }}
                  >
                    M
                  </div>
                  <div className="cart-item-info">
                    <h3 className="cart-item-title">{item.title}</h3>
                    <p className="cart-item-author">by {item.author}</p>
                    <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="cart-item-qty">
                    <button 
                      type="button" 
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button 
                      type="button" 
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-subtotal-row">
                <span>Subtotal</span>
                <span className="cart-subtotal-amount">${subtotal.toFixed(2)}</span>
              </div>
              <button 
                type="button" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={() => alert(`Order initiated for $${subtotal.toFixed(2)}. In-store pickup will be packaged in archival kraft paper.`)}
              >
                Proceed to Checkout
              </button>
              <p className="checkout-note">
                Pick up at 42 Elmwood Lane or receive nationwide carbon-neutral post.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

