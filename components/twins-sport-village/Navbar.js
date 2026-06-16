'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header state
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY;

      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(id || 'hero');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`navbar-container ${scrolled ? 'scrolled' : ''}`} id="main-header">
      <div className="navbar-wrapper">
        <a href="#hero" onClick={(e) => handleLinkClick(e, 'hero')} className="logo-area">
          <svg className="logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="url(#logo-gradient)" strokeWidth="4" strokeDasharray="8 4"/>
            <path d="M30 35 H70 M50 35 V75" stroke="#ff5722" strokeWidth="8" strokeLinecap="round"/>
            <path d="M35 68 C 35 78, 65 78, 65 68 C 65 58, 35 60, 35 50 C 35 40, 65 40, 65 50" stroke="#00e5ff" strokeWidth="6" strokeLinecap="round" fill="none"/>
            <defs>
              <linearGradient id="logo-gradient" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="#ff5722"/>
                <stop offset="100%" stopColor="#00e5ff"/>
              </linearGradient>
            </defs>
          </svg>
          <div className="logo-text">
            <span className="logo-title">TWINS</span>
            <span className="logo-sub">SPORT VILLAGE</span>
          </div>
        </a>
        
        <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`} id="nav-menu">
          <ul>
            <li>
              <a 
                href="#hero" 
                onClick={(e) => handleLinkClick(e, 'hero')} 
                className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#impianti" 
                onClick={(e) => handleLinkClick(e, 'impianti')} 
                className={`nav-link ${activeSection === 'impianti' ? 'active' : ''}`}
              >
                Impianti
              </a>
            </li>
            <li>
              <a 
                href="#chi-siamo" 
                onClick={(e) => handleLinkClick(e, 'chi-siamo')} 
                className={`nav-link ${activeSection === 'chi-siamo' ? 'active' : ''}`}
              >
                Chi Siamo
              </a>
            </li>
            <li>
              <a 
                href="#prenota" 
                onClick={(e) => handleLinkClick(e, 'prenota')} 
                className={`nav-link ${activeSection === 'prenota' ? 'active' : ''}`}
              >
                Prenotazioni
              </a>
            </li>
            <li>
              <a 
                href="#contatti" 
                onClick={(e) => handleLinkClick(e, 'contatti')} 
                className={`nav-link ${activeSection === 'contatti' ? 'active' : ''}`}
              >
                Contatti
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a 
            href="#prenota" 
            onClick={(e) => handleLinkClick(e, 'prenota')} 
            className="btn btn-primary btn-navbar"
          >
            Prenota Campo
          </a>
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`} 
            id="menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
