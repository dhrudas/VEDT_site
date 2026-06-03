import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, RefreshCw, CheckCircle } from 'lucide-react';

// State machine definition
const FLOW = {
  start: {
    question: 'Which package tier aligns most closely with your family\'s vision for Amsterdam?',
    options: [
      { label: 'The Free Spirit', value: 'free-spirit', hint: 'From £65 per person per day' },
      { label: 'The Budget Explorer', value: 'budget-explorer', hint: 'From £120 per person per day' },
      { label: 'The Refined Discoverer', value: 'refined-discoverer', hint: 'From £280 per person per day' },
      { label: 'The Connoisseur', value: 'connoisseur', hint: 'From £750 per person per day' },
    ],
    next: (v) => `q1_${v}`,
  },

  'q1_free-spirit': {
    question: 'How would you primarily like to discover Amsterdam?',
    options: [
      { label: 'Cycling everywhere — the true Amsterdam way', value: 'cycling' },
      { label: 'Walking the canals and exploring on foot', value: 'walking' },
      { label: 'Mix of public transport and walks', value: 'mixed' },
    ],
    next: () => 'q2_free-spirit',
  },
  'q2_free-spirit': {
    question: 'Which free experience matters most to your family?',
    options: [
      { label: 'Rijksmuseum and Van Gogh Museum — world-class, free for children', value: 'museums' },
      { label: 'Vondelpark and canal walks — outdoor Amsterdam', value: 'outdoors' },
      { label: 'Markets and authentic Dutch food culture', value: 'food' },
    ],
    next: () => 'summary',
  },

  'q1_budget-explorer': {
    question: 'How long are you planning to stay in Amsterdam?',
    options: [
      { label: '2–3 nights — a long weekend', value: 'short' },
      { label: '4–5 nights — a proper city break', value: 'medium' },
      { label: '6–7 nights — an immersive week', value: 'long' },
    ],
    next: () => 'q2_budget-explorer',
  },
  'q2_budget-explorer': {
    question: 'Which add-on would enhance your experience most?',
    options: [
      { label: 'Day trip to Keukenhof tulip gardens or Zaanse Schans windmills', value: 'daytrip' },
      { label: 'iAmsterdam City Card for unlimited museum and transport access', value: 'citycard' },
      { label: 'Family bike hire for the entire duration of the stay', value: 'bikes' },
    ],
    next: () => 'summary',
  },

  'q1_refined-discoverer': {
    question: 'What type of accommodation experience do you prefer?',
    options: [
      { label: 'Boutique canal-side hotel in the UNESCO historic ring', value: 'boutique' },
      { label: 'Design hotel in Museumkwartier — near all major museums', value: 'design' },
      { label: 'Characterful Jordaan neighbourhood property', value: 'jordaan' },
    ],
    next: () => 'q2_refined-discoverer',
  },
  'q2_refined-discoverer': {
    question: 'Which signature experience would define your Amsterdam visit?',
    options: [
      { label: 'Private guided canal boat tour with commentary', value: 'canal' },
      { label: 'After-hours Rijksmuseum access — just your family', value: 'rijks' },
      { label: 'Dutch cheese-making masterclass in Gouda', value: 'cheese' },
    ],
    next: () => 'summary',
  },

  'q1_connoisseur': {
    question: 'For a Connoisseur experience, how would you prefer to arrive in Amsterdam?',
    options: [
      { label: 'Private helicopter transfer from Schiphol Airport', value: 'helicopter' },
      { label: 'Eurostar First Class from London St Pancras — seamless and refined', value: 'eurostar' },
      { label: 'Private chauffeur from any UK regional airport', value: 'chauffeur' },
    ],
    next: () => 'q2_connoisseur',
  },
  'q2_connoisseur': {
    question: 'Which bespoke experience would complete your itinerary?',
    options: [
      { label: 'Sunrise Keukenhof access before public opening — private tour', value: 'keukenhof' },
      { label: 'Michelin-starred dinner at Ciel Bleu — panoramic city views', value: 'ciel-bleu' },
      { label: 'Private 17th-century canal house with dedicated butler service', value: 'canal-house' },
    ],
    next: () => 'summary',
  },
};

