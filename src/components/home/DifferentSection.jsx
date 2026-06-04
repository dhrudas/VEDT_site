import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';

const cards = [
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75&auto=format&fit=crop',
    title: 'The City IS the Ride',
    text: 'No other capital lets the whole family cycle safely from museum to market to pancake house. 800km of dedicated bike lanes.',
    vs: 'vs Paris — bike lanes feel like an afterthought',
    tag: 'Cycling',
  },
  {
    img: 'https://images.unsplash.com/photo-1652879490258-736dd06ec0dd?w=600&q=75&auto=format&fit=crop',
    title: 'Human Scale',
    text: "Rome requires 25,000 steps a day. Amsterdam's entire historic centre fits inside a 3km half-moon. Little legs keep up.",
    vs: "vs Rome — you'll carry someone by 2pm",
    tag: 'Walkability',
  },
  {
    img: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600&q=75&auto=format&fit=crop',
    title: 'Museums Built for Curiosity',
    text: 'The Rijksmuseum has family treasure hunts built into its galleries — and it\'s completely free for under-18s.',
    vs: 'vs London — spread across a city, not a neighbourhood',
    tag: 'Culture',
  },
  {
    img: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&q=75&auto=format&fit=crop',
    title: 'Rain-Proof Adventures',
    text: 'Canal boats, covered markets, world-class museums, indoor food halls — a rainy Amsterdam day is never wasted.',
    vs: 'vs Barcelona — a bad weather day is genuinely bad',
    tag: 'All-Weather',
  },
  {
    img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=600&q=75&auto=format&fit=crop',
    title: 'Budget Goes Further',
    text: 'The iAmsterdam City Card bundles 70+ attractions. Vondelpark picnics cost €8 for a family of four.',
    vs: 'vs Paris — budget family travel is an oxymoron',
    tag: 'Value',
  },
  {
    img: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=75&auto=format&fit=crop',
    title: 'Everyone Speaks English',
    text: 'Amsterdam has 95%+ English fluency — the highest in continental Europe. Order stroopwafels with confidence.',
    vs: 'vs most of Europe — barrier-free exploration',
    tag: 'Language',
  },
];

export default function DifferentSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 md:py-28 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Amsterdam vs The Rest"
          title="Why not Paris? Why not"
          titleEm="Rome?"
          description="Every European capital competes for your family holiday. Here is why Amsterdam wins — especially with children in tow."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65, delay: i * 0.08 }}
              className="group relative overflow-hidden cursor-default"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{ transform: hovered === i ? 'scale(1.07)' : 'scale(1.0)' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/40 transition-opacity duration-500"
                  style={{ opacity: hovered === i ? 0.2 : 0.5 }} />
                {/* Tag */}
                <div className="absolute top-3 left-3 bg-gold text-navy text-[0.56rem] font-semibold tracking-[0.18em] uppercase px-2.5 py-1">
                  {card.tag}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 border border-t-0 border-navy/10 group-hover:border-gold/40 transition-colors duration-400 bg-white">
                {/* Bottom gold bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-left transition-transform duration-500"
                  style={{ transform: hovered === i ? 'scaleX(1)' : 'scaleX(0)' }} />

                <h3 className="font-display text-xl text-navy mb-2 font-normal">{card.title}</h3>
                <p className="text-[0.83rem] leading-relaxed text-muted-foreground">{card.text}</p>
                <span className="inline-block mt-4 text-[0.65rem] font-medium tracking-[0.14em] uppercase text-gold border-b border-gold/50 pb-px">
                  {card.vs}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
