import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bike, Ship, Palette, FlaskConical, Trees, Utensils, Clock, ChevronRight, MapPin } from 'lucide-react';

const trail = [
  {
    step: 1,
    label: 'BK',
    color: '#b8973a',
    bg: '#fdf8ec',
    border: '#e8d49a',
    title: 'Rent a Bike at Vondelpark',
    desc: 'Every Amsterdam adventure begins on two wheels. Vondelpark has bike rentals at the entrance — with child seats and cargo bikes for little ones. 800km of dedicated bike lanes make the city genuinely safe for families.',
    tip: 'Helmets are free to borrow at most hire stations.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
    time: '9:00am',
    link: '/experiences',
    linkLabel: 'Cycling Experiences',
  },
  {
    step: 2,
    label: 'RK',
    color: '#7c4a8a',
    bg: '#f8f3fb',
    border: '#d9bfe8',
    title: 'Rijksmuseum Treasure Hunt',
    desc: 'Children under 18 enter completely free. Pick up the family treasure hunt map at the information desk and search for hidden clues across the Golden Age galleries — Rembrandt, Vermeer, and 8,000 years of history.',
    tip: 'Free family treasure hunt maps are available at the info desk every day.',
    img: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80&auto=format&fit=crop',
    time: '10:30am',
    link: '/experiences',
    linkLabel: 'Museum Experiences',
  },
  {
    step: 3,
    label: 'PF',
    color: '#4a7c6f',
    bg: '#f0faf7',
    border: '#9dd4c8',
    title: 'Dutch Pancakes at Moeders',
    desc: 'Poffertjes, stroopwafels, Dutch pancakes with chocolate sauce. Moeders is one of Amsterdam\'s most beloved family restaurants, its walls covered in photographs brought by generations of guests.',
    tip: 'Poffertjes are tiny, fluffy, buttered pancakes — order a double portion.',
    img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&q=80&auto=format&fit=crop',
    time: '12:30pm',
    link: '/experiences',
    linkLabel: 'Food Experiences',
  },
  {
    step: 4,
    label: 'CB',
    color: '#3d7a9e',
    bg: '#f0f8fc',
    border: '#9ed0e8',
    title: 'Private Canal Boat Adventure',
    desc: 'Sail under 1,281 bridges aboard your own canal boat. Spot the houseboats where real Amsterdam families live, pass the golden spire of the Westerkerk, and drift through the UNESCO World Heritage ring.',
    tip: 'Look for cats sitting in canal house windows — it\'s an Amsterdam tradition.',
    img: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=800&q=80&auto=format&fit=crop',
    time: '2:00pm',
    link: '/packages',
    linkLabel: 'Canal Packages',
  },
  {
    step: 5,
    label: 'NM',
    color: '#c75a8a',
    bg: '#fdf2f8',
    border: '#f0bed8',
    title: 'NEMO Science Museum',
    desc: 'Five floors of hands-on science. Build a bridge that holds weight, create a tornado in a tank, launch a water rocket, and understand how the eye processes colour. The roof terrace has the finest city panorama in Amsterdam.',
    tip: 'The Chain Reaction exhibit on floor 3 is the highlight — arrive early.',
    img: 'https://images.unsplash.com/photo-1532094349884-543559196cf3?w=800&q=80&auto=format&fit=crop',
    time: '3:30pm',
    link: '/experiences',
    linkLabel: 'Family Experiences',
  },
  {
    step: 6,
    label: 'AB',
    color: '#5a8c3a',
    bg: '#f4faf0',
    border: '#b8e0a0',
    title: 'Amsterdamse Bos — The City Forest',
    desc: 'A 1,000-hectare forest within the city. Rent a rowing boat on the lake, follow the wildlife trail to see bison and deer, and end the day at the legendary forest pancake house — batter made fresh every morning.',
    tip: 'The forest pancake house is open until 7pm. Worth the detour.',
    img: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80&auto=format&fit=crop',
    time: '5:00pm',
    link: '/neighbourhoods',
    linkLabel: 'Explore the City',
  },
];

