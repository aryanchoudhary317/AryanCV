'use client';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ fullname: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Initialize EmailJS with your public key from environment variables
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'kY8MVFRgSH1zje4RH');
  }, []);

  const isValid = form.fullname.trim() && form.email.trim() && form.message.trim();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setMessage('');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_rgmh7yi',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_e0c7p5u',
        {
          to_email: process.env.NEXT_PUBLIC_RECEIVER_EMAIL || 'aryanchoudhary3171@gmail.com',
          from_name: form.fullname,
          from_email: form.email,
          message: form.message,
        }
      );

      setMessage('Message sent successfully!');
      setForm({ fullname: '', email: '', message: '' });
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54951.46037584972!2d76.20715!3d32.09905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b4f9bed780833%3A0x7c5c4f34ee35c5a!2sKangra%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
            title="Kangra, Himachal Pradesh Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={form.fullname}
              onChange={handleChange}
              disabled={sending}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={form.email}
              onChange={handleChange}
              disabled={sending}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            disabled={sending}
          ></textarea>
          
          {message && (
            <p style={{
              marginBottom: '1rem',
              padding: '0.8rem',
              borderRadius: '8px',
              textAlign: 'center',
              color: message.includes('successfully') ? '#00D9FF' : '#ff6b6b',
              backgroundColor: message.includes('successfully') ? 'rgba(0, 217, 255, 0.1)' : 'rgba(255, 107, 107, 0.1)',
              border: `1px solid ${message.includes('successfully') ? 'rgba(0, 217, 255, 0.3)' : 'rgba(255, 107, 107, 0.3)'}`
            }}>
              {message}
            </p>
          )}
          
          <button 
            className="form-btn" 
            type="submit" 
            disabled={!isValid || sending}
            style={{ opacity: sending ? 0.7 : 1 }}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>{sending ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </section>
    </article>
  );
}
