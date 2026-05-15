/**
 * Sabit üst navigasyon.
 * activeSection: App.jsx scroll takibinden gelen aktif bölüm id’si
 */
import { useState, useEffect } from 'react';
import Logo from './Logo';
import './Navbar.css';

/** Sayfa içi anchor linkleri — id değerleri ilgili section’larla eşleşmeli */
const navLinks = [
  { id: 'hero', label: 'Ana Sayfa' },
  { id: 'about', label: 'Hakkımda' },
  { id: 'skills', label: 'Yetenekler' },
  { id: 'education', label: 'Eğitim' },
  { id: 'projects', label: 'Projeler' },
  { id: 'contact', label: 'İletişim' },
];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 50px’ten sonra navbar’a “scrolled” stili uygulanır (cam efekt / gölge)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="navbar-container">
        <Logo className="navbar-logo" onClick={() => scrollTo('hero')} />

        <div className={`navbar-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <button
              key={link.id}
              className={`navbar-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className={`navbar-mobile-btn ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
