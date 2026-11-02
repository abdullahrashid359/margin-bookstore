import React, { useState } from 'react';
import { STORE_INFO } from '../data/books';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section" aria-label="Contact Section" data-name="ContactSection">
      <div className="contact-container" data-name="ContactContainer">
        {/* Left Column: Contact Information */}
        <div className="contact-info-col" data-name="ContactInformation">
          <div className="contact-header-group" data-name="HeaderGroup">
            <p className="contact-eyebrow">
              COME SAY HELLO
            </p>
            <h2 className="contact-headline">
              <div>Good books.</div>
              <div>Good conversations.</div>
            </h2>
            <p className="contact-description">
              Looking for a particular title, planning a visit, or simply want to talk books? We would love to hear from you.
            </p>
          </div>

          <div className="contact-details-group" data-name="DetailsGroup">
            <div className="contact-info-item" data-name="InfoItem">
              <span className="info-item-label">VISIT</span>
              <span className="info-item-value">{STORE_INFO.visit}</span>
            </div>

            <div className="contact-info-item" data-name="InfoItem">
              <span className="info-item-label">EMAIL</span>
              <span className="info-item-value">
                <a href={`mailto:${STORE_INFO.email}`}>{STORE_INFO.email}</a>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form-col" data-name="ContactForm">
          {submitted ? (
            <div className="contact-success-msg" role="alert">
              <strong>Thank you, {formData.name}.</strong> Your message has been sent to our Lahore desk. We will reply shortly.
              <div style={{ marginTop: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  style={{ textDecoration: 'underline', cursor: 'pointer', background: 'none', border: 'none', font: 'inherit' }}
                >
                  Send another note
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="contact-form-field" data-name="FormField">
                <label htmlFor="contact-user-name" className="contact-field-label">
                  Your name
                </label>
                <input
                  id="contact-user-name"
                  type="text"
                  className="contact-text-input"
                  placeholder="e.g. Ayesha Khan"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="contact-form-field" data-name="FormField">
                <label htmlFor="contact-user-email" className="contact-field-label">
                  Email address
                </label>
                <input
                  id="contact-user-email"
                  type="email"
                  className="contact-text-input"
                  placeholder="ayesha@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="contact-form-field" data-name="FormField">
                <label htmlFor="contact-user-message" className="contact-field-label">
                  Your message
                </label>
                <textarea
                  id="contact-user-message"
                  className="contact-textarea-input"
                  placeholder="Tell us what's on your mind..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit-btn"
                data-name="PrimaryButton"
              >
                Send message &nbsp;→
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
