'use client';
import { useState } from 'react';
import Image from 'next/image';

const projects = [
  { title: 'Finance', category: 'web development', img: '/assets/images/project-1.jpg' },
  { title: 'Orizon', category: 'web development', img: '/assets/images/project-2.png' },
  { title: 'Fundo', category: 'web design', img: '/assets/images/project-3.jpg' },
  { title: 'Brawlhalla', category: 'applications', img: '/assets/images/project-4.png' },
  { title: 'DSM.', category: 'web design', img: '/assets/images/project-5.png' },
  { title: 'MetaSpark', category: 'web design', img: '/assets/images/project-6.png' },
  { title: 'Summary', category: 'web development', img: '/assets/images/project-7.png' },
  { title: 'Task Manager', category: 'applications', img: '/assets/images/project-8.jpg' },
  { title: 'Arrival', category: 'web development', img: '/assets/images/project-9.png' },
];

const filters = ['All', 'Web design', 'Applications', 'Web development'];

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const [selectOpen, setSelectOpen] = useState(false);

  const filtered = projects.filter(
    (p) => active === 'all' || p.category === active
  );

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Desktop filter buttons */}
        <ul className="filter-list">
          {filters.map((f) => (
            <li key={f} className="filter-item">
              <button
                className={active === f.toLowerCase() ? 'active' : ''}
                onClick={() => setActive(f.toLowerCase())}
              >
                {f}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile select */}
        <div className="filter-select-box">
          <button
            className={`filter-select ${selectOpen ? 'active' : ''}`}
            onClick={() => setSelectOpen(!selectOpen)}
          >
            <div className="select-value">
              {filters.find((f) => f.toLowerCase() === active) || 'Select category'}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
          <ul className={`select-list ${selectOpen ? '' : ''}`} style={selectOpen ? { opacity: 1, visibility: 'visible', pointerEvents: 'all' } : {}}>
            {filters.map((f) => (
              <li key={f} className="select-item">
                <button onClick={() => { setActive(f.toLowerCase()); setSelectOpen(false); }}>{f}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project grid */}
        <ul className="project-list">
          {filtered.map((p) => (
            <li key={p.title} className="project-item active">
              <a href="#">
                <figure className="project-img" style={{ position: 'relative' }}>
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} loading="lazy" />
                </figure>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-category">{p.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
