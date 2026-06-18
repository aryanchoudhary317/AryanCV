'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ fullname: '', email: '', message: '' });

  const isValid = form.fullname.trim() && form.email.trim() && form.message.trim();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
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
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
          ></textarea>
          <button className="form-btn" type="submit" disabled={!isValid}>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}