function generateSummary(answers) {
  const tier = answers[0]?.value;
  const summaries = {
    'free-spirit': {
      title: 'The Free Spirit — Your Curated Summary',
      accent: '#4a7c6f',
      items: [
        'Rijksmuseum and Van Gogh Museum — completely free for every visitor under 18',
        'Vondelpark — Amsterdam\'s living room, always free',
        'VEDT self-guided family cycling and walking trails',
        `Transport: ${answers[1]?.value === 'cycling' ? 'Family bike hire recommended — the quintessential Amsterdam experience' : answers[1]?.value === 'walking' ? 'OV-chipkaart for trams when needed — €8.50/day' : 'OV-chipkaart public transport pass — €8.50 per day'}`,
        `Focus: ${answers[2]?.value === 'museums' ? 'World-class art and culture — three visits to the Rijksmuseum not unusual' : answers[2]?.value === 'outdoors' ? 'Amsterdam\'s canal ring, parks, and the IJ waterfront at golden hour' : 'Albert Cuyp Market, stroopwafels, Foodhallen — authentic Dutch food culture'}`,
        'Estimated investment: £65–£95 per person per day',
      ],
    },
    'budget-explorer': {
      title: 'The Budget Explorer — Your Curated Summary',
      accent: '#3d7a9e',
      items: [
        '3-star family apartment in the Jordaan or De Pijp neighbourhood',
        'iAmsterdam City Card — 70+ attractions, unlimited transport',
        'Rijksmuseum and Van Gogh Museum free for all children under 18',
        `Duration: ${answers[1]?.value === 'short' ? 'Long weekend — Friday to Monday, 3 nights' : answers[1]?.value === 'medium' ? '4–5 nights — the ideal Amsterdam duration for families' : '6–7 nights — enough time to feel genuinely at home in the city'}`,
        `Signature add-on: ${answers[2]?.value === 'daytrip' ? 'Day trip to Zaanse Schans — living windmills and wooden shoe workshops' : answers[2]?.value === 'citycard' ? 'iAmsterdam City Card — saves a family of four over €180 in total' : 'Full-duration family bike hire — the most Amsterdam way to explore'}`,
        'Estimated investment: £120–£160 per person per day',
      ],
    },
    'refined-discoverer': {
      title: 'The Refined Discoverer — Your Curated Summary',
      accent: '#b8973a',
      items: [
        `Accommodation: ${answers[1]?.value === 'boutique' ? 'Boutique canal-side hotel within the UNESCO World Heritage ring' : answers[1]?.value === 'design' ? 'Design hotel in Museumkwartier — 3 minutes from the Rijksmuseum' : 'Characterful Jordaan neighbourhood property — most romantic quarter of Amsterdam'}`,
        'Private guided canal boat tour — the most elegant way to see the city',
        'Rijksmuseum access — free for all children, guided for adults',
        `Signature experience: ${answers[2]?.value === 'canal' ? 'Private canal boat tour with dedicated guide and champagne service' : answers[2]?.value === 'rijks' ? 'After-hours Rijksmuseum — the Night Watch with your family alone' : 'Gouda cheese-making masterclass — your own wheels to take home'}`,
        'VEDT 24/7 concierge available throughout your stay',
        'Estimated investment: £280–£380 per person per day',
      ],
    },
    'connoisseur': {
      title: 'The Connoisseur — Your Bespoke Summary',
      accent: '#7c4a8a',
      items: [
        'Private 17th-century canal house with dedicated butler service',
        `Arrival: ${answers[1]?.value === 'helicopter' ? 'Private helicopter transfer from Schiphol — 8 minutes, unforgettable arrival' : answers[1]?.value === 'eurostar' ? 'Eurostar First Class from London St Pancras — the most refined journey' : 'Private chauffeur from your UK airport of departure'}`,
        'Rijksmuseum after-hours private family tour — the collection entirely yours',
        `Signature experience: ${answers[2]?.value === 'keukenhof' ? 'Sunrise Keukenhof before public opening — 7 million tulips and complete privacy' : answers[2]?.value === 'ciel-bleu' ? 'Michelin-starred dinner at Ciel Bleu, Hotel Okura — panoramic Amsterdam at dusk' : 'Private 17th-century canal house — history, luxury, and complete exclusivity'}`,
        'Personal VEDT family concierge embedded throughout the entire stay',
        'Estimated investment: £750–£1,400+ per person per day',
      ],
    },
  };
  return summaries[tier] || summaries['refined-discoverer'];
}

