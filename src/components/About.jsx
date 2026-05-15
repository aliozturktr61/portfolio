/**
 * Hakkımda bölümü — profil görseli, kısa bio, iletişim bilgileri ve istatistikler.
 * profile.png: public/ klasöründen sunulur (GitHub avatarı).
 */
import { User, MapPin, Mail, Briefcase, Download } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-section">
            <div className="about-image-card">
              <img src="/profile.png" alt="Ali Öztürk" />
              <div className="about-image-overlay" />
              <div className="about-experience-badge">
                <span className="about-experience-number">2+</span>
                <div>
                  <div className="about-experience-label">
                    Yıllık<br />Deneyim
                  </div>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">56+</div>
                <div className="about-stat-label">GitHub Repo</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">43</div>
                <div className="about-stat-label">Takipçi</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">20+</div>
                <div className="about-stat-label">Proje</div>
              </div>
            </div>
          </div>

          <div className="about-content">
            <h2>
              Hakkımda <span className="gradient-text">Biraz</span>
            </h2>
            <p className="section-subtitle">
              Tutkulu bir yazılım geliştiricisi olarak modern web dünyasında iz bırakıyorum.
            </p>
            <p className="about-text">
              Fullstack Developer olarak, kullanıcı deneyimini ön planda tutan modern ve
              performanslı web uygulamaları geliştiriyorum. React, React Native, Next.js
              ve Node.js teknolojilerinde uzmanlaşarak, hem frontend hem de backend
              tarafında güçlü çözümler sunuyorum.
            </p>
            <p className="about-text">
              Sürekli öğrenme ve gelişme felsefesiyle hareket ederek, yazılım dünyasındaki
              en son trendleri takip ediyorum. MERN Stack (MongoDB, Express.js, React,
              Node.js) ile tam kapsamlı uygulamalar geliştirme konusunda deneyim sahibiyim.
            </p>

            <div className="about-info-grid">
              <div className="about-info-item">
                <div className="about-info-icon">
                  <User size={18} />
                </div>
                <div>
                  <div className="about-info-label">İsim</div>
                  <div className="about-info-value">Ali Öztürk</div>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="about-info-label">Konum</div>
                  <div className="about-info-value">Türkiye</div>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="about-info-label">E-posta</div>
                  <div className="about-info-value">aliozturktr61@gmail.com</div>
                </div>
              </div>
              <div className="about-info-item">
                <div className="about-info-icon">
                  <Briefcase size={18} />
                </div>
                <div>
                  <div className="about-info-label">Uzmanlık</div>
                  <div className="about-info-value">Fullstack Developer</div>
                </div>
              </div>
            </div>

            <div className="about-buttons">
              <a
                href="https://www.linkedin.com/in/%C3%B6zt%C3%BCrk-ali"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>
                  <Download size={18} />
                  LinkedIn Profilim
                </span>
              </a>
              <button
                className="btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail size={18} />
                Bana Ulaşın
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
