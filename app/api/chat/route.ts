import { NextResponse } from 'next/server';

// System Instruction per addestrare Gemini a comportarsi come l'assistente di Alessandro
const SYSTEM_PROMPT = `
Sei "Screemers AI", l'assistente virtuale ufficiale del portfolio di Alessandro (Screemers Software).
Il tuo obiettivo è descrivere le competenze di Alessandro, presentare i suoi progetti ed ebook gratuiti, e aiutare i clienti a validare le loro idee di siti web o applicazioni, spingendoli a contattarlo per lavorare insieme.

Usa uno stile professionale, accogliente, entusiasta ma concreto. Scrivi in italiano.
Rispondi con testi formattati in Markdown pulito, usando paragrafi brevi, elenchi puntati e link cliccabili dove appropriato.

Informazioni su Alessandro (Screemers Software):
- Profilo: Sviluppatore Freelance Full-Stack, esperto di automazione desktop (Python), sviluppo web (Next.js, React, Tailwind) e integrazione di intelligenza artificiale locale e cloud.
- Contatti:
  * Email: screemerssoftware@gmail.com
  * GitHub: https://github.com/Screemerss
  * YouTube: https://www.youtube.com/@Produttivit%C3%A0AI-w2n

I Progetti di Alessandro (indicagli i dettagli se l'utente chiede dei progetti):
1. ScreenSift: Utility desktop in Python per lo screening visivo e gestione massiva di file immagine/screenshot.
2. PyrographyAssistantPro: Software desktop di assistenza per la pirografia (calibrazione immagini e simulazione bruciature).
3. PC-Facile: Script Batch/PowerShell semplificato per l'ottimizzazione di Windows.
4. DataCleansePro: Software Python/Pandas per pulizia e deduplica di database aziendali.
5. Smart-File-Organizer: Script Python per organizzazione automatica dei file tramite Watchdog.
6. excel-merger-tool: Utility Python per combinare fogli Excel mantenendone la formattazione.
7. TagTurbo-SaaS-Streamlit: App web in Streamlit per la generazione di tag SEO con IA.
8. bandoradar-scraper: Scraper Python per monitoraggio di bandi pubblici e appalti.
9. RecoverFlow: Dashboard Next.js/React per monitorare i flussi di backup e ripristino dati.
10. Twins Sport Village: Landing page premium in Next.js con mappe interattive (Leaflet) e prenotazioni via Sportclubby.
11. AI-Desktop-Agent: Agente AI locale (Ollama + watchdog) che monitora il desktop, smista file, gestisce installazioni ed esegue automazione Office/Word.

Ebook Gratuiti offerti da Alessandro:
1. "5 Prompt AI per Risparmiare 10 Ore a Settimana" (Download diretto dal portfolio in formato PDF)
2. "Il Sistema Shorts Infinito" (Guida per flussi automatici di video brevi con strumenti AI)

Se un utente ti descrive un'idea per un sito web o un'applicazione, agisci da "Validatore Tecnico di Idee":
1. Analizza brevemente la sua idea.
2. Suggerisci uno stack tecnologico adatto (consigliando Next.js per il web ed eventuali script Python per automazione/AI).
3. Suggerisci un flusso logico di sviluppo.
4. Invitalo calorosamente a prenotare una consulenza o a mandare un'e-mail ad Alessandro per iniziare a realizzarla.

Mantieni le risposte sotto le 200 parole se possibile, per essere leggibile in una finestrella di chat. Non inventare informazioni non presenti in questo prompt.
`;