export default function PackageCustomizer() {
  const [step, setStep] = useState('start');
  const [answers, setAnswers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [done, setDone] = useState(false);
  const [summary, setSummary] = useState(null);
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    // Load initial question
    pushBot(FLOW.start.question, FLOW.start.options);
  }, []);

  useEffect(() => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 80);
  }, [messages, typing]);

  function pushBot(text, options = null) {
    setTyping(true);
    setTimeout(() => {
      setMessages(m => [...m, { role: 'bot', text, options, id: Date.now() }]);
      setTyping(false);
    }, 700);
  }

  function handleOption(option) {
    // Add user message
    setMessages(m => [...m, { role: 'user', text: option.label, id: Date.now() }]);
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    const currentFlow = FLOW[step];
    const nextStep = currentFlow.next(option.value);

    if (nextStep === 'summary') {
      const sum = generateSummary(newAnswers);
      setSummary(sum);
      pushBot('Thank you. Based on your selections, I have prepared your personalised VEDT Amsterdam itinerary summary below. Your VEDT concierge will contact you within 24 hours to begin the detailed planning process.');
      setTimeout(() => setDone(true), 1500);
    } else {
      setStep(nextStep);
      const nextFlow = FLOW[nextStep];
      if (nextFlow) {
        pushBot(nextFlow.question, nextFlow.options);
      }
    }
  }

  function reset() {
    setStep('start');
    setAnswers([]);
    setMessages([]);
    setDone(false);
    setSummary(null);
    pushBot(FLOW.start.question, FLOW.start.options);
  }

  const lastBotMessage = [...messages].reverse().find(m => m.role === 'bot' && m.options);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="border border-navy/10 bg-white shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-navy px-6 py-5 flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl font-light text-white">Package Customiser</h3>
            <p className="text-[0.65rem] text-white/40 tracking-widest uppercase mt-0.5">VEDT · Interactive Journey Builder</p>
          </div>
          <button onClick={reset} className="text-white/30 hover:text-gold transition-colors flex items-center gap-1.5 text-[0.68rem] tracking-wider uppercase">
            <RefreshCw className="w-3.5 h-3.5" /> Reset
          </button>
        </div>

        {/* Chat area */}
        <div className="h-[380px] overflow-y-auto px-5 py-5 space-y-4 bg-cream/30">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {msg.role === 'bot' && (
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-display text-[0.52rem] font-bold text-gold">V</span>
                  </div>
                  <div className="bg-white border border-navy/8 px-4 py-3 text-[0.85rem] leading-relaxed text-navy max-w-[88%]">
                    {msg.text}
                  </div>
                </div>
              )}
              {msg.role === 'user' && (
                <div className="flex justify-end">
                  <div className="bg-navy text-white px-4 py-3 text-[0.85rem] leading-relaxed max-w-[80%]">
                    {msg.text}
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {typing && (
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-navy flex items-center justify-center flex-shrink-0">
                <span className="font-display text-[0.52rem] font-bold text-gold">V</span>
              </div>
              <div className="bg-white border border-navy/8 px-4 py-3 flex gap-1.5">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/60 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Options */}
        {!done && lastBotMessage?.options && (
          <div className="px-5 py-4 border-t border-navy/8 bg-white space-y-2">
            {lastBotMessage.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleOption(opt)}
                className="w-full text-left px-4 py-3 border border-navy/12 hover:border-gold hover:bg-gold/[0.04] transition-all text-[0.83rem] text-navy group"
              >
                <div className="flex items-center justify-between">
                  <span>{opt.label}</span>
                  {opt.hint && <span className="text-[0.68rem] text-muted-foreground group-hover:text-gold transition-colors">{opt.hint}</span>}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Summary Block */}
      <AnimatePresence>
        {done && summary && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 border-l-4 bg-white shadow-lg overflow-hidden"
            style={{ borderLeftColor: summary.accent }}
          >
            <div className="px-6 py-5 border-b border-navy/8 flex items-center gap-3">
              <CheckCircle className="w-5 h-5" style={{ color: summary.accent }} />
              <h4 className="font-display text-lg text-navy">{summary.title}</h4>
            </div>
            <div className="px-6 py-5">
              <ul className="space-y-3">
                {summary.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[0.85rem] leading-relaxed text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: summary.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <a
                  href="mailto:hello@vedt.com"
                  className="bg-navy text-white px-6 py-2.5 text-[0.72rem] font-semibold tracking-[0.15em] uppercase hover:bg-gold hover:text-navy transition-all"
                >
                  Confirm My Itinerary
                </a>
                <button
                  onClick={reset}
                  className="border border-navy/20 text-navy px-6 py-2.5 text-[0.72rem] font-semibold tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-all"
                >
                  Start Over
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}