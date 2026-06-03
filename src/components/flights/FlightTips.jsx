import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

const tips = [
  { icon: 'CAL', title: 'Book 6–8 Weeks Ahead', text: 'For the cheapest fares, book Tuesday or Wednesday departures 6–8 weeks before travel. Prices spike inside 2 weeks.' },
  { icon: 'TIME', title: 'Fly Early or Late', text: 'The 06:30 and 21:00 departures are consistently 20–40% cheaper than midday flights. Worth the early alarm.' },
  { icon: 'BAG', title: 'Hand Luggage Only', text: 'A family of 4 saves £80–£120 return by going cabin-bag only. Amsterdam shops sell everything you might have forgotten.' },
  { icon: 'ALT', title: 'Set Price Alerts', text: 'Use Skyscanner or Google Flights to set alerts. Prices fluctuate daily — a £30 fare today could be £90 tomorrow.' },
  { icon: 'SCH', title: 'Avoid School Holidays', text: 'February half-term, Easter, and summer holidays see fares double. If flexible, the first week of September is golden.' },
  { icon: 'TRN', title: 'Consider the Train', text: 'Eurostar is often price-competitive when you factor in no checked luggage fees, no airport transfers, and no security queues.' },
];

export default function FlightTips() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-12 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Insider Tips"
          title="How to fly"
          titleEm="for less"
          description="VEDT's family flight hacks — tested on thousands of bookings."
          center
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {tips.map((tip, i) => (
            <RevealCard key={tip.title} delay={i * 0.08}>
              <div className="p-6 border-l-[3px] border-gold bg-white rounded-r-md hover:translate-x-1 transition-transform">
                <div className="inline-flex items-center justify-center w-10 h-10 border border-gold/30 mb-3">
                  <span className="font-display text-[0.55rem] font-semibold tracking-widest text-gold">{tip.icon}</span>
                </div>
                <h3 className="font-display text-xl text-navy mb-2">{tip.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{tip.text}</p>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}