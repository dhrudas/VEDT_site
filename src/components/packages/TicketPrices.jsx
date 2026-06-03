import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

// Typographic icon abbreviations instead of emojis
const tickets = [
  { abbr: 'RKS', name: 'Rijksmuseum', note: 'The Netherlands\' greatest museum. Rembrandt\'s Night Watch, Vermeer\'s Milkmaid, Delft Blue.', prices: [['Adults', '€22.50'], ['Under 18', 'FREE']], tags: ['Free Kids', 'Book Ahead', 'City Card'], isFree: true },
  { abbr: 'VGH', name: 'Van Gogh Museum', note: '200 paintings, 500 drawings — the world\'s largest Van Gogh collection, impeccably curated.', prices: [['Adults', '€25.00'], ['Under 18', 'FREE']], tags: ['Free Kids', 'Book Ahead', 'City Card'], isFree: true },
  { abbr: 'NMO', name: 'NEMO Science Museum', note: 'Five floors of hands-on experiments inside a ship-shaped building on the waterfront.', prices: [['Adults', '€17.50'], ['Children (4–17)', '€17.50'], ['Under 4', 'FREE']], tags: ['Toddler Free', 'City Card'] },
  { abbr: 'AFH', name: 'Anne Frank House', note: 'Intimate, powerful, and essential. Book several weeks in advance without exception.', prices: [['Adults', '€16.00'], ['Ages 10–17', '€8.00'], ['Under 10', 'FREE']], tags: ['Book Weeks Ahead'] },
  { abbr: 'ARZ', name: 'Artis Royal Zoo', note: 'Founded 1838 — Europe\'s most characterful zoo, with Victorian glasshouses and a butterfly pavilion.', prices: [['Adults', '€26.00'], ['Children (3–9)', '€22.00'], ['Under 3', 'FREE']], tags: ['City Card'] },
  { abbr: 'KKF', name: 'Keukenhof Gardens', note: '7 million bulbs in bloom across 32 hectares. March through May only. Sells out every year.', prices: [['Adults', '€20.00'], ['Children (4–11)', '€10.00'], ['Under 4', 'FREE']], tags: ['Mar–May Only', 'Pre-Book'] },
  { abbr: 'CCL', name: 'Canal Cruise (Group)', note: 'Classic 75-minute cruise through the UNESCO canal ring. Atmospheric and remarkably good value.', prices: [['Adults', '€18–€25'], ['Children (4–12)', '€9–€13'], ['Under 4', 'FREE']], tags: ['City Card'] },
  { abbr: 'BCY', name: 'Bike Hire (MacBike)', note: 'Per day. Cargo bikes, tandems, and e-bikes all available — the most Amsterdam experience possible.', prices: [['Adult (24h)', '€14.00'], ['Child (24h)', '€8.00'], ['Cargo bike (24h)', '€25.00']], tags: ['Family Friendly'] },
  { abbr: 'PLW', name: 'Annual Pillow Fight', note: 'Amsterdam\'s beloved annual pillow fight in Vondelpark. Entirely free. Bring a spare set of clothes.', prices: [['All ages', 'FREE'], ['Entry', 'FREE']], tags: ['Completely Free', 'Annual · Spring'], isFree: true, special: true },
];

const tagColors = {
  'Free Kids': 'bg-green-100 text-free-c',
  'Completely Free': 'bg-green-100 text-free-c',
  'Toddler Free': 'bg-blue-100 text-blue-700',
  'Family Friendly': 'bg-blue-100 text-blue-700',
  'Book Ahead': 'bg-amber-100 text-amber-800',
  'Book Weeks Ahead': 'bg-amber-100 text-amber-800',
  'Pre-Book': 'bg-amber-100 text-amber-800',
  'City Card': 'bg-gold/15 text-gold',
  'Mar–May Only': 'bg-blue-100 text-blue-700',
  'Annual · Spring': 'bg-blue-100 text-blue-700',
};

