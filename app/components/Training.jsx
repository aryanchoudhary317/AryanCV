export default function Training() {
  const trainings = [
    {
      title: 'Full Stack Web , React Native Mobile Development',
      provider: 'Ninja Deliveries',
      date: '2024 - 2025',
      description: 'Comprehensive training in React.js,React Native, Firebase,  and JavaScript. Worked on real-world projects with hands-on experience in building responsive web and mobile applications.',
      skills: ['React.js','Mobile Development','React Native', 'Firebase', 'JavaScript']
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

      <section className="training-section">
        <ul className="training-list" style={{ listStyle: 'none', padding: 0 }}>
          {trainings.map((training) => (
            <li 
              key={training.title} 
              style={{
                marginBottom: '2rem',
                padding: '1.5rem',
                borderRadius: '14px',
                background: 'var(--border-gradient-onyx)',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div style={{ position: 'absolute', inset: '1px', borderRadius: 'inherit', background: 'var(--bg-gradient-jet)', zIndex: -1 }}></div>
              
              <h3 className="h3" style={{ marginBottom: '0.5rem', color: '#00D9FF' }}>
                {training.title}
              </h3>
              
              <p style={{ 
                fontSize: '0.9rem', 
                color: '#FFB000', 
                fontWeight: '600', 
                marginBottom: '0.3rem',
                margin: 0 
              }}>
                {training.provider}
              </p>
              
              <p style={{ 
                fontSize: '0.85rem', 
                color: 'var(--light-gray-70)', 
                marginBottom: '0.8rem',
                margin: 0
              }}>
                {training.date}
              </p>

              <p style={{
                color: 'var(--light-gray)',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                {training.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {training.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      display: 'inline-block',
                      padding: '0.4rem 0.8rem',
                      backgroundColor: 'rgba(0, 217, 255, 0.1)',
                      color: '#00D9FF',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      border: '1px solid rgba(0, 217, 255, 0.3)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
