import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const RESPONSES = {
  greet: `Welcome to the VEDT Amsterdam Concierge. I am here to assist with any aspect of your Amsterdam visit — from the finest dining to hidden canal routes, seasonal events, and family planning. How may I help you today?`,

  restaurant: `Amsterdam's dining scene is extraordinary. For a truly memorable family experience, Restaurant Rijks inside the Rijksmuseum offers a world-class menu with a dedicated children's selection — and the setting is unparalleled. For authentic Dutch cuisine in the Jordaan, De Belhamel delivers refined canal-side dining. If you are exploring De Pijp, the Foodhallen brings 21 independent food stalls under one beautifully restored roof — perfect for varied family tastes. For a classic Dutch lunch, seek out any brown café (bruine kroeg) for uitsmijter: open-faced eggs with ham on artisan bread, under €12.`,

  museum: `Amsterdam is one of the world's great museum cities — and remarkably generous to families. The Rijksmuseum, housing Rembrandt's Night Watch and Vermeer's Milkmaid, admits every visitor under 18 completely free of charge. Adults pay €22.50. The Van Gogh Museum extends the same generosity — free for all under-18s, with adults at €25. NEMO Science Museum, shaped like a ship, offers five floors of hands-on discovery and admits children under four free. The Anne Frank House is essential for visitors aged ten and above — book four to six weeks in advance as it sells out consistently. The Eye Film Museum in Amsterdam Noord is free to enter and open daily.`,

  weather: `Amsterdam has a maritime climate — mild, changeable, and wonderfully atmospheric year-round. Summers (June to August) average 20–24°C with long evenings and outdoor canal life in full flow. Spring brings dramatic tulip displays and crisp, clear days perfect for cycling. Autumn is golden and quiet, with museum queues nearly absent. Winter is cold but beautiful, with the Amsterdam Light Festival illuminating the canals from November through January. Our firm recommendation: always pack one lightweight waterproof per person, regardless of season. Rain here is more a light inconvenience than a disruption.`,

  canal: `Amsterdam's 165 canals constitute a UNESCO World Heritage Site — the world's most ambitious 17th-century urban planning project. For families, a classic 75-minute group canal cruise costs from €18 per adult, with children under four travelling free on most operators. For a more exclusive experience, private electric canal boats carry up to eight passengers and can include a private chef. The IJ ferry from Central Station to Amsterdam Noord runs 24 hours a day at absolutely no charge — crossing it at dusk offers one of the city's finest views. For the most scenic canal route, the Brouwersgracht in the Jordaan is considered Amsterdam's most beautiful.`,

  cycling: `Cycling is not simply transport in Amsterdam — it is the city's primary culture. With 900,000 bicycles for 870,000 residents, the infrastructure is comprehensive and genuinely safe for families. MacBike and Star Bikes both offer cargo bikes (capable of carrying up to three young children), child seats, tandems, and standard rentals from €8 per child per day. The most family-friendly route begins at Vondelpark, follows the Amstel river south, and returns via the Plantage neighbourhood and the zoo. Total distance: approximately 12 kilometres, entirely on protected lanes. Electric bikes are widely available for adults and those who prefer to arrive unruffled.`,

  nightlife: `Amsterdam after dark offers something for every member of the family. For younger visitors, the Amsterdam Light Festival (November through January) transforms the canals into a world-class outdoor gallery after dark — entirely free to walk. The Concertgebouw hosts Sunday morning family concerts at reduced prices. For adults, the Leidseplein and Rembrandtplein squares anchor the entertainment district with everything from jazz bars to classical venues. The Paradiso, housed in a former church, is one of Europe's most celebrated music venues. The Jordaan neighbourhood is perfect for evening canal walks — quieter, more intimate, and genuinely romantic after 9pm.`,

  transport: `Getting around Amsterdam requires almost no planning. Schiphol Airport connects to Amsterdam Centraal by direct train in 17 minutes, running every 10 minutes. From Central Station, trams serve every major neighbourhood. Children under four travel free on all Dutch public transport. The iAmsterdam City Card includes unlimited travel on trams, metro, and buses for its entire duration. For a family of four, the 72-hour card at €105 per adult is typically the best value. The Eurostar from London St Pancras arrives directly at Amsterdam Centraal in 3 hours 55 minutes — a seamless, luggage-friendly alternative to flying, particularly with young children.`,

  hotel: `Your accommodation choice dramatically shapes the Amsterdam experience. For the Refined Discoverer and Connoisseur tiers, the Jordaan and Museum Quarter offer boutique canal-side hotels within walking distance of every major attraction. The Pulitzer Amsterdam — a row of 25 interconnected canal houses — is consistently exceptional. For Budget Explorer families, De Pijp offers charming apartments at reasonable rates with immediate access to Albert Cuyp Market and the Foodhallen. We recommend booking three to six months ahead for school holiday periods. All VEDT itineraries include accommodation recommendations matched to your precise tier and family configuration.`,

  pillow: `Amsterdam's Annual Children's Pillow Fight is one of Europe's most joyful free events, held every spring in Vondelpark and Museumplein. Entirely free to participate, it draws families from across the Netherlands and beyond. Our recommendation: arrive 30 minutes before the start, bring a dedicated pillow (your best pillowcase will not survive), and pack a complete change of clothes for every participant. The atmosphere is one of pure, unapologetic joy — a genuinely unmissable Amsterdam experience that costs absolutely nothing.`,

  tulip: `The tulip season runs from late March through early May, with peak bloom typically in the third week of April. Keukenhof Gardens displays 7 million bulbs across 32 hectares — the largest flower garden on earth. Adult tickets are €20, children aged four to eleven pay €10, and children under four enter free. The gardens sell out; book online before arrival. For those visiting in late April, King's Day (Koningsdag) on April 27th combines with tulip season to create Amsterdam at its most vivid and festive. The streets turn entirely orange; spontaneous markets fill every square.`,

  kingday: `King's Day — Koningsdag — on April 27th is Amsterdam's most spectacular civic celebration. The entire city turns orange (the Dutch national colour), canal boats crowd the waterways, and every street hosts a free market, live music, or outdoor festival. Children are welcome everywhere; a children's flea market tradition means young Amsterdammers sell their toys and games on plastic sheets across the pavements. Vondelpark, Museumplein, and the Jordaan are the most concentrated areas of celebration. Book accommodation months in advance — this is the city's busiest and most joyful single day.`,

  default: `Thank you for your question. As the VEDT Amsterdam Concierge, I can provide detailed guidance on dining, museums, canals, cycling routes, transport, accommodation, seasonal events such as King's Day and the tulip season, the annual pillow fight in Vondelpark, and all aspects of family trip planning. Please ask about any of these — or enquire about a specific neighbourhood, experience, or practical consideration for your visit.`,
};

