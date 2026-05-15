/**
 * Alt bilgi — hızlı linkler, sosyal medya ve “yukarı çık” butonu.
 */
import { GitBranch, Mail, ArrowUp } from 'lucide-react';
import { LinkedinIcon } from './icons';
import Logo from './Logo';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo className="footer-brand-name" onClick={() => scrollTo('hero')} />
            <p className="footer-brand-text">
              Modern web teknolojileri ile kullanıcı dostu, performanslı ve ölçeklenebilir
              uygulamalar geliştiren fullstack developer.
            </p>
            <div className="footer-socials">
              <a
                href="https://github.com/aliozturktr61"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <GitBranch size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/%C3%B6zt%C3%BCrk-ali"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:aliozturktr61@gmail.com"
                className="footer-social-link"
                aria-label="E-posta"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Hızlı Linkler</h3>
            <div className="footer-links">
              <button className="footer-link" onClick={() => scrollTo('hero')}>Ana Sayfa</button>
              <button className="footer-link" onClick={() => scrollTo('about')}>Hakkımda</button>
              <button className="footer-link" onClick={() => scrollTo('skills')}>Yetenekler</button>
              <button className="footer-link" onClick={() => scrollTo('projects')}>Projeler</button>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">İletişim</h3>
            <div className="footer-links">
              <a href="mailto:aliozturktr61@gmail.com" className="footer-link">
                aliozturktr61@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/%C3%B6zt%C3%BCrk-ali"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                LinkedIn Profilim
              </a>
              <a
                href="https://github.com/aliozturktr61"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub Profilim
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <span>Ali Öztürk</span>. Tüm hakları saklıdır.
          </p>
          <button className="footer-back-to-top" onClick={scrollToTop}>
            <ArrowUp size={16} />
            Yukarı Çık
          </button>
        </div>
      </div>
    </footer>
  );
}
