import React, { useState } from 'react';
import '../styles/accountForm.css';

export const AccountForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Bakı',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Məlumatlar uğurla yaddas saxlanıldı! 🌸');
  };

  return (
    <div className="account-card-container">
      {/* Progress Indicators */}
      <div className="step-indicator">
        <div className={`step-circle ${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
        <div className={`step-circle ${step >= 2 ? 'active' : ''}`}>2</div>
        <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
        <div className={`step-circle ${step >= 3 ? 'active' : ''}`}>3</div>
      </div>

      <form onSubmit={handleSubmit} className="account-form">
        {/* ADDIM 1 */}
        {step === 1 && (
          <div className="form-step">
            <h3>Şəxsi Məlumatlar</h3>
            <div className="input-group">
              <label>Ad və Soyad</label>
              <input
                type="text"
                name="fullName"
                placeholder="Məs: Aysel Məmmədova"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>E-poçt Ünvanı</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Telefon Nömrəsi</label>
              <input
                type="tel"
                name="phone"
                placeholder="+994 50 000 00 00"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {/* ADDIM 2 */}
        {step === 2 && (
          <div className="form-step">
            <h3>Çatdırılma Ünvanı</h3>
            <div className="input-group">
              <label>Şəhər</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label>Ətraflı Ünvan</label>
              <textarea
                name="address"
                placeholder="Küçə, mənzil, bina və s."
                value={formData.address}
                onChange={handleChange}
                rows="3"
              />
            </div>
          </div>
        )}

        {/* ADDIM 3 */}
        {step === 3 && (
          <div className="form-step">
            <h3>Məlumatların Təsdiqi</h3>
            <div className="summary-box">
              <p><strong>Ad Soyad:</strong> {formData.fullName || 'Daxil edilməyib'}</p>
              <p><strong>E-poçt:</strong> {formData.email || 'Daxil edilməyib'}</p>
              <p><strong>Telefon:</strong> {formData.phone || 'Daxil edilməyib'}</p>
              <p><strong>Ünvan:</strong> {formData.city}, {formData.address || 'Daxil edilməyib'}</p>
            </div>
          </div>
        )}

        {/* Düymələr */}
        <div className="button-group">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="btn-secondary">
              Geri
            </button>
          )}

          {step < 3 ? (
            <button type="button" onClick={nextStep} className="btn-primary">
              Növbəti
            </button>
          ) : (
            <button type="submit" className="btn-primary">
              Yadda Saxla
            </button>
          )}
        </div>
      </form>
    </div>
  );
};