'use client';

import { useEffect, useRef } from 'react';

export default function Impianti() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Stagger delay based on index (0.15s step)
        card.style.transitionDelay = `${(index % 3) * 0.15}s`;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const impiantiData = [
    {
      sport: 'Padel',
      title: 'Padel in Erba Sintetica',
      desc: 'Scopri il nostro splendido campo da Padel panoramico in erba sintetica di ultima generazione. Ottimo rimbalzo, massimo comfort articolare e pareti in vetro temperato ad alta visibilità.',
      image: '/twins-assets/padel_court.jpg',
      features: ['Vetri panoramici 12mm', 'Illuminazione LED anti-abbaglio', 'Racchette e palline a noleggio'],
      link: '#prenota',
      linkText: 'Prenota questo campo',
    },
    {
      sport: 'Tennis',
      title: 'Tennis in Resina Ammortizzata',
      desc: 'Giochi indoor o outdoor? Al Twins hai a disposizione campi da tennis con la nuovissima superficie in resina acrilica ammortizzata multisport, ideale per ridurre l\'affaticamento muscolare.',
      image: '/twins-assets/tennis_court.jpg',
      features: ['Copertura per la stagione invernale', 'Superficie ammortizzata professionale', 'Corsi per adulti e bambini'],
      link: '#prenota',
      linkText: 'Prenota questo campo',
    },
    {
      sport: 'Calcio',
      title: 'Calcio a 5 / 6',
      desc: 'Sfida i tuoi amici sul nostro campo da calcio a 5/6, dotato di manto sintetico drenante ad alta resistenza. Ottima tenuta in qualsiasi condizione meteo e illuminazione notturna eccezionale.',
      image: '/twins-assets/soccer_court.jpg',
      features: ['Manto ad alto assorbimento shock', 'Spogliatoi dedicati vicini al campo', 'Ideale per tornei aziendali e privati'],
      link: '#prenota',
      linkText: 'Prenota questo campo',
    },
    {
      sport: 'Bocce',
      title: 'Campi da Bocce',
      desc: 'Per gli amanti della tradizione e della precisione, offriamo 2 campi da bocce regolamentari realizzati in sabbia battuta. Perfetti per passare ore in compagnia e organizzare tornei sociali.',
      isFallback: true,
      fallbackBg: 'linear-gradient(135deg, #3a2a1b 0%, #1c140d 100%)',
      fallbackIcon: 'fa-solid fa-bowling-ball',
      features: ['2 Corsie regolamentari', 'Superficie costantemente livellata', 'Area ombreggiata adiacente'],
      link: '#prenota',
      linkText: 'Prenota questo campo',
    },
    {
      sport: 'Relax & Fitness',
      title: 'Area Relax & Idromassaggio',
      desc: 'Il benessere post-allenamento è fondamentale. Rilassati nella nostra area wellness dotata di vasca idromassaggio all\'aperto, area fitness attrezzata e una confortevole Club House per un drink in compagnia.',
      image: '/twins-assets/relax_area.jpg',
      features: ['Vasca idromassaggio riscaldata', 'Area workout all\'aperto calisthenics', 'Club House con bar e ristoro'],
      link: '#contatti',
      linkText: 'Richiedi informazioni',
    },
  ];

  return (
    <section className="impianti-section wrapper" id="impianti">
      <div className="section-header">
        <span className="subtitle">Strutture Premium</span>
        <h2 className="section-title">I Nostri Impianti</h2>
        <div className="header-line"></div>
        <p className="section-desc">
          Progettati per atleti e amatori, i nostri campi offrono le migliori tecnologie di gioco per performance ottimali in ogni stagione.
        </p>
      </div>

      <div className="impianti-grid">
        {impiantiData.map((item, idx) => (
          <div
            key={idx}
            className="impianto-card glass-card scroll-reveal"
            ref={(el) => (cardsRef.current[idx] = el)}
          >
            <div className="card-image">
              {item.isFallback ? (
                <div className="placeholder-fallback" style={{ background: item.fallbackBg }}>
                  <i className={`${item.fallbackIcon} sport-icon-large`}></i>
                </div>
              ) : (
                <img src={item.image} alt={item.title} />
              )}
              <div className="sport-badge">{item.sport}</div>
            </div>
            <div className="card-body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <ul className="card-features">
                {item.features.map((feat, fidx) => (
                  <li key={fidx}>
                    <i className="fa-solid fa-circle-check"></i> {feat}
                  </li>
                ))}
              </ul>
              <a href={item.link} className="card-link">
                {item.linkText} <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