const funFacts = [
  { abbr: 'BK', fact: 'Amsterdam has more bicycles than people — over 900,000 bikes in a city of 870,000.', color: '#b8973a' },
  { abbr: 'TL', fact: 'The Netherlands grows 15 billion tulip bulbs every year — 75% of the global supply.', color: '#7c4a8a' },
  { abbr: 'CH', fact: 'Dutch cheese exports total 650 million kilograms a year — more than any other country.', color: '#4a7c6f' },
  { abbr: 'HG', fact: 'Hollandse Nieuwe herring is the Dutch national snack — eaten raw, whole, on the street.', color: '#3d7a9e' },
  { abbr: 'BR', fact: 'Amsterdam has 1,281 bridges — more than Venice, and more than any other European capital.', color: '#c75a8a' },
  { abbr: 'CH', fact: 'Canal houses tilt forward deliberately — so furniture could be hauled up by rope to each floor.', color: '#5a8c3a' },
];

const kidActivities = [
  { icon: <Bike className="w-5 h-5" />, title: 'Cycling Tours', desc: 'Family-safe routes through the city', link: '/experiences', color: '#b8973a' },
  { icon: <Ship className="w-5 h-5" />, title: 'Canal Cruises', desc: 'Private boat tours for families', link: '/packages', color: '#3d7a9e' },
  { icon: <Palette className="w-5 h-5" />, title: 'Art Adventures', desc: 'Treasure hunts in world museums', link: '/experiences', color: '#7c4a8a' },
  { icon: <FlaskConical className="w-5 h-5" />, title: 'Science Museum', desc: 'NEMO — five floors of experiments', link: '/experiences', color: '#c75a8a' },
  { icon: <Trees className="w-5 h-5" />, title: 'Forest Escapes', desc: '1,000 hectare city forest', link: '/neighbourhoods', color: '#5a8c3a' },
  { icon: <Utensils className="w-5 h-5" />, title: 'Dutch Cuisine', desc: 'Stroopwafels, poffertjes & more', link: '/experiences', color: '#4a7c6f' },
];

