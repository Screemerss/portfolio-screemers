"use client";

// Progetti reali mappati direttamente dai tuoi repository GitHub
const progetti = [
  { 
    id: 1, 
    titolo: "ScreenSift", 
    descrizione: "Utility di automazione per lo screening visivo e gestione file.", 
    img: "/projects/1.png", 
    link: "https://github.com/Screemerss/ScreenSift" 
  },
  { 
    id: 2, 
    titolo: "PyrographyAssistantPro", 
    descrizione: "Software desktop di assistenza avanzata per la pirografia.", 
    img: "/projects/2.png", 
    link: "https://github.com/Screemerss/portfolio-screemers" 
  },
  { 
    id: 3, 
    titolo: "PC-Facile", 
    descrizione: "Applicazione di supporto e utility di sistema semplificata.", 
    img: "/projects/3.png", 
    link: "https://github.com/Screemerss/PC-Facile" 
  },
  { 
    id: 4, 
    titolo: "DataCleansePro", 
    descrizione: "Software professionale per la pulizia e l'ottimizzazione dei dati.", 
    img: "/projects/4.png", 
    link: "https://github.com/Screemerss/DataClensePro" 
  },
  { 
    id: 5, 
    titolo: "Smart-File-Organizer", 
    descrizione: "Strumento intelligente per l'organizzazione e lo smistamento automatico dei file.", 
    img: "/projects/5.png", 
    link: "https://github.com/Screemerss/Smart-File-Organizer" 
  },
  { 
    id: 6, 
    titolo: "excel-merger-tool", 
    descrizione: "Utility di produttività per unire e combinare fogli di calcolo Excel velocemente.", 
    img: "/projects/6.png", 
    link: "https://github.com/Screemerss/excel-merger-tool" 
  },
  { 
    id: 7, 
    titolo: "TagTurbo-SaaS-Streamlit", 
    descrizione: "Applicazione web SaaS sviluppata in Streamlit per l'ottimizzazione dei tag.", 
    img: "/projects/7.png", 
    link: "https://github.com/Screemerss/TagTurbo-SaaS-Streamlit" 
  },
  { 
    id: 8, 
    titolo: "bandoradar-scraper", 
    descrizione: "Scraper automatizzato per il monitoraggio e la raccolta di bandi pubblici.", 
    img: "/projects/8.png", 
    link: "https://github.com/Screemerss/bandoradar-scraper" 
  },
  { 
    id: 9, 
    titolo: "RecoverFlow", 
    descrizione: "Dashboard di monitoraggio flussi e ripristino dati di sistema.", 
    img: "/projects/9.png", 
    link: "https://github.com/Screemerss/RecoverFlow" 
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white font-sans antialiased selection:bg-[#FF6B00] selection:text-white">
      
      {/* 1. NAVBAR */}
      <header className="border-b border-[#8A2BE2]/20 bg-[#0A192F]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            
            {/* Contenitore Logo Circolare */}
            <div className="w-14 h-14 overflow-hidden rounded-full bg-[#0F223D] border-2 border-[#8A2BE2]/40 flex items-center justify-center p-1 shadow-[0_0_15px_rgba(138,43,226,0.2)] transition-transform hover:scale-105 duration-300">
              <img 
                src="/logo.png" 
                alt="Screemers Logo" 
                className="w-full h-full object-contain rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#00D4FF] flex items-center justify-center font-black text-lg text-white">S</div>';
                  }
                }}
              />
            </div>

            {/* Titoli Brand */}
            <div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] via-[#8A2BE2] to-[#00D4FF]">
                Screemers Software
              </h1>
              <p className="text-sm text-[#00D4FF] font-mono tracking-widest uppercase">by Alex</p>
            </div>
          </div>
          
          <span className="hidden sm:inline-block px-4 py-1.5 text-xs font-mono border border-[#8A2BE2]/40 rounded-full bg-[#8A2BE2]/10 text-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.1)]">
            Hub Principale
          </span>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-3 py-1 rounded-md">
            Sviluppo Software & Automazione
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-4 mb-6 tracking-tight">
            Idee complesse trasmutate in <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] to-[#8A2BE2]">Codice Funzionante</span>.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Benvenuti nell'hub ufficiale di Screemers Software. Esplora le mie soluzioni digitali, utility desktop avanzate, script di automazione e portali web.
          </p>
        </div>

        {/* 3. GRIGLIA PROGETTI */}
        <section className="space-y-8 mb-20">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
            <div className="w-3 h-6 bg-[#FF6B00] rounded-full"></div>
            <h3 className="text-2xl font-bold tracking-tight text-white">I Miei Progetti</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {progetti.map((proj) => (
              <a 
                key={proj.id} 
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#0F223D] transition-all duration-300 hover:-translate-y-1 hover:border-[#8A2BE2]/50 hover:shadow-[0_0_30px_rgba(138,43,226,0.15)]"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                  <img 
                    src={proj.img} 
                    alt={proj.titolo} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F223D] via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                      {proj.titolo}
                    </h4>
                    <span className="text-xs font-mono text-gray-500">#{proj.id}</span>
                  </div>
                  <p className="text-sm text-gray-400 flex-1 leading-relaxed">
                    {proj.descrizione}
                  </p>
                  
                  <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center text-xs font-bold uppercase tracking-wider text-[#FF6B00] group-hover:text-[#00D4FF] transition-colors">
                    Apri su GitHub 
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 4. SEZIONE YOUTUBE (Box grande d'impatto) */}
        <section className="max-w-4xl mx-auto my-20">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4 mb-6">
            <div className="w-3 h-6 bg-red-600 rounded-full"></div>
            <h3 className="text-2xl font-bold tracking-tight text-white">Contenuti & Intrattenimento</h3>
          </div>

          <div className="p-8 rounded-2xl border border-red-600/20 bg-[#140C12] shadow-[0_0_30px_rgba(220,38,38,0.08)] flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-red-600/40">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-md shadow-red-600/30 shrink-0">
                <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white tracking-tight">ProduttivitàAI</h4>
                <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                  Ottimizzazione del flusso di lavoro, guide e strategie pratiche per dominare l'ufficio e i software aziendali grazie all'utilizzo dell'Intelligenza Artificiale.
                </p>
              </div>
            </div>
            
            <a 
              href="https://www.youtube.com/@ProduttivitaAI" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white transition-colors text-center w-full md:w-auto shrink-0 shadow-lg shadow-red-600/20 active:scale-[0.98]"
            >
              Guarda i Video
            </a>
          </div>
        </section>

        {/* 5. SEZIONE CONTATTI */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-3 border-b border-gray-800 pb-4">
            <div className="w-3 h-6 bg-[#00D4FF] rounded-full"></div>
            <h3 className="text-2xl font-bold tracking-tight text-white">Mettiamoci in Contatto</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0F223D] p-8 rounded-2xl border border-gray-800 shadow-xl">
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-xl font-bold text-[#00D4FF] mb-2">Hai un progetto in mente?</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Vuoi collaborare per un'automazione personalizzata, un software specifico o un portale web? Mandami un messaggio o scrivi direttamente via email. Rispondo in tempi brevi.
                </p>
              </div>

              <a 
                href="mailto:screemerssoftware@gmail.com" 
                className="inline-flex items-center gap-4 p-4 rounded-xl bg-[#0A192F] border border-gray-800 hover:border-[#FF6B00]/60 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7 8.9a2.2 2.2 0 003.3 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Scrivi direttamente a</p>
                  <p className="text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors font-mono">screemerssoftware@gmail.com</p>
                </div>
              </a>
            </div>

            <form 
              action="https://formspree.io/f/{{INSERISCI_IL_TUO_ID_QUI}}" 
              onSubmit={(e) => {
                if (e.currentTarget.action.includes("INSERISCI_IL_TUO_ID")) {
                  e.preventDefault();
                  const target = e.currentTarget as any;
                  const nome = target.nome.value;
                  const msg = target.messaggio.value;
                  window.location.href = `mailto:screemerssoftware@gmail.com?subject=Contatto da Portfolio - ${nome}&body=${msg}`;
                }
              }}
              method="POST" 
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1" htmlFor="nome">Nome / Azienda</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="name" 
                  required 
                  className="w-full bg-[#0A192F] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#8A2BE2] transition-colors"
                  placeholder="Il tuo nome"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1" htmlFor="email">Email di contatto</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-[#0A192F] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#8A2BE2] transition-colors"
                  placeholder="nome@esempio.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1" htmlFor="messaggio">Messaggio</label>
                <textarea 
                  id="messaggio" 
                  name="message" 
                  required 
                  rows={4}
                  className="w-full bg-[#0A192F] border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#8A2BE2] transition-colors resize-none"
                  placeholder="Descrivi brevemente la tua idea o richiesta..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-3 px-6 rounded-lg font-bold text-sm uppercase tracking-wider bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2] text-white hover:opacity-90 transition-opacity active:scale-[0.98] transform duration-100"
              >
                Invia Messaggio
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* 6. FOOTER */}
      <footer className="mt-20 border-t border-gray-800 bg-[#071324] py-8 text-center text-xs font-mono text-gray-500">
        <p>© {new Date().getFullYear()} Screemers Software. Tutti i diritti riservati.</p>
      </footer>
    </div>
  );
}