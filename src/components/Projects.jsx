/**
 * Projeler bölümü — GitHub API ile repoları çeker, dile göre filtreler.
 * API: https://api.github.com/users/{username}/repos
 */
import { useState, useEffect } from 'react';
import { GitBranch, ExternalLink, Star, GitFork } from 'lucide-react';
import './Projects.css';

/** Repo adına göre Türkçe açıklama; eşleşmezse GitHub description kullanılır */
const projectDescriptions = {
  'rehber': 'React Native ile geliştirilmiş modern bir rehber uygulaması. Kişi ekleme, düzenleme ve silme işlemlerini destekler.',
  'getir_clone': 'Getir uygulamasının React Native ile geliştirilmiş klonu. Modern UI/UX tasarımı ve sipariş akışı.',
  'Mern-FullStack': 'MongoDB, Express.js, React ve Node.js ile geliştirilmiş fullstack web uygulaması.',
  'Native-Sozluk-Uygulamas-': 'React Native ile geliştirilmiş çok dilli sözlük uygulaması. Kelime arama ve kaydetme özellikleri.',
  'ChattyPro-Native3': 'React Native ile geliştirilmiş gerçek zamanlı mesajlaşma uygulaması.',
  'NextjsPro': 'Next.js ve TypeScript ile geliştirilmiş modern web uygulaması projesi.',
  'FullStack-MernPro-1': 'MERN Stack ile geliştirilmiş kapsamlı fullstack web uygulaması.',
  'webSoketio': 'WebSocket teknolojisi ile gerçek zamanlı iletişim uygulaması.',
  'mern-pro-2': 'MERN Stack ile geliştirilmiş ikinci fullstack web projesi.',
  'trendyol-clone-mobile': 'Trendyol uygulamasının React Native ile geliştirilmiş mobil klonu.',
  'MovieAppWithNextjs': 'Next.js ile geliştirilmiş film arama ve keşfetme uygulaması.',
  'MernStackPro3': 'MERN Stack ile geliştirilmiş üçüncü fullstack web projesi.',
  'Dashboard-with-NextJs': 'Next.js ve TypeScript ile geliştirilmiş modern admin dashboard.',
  'React-Firebase-Authentication-Project': 'React ve Firebase ile geliştirilmiş kimlik doğrulama sistemi.',
  'CarRentalWithNextjs': 'Next.js ve TypeScript ile geliştirilmiş araç kiralama platformu.',
  'TypeScript_Note_App': 'TypeScript ile geliştirilmiş modern not alma uygulaması.',
  'hotels_TanstackQuery': 'Tanstack Query ile geliştirilmiş otel arama ve listeleme uygulaması.',
  'ShoesProjectWithTanstack': 'Tanstack Query kullanarak geliştirilen ayakkabı mağazası uygulaması.',
  'AlisverisSepeti_ReduxToolkit': 'Redux Toolkit ile geliştirilmiş alışveriş sepeti uygulaması.',
  'CarRentalWithTypeScript': 'TypeScript ile geliştirilmiş araç kiralama uygulaması.',
};

/** Dil etiketlerinin renkleri (kart üzerindeki badge) */
const languageColors = {
  'JavaScript': '#f7df1e',
  'TypeScript': '#3178c6',
  'HTML': '#e34c26',
  'CSS': '#1572b6',
  'Python': '#3776ab',
};

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState('Tümü');
  const [loading, setLoading] = useState(true);

  // Mount’ta GitHub’dan güncel repoları al (kimlik doğrulama gerekmez, public API)
  useEffect(() => {
    fetch('https://api.github.com/users/aliozturktr61/repos?sort=updated&per_page=30')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const languages = ['Tümü', ...new Set(repos.map(r => r.language).filter(Boolean))];
  const filtered = filter === 'Tümü' ? repos : repos.filter(r => r.language === filter);

  /** Repo adına göre emoji ikonu — görsel çeşitlilik için */
  const getIcon = (name) => {
    if (name?.toLowerCase().includes('native') || name?.toLowerCase().includes('mobile') || name?.toLowerCase().includes('clone'))
      return '📱';
    if (name?.toLowerCase().includes('next') || name?.toLowerCase().includes('dashboard'))
      return '▲';
    if (name?.toLowerCase().includes('mern') || name?.toLowerCase().includes('fullstack'))
      return '🔗';
    if (name?.toLowerCase().includes('firebase'))
      return '🔥';
    if (name?.toLowerCase().includes('socket') || name?.toLowerCase().includes('chat'))
      return '💬';
    return '📁';
  };

  return (
    <section className="projects section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projelerim</h2>
        <p className="section-subtitle">
          GitHub üzerindeki açık kaynak projelerim. Her biri farklı teknolojiler kullanılarak geliştirildi.
        </p>

        <div className="projects-filter">
          {languages.map(lang => (
            <button
              key={lang}
              className={`projects-filter-btn ${filter === lang ? 'active' : ''}`}
              onClick={() => setFilter(lang)}
            >
              {lang}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--color-text-muted)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⏳</div>
            Projeler yükleniyor...
          </div>
        ) : (
          <div className="projects-grid">
            {filtered.map((repo) => (
              <div className="project-card" key={repo.id}>
                <div className="project-card-header">
                  <div className="project-card-icon">
                    {getIcon(repo.name)}
                  </div>
                  <div className="project-card-links">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-link"
                      aria-label="GitHub'da Aç"
                    >
                      <GitBranch size={16} />
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link"
                        aria-label="Canlı Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-card-body">
                  <h3 className="project-card-title">{repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}</h3>
                  <p className="project-card-description">
                    {projectDescriptions[repo.name] || repo.description || 'Modern web teknolojileri ile geliştirilmiş proje.'}
                  </p>

                  <div className="project-card-footer">
                    <div className="project-card-tags">
                      {repo.language && (
                        <span className="project-card-tag">
                          <span
                            style={{
                              display: 'inline-block',
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              background: languageColors[repo.language] || '#888',
                              marginRight: 4,
                            }}
                          />
                          {repo.language}
                        </span>
                      )}
                    </div>
                    <div className="project-card-stars">
                      {repo.stargazers_count > 0 && (
                        <>
                          <Star size={14} />
                          {repo.stargazers_count}
                        </>
                      )}
                      {repo.forks_count > 0 && (
                        <>
                          <GitFork size={14} />
                          {repo.forks_count}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="projects-cta">
          <a
            href="https://github.com/aliozturktr61"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>
              <GitBranch size={18} />
              Tüm Projelerimi Gör
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