// Struttura dei messaggi accettati in input
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json() as { messages: Message[] };

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messaggi mancanti o non validi' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Se la chiave API non è presente, rispondiamo usando il Simulatore Offline (Mock)
    if (!apiKey) {
      const lastMessage = messages[messages.length - 1]?.content.toLowerCase() || '';
      let mockReply = '';

      if (lastMessage.includes('chi sei') || lastMessage.includes('presentati') || lastMessage.includes('alessandro')) {
        mockReply = `Ciao! Sono **Screemers AI**, l'assistente virtuale di Alessandro. Alessandro è uno sviluppatore Full-Stack specializzato in **Next.js**, **automazione Python** e **integrazione di Intelligenza Artificiale**. \n\nPosso aiutarti a scoprire i suoi progetti, scaricare i suoi ebook gratuiti o analizzare una tua idea di applicazione!`;
      } else if (lastMessage.includes('progett') || lastMessage.includes('portfolio') || lastMessage.includes('sito')) {
        mockReply = `Alessandro ha sviluppato molti progetti di successo, tra cui:\n\n* **Twins Sport Village**: Un sito Next.js premium con mappe scure e prenotazioni.\n* **AI-Desktop-Agent**: Un agente locale con Ollama per organizzare il computer.\n* **ScreenSift**: Un'utility Python per la gestione intelligente degli screenshot.\n\nVuoi che ti parli di uno in particolare? Puoi anche vedere la lista completa navigando sul portfolio!`;
      } else if (lastMessage.includes('contatt') || lastMessage.includes('email') || lastMessage.includes('mail') || lastMessage.includes('whatsapp')) {
        mockReply = `Puoi metterti in contatto con Alessandro in questi modi:\n\n* ✉️ **Email**: screemerssoftware@gmail.com\n* 💻 **GitHub**: [Screemerss](https://github.com/Screemerss)\n* 🎥 **YouTube**: [@ProduttivitàAI](https://www.youtube.com/@Produttivit%C3%A0AI-w2n)\n\nScrivigli pure per proporgli il tuo progetto!`;
      } else if (lastMessage.includes('idea') || lastMessage.includes('crea') || lastMessage.includes('sviluppa') || lastMessage.includes('vorrei')) {
        mockReply = `Che bella idea! In quanto assistente di Alessandro, posso dirti che Next.js sarebbe perfetto se si tratta di un'applicazione web veloce e moderna, magari affiancata da Python se hai bisogno di elaborare dati o usare l'Intelligenza Artificiale. \n\nTi consiglio di inviare una mail ad Alessandro a **screemerssoftware@gmail.com** spiegando i dettagli dell'idea: ti aiuterà a strutturare uno studio di fattibilità completo!`;
      } else if (lastMessage.includes('ebook') || lastMessage.includes('libro') || lastMessage.includes('gratis') || lastMessage.includes('pdf')) {
        mockReply = `Alessandro offre due ebook gratuiti sul suo portfolio:\n\n1. **5 Prompt AI per Risparmiare 10 Ore a Settimana**\n2. **Il Sistema Shorts Infinito**\n\nPuoi scaricarli direttamente scorrendo fino alla sezione Ebook del sito!`;
      } else {
        mockReply = `Ciao! Sono l'assistente AI di Alessandro. Scusa, al momento sono in esecuzione in modalità offline (chiave API non ancora configurata).\n\nPosso darti informazioni sui suoi **progetti**, sui suoi **contatti** o su come **validare la tua idea** di sito/app. Chiedimi pure!`;
      }

      // Ritardo simulato per rendere realistica la scrittura (500ms)
      await new Promise((resolve) => setTimeout(resolve, 600));

      return NextResponse.json({ content: mockReply });
    }

    // Mappatura dei messaggi nel formato richiesto da Gemini API
    const geminiContents = messages.map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    // Chiamata all'endpoint ufficiale di Google Gemini (Gemini 1.5 Flash)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: geminiContents,
        systemInstruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        generationConfig: {
          maxOutputTokens: 300,
          temperature: 0.7,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Gemini API Error:', errText);
      throw new Error(`Google API responded with status ${response.status}`);
    }

    const data = await response.json() as {
      candidates?: Array<{
        content?: {
          parts?: Array<{ text: string }>;
        };
      }>;
    };

    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Nessuna risposta ricevuta.';

    return NextResponse.json({ content: aiText });
  } catch (error: any) {
    console.error('Error in chat API route:', error);
    return NextResponse.json(
      { error: 'Errore interno del server durante l\'elaborazione della richiesta' },
      { status: 500 }
    );
  }
}
