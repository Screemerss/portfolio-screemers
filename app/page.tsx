"use client";

import { useState } from "react";

// Progetti reali mappati direttamente dai repository GitHub
const progetti = [
  { 
    id: 1, 
    titolo: "ScreenSift", 
    descrizione: "Utility di automazione desktop per lo screening visivo, classificazione automatica e gestione massiva di file immagine e screenshot.", 
    img: "/projects/1.png", 
    link: "https://github.com/Screemerss/ScreenSift",
    categoria: "desktop",
    tags: ["Python", "Automation", "GUI", "OS Integration"]
  },
  { 
    id: 2, 
    titolo: "PyrographyAssistantPro", 
    descrizione: "Software desktop di assistenza avanzata per la pirografia. Consente la calibrazione dell'immagine e la simulazione delle bruciature su legno.", 
    img: "/projects/2.png", 
    link: "https://github.com/Screemerss/portfolio-screemers",
    categoria: "desktop",
    tags: ["Python", "Image Processing", "Pillow", "Tkinter"]
  },
  { 
    id: 3, 
    titolo: "PC-Facile", 
    descrizione: "Applicazione di supporto tecnico e utility di sistema semplificata per l'ottimizzazione di Windows ad uso di utenti non esperti.", 
    img: "/projects/3.png", 
    link: "https://github.com/Screemerss/PC-Facile",
    categoria: "utility",
    tags: ["Batch", "PowerShell", "System Support", "Windows"]
  },
  { 
    id: 4, 
    titolo: "DataCleansePro", 
    descrizione: "Software professionale per la pulizia, formattazione, deduplica e ottimizzazione di grandi set di dati aziendali.", 
    img: "/projects/4.png", 
    link: "https://github.com/Screemerss/DataClensePro",
    categoria: "utility",
    tags: ["Python", "Pandas", "OpenPyXL", "Data Science"]
  },
  { 
    id: 5, 
    titolo: "Smart-File-Organizer", 
    descrizione: "Strumento intelligente per l'organizzazione e lo smistamento automatico dei file in base a estensioni, date e metadati.", 
    img: "/projects/5.png", 
    link: "https://github.com/Screemerss/Smart-File-Organizer",
    categoria: "automation",
    tags: ["Python", "Scripting", "Watchdog", "File System"]
  },
  { 
    id: 6, 
    titolo: "excel-merger-tool", 
    descrizione: "Utility di produttività per unire e combinare più fogli di calcolo Excel complessi mantenendo la formattazione originale.", 
    img: "/projects/6.png", 
    link: "https://github.com/Screemerss/excel-merger-tool",
    categoria: "utility",
    tags: ["Python", "Excel", "Data Wrangling", "Pandas"]
  },
  { 
    id: 7, 
    titolo: "TagTurbo-SaaS-Streamlit", 
    descrizione: "Applicazione web SaaS sviluppata in Streamlit per la generazione di tag intelligenti ed ottimizzazione SEO basata su IA.", 
    img: "/projects/7.png", 
    link: "https://github.com/Screemerss/TagTurbo-SaaS-Streamlit",
    categoria: "web",
    tags: ["Streamlit", "SaaS", "SEO", "AI API"]
  },
  { 
    id: 8, 
    titolo: "bandoradar-scraper", 
    descrizione: "Scraper automatizzato ad alte prestazioni per il monitoraggio quotidiano e la raccolta notificata di bandi pubblici e appalti.", 
    img: "/projects/8.png", 
    link: "https://github.com/Screemerss/bandoradar-scraper",
    categoria: "automation",
    tags: ["Python", "BeautifulSoup", "Scrapy", "Notifications"]
  },
  { 
    id: 9, 
    titolo: "RecoverFlow", 
    descrizione: "Dashboard web per il monitoraggio dei flussi di backup e ripristino dati di sistema con reportistica email automatica.", 
    img: "/projects/9.png", 
    link: "https://github.com/Screemerss/RecoverFlow",
    categoria: "web",
    tags: ["Next.js", "React", "Tailwind CSS", "API routes"]
  },
];

// Dati degli Ebook gratuiti da Lemon Squeezy
const ebooks = [
  {
    id: 1,
    titolo: "Dominare la Produttività con l'IA",
    descrizione: "Una guida pratica con oltre 50 prompt pronti all'uso per Gemini e ChatGPT. Impara ad automatizzare la scrittura di email, report e brainstorming d'idee.",
    prezzo: "GRATIS",
    coverColor: "from-violet-600 to-indigo-900",
    badge: "GUIDA AI",
    link: "https://screemerss.lemonsqueezy.com/", // Sostituisci con il link reale del checkout a 0$
    features: ["+50 Prompt Copia-Incolla", "Formati PDF & EPUB", "Aggiornamenti gratuiti"]
  },
  {
    id: 2,
    titolo: "Guida all'Automazione per Sviluppatori",
    descrizione: "Come creare script di automazione desktop per risparmiare ore di lavoro quotidiano (gestione file, scraper web e utility di sistema).",
    prezzo: "GRATIS",
    coverColor: "from-orange-500 to-amber-700",
    badge: "CODING",
    link: "https://screemerss.lemonsqueezy.com/", // Sostituisci con il link reale del checkout a 0$
    features: ["Codici Sorgente Inclusi", "Scritta in Python & Shell", "Esempi reali passo-passo"]
  }
];

