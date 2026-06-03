import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const strips = [
  {
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80&auto=format&fit=crop',
    label: 'Fine Dining',
    copy: 'Michelin-starred Dutch cuisine and cosy brown-café culture in equal measure.',
    link: '/experiences',
    linkLabel: 'Food Experiences',
  },
  {
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80&auto=format&fit=crop',
    label: 'Luxury Stays',
    copy: 'Canal-house boutique hotels and five-star retreats curated by VEDT.',
    link: '/plan',
    linkLabel: 'Plan Your Stay',
  },
  {
    img: 'https://images.unsplash.com/photo-1548041421-f668e49c6a3b?w=900&q=80&auto=format&fit=crop',
    label: 'Private Cruises',
    copy: 'UNESCO waterways explored at your own pace, on your own vessel.',
    link: '/packages',
    linkLabel: 'View Packages',
  },
];

export default function EditorialStrip() {
  const [scrollX, setScrollX] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      setScrollX(Math.max(0, Math.min(1, progress)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-navy overflow-hidden"
    >
      {/* Heading */}
      <div className="px-4 md:px-12 max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-[0.65rem] tracking-[0.28em] uppercase text-gold font-medium mb-3">Curated for You</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-[1.1]">
            The VEDT <em className="italic text-gold-light">Collection</em>
          </h2>
          <div className="w-10 h-px bg-gold mt-5" />
        </div>
        <p className="text-sm text-white/50 max-w-xs leading-relaxed">
          Every element of your Amsterdam experience, personally selected and arranged by our in-house concierge team.
        </p>
      </div>

      {/* Horizontal scroll panorama */}
      <div className="px-4 md:px-12">
        <div
          className="flex gap-4 transition-transform duration-100"
          style={{ transform: `translateX(-${scrollX * 80}px)` }}
        >
          {strips.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative flex-shrink-0 w-[85vw] md:w-[38vw] lg:w-[28vw] aspect-[3/4] overflow-hidden"
            >
              <img
                src={s.img}
                alt={s.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
              {/* Top gold line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <span className="text-[0.58rem] tracking-[0.26em] uppercase text-gold/70 block mb-2">{s.label}</span>
                <p className="font-display text-2xl text-white font-light leading-snug mb-4">{s.copy}</p>
                <Link
                  to={s.link}
                  className="inline-flex items-center gap-3 text-[0.68rem] tracking-[0.18em] uppercase font-medium text-white/70 hover:text-gold transition-colors"
                >
                  {s.linkLabel}
                  <span className="w-6 h-px bg-gold/60 inline-block" />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Final CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex-shrink-0 w-[85vw] md:w-[38vw] lg:w-[20vw] aspect-[3/4] bg-gold flex flex-col items-start justify-end p-7"
          >
            <span className="text-[0.58rem] tracking-[0.26em] uppercase text-navy/60 block mb-2">Speak to Us</span>
            <h3 className="font-display text-3xl text-navy font-light leading-snug mb-5">
              Build your bespoke Amsterdam itinerary
            </h3>
            <Link
              to="/plan"
              className="border border-navy text-navy text-[0.68rem] tracking-[0.18em] uppercase font-semibold px-6 py-3 hover:bg-navy hover:text-gold transition-all"
            >
              Plan My Trip
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}