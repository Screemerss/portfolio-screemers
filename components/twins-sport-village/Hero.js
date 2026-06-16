export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-overlay"></div>
      <div className="hero-content wrapper">
        <div className="hero-badge animate-fade-in">SPORT. SALUTE. SOCIAL.</div>
        <h1 className="hero-title animate-slide-up">
          Vivi lo Sport <br/><span className="text-gradient">Senza Limiti</span>
        </h1>
        <p className="hero-subtitle animate-slide-up">
          Benvenuti nel sito ufficiale del <strong>TWINS SPORT VILLAGE</strong>, il centro sportivo polifunzionale di Nicosia all'avanguardia con campi di ultima generazione per Tennis, Padel, Calcio e molto altro.
        </p>
        <div className="hero-ctas animate-slide-up">
          <a href="#prenota" className="btn btn-primary btn-large">
            <i className="fa-solid fa-calendar-check"></i> Prenota Ora su Sportclubby
          </a>
          <a href="#impianti" className="btn btn-outline btn-large">
            Scopri gli Impianti
          </a>
        </div>
      </div>
      <a href="#impianti" className="scroll-indicator" aria-label="Scroll down">
        <span className="mouse-wheel"></span>
      </a>
    </section>
  );
}
