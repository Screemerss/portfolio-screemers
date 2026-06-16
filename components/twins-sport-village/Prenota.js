export default function Prenota() {
  return (
    <section className="booking-section" id="prenota">
      <div className="booking-wrapper wrapper">
        <div className="booking-text">
          <span className="subtitle">Facile &amp; Veloce</span>
          <h2 className="section-title">Prenota il Tuo Campo</h2>
          <div className="header-line left"></div>
          <p className="booking-lead">
            Da oggi prenotare una partita con gli amici è semplicissimo grazie all'app <strong>Sportclubby</strong>.
          </p>
          <p>
            Gestisci le tue prenotazioni direttamente dal tuo smartphone. Cerca <strong>Twins Sport Village</strong> (attiva la geolocalizzazione) e scopri gli slot orari disponibili in tempo reale. Invita i tuoi amici a unirsi al match, dividi la quota e commenta le tue partite!
          </p>
          
          <div className="steps-container">
            <div className="step-item">
              <div className="step-num">1</div>
              <div className="step-content">
                <h4>Scarica l'App</h4>
                <p>Scarica gratis Sportclubby su App Store o Google Play Store.</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-num">2</div>
              <div className="step-content">
                <h4>Cerca il Centro</h4>
                <p>Apri l'app, registrati e cerca "Twins Sport Village".</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-num">3</div>
              <div className="step-content">
                <h4>Scegli Orario e Gioca</h4>
                <p>Seleziona lo sport, l'orario ideale e conferma il tuo campo.</p>
              </div>
            </div>
          </div>

          <div className="app-buttons">
            <a 
              href="https://apps.apple.com/it/app/sportclubby/id1220268598" 
              target="_blank" 
              className="app-btn apple-btn" 
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-apple"></i>
              <span>Download on the<br/><strong>App Store</strong></span>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?family=Sportclubby" 
              target="_blank" 
              className="app-btn google-btn" 
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-google-play"></i>
              <span>Get it on<br/><strong>Google Play</strong></span>
            </a>
          </div>
        </div>

        <div className="booking-graphic">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="phone-header">
                <i className="fa-solid fa-signal"></i>
                <span>12:00</span>
                <i className="fa-solid fa-battery-three-quarters"></i>
              </div>
              <div className="phone-app-content">
                <div className="app-logo-bar">
                  <i className="fa-solid fa-chevron-left"></i>
                  <span>Sportclubby</span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="app-center-card">
                  <div className="app-img" style={{ backgroundImage: "url('/twins-assets/padel_court.jpg')" }}></div>
                  <div className="app-details">
                    <h3>TWINS SPORT VILLAGE</h3>
                    <p><i className="fa-solid fa-map-pin"></i> Nicosia (EN), Sicilia</p>
                    <span className="app-badge">Aperto</span>
                  </div>
                </div>
                <div className="app-slots">
                  <h4>Slot Disponibili Oggi</h4>
                  <div className="slots-grid">
                    <span className="slot-time active">17:00</span>
                    <span className="slot-time active">18:30</span>
                    <span className="slot-time reserved">20:00</span>
                    <span className="slot-time active">21:30</span>
                  </div>
                </div>
                <button className="app-btn-confirm">Conferma Prenotazione</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
