import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedBooks from './components/FeaturedBooks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookModal from './components/BookModal';
import CartDrawer from './components/CartDrawer';
import { BOOKS } from './data/books';
import './styles/global.css';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'featured', 'about', 'contact'];
      const scrollY = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add book to reading bag
  const handleAddToCart = (book) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...book, quantity: 1 }];
    });

    setToastMessage(`Added "${book.title}" to your reading bag`);
    setTimeout(() => {
      setToastMessage('');
    }, 3200);
  };

  // Update quantity in bag
  const handleUpdateQuantity = (bookId, newQty) => {
    if (newQty <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== bookId));
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === bookId ? { ...item, quantity: newQty } : item))
      );
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="margin-app" data-name="MARGIN - Bookstore">
      {/* Navbar */}
      <Navbar
        activeSection={activeSection}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        onShopBooksClick={() => scrollToSection('featured')}
      />

      {/* Main Sections matching Figma Design */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          books={BOOKS}
          onSelectBook={setSelectedBook}
          onExploreClick={() => scrollToSection('featured')}
        />

        {/* 2. Featured Books Section */}
        <FeaturedBooks
          books={BOOKS}
          searchQuery={searchQuery}
          onSelectBook={setSelectedBook}
        />

        {/* 3. About Section */}
        <About />

        {/* 4. Contact Section */}
        <Contact />
      </main>

      {/* 5. Footer Section */}
      <Footer />

      {/* Book Detail Quick View Modal */}
      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification" role="status">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
