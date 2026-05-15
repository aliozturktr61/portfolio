/**
 * Site logosu — geliştirici portfolyosunda JSX etiketi görünümü: <AÖ />
 */
import './Logo.css';

export default function Logo({ className = '', onClick, as = 'div' }) {
  const Tag = as;
  const props = {
    className: `logo ${className}`.trim(),
    ...(onClick && { onClick, role: 'button', tabIndex: 0, onKeyDown: (e) => e.key === 'Enter' && onClick?.() }),
  };

  return (
    <Tag {...props}>
      <span className="logo-bracket">&lt;</span>
      <span className="logo-text">AÖ</span>
      <span className="logo-bracket"> /&gt;</span>
    </Tag>
  );
}
