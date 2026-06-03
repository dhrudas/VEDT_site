import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

const cards = [
  {
    icon: 'FLT', title: 'Getting There',
    items: [
      ['From London:', 'Eurostar 3h55 — no airport stress, city-centre arrival'],
      ['From UK airports:', 'Under 1 hour (British Airways, easyJet, KLM daily)'],
      ['Schiphol to Centre:', 'Direct train, 17 minutes, every 10 minutes'],
      ['Family tip:', 'Children under 4 travel FREE on all Dutch transport'],
      ['On arrival:', 'Trams run to Museumkwartier and Jordaan directly'],
    ],
  },
  {
    icon: 'CAL', title: 'Best Times to Visit',
    items: [
      ['Spring (Mar–May):', 'Tulip season, Keukenhof, AND the annual pillow fight'],
      ['Summer (Jun–Aug):', 'Long days, canal swimming, outdoor festivals'],
      ['Autumn (Sep–Nov):', 'Fewer crowds, museum queues vanish, golden light'],
      ['Winter (Dec):', 'Ice skating, Christmas markets, Amsterdam Light Festival'],
      ['King\'s Day (Apr 27):', 'Book months in advance — the city\'s most joyful day'],
    ],
  },
  {
    icon: 'TIP', title: 'Family Tips',
    items: [
      ['', 'Rijksmuseum & Van Gogh are FREE for under-18s'],
      ['', 'Book Anne Frank House 4–6 weeks in advance'],
      ['', 'Cargo bikes fit up to 3 children — hire from MacBike'],
      ['', 'Poffertjes at any market stall = instant child happiness'],
      ['', 'Pillow fight: Vondelpark, first Saturday of April'],
      ['', 'iAmsterdam City Card saves a family of 4 over €180'],
    ],
  },
  {
    icon: 'WTH', title: 'Weather & Packing',
    items: [
      ['', 'Average summer: 20–24°C, rarely above 28°C'],
      ['', 'Rain is possible year-round — pack one waterproof each'],
      ['', 'Flat terrain means standard pushchairs work perfectly'],
      ['', 'Spring: layers essential — beautiful but unpredictable'],
      ['', 'Pillow fight: bring a change of clothes'],
    ],
  },
  {
    icon: 'FOD', title: 'Family Food',
    items: [
      ['Must-try:', 'Stroopwafels, poffertjes, herring, Gouda, bitterballen'],
      ['Budget eat:', 'FEBO automat wall — warm snacks from little doors since 1941'],
      ['Lunch:', 'Foodhallen in De Pijp — 21 stalls under one roof'],
      ['Market:', 'Albert Cuyp — family lunch for €15 total'],
      ['Fine dining:', 'Restaurant Rijks — superb children\'s menu'],
    ],
  },
  {
    icon: 'INF', title: 'Good to Know',
    items: [
      ['', 'Amsterdam UMC is a world-class hospital'],
      ['', 'Pharmacies (Apotheek) on every high street — all speak English'],
      ['', 'Tap water is among Europe\'s cleanest'],
      ['Emergency:', '112 | Non-emergency police: 0900-8844'],
      ['', 'Almost all attractions are pushchair-accessible'],
    ],
  },
];

export default function PracticalInfo() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="Family Travel Intel" title="Everything you need to" titleEm="know first" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {cards.map((card, i) => (
            <RevealCard key={card.title} delay={i * 0.08}>
              <div className="p-6 border-l-[3px] border-gold bg-cream rounded-r-md hover:translate-x-1 transition-transform h-full">
                <div className="inline-flex items-center justify-center w-10 h-10 border border-gold/30 mb-3">
                  <span className="font-display text-[0.55rem] font-semibold tracking-widest text-gold">{card.icon}</span>
                </div>
                <h3 className="font-display text-xl text-navy mb-3">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map(([strong, text], j) => (
                    <li key={j} className="text-sm leading-relaxed text-muted-foreground">
                      {strong && <strong className="text-navy">{strong} </strong>}{text}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}