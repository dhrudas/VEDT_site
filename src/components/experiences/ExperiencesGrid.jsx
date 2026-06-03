import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

const IMG_CRUISE = 'https://images.unsplash.com/photo-1548041421-f668e49c6a3b?w=700&q=80&auto=format&fit=crop';
const IMG_NEMO = 'https://images.unsplash.com/photo-1532094349884-543559196cf3?w=700&q=80&auto=format&fit=crop';
const IMG_TULIPS = 'https://images.unsplash.com/photo-1490750967868-88df5691cc73?w=700&q=80&auto=format&fit=crop';
const IMG_CHEESE = 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=700&q=80&auto=format&fit=crop';
const IMG_BIKES = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop';
const IMG_ZOO = 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=700&q=80&auto=format&fit=crop';
const IMG_WINDMILLS = 'https://images.unsplash.com/photo-1466029463090-773ffe38baa4?w=700&q=80&auto=format&fit=crop';
const IMG_PARK = 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=700&q=80&auto=format&fit=crop';

const experiences = [
  { img: IMG_CRUISE, age: 'Ages 3+ · All tiers', name: 'Sunset Canal Cruise', desc: 'Float through the UNESCO canal ring as Amsterdam glows gold. Kids captain the boat under supervision.', price: 'From €18 / person', free: 'Under 4 FREE' },
  { img: IMG_NEMO, age: 'Ages 5–14 · Budget+', name: 'NEMO Science Playground', desc: 'Five floors of hands-on experiments. The roof terrace is Amsterdam\'s best-kept secret picnic spot.', price: '€17.50 adults', free: 'Under 4 FREE' },
  { img: IMG_TULIPS, age: 'All ages · Spring only', name: 'Keukenhof Flower Fields', desc: '7 million bulbs in bloom across 32 hectares. A landscape so surreal children ask if it\'s painted.', price: '€20 adults · €10 ages 4–11', free: 'Under 4 FREE' },
  { img: IMG_CHEESE, age: 'Ages 6+ · Moderate+', name: 'Cheese Workshop, Gouda', desc: 'Make, mould, and stamp your own Gouda wheel. Your children will insist on making cheese for life.', price: 'From €28 / person' },
  { img: IMG_BIKES, age: 'Ages 4+ · All tiers', name: 'Family Bike Discovery', desc: 'Join Amsterdam\'s 2 million daily cycling journeys. Cargo bikes for toddlers, tandems for hesitant riders.', price: 'From €8 / child / day' },
  { img: IMG_ZOO, age: 'Ages 2+ · Budget+', name: 'Artis Royal Zoo', desc: 'Europe\'s most beautiful zoo — founded 1838 — with Victorian glasshouses and a butterfly pavilion.', price: '€26 adults · €22 children 3–9', free: 'Under 3 FREE' },
  { img: IMG_WINDMILLS, age: 'All ages · All tiers', name: 'Windmill Day Trip', desc: 'Zaanse Schans: working 17th-century windmills, wooden shoe workshops, and smoked fish. A living Dutch postcard.', price: 'Train €4 return', free: 'Village entry FREE' },
  { img: IMG_PARK, age: 'All ages · All tiers', name: 'Vondelpark & Pillow Fight HQ', desc: 'Amsterdam\'s beloved park — home to the annual pillow fight, open-air theatre, and the city\'s best poffertjes stall.', price: '', free: 'Always FREE' },
];

export default function ExperiencesGrid() {
  return (
      <section className="py-16 md:py-20 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Curated Experiences" title="More Amsterdam" titleEm="memories" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
            {experiences.map((exp, i) => (
                <RevealCard key={exp.name} delay={i * 0.06}>
                  <div className="group rounded-lg overflow-hidden bg-cream border border-navy/7 hover:-translate-y-1.5 hover:shadow-xl transition-all">
                    <div className="h-44 overflow-hidden">
                      <img src={exp.img} alt={exp.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <div className="text-[0.6rem] font-medium tracking-[0.15em] uppercase text-gold mb-1">{exp.age}</div>
                      <h3 className="font-display text-lg text-navy mb-1.5">{exp.name}</h3>
                      <p className="text-[0.81rem] leading-relaxed text-muted-foreground mb-2">{exp.desc}</p>
                      <p className="text-[0.78rem] font-medium text-navy">
                        {exp.price}{exp.price && exp.free ? ' · ' : ''}{exp.free && <span className="text-free-c font-semibold">{exp.free.replace('★', '').trim()}</span>}
                      </p>
                    </div>
                  </div>
                </RevealCard>
            ))}
          </div>
        </div>
      </section>
  );
}