export default function TicketPrices() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-12 bg-soft">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Know Before You Go"
          title="Ticket Prices"
          titleEm="at a glance"
          description="Amsterdam rewards informed families. A full breakdown of admission costs — and every attraction your children enter completely free."
        />

        {/* Free Highlight Banner */}
        <RevealCard className="mt-10">
          <div className="bg-gradient-to-br from-free-c to-[#1a5c33] p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
            <div className="absolute -right-4 -top-4 font-display text-[9rem] font-semibold text-white/[0.05] leading-none select-none pointer-events-none">FREE</div>
            <div className="w-16 h-16 border-2 border-white/30 flex items-center justify-center flex-shrink-0">
              <span className="font-display text-lg font-semibold text-white tracking-widest">RKS</span>
            </div>
            <div className="relative z-10">
              <h3 className="font-display text-2xl font-light text-white mb-1">The Rijksmuseum is free for every child under 18</h3>
              <p className="text-sm text-white/75 leading-relaxed">One of the world's most important art collections admits every visitor under 18 completely free. Adults pay €22.50. The family treasure hunt booklets are free at reception.</p>
            </div>
            <div className="flex-shrink-0 bg-white/15 border-2 border-white/40 px-6 py-4 text-center relative z-10">
              <span className="font-display text-4xl font-light text-white block">€0</span>
              <small className="text-[0.6rem] tracking-widest uppercase text-white/60">Under 18 · Rijksmuseum</small>
            </div>
          </div>
        </RevealCard>

        {/* Tickets Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {tickets.map((t, i) => (
            <RevealCard key={t.name} delay={i * 0.05}>
              <div className={`border p-5 bg-white transition-all hover:-translate-y-1 hover:shadow-lg relative ${t.isFree ? 'border-free-c/25' : 'border-navy/9'} ${t.special ? 'border-dashed border-free-c/25 bg-cream/60' : ''}`}>
                {t.isFree && !t.special && (
                  <span className="absolute top-3 right-3 text-[0.55rem] font-semibold tracking-wider uppercase bg-green-100 text-free-c px-2 py-0.5">FREE KIDS</span>
                )}
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-3">
                  <span className="font-display text-[0.6rem] font-semibold tracking-widest text-gold">{t.abbr}</span>
                </div>
                <h4 className="font-display text-lg text-navy mb-1">{t.name}</h4>
                <p className="text-[0.78rem] text-muted-foreground leading-relaxed mb-3">{t.note}</p>
                <div className="space-y-1.5">
                  {t.prices.map(([label, val]) => (
                    <div key={label} className="flex justify-between text-[0.83rem]">
                      <span className="text-muted-foreground">{label}</span>
                      <span className={`font-semibold ${val === 'FREE' ? 'text-free-c' : 'text-navy'}`}>{val}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {t.tags.map(tag => (
                    <span key={tag} className={`text-[0.58rem] font-semibold tracking-wider uppercase px-2 py-0.5 ${tagColors[tag] || 'bg-muted text-muted-foreground'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealCard>
          ))}
        </div>

        {/* City Card Banner */}
        <RevealCard className="mt-6">
          <div className="bg-gradient-to-br from-navy to-[#243050] p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-light text-white mb-2">iAmsterdam City Card</h3>
              <p className="text-sm text-white/55 leading-relaxed">One card covers unlimited transport, 70+ museums and attractions. Children under four always travel free on all Dutch public transport.</p>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {[['24 Hours', '€65'], ['48 Hours', '€85'], ['72 Hours', '€105'], ['96 Hours', '€120']].map(([dur, prc]) => (
                <div key={dur} className="text-center bg-white/[0.05] border border-gold/20 px-4 py-3">
                  <div className="text-[0.58rem] tracking-widest uppercase text-gold mb-1">{dur}</div>
                  <div className="font-display text-2xl font-light text-white">{prc}</div>
                  <div className="text-[0.6rem] text-white/35">per adult</div>
                </div>
              ))}
            </div>
          </div>
        </RevealCard>
      </div>
    </section>
  );
}