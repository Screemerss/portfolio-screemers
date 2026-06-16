export default function ChiSiamo() {
  return (
    <section className="about-section" id="chi-siamo">
      <div className="about-wrapper wrapper">
        <div className="about-image-container">
          <div className="about-experience-badge">
            <span className="exp-number">100%</span>
            <span className="exp-text">Passione &amp; Professionalità</span>
          </div>
          <div className="about-img-frame">
            <img src="/twins-assets/about_philosophy.jpg" alt="Twins Sport Village panorama" className="about-main-img" />
          </div>
        </div>
        
        <div className="about-content">
          <span className="subtitle">La Nostra Filosofia</span>
          <h2 className="section-title">Chi Siamo</h2>
          <div className="header-line left"></div>
          <p className="about-lead">
            Il Twins Sport Village non è solo un centro sportivo, ma un luogo di incontro, crescita e benessere sociale a Nicosia.
          </p>
          <p>
            Fondato da <strong>Antonino Servillo</strong>, il villaggio nasce per offrire alle associazioni agonistiche e a tutti gli appassionati un punto di riferimento dotato di infrastrutture all'avanguardia. Diamo grande valore alla socializzazione, al rispetto delle regole e ad una sana competizione sportiva.
          </p>
          <p>
            Il nostro staff è composto da istruttori certificati e personal trainer esperti, pronti ad assisterti nella tua preparazione atletica o ad insegnarti i segreti di Tennis e Padel, sia che tu sia un principiante o un professionista.
          </p>
          
          <div className="about-features">
            <div className="about-feat-item">
              <div className="feat-icon"><i className="fa-solid fa-users"></i></div>
              <div>
                <h4>Sana Competizione</h4>
                <p>Corsi e tornei organizzati per stimolare la crescita in gruppo e il fair play.</p>
              </div>
            </div>
            <div className="about-feat-item">
              <div className="feat-icon"><i className="fa-solid fa-graduation-cap"></i></div>
              <div>
                <h4>Istruttori Certificati</h4>
                <p>Lezioni individuali e collettive tenute da maestri federali qualificati.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
