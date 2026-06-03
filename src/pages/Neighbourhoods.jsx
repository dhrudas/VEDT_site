import React from 'react';
import PageStrip from '../components/shared/PageStrip';
import SectionHeader from '../components/shared/SectionHeader';
import RevealCard from '../components/shared/RevealCard';

const IMG_JORDAAN = 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80&auto=format&fit=crop';
const IMG_DEPIJP = 'https://images.unsplash.com/photo-1529688499929-10a441441a09?w=800&q=80&auto=format&fit=crop';
const IMG_MUSEUM = 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800&q=80&auto=format&fit=crop';
const IMG_NOORD = 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80&auto=format&fit=crop';

const neighbourhoods = [
  { name: 'The Jordaan', img: IMG_JORDAAN, tag: 'All Tiers', note: 'Hidden courtyards, independent cafés, the Anne Frank House. The most storied neighbourhood.' },
  { name: 'De Pijp', img: IMG_DEPIJP, tag: 'Budget · Explorer', note: 'Albert Cuyp Market, multicultural food scene, authentic energy. Where Amsterdam families actually live.' },
  { name: 'Museumkwartier', img: IMG_MUSEUM, tag: 'Refined · Luxury', note: 'Rijksmuseum, Van Gogh Museum, Vondelpark — all within 5 minutes. The ideal base.' },
  { name: 'Amsterdam Noord', img: IMG_NOORD, tag: 'Explorer · Discoverer', note: 'The creative frontier. Free ferry, NDSM wharf, the EYE Film Museum. Open spaces.' },
];

const details = [
  { name: 'The Jordaan', tagline: 'Best for: History-lovers, art seekers, romantic canals', text: 'Amsterdam\'s most picturesque neighbourhood. 17th-century canal houses lean gently over quiet waterways, independent galleries fill converted warehouses.', highlights: ['Anne Frank House (book weeks ahead, ages 10+)', 'Westerkerk tower — panoramic city views', 'De Looier antique market — Saturday afternoons', 'Jordaan Festival — free outdoor music every September'], tier: 'Budget Explorer · Refined Discoverer · Connoisseur' },
  { name: 'Museumkwartier', tagline: 'Best for: Culture, parks, luxury hotels, museum access', text: 'Amsterdam\'s cultural powerhouse. Your children walk 3 minutes to the Rijksmuseum (FREE under-18), 5 minutes to Van Gogh Museum (FREE under-18), and 7 minutes to Vondelpark.', highlights: ['Rijksmuseum — free for every child under 18', 'Van Gogh Museum — free for every child under 18', 'Vondelpark — pillow fight HQ each April', 'Concertgebouw — family concerts every Sunday morning'], tier: 'Refined Discoverer · Connoisseur' },
  { name: 'De Pijp', tagline: 'Best for: Authentic Amsterdam, markets, multicultural food', text: 'Known as "the Paris of Amsterdam" — alive with markets, cafés, and the energy of a neighbourhood that hasn\'t been polished for tourists.', highlights: ['Albert Cuyp Market — Europe\'s longest outdoor market', 'Foodhallen — 21 food stalls under one roof', 'Sarphatipark — quiet, local, relief from tourist crowds', 'Heineken Experience — for parents'], tier: 'Free Spirit · Budget Explorer' },
  { name: 'Amsterdam Noord', tagline: 'Best for: Creative adventures, open space, alternative Amsterdam', text: 'Cross the IJ on the free ferry from Central Station and step into a completely different Amsterdam. Noord is where artists, architects, and families who know better all live.', highlights: ['Free IJ Ferry — 24 hours, no ticket needed', 'EYE Film Museum — weekend children\'s screenings', 'NDSM Wharf — street art, skate park, open markets', 'A\'DAM Tower — lookout and swing over the edge (13+)'], tier: 'Free Spirit · Budget Explorer · Refined Discoverer' },
];

export default function Neighbourhoods() {
  return (
    <div>
      <PageStrip
        label="VEDT Amsterdam · Where to Stay"
        title="Amsterdam's"
        titleEm="Neighbourhoods"
        subtitle="Each quarter of the city tells a different family story."
      />

      <section className="py-16 md:py-20 px-4 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Where to Stay"
            title="Amsterdam's"
            titleEm="family neighbourhoods"
            description="The city's four distinct quarters each offer a different family experience."
          />

          {/* Image Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {neighbourhoods.map((n, i) => (
              <RevealCard key={n.name} delay={i * 0.1}>
                <div className="group relative aspect-[3/4] rounded-md overflow-hidden cursor-pointer">
                  <img src={n.img} alt={n.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 pt-16 bg-gradient-to-t from-navy/92 to-transparent translate-y-12 group-hover:translate-y-0 transition-transform duration-400">
                    <h3 className="font-display text-xl text-white mb-1">{n.name}</h3>
                    <p className="text-[0.8rem] text-white/72 leading-relaxed">{n.note}</p>
                    <span className="inline-block mt-2 text-[0.6rem] font-medium tracking-wider uppercase bg-gold/30 text-gold-light px-2.5 py-0.5 rounded-full">{n.tag}</span>
                  </div>
                </div>
              </RevealCard>
            ))}
          </div>

          {/* Detail Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {details.map((d, i) => (
              <RevealCard key={d.name} delay={i * 0.08}>
                <div className="bg-white rounded-lg p-6 border border-navy/8">
                  <h3 className="font-display text-xl text-navy mb-1">{d.name}</h3>
                  <div className="text-[0.68rem] font-medium tracking-wider uppercase text-gold mb-3">{d.tagline}</div>
                  <p className="text-sm leading-relaxed text-muted-foreground mb-4">{d.text}</p>
                  <ul className="space-y-1.5">
                    {d.highlights.map(h => (
                      <li key={h} className="flex gap-2 text-sm text-foreground/80">
                        <span className="text-gold flex-shrink-0">→</span> {h}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-block mt-4 text-[0.62rem] font-medium tracking-wider uppercase px-3 py-1 rounded-full border border-gold/35 text-gold">
                    {d.tier}
                  </span>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}