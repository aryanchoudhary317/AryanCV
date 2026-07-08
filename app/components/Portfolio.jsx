'use client';
import { useState } from 'react';
import Image from 'next/image';

const projects = [
  // Web Development
  { title: 'KalkaTravells', category: 'web development', img: '/images/kalkatravellsLOGO.png', link: 'https://www.kalkatravells.in/' },
  
  // Graphics Design
  { title: 'Binary Brains Hackathon', category: 'graphics design', img: '/graphicsDesign/binary-brains-Hackathon.jpg' },
  { title: 'Binary Brains Quiz', category: 'graphics design', img: '/graphicsDesign/binary-brains-Quiz.jpg' },
  { title: 'Hackathon', category: 'graphics design', img: '/graphicsDesign/hackathon.jpg' },
  { title: 'Ninja Food Non-Veg', category: 'graphics design', img: '/graphicsDesign/ninjafoodNonVeg.png' },
  { title: 'Ninja Food Veg', category: 'graphics design', img: '/graphicsDesign/ninjafoodVeg.png' },
  { title: 'Ninja Service Banner 1', category: 'graphics design', img: '/graphicsDesign/ninjaServicebanner1.png' },
  { title: 'Ninja Service Banner 2', category: 'graphics design', img: '/graphicsDesign/ninjaServicebanner2.png' },
  { title: 'Ninja Service Banner 3', category: 'graphics design', img: '/graphicsDesign/ninjaServicebanner3.png' },
  { title: 'Rose Bouquet Banner', category: 'graphics design', img: '/graphicsDesign/rose-bouquet-banner.png' },
  { title: 'Rules', category: 'graphics design', img: '/graphicsDesign/rules.jpg' },
  { title: 'Valentine Banner', category: 'graphics design', img: '/graphicsDesign/valentine-banner.png' },
  
  // GIFs
  { title: '3D Ball Animation', category: 'gifs', img: '/images/3D_ball4.gif' },
  { title: 'Animation AAB', category: 'gifs', img: '/images/aab.gif' },
  { title: 'Animation AAC', category: 'gifs', img: '/images/aac.gif' },
  { title: 'Diwali Quiz', category: 'gifs', img: '/images/diwali-QUIZ.gif' },
  { title: 'Karwachoth', category: 'gifs', img: '/images/karwachoth.gif' },
  { title: 'Ninja Service Loader', category: 'gifs', img: '/images/ninjaServiceLoader3.gif' },
  { title: 'Ninja Weather', category: 'gifs', img: '/images/ninjaWeather2.gif' },
  { title: 'Valentine Loader', category: 'gifs', img: '/images/valentineLoader.gif' },
  
  // 2D Animations
  { title: 'Character Animation', category: '2d animations', link: 'https://youtu.be/Ta80-cnP9jY?si=AecmNkZKDRl6J0NE', videoId: 'Ta80-cnP9jY' },
  { title: 'Motion Design', category: '2d animations', link: 'https://youtu.be/fTwVJfwVaIQ?si=tzJBFeurwL_TmgaK', videoId: 'fTwVJfwVaIQ' },
  
  // Motion Graphics (Cloudinary Videos)
  { title: 'Motion Design 1', category: 'motion graphics', videoUrl: 'https://res.cloudinary.com/ebffmvzj/video/upload/v1783519958/km_20260708_360p_30f_20260708_191425_ahsqet.3gp' },
  { title: 'Motion Design 2', category: 'motion graphics', videoUrl: 'https://res.cloudinary.com/ebffmvzj/video/upload/v1783519956/km_20260708_360p_30f_20260708_191730_umfoxp.3gp' },
  { title: 'Motion Design 3', category: 'motion graphics', videoUrl: 'https://res.cloudinary.com/ebffmvzj/video/upload/v1783519953/km_20260708_360p_30f_20260708_192130_ul9pzl.3gp' },
  { title: 'Motion Design 4', category: 'motion graphics', videoUrl: 'https://res.cloudinary.com/ebffmvzj/video/upload/v1783519951/km_20260708_360p_30f_20260708_192704_l4lf8m.3gp' },
  { title: 'Motion Design 5', category: 'motion graphics', videoUrl: 'https://res.cloudinary.com/ebffmvzj/video/upload/v1783519943/km_20260322_1080p_30f_20260322_181146_etizch.3gp' },
];

const filters = ['All', 'Web development', 'Graphics design', 'Gifs', '2d animations', 'Motion graphics'];

export default function Portfolio() {
  const [active, setActive] = useState('all');
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

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
          <ul
            className="select-list"
            style={selectOpen ? { opacity: 1, visibility: 'visible', pointerEvents: 'all' } : {}}
          >
            {filters.map((f) => (
              <li key={f} className="select-item">
                <button
                  onClick={() => {
                    setActive(f.toLowerCase());
                    setSelectOpen(false);
                  }}
                >
                  {f}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Project grid */}
        <ul className="project-list">
          {filtered.map((p) => (
            <li key={p.title} className="project-item active">
              <a 
                href={p.link || '#'} 
                target={p.link ? '_blank' : '_self'} 
                rel={p.link ? 'noopener noreferrer' : ''}
                onClick={(e) => {
                  if (!p.link && (p.img || p.videoUrl)) {
                    e.preventDefault();
                    setSelectedImage(p);
                  }
                }}
              >
                {p.img ? (
                  <figure className="project-img" style={{ position: 'relative', backgroundColor: '#1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: p.link ? 'pointer' : 'zoom-in' }}>
                    <div className="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      style={{ objectFit: 'contain', padding: '10px' }}
                      loading="lazy"
                    />
                  </figure>
                ) : p.videoId ? (
                  <figure className="project-img" style={{ position: 'relative', backgroundColor: '#1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer' }}>
                    <div className="project-item-icon-box">
                      <ion-icon name="play-circle-outline" style={{ fontSize: '40px' }}></ion-icon>
                    </div>
                    <Image
                      src={`https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`}
                      alt={p.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                    />
                  </figure>
                ) : p.videoUrl ? (
                  <figure className="project-img" style={{ position: 'relative', backgroundColor: '#1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer', minHeight: '300px' }}>
                    <div className="project-item-icon-box">
                      <ion-icon name="play-circle-outline" style={{ fontSize: '40px' }}></ion-icon>
                    </div>
                    <video
                      src={p.videoUrl}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                      }}
                    />
                  </figure>
                ) : (
                  <figure className="project-img" style={{ position: 'relative', backgroundColor: '#1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer', minHeight: '300px' }}>
                    <div style={{ textAlign: 'center', color: '#fff' }}>
                      <ion-icon name="logo-youtube" style={{ fontSize: '48px', marginBottom: '10px', display: 'block', color: '#FF0000' }}></ion-icon>
                      <p style={{ margin: 0, fontSize: '14px' }}>Watch on YouTube</p>
                    </div>
                  </figure>
                )}
                <h3 className="project-title">{p.title}</h3>
                <p className="project-category">{p.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Fullscreen Image/Video Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px',
          }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            style={{
              position: 'relative',
              width: '90%',
              height: '90%',
              maxWidth: '1200px',
              maxHeight: '90vh',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage.videoUrl ? (
              <video
                controls
                autoPlay
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              >
                <source src={selectedImage.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={selectedImage.img}
                alt={selectedImage.title}
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0',
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '32px',
                cursor: 'pointer',
                padding: '10px',
              }}
            >
              ✕
            </button>
            <p style={{
              position: 'absolute',
              bottom: '-50px',
              left: '0',
              color: '#fff',
              fontSize: '14px',
              textAlign: 'center',
              width: '100%',
            }}>
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
