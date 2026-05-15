# Ali Öztürk — Kişisel Portfolyo

Modern, tek sayfalık (SPA) kişisel portfolyo sitesi. React ve Vite ile geliştirilmiştir; GitHub API üzerinden projeler dinamik olarak listelenir.

## Özellikler

- **Tek sayfa düzeni:** Hero, Hakkımda, Yetenekler, Eğitim, Projeler ve İletişim bölümleri
- **Dinamik proje listesi:** GitHub reposu API ile otomatik çekilir ve dile göre filtrelenebilir
- **Yazı animasyonu:** Hero bölümünde dönen unvanlar (typewriter efekti)
- **Aktif menü takibi:** Scroll konumuna göre navbar’da aktif bölüm vurgulanır
- **İletişim formu:** `mailto:` ile varsayılan e-posta istemcisini açar
- **Karanlık tema:** Cam efektli kartlar, gradient vurgular ve grid arka plan
- **Duyarlı tasarım:** Mobil menü ve breakpoint’lere uyumlu layout

## Teknolojiler

| Alan | Teknoloji |
|------|-----------|
| Framework | React 19 |
| Derleme | Vite 8 |
| İkonlar | lucide-react + özel SVG (`icons.jsx`) |
| Stil | Saf CSS (CSS değişkenleri / design tokens) |
| Harici API | GitHub REST API |

## Proje yapısı

```
portfolio/
├── public/
│   └── profile.png          # Profil fotoğrafı (GitHub avatarından)
├── src/
│   ├── main.jsx             # React giriş noktası
│   ├── App.jsx              # Ana layout ve scroll takibi
│   ├── index.css            # Global stiller ve tasarım token’ları
│   ├── App.css              # Uygulama kabuğu (fade-in vb.)
│   └── components/
│       ├── Navbar.jsx       # Üst navigasyon
│       ├── Hero.jsx         # Karşılama + typewriter
│       ├── About.jsx        # Hakkımda
│       ├── Skills.jsx       # Yetenek kartları
│       ├── Education.jsx    # Eğitim zaman çizelgesi
│       ├── Projects.jsx     # GitHub projeleri
│       ├── Contact.jsx      # İletişim formu
│       ├── Footer.jsx       # Alt bilgi
│       └── icons.jsx        # LinkedIn / GitHub özel ikonları
├── index.html
├── vite.config.js
└── package.json
```

## Kurulum

Gereksinimler: **Node.js 18+** ve **npm**

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusu (varsayılan: http://localhost:5173)
npm run dev

# Production build
npm run build

# Build önizlemesi
npm run preview
```

## Özelleştirme

| Ne değişecek | Nerede |
|--------------|--------|
| İsim, metinler, istatistikler | `About.jsx`, `Hero.jsx`, `Contact.jsx` |
| Yetenek listesi | `Skills.jsx` → `skills` ve `categories` |
| Eğitim kayıtları | `Education.jsx` → `educationData` |
| GitHub kullanıcı adı | `Projects.jsx` → API URL |
| Proje açıklamaları | `Projects.jsx` → `projectDescriptions` |
| Profil fotoğrafı | `public/profile.png` dosyasını değiştirin |
| Renkler ve fontlar | `src/index.css` → `:root` değişkenleri |
| Sosyal linkler | `Hero.jsx`, `Footer.jsx`, `Contact.jsx` |

## GitHub API notu

Projeler bölümü herkese açık repoları listeler. API limiti aşılırsa liste boş kalabilir; bu durumda istek sıklığını azaltın veya statik veri kullanın.

## İletişim

- **E-posta:** aliozturktr61@gmail.com
- **GitHub:** [aliozturktr61](https://github.com/aliozturktr61)
- **LinkedIn:** [öztürk-ali](https://www.linkedin.com/in/%C3%B6zt%C3%BCrk-ali)

## Lisans

Bu proje kişisel portfolyo amaçlıdır. İçerik ve tasarım Ali Öztürk’e aittir.
<img width="250" height="156" alt="Zight Recording 2026-05-15 at 04 09 35 PM" src="https://github.com/user-attachments/assets/28b4a41f-5272-409a-8ca9-6204e96e27cf" />


# portfolio
