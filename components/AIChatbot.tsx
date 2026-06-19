'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Ciao! Sono **Screemers AI**, l\'assistente virtuale di Alessandro. Come posso aiutarti oggi? Puoi chiedermi dei miei progetti, scaricare i miei ebook gratuiti o propormi un\'idea da analizzare!',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll in fondo quando arriva un nuovo messaggio
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error('Errore durante la chiamata API');
      }

      const data = await response.json() as { content: string };
      setMessages((prev) => [...prev, { role: 'assistant', content: data.content }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Scusami, si è verificato un errore di connessione. Riprova tra poco!',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  // Funzione ausiliaria per formattare risposte semplici in markdown
  const formatMarkdown = (text: string) => {
    // Sostituisce **testo** con <strong>testo</strong>
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Sostituisce *testo* con <em>testo</em>
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    // Converte elenchi puntati basati su asterisco o trattino
    formatted = formatted.replace(/^\*\s(.*)/gm, '<li>$1</li>');
    formatted = formatted.replace(/^-\s(.*)/gm, '<li>$1</li>');
    // Raggruppa i <li> consecutivi in un <ul>
    formatted = formatted.replace(/(<li>[\s\S]*?<\/li>)+/g, (match) => `<ul class="list-disc pl-4 my-2 space-y-1">${match}</ul>`);
    // Sostituisce i link di tipo [testo](url) con link HTML reali
    formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#00D4FF] hover:underline font-semibold">$1</a>');
    // Sostituisce a capo singoli con tag <br />
    return formatted.split('\n').join('<br />');
  };

  const quickPrompts = [
    { label: '👋 Chi sei?', text: 'Presentati e raccontami chi sei' },
    { label: '💻 Progetti principali', text: 'Quali sono i tuoi progetti più importanti?' },
    { label: '💡 Ho un\'idea di app', text: 'Ho un\'idea per un\'app, mi aiuti a validarla?' },
    { label: '📚 Ebook gratuiti', text: 'Quali ebook gratuiti offri e come posso scaricarli?' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* 1. Pulsante Fluttuante di attivazione */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#8A2BE2] to-[#00D4FF] flex items-center justify-center text-white shadow-[0_4px_20px_rgba(0,212,255,0.4)] hover:scale-110 hover:shadow-[0_4px_25px_rgba(138,43,226,0.6)] active:scale-95 transition-all duration-300 relative group cursor-pointer"
          aria-label="Apri Assistente AI"
        >
          {/* Icona Sparkle AI */}
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          {/* Tooltip Hover */}
          <span className="absolute right-16 bg-[#0c101b] border border-gray-800 text-xs text-gray-300 px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
            Chiedi a Screemers AI ✨
          </span>
        </button>
      )}

      {/* 2. Finestra di Chat */}
      {isOpen && (
        <div className="w-[360px] sm:w-[380px] h-[500px] rounded-2xl border border-gray-800 bg-[#070a13]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_20px_rgba(138,43,226,0.15)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-6 fade-in duration-300">
          {/* Header */}
          <div className="p-4 border-b border-gray-900 bg-[#0a0f1d] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#8A2BE2] to-[#00D4FF] flex items-center justify-center text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  Screemers AI
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </h4>
                <p className="text-[10px] text-gray-500 font-mono">Powered by Google Gemma/Gemini</p>
              </div>
            </div>
            
            {/* Bottone Chiudi */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-500 hover:text-white rounded-lg hover:bg-gray-900 transition-colors cursor-pointer"
              aria-label="Chiudi Chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Area Messaggi */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#070a13]/20">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-tr from-[#8A2BE2] to-[#7B2CBF] text-white rounded-tr-none shadow-[0_4px_10px_rgba(138,43,226,0.15)]'
                      : 'bg-[#0f1424] text-gray-300 border border-gray-900 rounded-tl-none'
                  }`}
                  dangerouslySetInnerHTML={{ __html: formatMarkdown(msg.content) }}
                />
              </div>
            ))}

            {/* Indicatore di Scrittura (Typing Indicator) */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-[#0f1424] border border-gray-900 text-gray-500 rounded-2xl rounded-tl-none p-3.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Rapidi (Mostrati solo all'inizio o se ci sono pochi messaggi) */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 py-2 border-t border-gray-950 bg-[#070a13]/40 flex flex-wrap gap-2">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(p.text)}
                  className="text-[10px] bg-[#0c101b] border border-gray-800 hover:border-gray-700 hover:bg-[#0f1424] text-gray-400 hover:text-white px-2.5 py-1.5 rounded-lg transition-all cursor-pointer"
                >
                  {p.label}
                </button>
              ))}
            </div>
          )}

          {/* Form Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-950 bg-[#0a0f1d] flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Chiedi qualcosa ad Alessandro..."
              disabled={isLoading}
              className="flex-1 bg-[#070a13] border border-gray-800 focus:border-[#8A2BE2] text-white rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#8A2BE2]/50 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-4 bg-[#8A2BE2] hover:bg-[#7B2CBF] disabled:bg-gray-900 disabled:text-gray-600 text-white rounded-xl flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
