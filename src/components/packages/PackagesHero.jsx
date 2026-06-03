import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
  { value: '4', label: 'Distinct Tiers' },
  { value: '£65', label: 'Starts From / Day' },
  { value: 'Free', label: 'All Museums for Children' },
  { value: '24/7', label: 'VEDT Concierge' },
];

export default function PackagesHero() {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1800&q=85&auto=format&fit=crop"
          alt="Amsterdam canal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 md:px-12 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[0.68rem] font-medium tracking-[0.3em] uppercase text-gold mb-5"
            >
              VEDT Amsterdam · Family Packages
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-light leading-[0.92] text-white mb-6"
            >
              Every budget.<br />
              <em className="italic text-gold-light">One unforgettable</em><br />
              city.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="text-base md:text-lg text-white/65 leading-relaxed mb-8 max-w-xl"
            >
              Four carefully crafted tiers — from self-guided freedom to complete bespoke immersion. Children's museum admissions are free across every package. The city does the rest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#tiers" className="bg-gold text-navy px-10 py-4 text-[0.75rem] font-semibold tracking-[0.2em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all">
                View Packages
              </a>
              <Link to="/plan" className="border border-white/40 text-white px-10 py-4 text-[0.75rem] font-medium tracking-[0.2em] uppercase hover:border-gold hover:text-gold-light hover:-translate-y-0.5 transition-all">
                Get a Custom Quote
              </Link>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px mt-16 bg-white/10"
          >
            {stats.map((s, i) => (
              <div key={i} className="bg-navy/60 backdrop-blur-sm px-6 py-5 text-center">
                <div className="font-display text-3xl font-light text-gold mb-1">{s.value}</div>
                <div className="text-[0.62rem] tracking-[0.18em] uppercase text-white/50">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}