export default function Training() {
  const trainings = [
    {
      title: 'Full Stack Web & React Native Mobile Development',
      provider: 'Ninja Deliveries',
      date: '2025 - 2026',
      description: 'Comprehensive training in React.js, React Native, Firebase, and JavaScript. Worked on real-world projects with hands-on experience in building responsive web and mobile applications.',
      skills: ['React.js', 'Mobile Development', 'React Native', 'Firebase', 'JavaScript'],
      certificateFile: '/Docs/Certificate_ND-INTERN-5281_Aryan_Choudhary.pdf'
    },
    {
      title: 'Graphic Design & Motion Graphics',
      provider: 'Self-Learning',
      date: '2018 - Present',
      description: 'Proficiency in Adobe Creative Suite including Illustrator, After Effects, Animate, and Canva. Creating visual content for digital branding and marketing.',
      skills: ['Adobe Illustrator', 'After Effects', 'Adobe Animate', 'Canva', 'Graphic Design']
    },
    {
      title: 'Computer Hardware & Networking',
      provider: 'Self-Learning',
      date: '2020 - Present',
      description: 'Hands-on knowledge of PC assembly, hardware troubleshooting, OS installation, and computer networking fundamentals.',
      skills: ['PC Assembly', 'Hardware Troubleshooting', 'Networking', 'System Diagnostics']
    },
  ];

  const certificates = [
    {
      title: 'Java Workshop Certificate',
      issuer: 'Professional Training Institute',
      date: '2025',
      description: 'Completed intensive Java programming workshop covering core concepts, object-oriented programming, and practical application development.',
      certificateImage: '/Docs/javaWorkshopert.jpeg',
      type: 'workshop'
    },
    {
      title: 'One Week Workshop Certificate',
      issuer: 'Technical Training Center',
      date: '2022',
      description: 'Participated in comprehensive week-long workshop on modern web technologies and industry best practices.',
      certificateImage: '/Docs/oneWeekWorkshop.jpeg',
      type: 'workshop'
    },
    {
      title: 'One Minute Video Challenge Certificate',
      issuer: 'Creative Media Institute',
      date: '2022',
      description: 'Won recognition in the One Minute Video Challenge, demonstrating proficiency in video editing and creative storytelling.',
      certificateImage: '/Docs/oneMinuteVideo_cert.jpeg',
      type: 'achievement'
    },
    {
      title: 'International Conference Participation',
      issuer: 'International Conference Committee',
      date: '2025',
      description: 'Participated in an international conference on emerging technologies and software development trends.',
      certificateFile: '/Docs/Aryan choudhary_internationalConference.pdf',
      type: 'conference'
    },
  ];

  const otherCertificates = [
    {
      title: 'Wado-Kai Karate Certificate',
      issuer: 'Wado-Kai Karate Association',
      date: '2014',
      description: 'Achieved proficiency in Wado-Kai Karate training, demonstrating discipline, perseverance, and martial arts excellence.',
      certificateImage: '/Docs/Wado-Kai Karate Cert.jpeg',
      type: 'sports'
    },
  ];

  return (
    <article className="training active" data-page="training & certificates">
      <header>
        <h2 className="h2 article-title">Training & Certificates</h2>
      </header>

      <section className="timeline">
        <ol className="timeline-list">
          {trainings.map((training) => (
            <li key={training.title} className="timeline-item">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
                <h4 className="h4 timeline-item-title">{training.title}</h4>
                {training.certificateFile && (
                  <a 
                    href={training.certificateFile} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.35rem 0.8rem',
                      backgroundColor: 'rgba(0, 217, 255, 0.15)',
                      color: '#00D9FF',
                      border: '1px solid rgba(0, 217, 255, 0.5)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 217, 255, 0.25)';
                      e.target.style.borderColor = '#00D9FF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 217, 255, 0.15)';
                      e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                    }}
                  >
                    View Certificate
                  </a>
                )}
              </div>
              <span>{training.date}</span>
              <p style={{ fontSize: '0.9em', color: '#fff', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                {training.provider}
              </p>
              <p className="timeline-text">{training.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.8rem' }}>
                {training.skills.map((skill, index) => (
                  <span
                    key={skill}
                    style={{
                      display: 'inline-block',
                      color: '#00D9FF',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      paddingBottom: '0.3rem',
                      borderBottom: '1px solid #00D9FF'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Certificates Section */}
      <section className="timeline" style={{ marginTop: '2rem' }}>
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="ribbon-outline"></ion-icon>
          </div>
          <h3 className="h3">Certificates & Achievements</h3>
        </div>
        <ol className="timeline-list">
          {certificates.map((cert) => (
            <li key={cert.title} className="timeline-item">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
                <h4 className="h4 timeline-item-title">{cert.title}</h4>
                {cert.certificateImage && (
                  <button 
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; backgroundColor: rgba(0, 0, 0, 0.95); display: flex; alignItems: center; justifyContent: center; zIndex: 9999; padding: 20px;';
                      modal.innerHTML = `
                        <div style="position: relative; width: 90%; height: 90%; maxWidth: 1000px; maxHeight: 90vh;">
                          <img src="${cert.certificateImage}" style="width: 100%; height: 100%; objectFit: contain;" alt="${cert.title}" />
                          <button onClick="this.parentElement.parentElement.remove()" style="position: absolute; top: -50px; right: 0; background: none; border: none; color: #fff; fontSize: 32px; cursor: pointer; padding: 10px;">✕</button>
                        </div>
                      `;
                      document.body.appendChild(modal);
                      modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
                    }}
                    style={{
                      padding: '0.35rem 0.8rem',
                      backgroundColor: 'rgba(0, 217, 255, 0.15)',
                      color: '#00D9FF',
                      border: '1px solid rgba(0, 217, 255, 0.5)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 217, 255, 0.25)';
                      e.target.style.borderColor = '#00D9FF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 217, 255, 0.15)';
                      e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                    }}
                  >
                    View Certificate
                  </button>
                )}
                {cert.certificateFile && (
                  <a 
                    href={cert.certificateFile} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      padding: '0.35rem 0.8rem',
                      backgroundColor: 'rgba(0, 217, 255, 0.15)',
                      color: '#00D9FF',
                      border: '1px solid rgba(0, 217, 255, 0.5)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 217, 255, 0.25)';
                      e.target.style.borderColor = '#00D9FF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 217, 255, 0.15)';
                      e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                    }}
                  >
                    View Certificate
                  </a>
                )}
              </div>
              <span>{cert.date}</span>
              <p style={{ fontSize: '0.9em', color: '#fff', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                {cert.issuer}
              </p>
              <p className="timeline-text">{cert.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Others Section */}
      <section className="timeline" style={{ marginTop: '2rem' }}>
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="shield-checkmark-outline"></ion-icon>
          </div>
          <h3 className="h3">Others</h3>
        </div>
        <ol className="timeline-list">
          {otherCertificates.map((cert) => (
            <li key={cert.title} className="timeline-item">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '0.5rem' }}>
                <h4 className="h4 timeline-item-title">{cert.title}</h4>
                {cert.certificateImage && (
                  <button 
                    onClick={() => {
                      const modal = document.createElement('div');
                      modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; backgroundColor: rgba(0, 0, 0, 0.95); display: flex; alignItems: center; justifyContent: center; zIndex: 9999; padding: 20px;';
                      modal.innerHTML = `
                        <div style="position: relative; width: 90%; height: 90%; maxWidth: 1000px; maxHeight: 90vh;">
                          <img src="${cert.certificateImage}" style="width: 100%; height: 100%; objectFit: contain;" alt="${cert.title}" />
                          <button onClick="this.parentElement.parentElement.remove()" style="position: absolute; top: -50px; right: 0; background: none; border: none; color: #fff; fontSize: 32px; cursor: pointer; padding: 10px;">✕</button>
                        </div>
                      `;
                      document.body.appendChild(modal);
                      modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
                    }}
                    style={{
                      padding: '0.35rem 0.8rem',
                      backgroundColor: 'rgba(0, 217, 255, 0.15)',
                      color: '#00D9FF',
                      border: '1px solid rgba(0, 217, 255, 0.5)',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.3s ease',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 217, 255, 0.25)';
                      e.target.style.borderColor = '#00D9FF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(0, 217, 255, 0.15)';
                      e.target.style.borderColor = 'rgba(0, 217, 255, 0.5)';
                    }}
                  >
                    View Certificate
                  </button>
                )}
              </div>
              <span>{cert.date}</span>
              <p style={{ fontSize: '0.9em', color: '#fff', fontStyle: 'italic', marginBottom: '0.5rem' }}>
                {cert.issuer}
              </p>
              <p className="timeline-text">{cert.description}</p>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
