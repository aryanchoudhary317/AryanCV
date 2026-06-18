'use client';
import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  { name: 'Daniel lewis', avatar: '/assets/images/avatar-1.png', text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.' },
  { name: 'Jessica miller', avatar: '/assets/images/avatar-2.png', text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.' },
  { name: 'Emily evans', avatar: '/assets/images/avatar-3.png', text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.' },
  { name: 'Henry william', avatar: '/assets/images/avatar-4.png', text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.' },
];

const clients = [
  '/assets/images/logo-1-color.png',
  '/assets/images/logo-2-color.png',
  '/assets/images/logo-3-color.png',
  '/assets/images/logo-4-color.png',
  '/assets/images/logo-5-color.png',
  '/assets/images/logo-6-color.png',
];

export default function About() {
  const [modal, setModal] = useState(null);

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>I&apos;m Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
        <p>My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
      </section>

      {/* Services */}
      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>
        <ul className="service-list">
          {[
            { icon: '/assets/images/icon-design.svg', title: 'Web design', text: 'The most modern and high-quality design made at a professional level.' },
            { icon: '/assets/images/icon-dev.svg', title: 'Web development', text: 'High-quality development of sites at the professional level.' },
            { icon: '/assets/images/icon-app.svg', title: 'Mobile apps', text: 'Professional development of applications for iOS and Android.' },
            { icon: '/assets/images/icon-photo.svg', title: 'Photography', text: 'I make high-quality photos of any category at a professional level.' },
          ].map((s) => (
            <li key={s.title} className="service-item">
              <div className="service-icon-box">
                <Image src={s.icon} alt={s.title} width={40} height={40} />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{s.title}</h4>
                <p className="service-item-text">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((t) => (
            <li key={t.name} className="testimonials-item">
              <div className="content-card" onClick={() => setModal(t)} style={{ cursor: 'pointer' }}>
                <figure className="testimonials-avatar-box">
                  <Image src={t.avatar} alt={t.name} width={60} height={60} />
                </figure>
                <h4 className="h4 testimonials-item-title">{t.name}</h4>
                <div className="testimonials-text">
                  <p>{t.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Modal */}
      {modal && (
        <div className="modal-container active">
          <div className="overlay active" onClick={() => setModal(null)}></div>
          <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={() => setModal(null)}>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <Image src={modal.avatar} alt={modal.name} width={80} height={80} />
              </figure>
              <Image src="/assets/images/icon-quote.svg" alt="quote icon" width={35} height={35} />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title">{modal.name}</h4>
              <time dateTime="2021-06-14">14 June, 2021</time>
              <div><p>{modal.text}</p></div>
            </div>
          </section>
        </div>
      )}

      {/* Clients */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {clients.map((logo, i) => (
            <li key={i} className="clients-item">
              <a href="#">
                <Image src={logo} alt="client logo" width={120} height={60} style={{ width: '100%', height: 'auto' }} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
