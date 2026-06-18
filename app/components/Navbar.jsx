'use client';

const tabs = ['About', 'Resume', 'Portfolio', 'Blog', 'Contact'];

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {tabs.map((tab) => (
          <li key={tab} className="navbar-item">
            <button
              className={`navbar-link ${activePage === tab.toLowerCase() ? 'active' : ''}`}
              onClick={() => {
                setActivePage(tab.toLowerCase());
                window.scrollTo(0, 0);
              }}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
