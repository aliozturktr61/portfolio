/**
 * Eğitim bölümü — dikey zaman çizelgesi (timeline) layout.
 */
import { GraduationCap, Calendar } from 'lucide-react';
import './Education.css';

/** Timeline kartları; yeni eğitim eklemek için diziye obje ekleyin */
const educationData = [
  {
    date: '2024 – Devam Ediyor',
    title: 'Fullstack Web & Mobil Geliştirme',
    school: 'Çeşitli Online Platformlar & Kendi Kendine Öğrenme',
    description:
      'React, React Native, Next.js, Node.js, MongoDB, Express.js, TypeScript ve modern web teknolojileri üzerine yoğun eğitimler ve proje geliştirme süreçleri.',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'],
  },
  {
    date: '2024',
    title: 'Frontend Development Eğitimi',
    school: 'Online Eğitim Platformları',
    description:
      'HTML, CSS, JavaScript temellerinden ileri seviye React, Redux Toolkit, Tanstack Query ve TypeScript gibi modern frontend teknolojilerine kadar kapsamlı eğitimler.',
    tags: ['HTML/CSS', 'JavaScript', 'React', 'Redux', 'Tanstack Query'],
  },
  {
    date: '2024',
    title: 'Backend & Veritabanı Eğitimi',
    school: 'MERN Stack Uzmanlaşma',
    description:
      'Node.js, Express.js, MongoDB, REST API tasarımı, WebSocket ve Firebase gibi backend teknolojileri üzerine uygulamalı eğitimler.',
    tags: ['Express.js', 'REST API', 'WebSocket', 'Firebase'],
  },
  {
    date: '2024',
    title: 'Mobil Uygulama Geliştirme',
    school: 'React Native & Expo',
    description:
      'React Native ve Expo ile cross-platform mobil uygulama geliştirme. Trendyol clone, sözlük uygulaması gibi gerçek dünya projeleri geliştirme.',
    tags: ['React Native', 'Expo', 'Mobile UI/UX'],
  },
];

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="education-container">
        <h2 className="section-title">Eğitimlerim</h2>
        <p className="section-subtitle">
          Yazılım yolculuğumda aldığım eğitimler ve kazandığım beceriler.
        </p>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div className="education-item" key={index}>
              <div className="education-dot" />
              <div className="education-card">
                <div className="education-date">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <h3 className="education-title">{item.title}</h3>
                <p className="education-school">
                  <GraduationCap size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
                  {item.school}
                </p>
                <p className="education-description">{item.description}</p>
                <div className="education-tags">
                  {item.tags.map((tag) => (
                    <span className="education-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