// Dati dei Piatti per il Simulatore di Menu
const menuSimulatorDishes = [
  { id: "d1", name: "Pizza Margherita", price: 7.50, desc: "Pomodoro, mozzarella fiordilatte, basilico fresco, olio EVO.", category: "pizze", allergens: ["glutine", "lattosio"] },
  { id: "d2", name: "Diavola Rustica", price: 9.00, desc: "Pomodoro, mozzarella, salame piccante calabrese, origano.", category: "pizze", allergens: ["glutine", "lattosio"] },
  { id: "d3", name: "Spaghetti allo Scoglio", price: 13.50, desc: "Cozze, vongole, gamberi, pomodorini freschi, prezzemolo, peperoncino.", category: "primi", allergens: ["glutine", "molluschi", "crostacei"] },
  { id: "d4", name: "Gnocchi alla Sorrentina", price: 10.00, desc: "Gnocchi di patate freschi, pomodoro, mozzarella filante, basilico al forno.", category: "primi", allergens: ["glutine", "lattosio"] },
  { id: "d5", name: "Tiramisù della Casa", price: 5.50, desc: "Savoiardi artigianali, caffè espresso, crema al mascarpone, cacao.", category: "dolci", allergens: ["lattosio", "uova", "glutine"] },
  { id: "d6", name: "Birra Artigianale 33cl", price: 4.50, desc: "Birra chiara locale a bassa fermentazione, note maltate ed erbacee.", category: "bevande", allergens: ["glutine"] },
  { id: "d7", name: "Acqua Minerale 75cl", price: 2.50, desc: "Naturale o frizzante in bottiglia di vetro riciclabile.", category: "bevande", allergens: [] }
];

