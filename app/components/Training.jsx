export default function Training() {
  const trainings = [
    {
      title: 'Full Stack Web & React Native Mobile Development',
      provider: 'Ninja Deliveries',
      date: '2024 - 2025',
      description: 'Comprehensive training in React.js, React Native, Firebase, and JavaScript. Worked on real-world projects with hands-on experience in building responsive web and mobile applications.',
      skills: ['React.js', 'Mobile Development', 'React Native', 'Firebase', 'JavaScript'],
      certificateFile: '/Docs/Certificate_ND-INTERN-5281_Aryan_Choudhary.pdf'
    },
    {
      title: 'Graphic Design & Motion Graphics',
      provider: 'Self-Learning',
      date: '2022 - Present',
      description: 'Proficiency in Adobe Creative Suite including Illustrator, After Effects, Animate, and Canva. Creating visual content for digital branding and marketing.',
      skills: ['Adobe Illustrator', 'After Effects', 'Adobe Animate', 'Canva', 'Graphic Design']
    },
    {
      title: 'Computer Hardware & Networking',
      provider: 'Self-Learning',
      date: '2021 - Present',
      description: 'Hands-on knowledge of PC assembly, hardware troubleshooting, OS installation, and computer networking fundamentals.',
      skills: ['PC Assembly', 'Hardware Troubleshooting', 'Networking', 'System Diagnostics']
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
    </article>
  );
}
