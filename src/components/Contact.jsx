/**
 * İletişim bölümü — form gönderimi mailto: ile kullanıcının e-posta istemcisini açar.
 * Backend veya EmailJS entegrasyonu yoktur.
 */
import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import { LinkedinIcon } from './icons';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form verisini mailto parametrelerine dönüştür; tarayıcı varsayılan mail uygulamasını açar
    const mailtoLink = `mailto:aliozturktr61@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolyo İletişim'
    )}&body=${encodeURIComponent(
      `Ad: ${formData.name}\nE-posta: ${formData.email}\n\nMesaj:\n${formData.message}`
    )}`;

    window.open(mailtoLink, '_blank');
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">İletişim</h2>
        <p className="section-subtitle">
          Benimle iletişime geçmekten çekinmeyin. Her zaman yeni projeler ve fırsatlar için açığım.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-info-text">
              Bir projeniz mi var? Birlikte çalışmak mı istiyorsunuz? Ya da sadece merhaba
              demek mi istiyorsunuz? Bana aşağıdaki bilgilerden ulaşabilir veya formu
              doldurarak doğrudan mesaj gönderebilirsiniz.
            </p>

            <div className="contact-info-cards">
              <div className="contact-info-card">
                <div className="contact-info-card-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="contact-info-card-label">E-posta</div>
                  <div className="contact-info-card-value">
                    <a href="mailto:aliozturktr61@gmail.com">aliozturktr61@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="contact-info-card-label">Konum</div>
                  <div className="contact-info-card-value">Türkiye</div>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-card-icon">
                  <LinkedinIcon size={22} />
                </div>
                <div>
                  <div className="contact-info-card-label">LinkedIn</div>
                  <div className="contact-info-card-value">
                    <a
                      href="https://www.linkedin.com/in/%C3%B6zt%C3%BCrk-ali"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/öztürk-ali
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="contact-name">Adınız</label>
                  <input
                    id="contact-name"
                    className="contact-form-input"
                    type="text"
                    name="name"
                    placeholder="Adınızı girin"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="contact-email">E-posta</label>
                  <input
                    id="contact-email"
                    className="contact-form-input"
                    type="email"
                    name="email"
                    placeholder="E-posta adresiniz"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="contact-subject">Konu</label>
                <input
                  id="contact-subject"
                  className="contact-form-input"
                  type="text"
                  name="subject"
                  placeholder="Mesajınızın konusu"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="contact-message">Mesajınız</label>
                <textarea
                  id="contact-message"
                  className="contact-form-textarea"
                  name="message"
                  placeholder="Mesajınızı buraya yazın..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn-primary contact-form-submit">
                <span>
                  <Send size={18} />
                  Mesaj Gönder
                </span>
              </button>

              {status === 'success' && (
                <div className="contact-form-status success">
                  <CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
                  Mesajınız hazırlandı! E-posta istemcinizden gönderebilirsiniz.
                </div>
              )}

              {status === 'error' && (
                <div className="contact-form-status error">
                  <XCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} />
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
