import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';

const panels = [
  {
    img: 'https://images.unsplash.com/photo-1548041421-f668e49c6a3b?w=1000&q=80&auto=format&fit=crop',
    label: 'Canal Life',
    desc: 'UNESCO World Heritage waterways. Hire a boat, join a cruise, or simply walk every bridge.',
  },
  {
    img: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1000&q=80&auto=format&fit=crop',
    label: 'Fine Cuisine',
    desc: 'From stroopwafels to Michelin-starred Dutch cuisine — a city that feeds curiosity at every turn.',
  },
  {
    img: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1000&q=80&auto=format&fit=crop',
    label: 'World Museums',
    desc: 'The Rijksmuseum. Van Gogh. NEMO Science. Anne Frank House. Free for under-18s at the finest.',
  },
  {
    img: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=1000&q=80&auto=format&fit=crop',
    label: 'Vondelpark',
    desc: '47 hectares of green in the city\'s heart — free concerts, cycling paths, and open-air Shakespeare.',
  },
];

export default function WhySection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-cream">
      {/* Intro */}
      <div className="px-4 md:px-12 max-w-7xl mx-auto mb-16 grid lg:grid-cols-2 gap-16 items-end">
        <SectionHeader
          label="Why Amsterdam"
          title="Europe's most"
          titleEm="walkable city — at child speed"
        />
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-foreground/75">
            Paris demands metro cards. Rome demands endurance. London demands budgets the size of a mortgage.
            <strong className="text-navy"> Amsterdam hands your family a bicycle and says: explore.</strong>
          </p>
          <p className="text-base leading-relaxed text-foreground/75">
            Compact enough to cross in 30 minutes, yet rich enough for a week of discovery — Amsterdam is the only major European capital where the city itself is the playground.
          </p>
          <Link
            to="/experiences"
            className="inline-flex items-center gap-3 text-[0.75rem] tracking-[0.18em] uppercase font-medium text-navy border-b border-gold pb-0.5 hover:text-gold transition-colors mt-2"
          >
            Discover All Experiences
            <span className="w-4 h-px bg-gold inline-block" />
          </Link>
        </div>
      </div>

      {/* Full-width image mosaic */}
      <div className="px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3">
          {panels.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className={`group relative overflow-hidden cursor-pointer ${i === 0 ? 'lg:row-span-2 aspect-[3/4] lg:aspect-auto' : 'aspect-[4/3]'}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={p.img}
                alt={p.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                style={{ transform: hovered === i ? 'scale(1.08)' : 'scale(1.0)' }}
                loading="lazy"
              />
              {/* Base overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
              {/* Hover overlay */}
              <div
                className="absolute inset-0 bg-gold/20 transition-opacity duration-500"
                style={{ opacity: hovered === i ? 1 : 0 }}
              />
              {/* Gold top border on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 bg-gold transition-transform duration-500 origin-left"
                style={{ transform: hovered === i ? 'scaleX(1)' : 'scaleX(0)' }}
              />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-[0.6rem] tracking-[0.22em] uppercase text-gold block mb-1 transition-opacity duration-300"
                  style={{ opacity: hovered === i ? 1 : 0.7 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-white font-light">{p.label}</h3>
                <p
                  className="text-[0.78rem] text-white/75 leading-relaxed mt-1.5 transition-all duration-500 overflow-hidden"
                  style={{
                    maxHeight: hovered === i ? '4rem' : '0',
                    opacity: hovered === i ? 1 : 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}