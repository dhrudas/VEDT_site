import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

const events = [
  { month: 'March–May', name: 'Tulip Season & Keukenhof', desc: 'The world\'s most spectacular floral display. Book Keukenhof early — it sells out every year without exception.', tag: 'Ticketed · From €10', tagColor: 'bg-amber-100 text-amber-800' },
  { month: 'April · First Saturday', name: 'Annual Children\'s Pillow Fight', desc: 'Amsterdam\'s most joyful free event. Vondelpark and Museumplein — no tickets required. Pure, unapologetic joy.', tag: 'Completely Free', tagColor: 'bg-green-100 text-free-c', special: true },
  { month: 'April 27', name: 'King\'s Day (Koningsdag)', desc: 'The entire city turns orange. Street markets, live music, canal boat parties, and children\'s flea markets citywide.', tag: 'Street Festival · Free', tagColor: 'bg-green-100 text-free-c' },
  { month: 'June–August', name: 'Summer Canal Season', desc: 'Long evenings, outdoor cinema, canal swimming, and open-air concerts in Vondelpark every Sunday.', tag: 'Mostly Free', tagColor: 'bg-green-100 text-free-c' },
  { month: 'November', name: 'Sinterklaas Arrives', desc: 'The Dutch St Nicholas sails into Amsterdam by historic steamboat in mid-November — a spectacular civic celebration.', tag: 'Free to Watch', tagColor: 'bg-green-100 text-free-c' },
  { month: 'November–January', name: 'Amsterdam Light Festival', desc: 'World-class light installations illuminate the canals for seven weeks. Walk or take a boat through the exhibits.', tag: 'Walk Free · Boat from €20', tagColor: 'bg-amber-100 text-amber-800' },
];

export default function SeasonalEvents() {
  return (
      <section className="py-16 md:py-20 px-4 md:px-12 bg-soft">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Throughout the Year" title="Amsterdam's" titleEm="family calendar" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {events.map((evt, i) => (
                <RevealCard key={evt.name} delay={i * 0.08}>
                  <div className={`bg-white p-6 rounded-lg border hover:-translate-y-1 hover:shadow-lg transition-all ${evt.special ? 'border-lux-c/30 bg-gradient-to-br from-[#2a1066]/[0.04] to-white' : 'border-navy/8'}`}>
                    <div className="text-[0.62rem] font-medium tracking-[0.2em] uppercase text-gold mb-1.5">{evt.month}</div>
                    <h3 className="font-display text-xl text-navy mb-2">{evt.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{evt.desc}</p>
                    <span className={`inline-block mt-3 text-[0.6rem] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${evt.tagColor}`}>
                  {evt.tag}
                </span>
                  </div>
                </RevealCard>
            ))}
          </div>
        </div>
      </section>
  );
}