function getResponse(input) {
  const q = input.toLowerCase();
  if (/restaurant|food|eat|dine|dining|lunch|dinner|cafe|café|stroopwafel|poffertjes|cheese|gouda/.test(q)) return RESPONSES.restaurant;
  if (/museum|rijks|van gogh|nemo|anne frank|eye film|artis|zoo/.test(q)) return RESPONSES.museum;
  if (/weather|rain|temperature|climate|season|cold|warm|summer|winter|spring|autumn/.test(q)) return RESPONSES.weather;
  if (/canal|boat|cruise|water|ij ferry|barge/.test(q)) return RESPONSES.canal;
  if (/bike|cycling|cycle|bicycle|cargo bike|macbike/.test(q)) return RESPONSES.cycling;
  if (/nightlife|night|bar|club|evening|music|concert|paradiso|leidseplein/.test(q)) return RESPONSES.nightlife;
  if (/transport|tram|metro|train|schiphol|airport|eurostar|bus|travel|get there|getting there/.test(q)) return RESPONSES.transport;
  if (/hotel|stay|accommodation|where to stay|jordaan|de pijp|museumkwartier|pulitzer/.test(q)) return RESPONSES.hotel;
  if (/pillow|pillow fight|vondelpark/.test(q)) return RESPONSES.pillow;
  if (/tulip|keukenhof|flower|bloom/.test(q)) return RESPONSES.tulip;
  if (/king|koningsdag|king's day|orange/.test(q)) return RESPONSES.kingday;
  if (/hello|hi|hey|good morning|good afternoon|greetings/.test(q)) return RESPONSES.greet;
  return RESPONSES.default;
}

const SUGGESTIONS = ['Best restaurants?', 'Free museums?', 'Canal cruises?', 'Getting there?', 'Tulip season?'];

export default function ConciergeBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: RESPONSES.greet, id: 0 }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [idCounter, setIdCounter] = useState(1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 60);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, messages]);

  const send = (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed) return;
    const userMsg = { role: 'user', text: trimmed, id: idCounter };
    setMessages(m => [...m, userMsg]);
    setInput('');
    setIdCounter(c => c + 2);
    setTyping(true);
    setTimeout(() => {
      const botText = getResponse(trimmed);
      setMessages(m => [...m, { role: 'bot', text: botText, id: idCounter + 1 }]);
      setTyping(false);
    }, 900 + Math.random() * 600);
  };

  const handleKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };

  return (
      <>
        {/* Floating button */}
        <div className="fixed bottom-6 right-6 z-50">
          <AnimatePresence>
            {!open && (
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    onClick={() => setOpen(true)}
                    className="relative w-14 h-14 bg-navy border border-gold/40 shadow-[0_4px_24px_rgba(26,33,51,0.45)] flex items-center justify-center group hover:bg-gold transition-colors duration-300"
                >
                  <MessageCircle className="w-6 h-6 text-gold group-hover:text-navy transition-colors" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-gold rounded-full animate-pulse" />
                </motion.button>
            )}
          </AnimatePresence>

          {/* Chat window */}
          <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.96 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="absolute bottom-0 right-0 w-[360px] sm:w-[400px] bg-white shadow-[0_16px_64px_rgba(26,33,51,0.22)] border border-navy/10 flex flex-col overflow-hidden"
                    style={{ height: '540px', maxHeight: '90vh' }}
                >
                  {/* Header */}
                  <div className="bg-navy px-5 py-4 flex items-center justify-between flex-shrink-0">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                        <span className="font-display text-base font-light text-white tracking-wide">Amsterdam Concierge</span>
                      </div>
                      <p className="text-[0.65rem] text-white/40 mt-0.5 tracking-wider uppercase">VEDT · Available Now</p>
                    </div>
                    <button onClick={() => setOpen(false)} className="text-white/40 hover:text-gold transition-colors">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.28 }}
                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          {msg.role === 'bot' && (
                              <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center flex-shrink-0 mr-2 mt-0.5">
                                <span className="font-display text-[0.55rem] font-bold text-gold">V</span>
                              </div>
                          )}
                          <div
                              className={`max-w-[82%] px-4 py-3 text-[0.82rem] leading-relaxed ${
                                  msg.role === 'user'
                                      ? 'bg-navy text-white'
                                      : 'bg-cream text-foreground border border-navy/8'
                              }`}
                          >
                            {msg.text}
                          </div>
                        </motion.div>
                    ))}

                    {typing && (
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                            <span className="font-display text-[0.55rem] font-bold text-gold">V</span>
                          </div>
                          <div className="bg-cream border border-navy/8 px-4 py-3 flex gap-1.5">
                            {[0, 1, 2].map(i => (
                                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                            ))}
                          </div>
                        </div>
                    )}
                    <div ref={bottomRef} />
                  </div>

                  {/* Suggestions */}
                  <div className="px-4 pb-2 flex gap-2 overflow-x-auto flex-shrink-0">
                    {SUGGESTIONS.map(s => (
                        <button
                            key={s}
                            onClick={() => send(s)}
                            className="flex-shrink-0 text-[0.62rem] font-semibold tracking-wider uppercase border border-gold/40 text-gold px-3 py-1.5 hover:bg-gold hover:text-navy transition-colors"
                        >
                          {s}
                        </button>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="px-4 pb-4 flex gap-2 flex-shrink-0">
                    <input
                        ref={inputRef}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKey}
                        placeholder="Ask about Amsterdam..."
                        className="flex-1 border border-navy/15 px-4 py-2.5 text-[0.83rem] outline-none focus:border-gold transition-colors bg-cream placeholder:text-muted-foreground/60"
                    />
                    <button
                        onClick={() => send()}
                        disabled={!input.trim()}
                        className="w-10 h-10 bg-gold flex items-center justify-center hover:bg-gold-light disabled:opacity-40 transition-colors flex-shrink-0"
                    >
                      <Send className="w-4 h-4 text-navy" />
                    </button>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </>
  );
}