export default function Home() {
  // Stati per la gestione del filtro dei progetti generali
  const [categoriaAttiva, setCategoriaAttiva] = useState("tutti");

  // Stati per la gestione del Simulatore di Menu Mobile
  const [isOrderingMode, setIsOrderingMode] = useState(true); // true = Ordine al tavolo, false = Solo consultazione
  const [selectedCategory, setSelectedCategory] = useState("pizze");
  const [searchQuery, setSearchQuery] = useState("");
  const [allergensToFilter, setAllergensToFilter] = useState<string[]>([]);
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [tableNumber, setTableNumber] = useState("5");
  const [viewingCart, setViewingCart] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderCode, setOrderCode] = useState("");
  
  // Stato per notifica di blocco ordine (in modalità sola consultazione)
  const [consultationAlert, setConsultationAlert] = useState<string | null>(null);

  // Stato per il form di contatto
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const FORMSPREE_ID: string = "xzdqoejl"; // Inserisci il tuo ID Formspree qui per l'invio in background (es. "xrgovewz")

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const nome = (target.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (target.elements.namedItem("email") as HTMLInputElement).value;
    const msg = (target.elements.namedItem("messaggio") as HTMLTextAreaElement).value;

    if (!FORMSPREE_ID || FORMSPREE_ID === "IL_TUO_ID_FORMSPREE") {
      // Fallback a mailto se non configurato
      window.location.href = `mailto:screemerssoftware@gmail.com?subject=Contatto da Portfolio - ${nome}&body=Mittente: ${email}%0D%0AMessaggio:%0D%0A${msg}`;
      return;
    }

    setFormStatus("submitting");
    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ name: nome, email: email, message: msg })
      });
      if (response.ok) {
        setFormStatus("success");
        target.reset();
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      setFormStatus("error");
    }
  };

  // Filtro progetti
  const progettiFiltrati = progetti.filter(p => 
    categoriaAttiva === "tutti" ? true : p.categoria === categoriaAttiva
  );

  // Carrello: Aggiungi/Rimuovi
  const addToCart = (dishId: string) => {
    if (!isOrderingMode) {
      const dishName = menuSimulatorDishes.find(d => d.id === dishId)?.name;
      setConsultationAlert(`L'aggiunta di "${dishName}" è disabilitata. Questo menu è configurato in modalità "Solo Consultazione" (senza comande).`);
      setTimeout(() => setConsultationAlert(null), 4000);
      return;
    }
    setCart(prev => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1
    }));
  };

  const removeFromCart = (dishId: string) => {
    setCart(prev => {
      const updated = { ...prev };
      if (updated[dishId] <= 1) {
        delete updated[dishId];
      } else {
        updated[dishId] -= 1;
      }
      return updated;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [dishId, qty]) => {
      const dish = menuSimulatorDishes.find(d => d.id === dishId);
      return total + (dish ? dish.price * qty : 0);
    }, 0);
  };

  const getCartQty = () => {
    return Object.values(cart).reduce((a, b) => a + b, 0);
  };

  // Gestione allergene toggling
  const toggleAllergenFilter = (allergen: string) => {
    setAllergensToFilter(prev => 
      prev.includes(allergen) ? prev.filter(a => a !== allergen) : [...prev, allergen]
    );
  };

  // Invio ordine simulato
  const submitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (getCartQty() === 0) return;
    
    // Genera codice ordine casuale
    const code = "ORD-" + Math.floor(100 + Math.random() * 900) + "-" + String.fromCharCode(65 + Math.floor(Math.random() * 26)) + String.fromCharCode(65 + Math.floor(Math.random() * 26));
    setOrderCode(code);
    setOrderSubmitted(true);
    setViewingCart(false);
  };

  const resetSimulator = () => {
    setCart({});
    setOrderSubmitted(false);
    setOrderCode("");
  };

  return (
    <div className="min-h-screen bg-[#030712] text-[#f3f4f6] font-sans antialiased selection:bg-[#FF6B00] selection:text-white relative">
      
      {/* Background Glows decorativi */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8A2BE2]/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute top-[30%] right-1/4 w-[400px] h-[400px] bg-[#00D4FF]/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: "-3s" }}></div>
      <div className="absolute bottom-[20%] left-1/3 w-[600px] h-[600px] bg-[#FF6B00]/5 rounded-full blur-[150px] pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: "-5s" }}></div>

      {/* 1. NAVBAR */}
      <header className="border-b border-gray-900 bg-[#030712]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            
            {/* Logo Contenitore */}
            <div className="w-12 h-12 overflow-hidden rounded-full bg-[#0b0f19] border border-gray-800 flex items-center justify-center p-1 shadow-[0_0_15px_rgba(138,43,226,0.15)] transition-transform hover:scale-105 duration-300">
              <img 
                src="/logo.png" 
                alt="Screemers Logo" 
                className="w-full h-full object-contain rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    parent.innerHTML = '<div class="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#8A2BE2] flex items-center justify-center font-black text-lg text-white">S</div>';
                  }
                }}
              />
            </div>

            {/* Titoli Brand */}
            <div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B00] via-[#8A2BE2] to-[#00D4FF]">
                Screemers Software
              </h1>
              <p className="text-xs text-[#00D4FF] font-mono tracking-widest uppercase">Alessandro • Dev Portfolio</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
              <a href="#soluzioni-menu" className="hover:text-white transition-colors">Menu Digitali</a>
              <a href="#simulatore-menu" className="hover:text-[#FF6B00] transition-colors">Simulatore Live</a>
              <a href="#progetti" className="hover:text-white transition-colors">Altri Progetti</a>
              <a href="#contatti" className="hover:text-[#00D4FF] transition-colors">Contatti</a>
            </nav>
            <span className="px-3.5 py-1 text-xs font-mono border border-[#8A2BE2]/40 rounded-full bg-[#8A2BE2]/10 text-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.05)]">
              Disponibile Freelance
            </span>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 md:mb-28">
          
          {/* Testo Hero */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold font-mono">
              <span className="flex h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse"></span>
              Sviluppatore Full-Stack & Solutions Architect
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white">
              Menu Digitali Smart ed <br className="hidden md:block"/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D4FF] via-[#8A2BE2] to-[#FF6B00]">
                Automazioni su Misura
              </span>
            </h2>
            
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Sono Alessandro, uno sviluppatore specializzato nella creazione di **piattaforme per la ristorazione** ed **utility di automazione**. Dai menu online interattivi per ristoranti, pub e stabilimenti (con gestione comande al tavolo) fino a scraper di dati e software desktop dedicati.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#soluzioni-menu" 
                className="px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2] text-white hover:opacity-90 hover:scale-[1.02] shadow-[0_4px_20px_rgba(255,107,0,0.25)] transition-all text-center"
              >
                Scopri i Menu Digitali
              </a>
              <a 
                href="#progetti" 
                className="px-8 py-4 rounded-xl font-bold text-sm bg-gray-900 border border-gray-800 text-gray-300 hover:border-gray-700 hover:bg-gray-800 transition-all text-center"
              >
                Esplora Lavori Dev
              </a>
            </div>

            {/* Quick stats / Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-900 max-w-md">
              <div>
                <p className="text-2xl font-black text-white">100%</p>
                <p className="text-xs text-gray-500 font-mono">Mobile Responsive</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#00D4FF]">0.4s</p>
                <p className="text-xs text-gray-500 font-mono">Tempo Caricamento</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#FF6B00]">Menu</p>
                <p className="text-xs text-gray-500 font-mono">Con o Senza Ordine</p>
              </div>
            </div>
          </div>

          {/* Elemento Grafico / Illustrazione Interattiva */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl bg-gradient-to-br from-[#0b0f19] to-[#05070c] border border-gray-800 p-6 shadow-2xl flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#FF6B00]/20 transition-colors"></div>
              
              {/* Header Box */}
              <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                <span className="text-xs font-mono text-gray-500">SYSTEM STATUS</span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                  ONLINE
                </span>
              </div>

              {/* Code Mockup */}
              <div className="font-mono text-xs text-gray-400 space-y-2.5 my-6 flex-1 py-4">
                <p className="text-purple-400">const restaurantConfig = &#123;</p>
                <p className="pl-4">menuType: <span className="text-orange-400">"interactive"</span>,</p>
                <p className="pl-4">tableOrdering: <span className="text-[#00D4FF]">true</span>,</p>
                <p className="pl-4">instantWaitersAlert: <span className="text-[#00D4FF]">true</span>,</p>
                <p className="pl-4">allergensFilter: <span className="text-[#00D4FF]">true</span>,</p>
                <p className="pl-4">multilanguage: [<span className="text-gray-300">"IT"</span>, <span className="text-gray-300">"EN"</span>]</p>
                <p className="text-purple-400">&#125;;</p>
                <p className="text-emerald-500">// Generazione QR Code ed avvio...</p>
                <p className="text-gray-500 text-[11px] border-l-2 border-gray-800 pl-2 italic">
                  "Digitalizziamo l'esperienza, acceleriamo il servizio"
                </p>
              </div>

              {/* QR Code Concept */}
              <div className="bg-[#121824] rounded-xl p-4 flex items-center gap-4 border border-gray-800/80">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 shrink-0">
                  {/* Finto QR Code */}
                  <svg className="w-full h-full text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm1 1h2v2H5V5zm9-3h8v8h-8V2zm2 2v4h4V4h-4zm1 1h2v2h-2V5zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm1 1h2v2H5v-2zm12-2h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm-4-4h2v2h-2v-2zm2 2h2v2h-2v-2zm-2 2h2v2h-2v-2zm4-4h2v2h-2v-2zm-6-2h2v2h-2v-2zm2 2h2v2h-2v-2zm2 2h2v2h-2v-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">QR Code Integrato</h4>
                  <p className="text-xs text-gray-400">Scansiona al tavolo e ordina istantaneamente in totale autonomia.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. SEZIONE SUITE MENU DIGITALI (FLAGSHIP) */}
        <section id="soluzioni-menu" className="py-16 border-t border-gray-900 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8A2BE2] bg-[#8A2BE2]/10 px-3 py-1 rounded-md">
              Specialità Verticale
            </span>
            <h3 className="text-3xl md:text-5xl font-black mt-4 mb-6 text-white">
              La Suite di Menu Digitali
            </h3>
            <p className="text-gray-400 text-base md:text-lg">
              Soluzioni per eliminare il menu cartaceo, tradurre automaticamente in più lingue, informare sugli allergeni e velocizzare gli ordini eliminando i tempi d'attesa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Box 1: Senza Ordine (Solo Consultazione) */}
            <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between border border-gray-800 transition-all duration-300 hover:border-[#00D4FF]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.08)]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] mb-6 border border-[#00D4FF]/20">
                  {/* Icona Occhio / Catalogo */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  Menu Smart Consultazione
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20 px-2 py-0.5 rounded">
                    Sola Lettura
                  </span>
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Una web app ultraleggera e di lusso adatta per bar, enoteche o ristoranti tradizionali che vogliono presentare i propri piatti con foto ad alta definizione, descrizioni dettagliate, prezzi aggiornati in tempo reale e filtro istantaneo per gli allergeni.
                </p>

                <ul className="space-y-3 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-[#00D4FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    Caricamento istantaneo in meno di 0.5 secondi.
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-[#00D4FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    Filtro allergeni dinamico (celiachia, lattosio, crostacei).
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-[#00D4FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    Pannello di controllo web semplicissimo per modificare i prezzi al volo.
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-[#00D4FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    Traduzione automatica multilingua per turisti.
                  </li>
                </ul>
              </div>

              <a 
                href="#simulatore-menu" 
                onClick={() => setIsOrderingMode(false)}
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center border border-gray-800 hover:border-[#00D4FF] bg-[#0c1220] text-gray-300 hover:text-white transition-all duration-300"
              >
                Prova la Demo Consultazione
              </a>
            </div>

            {/* Box 2: Con Ordine al Tavolo */}
            <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between border border-gray-800 transition-all duration-300 hover:border-[#FF6B00]/40 hover:shadow-[0_0_30px_rgba(255,107,0,0.08)]">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] mb-6 border border-[#FF6B00]/20">
                  {/* Icona Carrello / Cibo */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  Menu Pro Ordine al Tavolo
                  <span className="text-[10px] uppercase font-mono tracking-wider font-bold bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20 px-2 py-0.5 rounded">
                    Self-Ordering
                  </span>
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  La soluzione ideale per stabilimenti balneari, pub affollati, pizzerie e sushi all-you-can-eat. Il cliente scansiona il QR posizionato al suo ombrellone o tavolo, compone il proprio ordine, seleziona il tavolo e invia. La comanda arriva dritta a stampanti o monitor in cucina.
                </p>

                <ul className="space-y-3 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-[#FF6B00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    Aumento dello scontrino medio del 18% grazie all'upselling visivo.
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-[#FF6B00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    Nessun bisogno di scaricare app: funziona direttamente dal browser.
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-[#FF6B00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    Integrazione con sistema di notifica in cucina su tablet o stampante termica.
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-[#FF6B00] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    Configurabile con opzione di pagamento immediato (Stripe, Apple Pay).
                  </li>
                </ul>
              </div>

              <a 
                href="#simulatore-menu" 
                onClick={() => setIsOrderingMode(true)}
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center bg-[#FF6B00] hover:bg-orange-600 text-white shadow-lg shadow-orange-600/10 hover:shadow-orange-600/25 transition-all duration-300"
              >
                Prova la Demo Ordinazione
              </a>
            </div>

          </div>
        </section>

        {/* 4. SIMULATORE INTERATTIVO DI MENU */}
        <section id="simulatore-menu" className="py-16 border-t border-gray-900 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Pannello Descrittivo Simulatore */}
            <div className="lg:col-span-5 space-y-6">
              <div className="w-fit px-3 py-1 rounded-md bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] text-xs font-bold font-mono">
                SIMULATORE LIVE IN-PAGE
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Testa il Menu come se fossi al ristorante
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Utilizza lo smartphone virtuale a destra per sperimentare la fluidità delle due configurazioni. Cambia modalità con i pulsanti in alto, simula i filtri e aggiungi i piatti al carrello!
              </p>

              {/* Controlli Esterni del Simulatore */}
              <div className="space-y-4 bg-gray-950 p-6 rounded-2xl border border-gray-900">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-500">Configurazione Selezionata</p>
                <div className="flex gap-3">
                  <button 
                    onClick={() => { setIsOrderingMode(false); resetSimulator(); }}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase transition-all duration-200 border ${!isOrderingMode ? 'bg-[#00D4FF]/10 border-[#00D4FF] text-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.1)]' : 'bg-gray-900 border-gray-800 text-gray-500 hover:text-gray-300'}`}
                  >
                    Solo Consultazione
                  </button>
                  <button 
                    onClick={() => { setIsOrderingMode(true); resetSimulator(); }}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase transition-all duration-200 border ${isOrderingMode ? 'bg-[#FF6B00]/10 border-[#FF6B00] text-[#FF6B00] shadow-[0_0_15px_rgba(255,107,0,0.1)]' : 'bg-gray-900 border-gray-800 text-gray-500 hover:text-gray-300'}`}
                  >
                    Ordine al Tavolo
                  </button>
                </div>
                
                {/* Spiegazione dinamica */}
                <div className="text-xs text-gray-400 pt-2 border-t border-gray-900 leading-relaxed">
                  {!isOrderingMode ? (
                    <p>💡 In modalità <strong>Solo Consultazione</strong>, l'utente scansiona il QR e visualizza piatti ed allergeni ma ordina richiamando il cameriere. Riduce i costi e rende il menu igienico e interattivo.</p>
                  ) : (
                    <p>🚀 In modalità <strong>Ordine al Tavolo</strong>, l'utente seleziona le portate, inserisce il tavolo e invia l'ordine. La cucina riceve istantaneamente la comanda, dimezzando i tempi di servizio.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Mockup Smartphone */}
            <div className="lg:col-span-7 flex justify-center">
              
              {/* Contenitore Telefono Esterno */}
              <div className="relative w-full max-w-[325px] h-[640px] bg-[#0c0f17] rounded-[45px] border-[10px] border-gray-900 shadow-2xl overflow-hidden flex flex-col ring-1 ring-gray-800/80">
                
                {/* Isola Superiore / Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-xl z-30 flex items-center justify-center">
                  <div className="w-12 h-1 bg-gray-800 rounded-full mb-1"></div>
                </div>

                {/* Navbar Interna Telefono */}
                <div className="pt-8 pb-3 px-4 bg-[#111726] border-b border-gray-950 flex flex-col gap-2 shrink-0 z-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-black text-white tracking-wide">Trattoria Bella Napoli</h4>
                      <p className="text-[9px] text-gray-500 font-mono tracking-widest">TAVOLO {tableNumber}</p>
                    </div>
                    
                    {/* Badge Stato Modalità */}
                    <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded ${isOrderingMode ? 'bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20' : 'bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20'}`}>
                      {isOrderingMode ? "ORDINE ATTIVO" : "SOLO LETTURA"}
                    </span>
                  </div>
                  
                  {/* Lingua & Filtri rapidi */}
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1 bg-gray-950 px-2 py-1 rounded border border-gray-900">
                      <span className="text-gray-400">Lingua:</span>
                      <span className="font-bold text-white font-mono">🇮🇹 IT</span>
                    </div>

                    {/* Bottone Filtro Allergeni */}
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500 text-[9px]">Senza:</span>
                      <button 
                        onClick={() => toggleAllergenFilter("glutine")}
                        className={`px-1.5 py-0.5 rounded text-[9px] font-bold border transition-colors ${allergensToFilter.includes("glutine") ? 'bg-[#FF6B00] text-white border-[#FF6B00]' : 'bg-gray-950 border-gray-900 text-gray-400'}`}
                      >
                        Glutine
                      </button>
                      <button 
                        onClick={() => toggleAllergenFilter("lattosio")}
                        className={`px-1.5 py-0.5 rounded text-[9px] font-bold border transition-colors ${allergensToFilter.includes("lattosio") ? 'bg-[#FF6B00] text-white border-[#FF6B00]' : 'bg-gray-950 border-gray-900 text-gray-400'}`}
                      >
                        Lattosio
                      </button>
                    </div>
                  </div>
                </div>

                {/* Corpo del Menu (Scrollabile) */}
                <div className="flex-1 overflow-y-auto px-3 py-4 bg-[#090d16] pb-20 relative">
                  
                  {/* Alert di consultazione dinamico */}
                  {consultationAlert && (
                    <div className="absolute top-2 left-2 right-2 p-3 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg text-[10px] leading-relaxed shadow-lg z-30 animate-pulse">
                      ⚠️ {consultationAlert}
                    </div>
                  )}

                  {orderSubmitted ? (
                    /* Schermata Ordine Ricevuto */
                    <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4 animate-float">
                      <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">Comanda Inviata!</h4>
                        <p className="text-[11px] text-gray-400 mt-1">L'ordine è stato preso in carico ed inviato in cucina.</p>
                      </div>

                      {/* Dettagli della comanda simulata */}
                      <div className="bg-[#111726] border border-gray-900 rounded-xl p-4 w-full text-left space-y-2 text-[10px] font-mono">
                        <p className="flex justify-between border-b border-gray-950 pb-1">
                          <span className="text-gray-500">CODICE:</span>
                          <span className="text-white font-bold">{orderCode}</span>
                        </p>
                        <p className="flex justify-between border-b border-gray-950 pb-1">
                          <span className="text-gray-500">TAVOLO:</span>
                          <span className="text-[#00D4FF] font-bold">{tableNumber}</span>
                        </p>
                        <div className="pt-1 text-gray-400">
                          {Object.entries(cart).map(([dishId, qty]) => {
                            const dish = menuSimulatorDishes.find(d => d.id === dishId);
                            return (
                              <div key={dishId} className="flex justify-between">
                                <span>{qty}x {dish?.name}</span>
                                <span>€{((dish?.price || 0) * qty).toFixed(2)}</span>
                              </div>
                            );
                          })}
                        </div>
                        <p className="flex justify-between border-t border-gray-950 pt-2 font-bold text-white text-xs">
                          <span>TOTALE:</span>
                          <span className="text-[#FF6B00]">€{getCartTotal().toFixed(2)}</span>
                        </p>
                      </div>

                      <button 
                        onClick={resetSimulator}
                        className="py-2.5 px-4 w-full rounded-xl text-xs font-bold bg-gray-900 border border-gray-800 text-white hover:bg-gray-800 transition-colors"
                      >
                        Ordina Altro
                      </button>
                    </div>
                  ) : viewingCart ? (
                    /* Visualizzazione Carrello Interno */
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-gray-950 pb-2">
                        <button 
                          onClick={() => setViewingCart(false)}
                          className="text-xs text-[#00D4FF] font-bold flex items-center gap-1"
                        >
                          ← Menu
                        </button>
                        <h4 className="text-xs font-bold text-white">Carrello Comanda</h4>
                        <button 
                          onClick={clearCart}
                          className="text-[9px] text-red-400 font-mono"
                        >
                          Svuota
                        </button>
                      </div>

                      {getCartQty() === 0 ? (
                        <div className="text-center py-12 text-gray-500 text-xs">
                          Il carrello è vuoto.<br/>Torna al menu per aggiungere piatti.
                        </div>
                      ) : (
                        <form onSubmit={submitOrder} className="space-y-4">
                          {/* Elenco Piatti Carrello */}
                          <div className="space-y-2">
                            {Object.entries(cart).map(([dishId, qty]) => {
                              const dish = menuSimulatorDishes.find(d => d.id === dishId);
                              if (!dish) return null;
                              return (
                                <div key={dishId} className="flex items-center justify-between p-2.5 rounded-lg bg-[#111726] border border-gray-900">
                                  <div className="max-w-[150px]">
                                    <p className="text-[11px] font-bold text-white truncate">{dish.name}</p>
                                    <p className="text-[9px] text-[#FF6B00]">€{(dish.price * qty).toFixed(2)}</p>
                                  </div>
                                  
                                  {/* Pulsanti quantità */}
                                  <div className="flex items-center gap-2">
                                    <button 
                                      type="button"
                                      onClick={() => removeFromCart(dishId)}
                                      className="w-5 h-5 rounded bg-gray-950 hover:bg-gray-900 flex items-center justify-center font-bold text-[10px] text-gray-400"
                                    >
                                      -
                                    </button>
                                    <span className="text-xs font-bold text-white font-mono w-4 text-center">{qty}</span>
                                    <button 
                                      type="button"
                                      onClick={() => addToCart(dishId)}
                                      className="w-5 h-5 rounded bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center font-bold text-[10px]"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Sezione Tavolo */}
                          <div className="bg-[#111726] p-3 rounded-lg border border-gray-900 space-y-2">
                            <label className="block text-[10px] font-mono text-gray-400">NUMERO DI TAVOLO / OMBRELLONE</label>
                            <input 
                              type="number"
                              required
                              value={tableNumber}
                              onChange={(e) => setTableNumber(e.target.value)}
                              className="w-full bg-gray-950 border border-gray-800 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                              min="1"
                              max="100"
                            />
                            <p className="text-[8px] text-gray-500">La comanda verrà geolocalizzata su questo tavolo fisicamente.</p>
                          </div>

                          {/* Riepilogo Costi */}
                          <div className="border-t border-gray-950 pt-2 space-y-1.5 text-[10px] font-mono">
                            <div className="flex justify-between text-gray-400">
                              <span>Numero articoli:</span>
                              <span className="text-white">{getCartQty()}</span>
                            </div>
                            <div className="flex justify-between text-xs font-bold text-white pt-1">
                              <span>TOTALE:</span>
                              <span className="text-[#FF6B00]">€{getCartTotal().toFixed(2)}</span>
                            </div>
                          </div>

                          {/* Pulsante Invio */}
                          <button 
                            type="submit"
                            className="w-full py-3 rounded-xl bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-600/15"
                          >
                            Invia Comanda Ora
                          </button>
                        </form>
                      )}
                    </div>
                  ) : (
                    /* Griglia Categorie & Lista Piatti normali */
                    <div className="space-y-4">
                      
                      {/* Navigazione Categorie Interna */}
                      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                        {["pizze", "primi", "dolci", "bevande"].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0 transition-colors ${selectedCategory === cat ? 'bg-[#111726] border border-gray-800 text-white' : 'text-gray-500 hover:text-gray-400'}`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      {/* Lista piatti filtrata per allergene & categoria */}
                      <div className="space-y-3">
                        {menuSimulatorDishes
                          .filter(dish => dish.category === selectedCategory)
                          .map((dish) => {
                            // Verifica se il piatto contiene allergeni esclusi
                            const containsFilteredAllergen = dish.allergens.some(a => allergensToFilter.includes(a));
                            
                            return (
                              <div 
                                key={dish.id} 
                                className={`p-3 rounded-xl bg-[#111726]/60 border border-gray-900 flex flex-col justify-between gap-3 transition-opacity ${containsFilteredAllergen ? 'opacity-35 pointer-events-none' : 'opacity-100'}`}
                              >
                                <div className="space-y-1">
                                  <div className="flex items-start justify-between">
                                    <h5 className="text-[11px] font-bold text-white leading-tight">{dish.name}</h5>
                                    <span className="text-[10px] font-bold text-[#00D4FF] font-mono shrink-0">€{dish.price.toFixed(2)}</span>
                                  </div>
                                  <p className="text-[9px] text-gray-500 leading-normal line-clamp-2">{dish.desc}</p>
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-950 pt-2">
                                  
                                  {/* Allergene Alert Icon */}
                                  <div className="flex gap-1">
                                    {dish.allergens.map((alg) => (
                                      <span key={alg} className="text-[7px] font-bold uppercase tracking-wider px-1 bg-amber-500/10 text-amber-500 rounded font-mono">
                                        {alg.substring(0, 3)}
                                      </span>
                                    ))}
                                    {dish.allergens.length === 0 && (
                                      <span className="text-[7px] text-gray-600 font-mono">Senza allergeni</span>
                                    )}
                                  </div>

                                  {/* Bottone Aggiungi */}
                                  {isOrderingMode ? (
                                    <div className="flex items-center gap-1.5">
                                      {cart[dish.id] && (
                                        <>
                                          <button 
                                            onClick={() => removeFromCart(dish.id)}
                                            className="w-4 h-4 rounded bg-gray-950 flex items-center justify-center font-bold text-[9px] text-gray-400"
                                          >
                                            -
                                          </button>
                                          <span className="text-[10px] font-bold text-white font-mono">{cart[dish.id]}</span>
                                        </>
                                      )}
                                      <button 
                                        onClick={() => addToCart(dish.id)}
                                        className="py-1 px-2.5 rounded bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-[9px] font-bold hover:bg-[#FF6B00] hover:text-white transition-colors"
                                      >
                                        Aggiungi
                                      </button>
                                    </div>
                                  ) : (
                                    /* In sola consultazione, mostra un pulsante Info finto */
                                    <button 
                                      onClick={() => addToCart(dish.id)}
                                      className="py-1 px-2.5 rounded bg-gray-950 text-gray-500 text-[9px] border border-gray-900"
                                    >
                                      Sola Lettura
                                    </button>
                                  )}

                                </div>
                              </div>
                            );
                          })}
                      </div>

                    </div>
                  )}

                </div>

                {/* Footer Carrello Fluttuante Interno (Solo ordinazione) */}
                {isOrderingMode && getCartQty() > 0 && !viewingCart && !orderSubmitted && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#111726] border-t border-gray-950 flex items-center justify-between z-20 shadow-2xl">
                    <div className="text-[10px]">
                      <p className="text-gray-400 font-mono">Articoli: {getCartQty()}</p>
                      <p className="text-xs font-bold text-[#FF6B00] font-mono">Totale: €{getCartTotal().toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => setViewingCart(true)}
                      className="py-1.5 px-3.5 rounded bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-[10px] uppercase tracking-wider"
                    >
                      Vedi Comanda
                    </button>
                  </div>
                )}

              </div>

            </div>

          </div>
        </section>

        {/* 5. SEZIONE ALTRI PROGETTI DEV */}
        <section id="progetti" className="py-16 border-t border-gray-900 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] bg-[#00D4FF]/10 px-3 py-1 rounded-md">
                Full-Stack & Scripts
              </span>
              <h3 className="text-3xl md:text-5xl font-black mt-4 text-white">
                Altri Lavori & Script
              </h3>
              <p className="text-gray-400 text-sm md:text-base mt-2 max-w-2xl">
                Oltre ai menu digitali, ho realizzato numerosi strumenti di automazione aziendale, desktop application per flussi complessi e SaaS per ottimizzazioni varie.
              </p>
            </div>

            {/* Filtri Categoria */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none font-mono text-xs">
              {[
                { key: "tutti", label: "Tutti" },
                { key: "automation", label: "Automation" },
                { key: "web", label: "Web App" },
                { key: "desktop", label: "Desktop" },
                { key: "utility", label: "Utility" }
              ].map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCategoriaAttiva(c.key)}
                  className={`px-4 py-2 rounded-xl border font-bold uppercase tracking-wider shrink-0 transition-all ${categoriaAttiva === c.key ? 'bg-[#8A2BE2]/10 border-[#8A2BE2] text-[#00D4FF] shadow-[0_0_15px_rgba(138,43,226,0.1)]' : 'bg-gray-950 border-gray-900 text-gray-500 hover:text-gray-300'}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Griglia Progetti */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {progettiFiltrati.map((proj) => (
              <a 
                key={proj.id} 
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-900 bg-[#0c101b]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#8A2BE2]/40 hover:shadow-[0_10px_35px_rgba(138,43,226,0.08)] relative"
              >
                {/* Immagine Progetto con Hover Effect */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-950">
                  <img 
                    src={proj.img} 
                    alt={proj.titolo} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback dinamico premium se non trova il file locale
                      e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c101b] via-transparent to-transparent opacity-80"></div>
                </div>

                {/* Contenuto Card */}
                <div className="flex flex-1 flex-col p-6">
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono uppercase tracking-wider text-gray-500 px-2 py-0.5 rounded bg-gray-950 border border-gray-900">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-[#00D4FF] transition-colors">
                      {proj.titolo}
                    </h4>
                    <span className="text-[10px] font-mono text-gray-600">#{proj.id}</span>
                  </div>
                  
                  <p className="text-xs text-gray-400 flex-1 leading-relaxed">
                    {proj.descrizione}
                  </p>
                  
                  {/* Call to action card */}
                  <div className="mt-6 pt-4 border-t border-gray-950 flex items-center text-[10px] font-bold font-mono uppercase tracking-wider text-[#FF6B00] group-hover:text-[#00D4FF] transition-colors">
                    Apri Repo GitHub 
                    <svg className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {progettiFiltrati.length === 0 && (
            <div className="text-center py-20 text-gray-500 font-mono">
              Nessun progetto trovato per questa categoria.
            </div>
          )}
        </section>

        {/* 6. COMPETENZE & SKILLS */}
        <section className="py-16 border-t border-gray-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-3 py-1 rounded-md">
                Tech Stack
              </span>
              <h3 className="text-3xl font-black mt-4 mb-6 text-white">
                Architettura e Competenze
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Le mie soluzioni combinano velocità di esecuzione, flessibilità e design d'impatto. Utilizzo le tecnologie più moderne per garantire il massimo delle performance sia in ambito web che desktop.
              </p>

              {/* Lista Tecnologie */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-950 p-4 rounded-xl border border-gray-900">
                  <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider mb-1">Frontend</h4>
                  <p className="text-xs text-gray-500">React, Next.js, TypeScript, Tailwind CSS v4, Web Components</p>
                </div>
                <div className="bg-gray-950 p-4 rounded-xl border border-gray-900">
                  <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider mb-1">Backend & DB</h4>
                  <p className="text-xs text-gray-500">Node.js, PostgreSQL, Supabase, Python API, RESTful Services</p>
                </div>
                <div className="bg-gray-950 p-4 rounded-xl border border-gray-900">
                  <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider mb-1">Desktop & Automazione</h4>
                  <p className="text-xs text-gray-500">Python (Pillow, Pandas, Watchdog), Scripting Batch, OS Automations</p>
                </div>
                <div className="bg-gray-950 p-4 rounded-xl border border-gray-900">
                  <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider mb-1">Data Scraping</h4>
                  <p className="text-xs text-gray-500">BeautifulSoup, Scrapy, Selenium, Web Crawling su larga scala</p>
                </div>
              </div>
            </div>

            {/* Box Canale YouTube */}
            <div className="p-8 rounded-2xl border border-red-950/20 bg-[#12070c] shadow-[0_10px_40px_rgba(220,38,38,0.05)] flex flex-col justify-between gap-6 transition-all duration-300 hover:border-red-900/30">
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/20 shrink-0">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">ProduttivitàAI</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Il mio canale YouTube dedicato all'ottimizzazione del lavoro d'ufficio e della produttività aziendale tramite intelligenza artificiale. Strategie pratiche e guide per software di produttività.
                  </p>
                </div>
              </div>
              
              <a 
                href="https://www.youtube.com/@Produttivit%C3%A0AI-w2n" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white transition-colors text-center w-full shadow-lg shadow-red-600/10 active:scale-[0.98]"
              >
                Iscriviti e Guarda i Video
              </a>
            </div>
          </div>
        </section>

        {/* 6.5 SEZIONE EBOOK & RISORSE */}
        <section id="risorse" className="py-16 border-t border-gray-900 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-3 py-1 rounded-md">
              Risorse Gratuite
            </span>
            <h3 className="text-3xl md:text-5xl font-black mt-4 mb-6 text-white">
              Ebook & Guide Pratiche
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Scarica gratuitamente le mie guide digitali su Lemon Squeezy per ottimizzare la tua produttività personale con l'IA o imparare a scrivere i tuoi primi script di automazione.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ebooks.map((ebook) => (
              <div 
                key={ebook.id} 
                className="glass-panel rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-stretch gap-6 border border-gray-900 hover:border-[#FF6B00]/30 transition-all duration-300"
              >
                {/* Copertina Libro 3D-like in CSS */}
                <div className={`w-36 h-48 rounded-lg bg-gradient-to-br ${ebook.coverColor} p-4 flex flex-col justify-between shadow-xl shrink-0 relative overflow-hidden group select-none border border-white/10`}>
                  <div className="absolute top-0 left-0 w-2 h-full bg-black/25 z-10"></div>
                  <span className="text-[8px] font-mono font-bold tracking-widest bg-white/20 text-white px-2 py-0.5 rounded w-fit uppercase">
                    {ebook.badge}
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs font-black text-white leading-tight">{ebook.titolo}</p>
                    <p className="text-[8px] text-white/50 font-mono">by Alessandro</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-[9px] font-bold text-white/30">SCREEMERS</span>
                    <span className="text-xs font-black text-[#00D4FF] bg-black/30 px-2 py-0.5 rounded">
                      {ebook.prezzo}
                    </span>
                  </div>
                </div>

                {/* Dettagli Ebook */}
                <div className="flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div>
                    <h4 className="text-lg font-bold text-white leading-tight mb-2">
                      {ebook.titolo}
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal mb-4">
                      {ebook.descrizione}
                    </p>
                    
                    {/* Lista Caratteristiche */}
                    <div className="space-y-1.5 text-xs text-gray-300">
                      {ebook.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href={ebook.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center bg-gray-950 border border-gray-900 hover:border-[#FF6B00]/40 hover:text-white text-gray-400 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Scarica Gratis su Lemon Squeezy
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. SEZIONE CONTATTI */}
        <section id="contatti" className="py-16 border-t border-gray-900 scroll-mt-24 max-w-4xl mx-auto space-y-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#00D4FF] bg-[#00D4FF]/10 px-3 py-1 rounded-md">
              Collaborazione
            </span>
            <h3 className="text-3xl font-black mt-4 text-white">Mettiamoci in Contatto</h3>
            <p className="text-gray-400 text-xs md:text-sm mt-2">
              Hai bisogno di un menu digitale personalizzato per la tua attività o di un'automazione software? Scrivimi e struttureremo la soluzione migliore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0c101b]/60 p-8 rounded-2xl border border-gray-900 shadow-xl">
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#00D4FF] mb-2 font-mono uppercase tracking-wider text-xs">Richiedi Preventivo Gratuito</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Compila il modulo a fianco specificando le tue necessità (es. numero di tavoli, tipologia di piatti o se hai bisogno di integrazioni personalizzate). Rispondo di norma in 24 ore.
                </p>
              </div>

              <div className="space-y-3">
                <a 
                  href="mailto:screemerssoftware@gmail.com" 
                  className="inline-flex items-center gap-4 p-4 w-full rounded-xl bg-[#030712] border border-gray-900 hover:border-[#FF6B00]/40 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] shrink-0">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7 8.9a2.2 2.2 0 003.3 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Email Diretta</p>
                    <p className="text-xs font-bold text-white group-hover:text-[#00D4FF] transition-colors font-mono truncate">screemerssoftware@gmail.com</p>
                  </div>
                </a>

                {/* Secondo recapito finto/GitHub */}
                <a 
                  href="https://github.com/Screemerss" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 p-4 w-full rounded-xl bg-[#030712] border border-gray-900 hover:border-[#8A2BE2]/40 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#8A2BE2]/10 flex items-center justify-center text-[#8A2BE2] shrink-0">
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.193 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">GitHub Profile</p>
                    <p className="text-xs font-bold text-white group-hover:text-[#8A2BE2] transition-colors font-mono">github.com/Screemerss</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form invio */}
            {formStatus === "success" ? (
              <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-4 shadow-xl animate-float">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white">Messaggio Inviato!</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Grazie per avermi contattato. Il tuo messaggio è stato ricevuto correttamente. Ti risponderò al più presto all'indirizzo email fornito.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setFormStatus("idle")}
                  className="py-2.5 px-6 rounded-lg font-bold text-xs uppercase tracking-wider bg-gray-900 border border-gray-850 text-white hover:bg-gray-800 transition-colors"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleContactSubmit}
                className="space-y-4"
              >
                {formStatus === "error" && (
                  <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-xs font-medium">
                    ❌ Si è verificato un errore durante l'invio. Riprova più tardi o scrivimi direttamente via email.
                  </div>
                )}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1" htmlFor="nome">Nome / Azienda</label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="name" 
                    required 
                    className="w-full bg-[#030712] border border-gray-900 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8A2BE2] transition-colors"
                    placeholder="Nome o denominazione"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full bg-[#030712] border border-gray-900 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8A2BE2] transition-colors"
                    placeholder="nome@azienda.com"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-1" htmlFor="messaggio">Messaggio</label>
                  <textarea 
                    id="messaggio" 
                    name="message" 
                    required 
                    rows={4}
                    className="w-full bg-[#030712] border border-gray-900 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#8A2BE2] transition-colors resize-none"
                    placeholder="Descrivi brevemente la tua richiesta..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "submitting"}
                  className="w-full py-3.5 px-6 rounded-lg font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#FF6B00] to-[#8A2BE2] text-white hover:opacity-90 transition-opacity active:scale-[0.98] transform duration-100 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? "Invio in corso..." : "Invia Richiesta"}
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="border-t border-gray-900 bg-[#02040a] py-10 text-center text-[10px] font-mono text-gray-600">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Screemers Software. Tutti i diritti riservati.</p>
          <div className="flex gap-4">
            <a href="https://github.com/Screemerss" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://www.youtube.com/@Produttivit%C3%A0AI-w2n" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">YouTube</a>
            <a href="mailto:screemerssoftware@gmail.com" className="hover:text-[#00D4FF] transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}