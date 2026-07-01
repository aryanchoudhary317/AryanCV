'use client';
import { useState } from 'react';
import Image from 'next/image';

// Clients list - currently only using KalkaTravells
const clients = [];

const toolsListStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '15px',
  marginLeft: '-15px',
  marginRight: '-15px',
  marginTop: '2rem',
  marginBottom: '0',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingTop: '25px',
  paddingBottom: '35px',
  overflowX: 'auto',
  scrollBehavior: 'smooth',
  overscrollBehaviorInline: 'contain',
  scrollSnapType: 'inline mandatory',
  listStyle: 'none'
};

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>Hi, I'm Aryan Choudhary, an MCA graduate and a passionate Full Stack Developer with a strong interest in building modern web and mobile applications. I have developed responsive websites using React.js and Next.js, and cross-platform Android applications using React Native. For backend services, authentication, and database management, I have hands-on experience with Firebase.</p>
        <p>Along with development, I enjoy graphic design, 2D animation, motion graphics, and video editing. I also have practical knowledge of PC building, hardware assembly, and troubleshooting. I enjoy learning new technologies and creating user-friendly digital experiences that combine functionality with creative design.</p>
      </section>

      {/* Services */}
      <section className="service">
        <h3 className="h3 service-title">What i&apos;m doing</h3>
        <ul className="service-list">
          {[
            { icon: '/images/interface.png', title: 'Web design', text: 'Designing fast, responsive, and modern web applications using React.js, Next.js, Firebase, HTML, CSS, and JavaScript with a focus on clean UI, performance, and scalability.' },
            { icon: '/images/android.png', title: 'Android App development', text: 'Building cross-platform mobile applications with React Native and Firebase, featuring real-time data, authentication, push notifications, and intuitive user experiences.' },
            { icon: '/images/graphic-design.png', title: 'Motion Graphics', text: 'Creating engaging visual content including 2D Animations, Graphic Design, Logo Design, Posters & Banners, and Animated GIFs for digital branding and marketing.' },
            { icon: '/images/computer-screen.png', title: 'Computer Fundamentals', text: 'Strong knowledge of PC Building, Hardware Troubleshooting, Operating System Installation, Computer Networking, and system diagnostics for reliable setup and maintenance.' },
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

      {/* Tools & Technologies */}
      <section className="service">
        <h3 className="h3 service-title">Tools &amp; Technologies</h3>
        <ul className="has-scrollbar" style={toolsListStyle}>
          {[
            { name: 'Windows', icon: '/tools/windows.svg' },
            { name: 'GitHub', icon: '/tools/github.svg' },
            { name: 'VS Code', icon: '/tools/visualstudiocode.svg' },
            { name: 'Android Studio', icon: '/tools/androidstudio.svg' },
            { name: 'Adobe Illustrator', icon: '/tools/illustrator.svg' },
            { name: 'Adobe After Effects', icon: '/tools/adobeaftereffects.svg' },
            { name: 'Canva', icon: '/tools/canva.png' },
            { name: 'Adobe Animate', icon: '/tools/adobeAnimate.png' },
            { name: 'Firebase', icon: '/tools/firebase.png' },
            { name: 'React', icon: '/tools/react.png' },
            { name: 'JavaScript', icon: '/tools/java-script.png' },
            { name: 'HTML5', icon: '/tools/html-5.png' },
          ].map((tool) => (
            <li 
              key={tool.name} 
              style={{
                minWidth: '120px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                padding: '1.5rem',
                borderRadius: '14px',
                position: 'relative',
                zIndex: 1,
                minHeight: '140px',
                transition: 'transform 0.3s ease',
                scrollSnapAlign: 'center'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Image 
                src={tool.icon} 
                alt={tool.name} 
                width={45} 
                height={45}
                style={{ objectFit: 'contain' }}
              />
              <p style={{ 
                fontSize: '0.9rem', 
                fontWeight: '500', 
                color: '#fff', 
                textAlign: 'center',
                margin: 0
              }}>
                {tool.name}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Clients */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="https://www.kalkatravells.in/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px' }}>
                <Image src="/images/kalkatravellsLOGO.png" alt="kalkaTravells Logo" width={60} height={60} style={{ objectFit: 'contain' }} />
              </div>
              <p style={{ fontSize: '0.9rem', fontWeight: '500', color: '#fff', margin: 0 }}>KalkaTravells</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
}
