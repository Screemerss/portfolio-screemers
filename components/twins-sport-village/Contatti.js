'use client';

import { useState } from 'react';

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map form-name to name, form-email to email etc.
    const key = id.replace('form-', '');
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    // Validate email & fields
    if (formData.name.trim() && formData.email.trim() && formData.message.trim()) {
      // Simulate network request
      setTimeout(() => {
        setStatus({ submitting: false, success: true, error: false });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 1500);
    } else {
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <section className="contacts-section" id="contatti">
      <div className="contacts-wrapper wrapper">
        <div className="contacts-details">
          <span className="subtitle">Contattaci</span>
          <h2 className="section-title">Parla Con Noi</h2>
          <div className="header-line left"></div>
          <p className="contacts-lead">
            Hai domande sui nostri corsi, tornei o prenotazioni? Compila il form o usa i nostri contatti diretti.
          </p>
          
          <div className="contact-info-list">
            <div className="info-item">
              <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
              <div className="info-text">
                <h4>Telefono</h4>
                <p><a href="tel:+393288156937">+39 328 8156937</a></p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
              <div className="info-text">
                <h4>Email</h4>
                <p><a href="mailto:twinsportvillage@gmail.com">twinsportvillage@gmail.com</a></p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
              <div className="info-text">
                <h4>Posizione</h4>
                <p>Contrada S. Paolo Bosco sn, Nicosia (EN), 94014</p>
              </div>
            </div>
          </div>

          <div className="directions-card glass-card">
            <h4>Come raggiungerci:</h4>
            <p>
              Giunti a Nicosia, procedere per circa 3,5 km in direzione Sperlinga lungo la <strong>SP 20</strong>. Cerca "TWINS SPORT VILLAGE" sul tuo navigatore per arrivare direttamente al centro.
            </p>
            <a 
              href="https://maps.google.com/?q=TWINS+SPORT+VILLAGE+Nicosia" 
              target="_blank" 
              className="btn btn-outline btn-small" 
              rel="noopener noreferrer"
            >
              Apri in Google Maps <i className="fa-solid fa-map-location-dot"></i>
            </a>
          </div>
        </div>

        <div className="contacts-form-container glass-card">
          <h3>Invia un Messaggio</h3>
          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="form-name">Nome Completo</label>
              <input 
                type="text" 
                id="form-name" 
                required 
                placeholder="Inserisci il tuo nome"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-email">Email</label>
              <input 
                type="email" 
                id="form-email" 
                required 
                placeholder="Inserisci la tua email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-phone">Telefono (opzionale)</label>
              <input 
                type="tel" 
                id="form-phone" 
                placeholder="Inserisci il tuo telefono"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="form-message">Come possiamo aiutarti?</label>
              <textarea 
                id="form-message" 
                rows="5" 
                required 
                placeholder="Scrivi qui il tuo messaggio..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary btn-full" disabled={status.submitting}>
              {status.submitting ? (
                <>Invio in corso... <i className="fa-solid fa-spinner fa-spin"></i></>
              ) : (
                <>Invia Messaggio <i className="fa-solid fa-paper-plane"></i></>
              )}
            </button>
            
            {status.success && (
              <div className="form-message-feedback success" style={{ display: 'block' }}>
                Messaggio inviato con successo! Ti risponderemo a breve.
              </div>
            )}
            
            {status.error && (
              <div className="form-message-feedback error" style={{ display: 'block' }}>
                Si è verificato un errore. Per favore riprova.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
