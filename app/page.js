'use client';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Training from './components/Training';
import Contact from './components/Contact';

export default function Home() {
  const [activePage, setActivePage] = useState('about');

  return (
    <main>
      <Sidebar />
      <div className="main-content">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        {activePage === 'about' && <About />}
        {activePage === 'resume' && <Resume />}
        {activePage === 'portfolio' && <Portfolio />}
        {activePage === 'training & certificates' && <Training />}
        {activePage === 'contact' && <Contact />}
      </div>
    </main>
  );
}
