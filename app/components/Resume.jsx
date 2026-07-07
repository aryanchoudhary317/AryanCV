'use client';
import { useState, useEffect, useRef } from 'react';

export default function Resume() {
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.getAttribute('data-skill');
            setAnimatedSkills((prev) => new Set(prev).add(skillName));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      const skillElements = skillsRef.current.querySelectorAll('[data-skill]');
      skillElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
          <a 
            href="/Docs/Aryan_CV.pdf" 
            download="Aryan_CV.pdf"
            style={{
              marginLeft: 'auto',
              padding: '8px 16px',
              backgroundColor: 'rgba(0, 217, 255, 0.1)',
              color: '#00D9FF',
              border: '1px solid rgba(0, 217, 255, 0.5)',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 217, 255, 0.2)';
              e.target.style.borderColor = '#00D9FF';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(0, 217, 255, 0.1)';
              e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
            }}
          >
            <ion-icon name="download-outline" style={{ fontSize: '1rem' }}></ion-icon>
            Download Resume
          </a>
        </div>
        <ol className="timeline-list">
          {[
            { 
              title: 'Masters of Computer Applications (MCA)', 
              year: 'July 2024 — 2026', 
              institution: 'Himachal Pradesh Technical University, Hamirpur',
              text: 'CGPA: 7.28/10. Coursework: DSA, Design & Analysis of Algorithms, Object Oriented Programming, Database Management System, Operating System, Web Technologies, Computer Architecture and Organization.' 
            },
            { 
              title: 'Bachelor of Computer Applications (BCA)', 
              year: 'July 2021 — 2024', 
              institution: 'Himachal Pradesh University, Shimla',
              text: 'CGPA: 7.23/10. Coursework: Web Development, DSA, Computer fundamentals, Office automation tools, Database Management System, Operating System, Computer Networks, Discrete Mathematics and Statistics.' 
            },
            { 
              title: 'Senior Secondary Education in Commerce (12th)', 
              year: '2021', 
              institution: 'Himachal Pradesh Board of Education (HPBOSE)',
              text: 'Score: 66.6%' 
            },
            { 
              title: 'High School Education (10th)', 
              year: '2019', 
              institution: 'Himachal Pradesh Board of Education (HPBOSE)',
              text: 'Score: 66%' 
            },
          ].map((item) => (
            <li key={item.title} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.year}</span>
              {item.institution && <p style={{fontSize: '0.9em',color: '#fff', fontStyle: 'italic', marginBottom: '0.5rem'}}>{item.institution}</p>}
              <p className="timeline-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          {[
            { 
              title: '6-Month Software Development Trainee', 
              year: '2024 — 2025', 
              company: 'Ninja Deliveries',
              text: 'Worked on real-world web and mobile application development using React Native, React.js, Next.js, and Firebase. Contributed to developing delivery management features, Firebase integration, bug fixing, UI implementation, and application testing.' 
            },
          ].map((item) => (
            <li key={item.title} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.year}</span>
              {item.company && <p style={{fontSize: '0.9em', fontStyle: 'italic', marginBottom: '0.5rem'}}>{item.company}</p>}
              <p className="timeline-text">{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="skill" ref={skillsRef}>
        <h3 className="h3 skills-title">My skills</h3>

        {/* Technical Skills */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 className="h4" style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: '600' }}>Technical Skills</h4>
          <ul className="skills-list content-card">
            {[
              { name: 'Web Development', value: 85 },
              { name: 'Android App Development', value: 75 },
              { name: 'Firebase', value: 80 },
              { name: 'PC Assembly & Upgrading', value: 75 },
              { name: 'System Troubleshooting', value: 80 },
              { name: 'Networking Fundamentals', value: 75 },
              { name: 'Graphics Design', value: 80 },
              { name: 'Motion Graphics', value: 75 },
              { name: '2D Animation', value: 70 },
              { name: 'Video Editing', value: 75 },
            ].map((skill) => (
              <li 
                key={skill.name} 
                className="skills-item"
                data-skill={skill.name}
              >
                <div className="title-wrapper">
                  <h5 className="h5">{skill.name}</h5>
                  <data value={skill.value}>{skill.value}%</data>
                </div>
                <div className="skill-progress-bg">
                  <div 
                    className="skill-progress-fill" 
                    style={{ 
                      width: animatedSkills.has(skill.name) ? `${skill.value}%` : '0%',
                      transition: 'width 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Skills */}
        <div style={{ marginBottom: '2rem' }}>
          <h4 className="h4" style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: '600' }}>Professional Skills</h4>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '2rem', listStyle: 'none', padding: 0 }}>
            {[
              { name: 'Problem Solving', value: 90 },
              { name: 'Team Collaboration', value: 85 },
              { name: 'Communication', value: 80 },
              { name: 'Time Management', value: 85 },
              { name: 'Quick Learning', value: 90 },
            ].map((skill) => (
              <li 
                key={skill.name} 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                data-skill={`circular-${skill.name}`}
              >
                <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 0.8rem' }}>
                  <svg style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="5" />
                    <circle 
                      cx="50" 
                      cy="50" 
                      r="45" 
                      fill="none" 
                      stroke="#00D9FF" 
                      strokeWidth="5"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={animatedSkills.has(`circular-${skill.name}`) ? `${2 * Math.PI * 45 * (1 - skill.value / 100)}` : `${2 * Math.PI * 45}`}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
                    />
                  </svg>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <data style={{ fontSize: '1.3rem', fontWeight: '700', color: '#fff' }}>{skill.value}%</data>
                  </div>
                </div>
                <h5 style={{ margin: '0.8rem 0 0', fontSize: '0.85rem', fontWeight: '600', color: '#fff' }}>{skill.name}</h5>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
