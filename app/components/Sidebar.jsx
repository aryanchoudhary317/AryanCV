'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image src="/images/aryancvIMG.png" alt="Aryan Choudhary" width={130} height={130} priority />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Aryan Choudhary">Aryan Choudhary</h1>
          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" onClick={() => setIsOpen(!isOpen)}>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:aryanchoudhary3171@gmail.com" className="contact-link">aryanchoudhary3171@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+918894437637" className="contact-link">+91 8894437637</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2004-01-29">Jan 29, 2004</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Kangra, Himachal Pradesh, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link"><ion-icon name="logo-facebook"></ion-icon></a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link"><ion-icon name="logo-twitter"></ion-icon></a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link"><ion-icon name="logo-instagram"></ion-icon></a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
