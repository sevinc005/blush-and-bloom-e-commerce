import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css';

export const Footer = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqList = [
    {
      q: "Çatdırılma neçə günə həyata keçirilir?",
      a: "Bakı şəhəri daxilində çatdırılma 24 saat ərzində, rayonlara isə 2-3 iş günü ərzində tam təhlükəsiz həyata keçirilir."
    },
    {
      q: "Məhsulları qaytarmaq və ya dəyişdirmək mümkündür?",
      a: "Kosmetik məhsullarda yalnız qablaşdırması açılmamış və zədələnməmiş məhsullar 14 gün ərzində dəyişdirilə bilər."
    },
    {
      q: "Ödəniş üsulları hansılardır?",
      a: "Qapıda nağd ödəniş, eləcə də sayt üzərindən istənilən bank kartı ilə onlayn ödəniş edə bilərsiniz."
    }
  ];

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        <div className="footer-top-grid">
          
          {/* Sütun 1: Haqqımızda & Sosial Media */}
          <div className="footer-col brand-col">
            <h3 className="footer-brand-title">
              Blush <span className="ampersand">&</span> Bloom
            </h3>
            <p className="footer-brand-desc">
              Sizin təbii gözəlliyinizi ön plana çıxaran, premium keyfiyyətli kosmetika və dəri qulluğu məhsullarının etibarlı ünvanı.
            </p>
            <div className="social-links">
              {/*  Instagram Loqosu (SVG) */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              {/*  WhatsApp Loqosu (SVG) */}
              <a href="https://wa.me/994500000000" target="_blank" rel="noreferrer" className="social-icon" title="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Sütun 2: FAQ */}
          <div className="footer-col faq-col">
            <h4 className="footer-col-title">Tez-tez Verilən Suallar</h4>
            <div className="faq-accordion">
              {faqList.map((item, idx) => (
                <div key={idx} className="faq-item">
                  <button className="faq-question" onClick={() => toggleFaq(idx)}>
                    <span>{item.q}</span>
                    <span style={{ fontSize: '0.7rem' }}>{openFaq === idx ? '▲' : '▼'}</span>
                  </button>
                  {openFaq === idx && <p className="faq-answer">{item.a}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Sütun 3: Əlaqə */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Əlaqə & Ünvan</h4>
            <ul className="contact-info-list">
              <li>📍 Bakı şəhəri, Nizami küç. 142</li>
              <li>📞 +994 (50) 123 45 67</li>
              <li>✉️ support@blushandbloom.az</li>
            </ul>
          </div>

        </div>

        {/* Alt Hissə */}
        <div className="footer-bottom-bar">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright-text">
              © 2026 Blush & Bloom. Bütün hüquqlar qorunur. Made with ❤️
            </p>
            <div className="policy-links">
              <Link to="#">Məxfilik Siyasəti</Link>
              <span>•</span>
              <Link to="#">Qaydalar və Şərtlər</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};