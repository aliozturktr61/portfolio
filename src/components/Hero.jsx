/**
 * Karşılama (hero) bölümü.
 * Typewriter efekti ile unvanlar sırayla yazılır ve silinir.
 */
import { useState, useEffect } from 'react';
import { GitBranch, Mail, ArrowDown, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './icons';
import './Hero.css';

/** Typewriter animasyonunda dönen meslek unvanları */
const titles = [
  'Fullstack Developer',
  'React Developer',
  'React Native Developer',
  'Frontend Developer',
  'Backend Developer',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Harf harf yaz → bekle → sil → sonraki unvana geç
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;

    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000); // Tam yazıldıktan sonra bekleme
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentTitle.substring(0, displayText.length - 1)
            : currentTitle.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero section" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="wave">👋</span>
            Merhaba, ben
          </div>
          <h1 className="hero-name">
            Ali <span className="highlight">Öztürk</span>
          </h1>
          <p className="hero-title">
            <span className="typed">{displayText}</span>
          </p>
          <p className="hero-description">
            Modern web teknolojileri ile kullanıcı dostu, performanslı ve ölçeklenebilir
            uygulamalar geliştiriyorum. React, React Native, Next.js ve MERN Stack
            üzerinde uzmanlaşmış bir yazılım geliştiricisiyim.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              <span>
                <Mail size={18} />
                İletişime Geç
              </span>
            </button>
            <button className="btn-outline" onClick={scrollToProjects}>
              <ExternalLink size={18} />
              Projelerimi Gör
            </button>
          </div>

          <div className="hero-socials">
            <span className="hero-socials-label">Beni takip edin →</span>
            <a
              href="https://github.com/aliozturktr61"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub"
            >
              <GitBranch size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/%C3%B6zt%C3%BCrk-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="mailto:aliozturktr61@gmail.com"
              className="hero-social-link"
              aria-label="E-posta"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-ring" />
            <div className="hero-image-ring-2" />
            <img
              src="/profile.png"
              alt="Ali Öztürk"
              className="hero-image"
            />
            <div className="hero-image-dot hero-image-dot-1" />
            <div className="hero-image-dot hero-image-dot-2" />
            <div className="hero-image-dot hero-image-dot-3" />
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="hero-scroll-mouse" />
        <span>Aşağı Kaydır</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
