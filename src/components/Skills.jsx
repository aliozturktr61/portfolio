/**
 * Yetenekler bölümü — seviye çubuklu kartlar ve kategori etiketleri.
 */
import { Layout, Server, Smartphone } from 'lucide-react';
import './Skills.css';

/** level: 0–100 arası; skill-level-bar genişliğini belirler */
const skills = [
  { name: 'React', icon: '⚛️', level: 90 },
  { name: 'JavaScript', icon: '🟨', level: 88 },
  { name: 'TypeScript', icon: '🔷', level: 80 },
  { name: 'Next.js', icon: '▲', level: 82 },
  { name: 'React Native', icon: '📱', level: 85 },
  { name: 'Node.js', icon: '🟢', level: 78 },
  { name: 'HTML/CSS', icon: '🎨', level: 92 },
  { name: 'MongoDB', icon: '🍃', level: 75 },
  { name: 'Express.js', icon: '🚂', level: 77 },
  { name: 'Redux', icon: '🔄', level: 80 },
  { name: 'Firebase', icon: '🔥', level: 72 },
  { name: 'Git', icon: '📦', level: 85 },
];

const categories = [
  {
    title: 'Frontend',
    icon: <Layout size={20} />,
    tags: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Redux Toolkit', 'Tanstack Query', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: <Server size={20} />,
    tags: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'WebSocket', 'Firebase'],
  },
  {
    title: 'Mobil',
    icon: <Smartphone size={20} />,
    tags: ['React Native', 'Expo', 'Mobile UI/UX', 'Native Modüller'],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Yeteneklerim</h2>
        <p className="section-subtitle">
          Modern web ve mobil teknolojilerinde uzmanlaşarak güçlü çözümler sunuyorum.
        </p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
              <div className="skill-level">
                <div
                  className="skill-level-bar"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="skills-categories">
          {categories.map((cat) => (
            <div className="skills-category" key={cat.title}>
              <div className="skills-category-title">
                <div className="skills-category-icon">{cat.icon}</div>
                {cat.title}
              </div>
              <div className="skills-category-list">
                {cat.tags.map((tag) => (
                  <span className="skills-category-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
