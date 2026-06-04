import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';

const facts = [
  { number: 900000, display: '900K', suffix: '', label: 'Bicycles', desc: 'More bikes than people. Around 15,000 are fished from the canals every single year.' },
  { number: 1281, display: '1,281', suffix: '', label: 'Bridges', desc: 'Amsterdam beats Venice. Challenge your children to cross as many as possible.' },
  { number: 7000000, display: '7M+', suffix: '', label: 'Tulips Yearly', desc: 'Keukenhof displays over 7 million blooms across 32 hectares — the world\'s largest flower garden.' },
  { number: 1550, display: '1,550', suffix: '', label: 'Wonky Houses', desc: 'Canal houses are deliberately tilted forward so furniture can be hoisted through windows.' },
  { number: 650, display: '650M kg', suffix: '', label: 'Cheese / Year', desc: 'The world\'s largest cheese exporter. Gouda so fresh it changes your opinions forever.' },
  { number: 165, display: '165', suffix: '', label: 'Canals', desc: 'The canal ring is a UNESCO World Heritage Site — the world\'s original planned city.' },
];

function useCountUp(target, duration = 1800, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

function FactCard({ fact, index, sectionActive }) {
  const counted = useCountUp(fact.number, 1600 + index * 80, sectionActive);

  const formatDisplay = (n, raw) => {
    if (raw.includes('M+')) return `${(n / 1000000).toFixed(0)}M+`;
    if (raw.includes('M kg')) return `${n}M kg`;
    if (n >= 1000) return n.toLocaleString();
    return String(n);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="group relative bg-white/[0.04] border border-gold/12 p-7 md:p-8 overflow-hidden hover:bg-gold/[0.07] transition-all duration-400 cursor-default"
    >
      <div className="absolute top-0 left-0 w-[2px] h-0 bg-gold group-hover:h-full transition-all duration-500" />
      <div className="absolute top-4 right-4 text-[0.52rem] tracking-[0.22em] uppercase text-gold/40 font-medium">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-gold-light leading-none mb-1 tabular-nums">
        {sectionActive ? formatDisplay(counted, fact.display) : '—'}
      </div>
      <div className="text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-white/45 mb-3">{fact.label}</div>
      <p className="text-[0.8rem] leading-relaxed text-white/60">{fact.desc}</p>
    </motion.div>
  );
}

export default function FactsSection() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 md:px-12 bg-navy relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')]" />
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(184,151,58,0.10)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          label="Amsterdam by the numbers"
          title="Facts That"
          titleEm="Fascinate"
          light
          center
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px mt-14">
          {facts.map((fact, i) => (
            <FactCard key={fact.label} fact={fact} index={i} sectionActive={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
