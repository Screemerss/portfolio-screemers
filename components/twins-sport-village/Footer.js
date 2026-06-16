import VisitsCounter from '@/components/VisitsCounter';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper wrapper">
        <div className="footer-branding">
          <div className="logo-area">
            <svg className="logo-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '40px', height: '40px' }}>
              <circle cx="50" cy="50" r="45" stroke="url(#footer-logo-gradient)" strokeWidth="4" strokeDasharray="8 4"/>
              <path d="M30 35 H70 M50 35 V75" stroke="#ff5722" strokeWidth="8" strokeLinecap="round"/>
              <path d="M35 68 C 35 78, 65 78, 65 68 C 65 58, 35 60, 35 50 C 35 40, 65 40, 65 50" stroke="#00e5ff" strokeWidth="6" strokeLinecap="round" fill="none"/>
              <defs>
                <linearGradient id="footer-logo-gradient" x1="0" y1="0" x2="100" y2="100">
                  <stop offset="0%" stopColor="#ff5722"/>
                  <stop offset="100%" stopColor="#00e5ff"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="logo-text">
              <span className="logo-title" style={{ fontSize: '1.1rem', color: '#fff' }}>TWINS</span>
              <span className="logo-sub" style={{ fontSize: '0.65rem', color: '#abb8c3' }}>SPORT VILLAGE</span>
            </div>
          </div>
          <p className="footer-tagline">Sport, salute e socialità nel cuore di Nicosia. Infrastrutture moderne e corsi per tutti i livelli.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/twins_sport_village/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Link Rapidi</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#impianti">Impianti</a></li>
            <li><a href="#chi-siamo">Chi Siamo</a></li>
            <li><a href="#prenota">Prenotazioni</a></li>
            <li><a href="#contatti">Contatti</a></li>
          </ul>
        </div>

        <div className="footer-hours">
          <h4>Orari del Centro</h4>
          <ul>
            <li><span>Lunedì - Sabato:</span> <span>08:00 - 23:00</span></li>
            <li><span>Domenica:</span> <span>08:00 - 22:00</span></li>
            <li>* Festivi e fasce straordinarie prenotabili tramite app</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="wrapper footer-bottom-wrapper">
          <p>&copy; 2026 TWINS SPORT VILLAGE. Tutti i diritti riservati. P.IVA 01234567890</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <p>Founder: Antonino Servillo | Demo premium Next.js</p>
            <span style={{ opacity: 0.3 }}>|</span>
            <VisitsCounter id="twins" />
          </div>
        </div>
      </div>
    </footer>
  );
}