export default function Kids() {
  const [activeStep, setActiveStep] = useState(-1);

  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1800&q=85&auto=format&fit=crop"
            alt="Amsterdam canals"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[0.68rem] font-medium tracking-[0.3em] uppercase text-gold mb-6"
          >
            VEDT Amsterdam · Family Adventure Guide
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}
            className="font-display text-6xl sm:text-7xl md:text-[8rem] font-light leading-[0.9] text-white mb-6"
          >
            Amsterdam<br />
            <em className="italic text-gold-light">for Children</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-lg md:text-xl text-white/65 mb-10 max-w-2xl mx-auto leading-relaxed font-display italic"
          >
            "The only major European capital where the city itself is the playground."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#trail"
              className="bg-gold text-navy px-10 py-4 text-[0.75rem] font-semibold tracking-[0.2em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all"
            >
              Begin the Trail
            </a>
            <Link
              to="/plan"
              className="border border-white/40 text-white px-10 py-4 text-[0.75rem] font-medium tracking-[0.2em] uppercase hover:border-gold hover:text-gold-light hover:-translate-y-0.5 transition-all"
            >
              Plan My Trip
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f9f6f0"/>
          </svg>
        </div>
      </div>

      {/* DID YOU KNOW */}
      <div className="py-20 px-4 md:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[0.68rem] font-medium tracking-[0.28em] uppercase text-gold mb-3">Before You Go</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Six things that will <em className="italic text-gold">surprise</em> your children
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-white border border-navy/8 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-4">
                  <span className="font-display text-[0.6rem] font-semibold tracking-widest text-gold">{f.abbr}</span>
                </div>
                <p className="text-sm leading-relaxed text-foreground/80">{f.fact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* THE TRAIL */}
      <div id="trail" className="py-20 px-4 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[0.68rem] font-medium tracking-[0.28em] uppercase text-gold mb-3">One Perfect Day</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              The Family <em className="italic text-gold">Adventure Trail</em>
            </h2>
            <p className="text-base text-muted-foreground mt-3 max-w-xl">Six stops. Six unforgettable moments. The perfect Amsterdam family day — from 9am to sunset.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[27px] top-8 bottom-8 w-px border-l-2 border-dashed border-gold/30 hidden md:block" />

            <div className="space-y-6">
              {trail.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="md:pl-16">
                    {/* Step number */}
                    <div
                      className="absolute left-0 top-5 w-14 h-14 flex items-center justify-center z-10 hidden md:flex border-2"
                      style={{ borderColor: step.color, backgroundColor: step.bg }}
                    >
                      <span className="font-display text-[0.6rem] font-semibold tracking-widest" style={{ color: step.color }}>{step.label}</span>
                    </div>

                    <div
                      className="overflow-hidden border transition-all duration-300 cursor-pointer hover:shadow-lg"
                      style={{ borderColor: activeStep === i ? step.color : '#e8e4dc', backgroundColor: activeStep === i ? step.bg : '#fff' }}
                      onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-56 flex-shrink-0 h-44 md:h-auto overflow-hidden">
                          <img
                            src={step.img}
                            alt={step.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                        </div>

                        <div className="flex-1 p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className="flex items-center gap-1.5 px-3 py-1 text-[0.6rem] font-semibold tracking-[0.15em] uppercase text-white"
                              style={{ backgroundColor: step.color }}
                            >
                              <Clock className="w-3 h-3" /> {step.time}
                            </div>
                            <span className="text-[0.6rem] font-semibold tracking-[0.18em] uppercase" style={{ color: step.color }}>
                              Stop {step.step}
                            </span>
                          </div>
                          <h3 className="font-display text-xl md:text-2xl font-light text-navy mb-2">{step.title}</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground mb-3">{step.desc}</p>

                          {activeStep === i && (
                            <motion.div
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mb-4"
                            >
                              <div
                                className="text-[0.78rem] px-4 py-2.5 border-l-2 italic text-foreground/70"
                                style={{ borderColor: step.color, backgroundColor: step.bg }}
                              >
                                {step.tip}
                              </div>
                            </motion.div>
                          )}

                          <Link
                            to={step.link}
                            className="inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.12em] uppercase border-b pb-0.5 transition-colors hover:text-gold"
                            style={{ color: step.color, borderColor: step.color + '60' }}
                          >
                            {step.linkLabel} <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ACTIVITIES GRID */}
      <div className="py-20 px-4 md:px-12 bg-soft">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-[0.68rem] font-medium tracking-[0.28em] uppercase text-gold mb-3">Curated for Families</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Every kind of <em className="italic text-gold">adventure</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {kidActivities.map((act, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={act.link}
                  className="block bg-white border border-navy/8 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group"
                  onMouseEnter={e => (e.currentTarget.style.borderColor = act.color)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '')}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-4 text-white"
                    style={{ backgroundColor: act.color }}
                  >
                    {act.icon}
                  </div>
                  <h3 className="font-display text-lg text-navy mb-1 font-light">{act.title}</h3>
                  <p className="text-[0.78rem] text-muted-foreground">{act.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-[0.65rem] font-medium tracking-[0.12em] uppercase" style={{ color: act.color }}>
                    Explore <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 px-4 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(184,151,58,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(184,151,58,0.8) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <p className="text-[0.68rem] font-medium tracking-[0.28em] uppercase text-gold mb-5">Begin Planning</p>
          <h2 className="font-display text-4xl md:text-6xl font-light text-white leading-tight mb-5">
            Ready for the greatest<br />
            <em className="italic text-gold-light">family holiday of your lives?</em>
          </h2>
          <p className="text-white/55 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            VEDT builds your perfect Amsterdam family itinerary — every detail handled, every child considered, every moment remembered.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/plan"
              className="bg-gold text-navy px-10 py-4 text-[0.75rem] font-semibold tracking-[0.2em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all"
            >
              Plan Our Trip
            </Link>
            <Link
              to="/packages"
              className="border border-white/30 text-white px-10 py-4 text-[0.75rem] font-medium tracking-[0.2em] uppercase hover:border-gold hover:text-gold-light hover:-translate-y-0.5 transition-all"
            >
              View Packages
            </Link>
          </div>
        </motion.div>
      </div>

    </div>
  );
}