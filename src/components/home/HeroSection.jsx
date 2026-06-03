import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1548041421-f668e49c6a3b?w=1800&q=85&auto=format&fit=crop',
    label: 'The Canals',
    headline: ['Pedal,', 'Paddle'],
    sub: '& Play',
    accent: 'Where every canal is a classroom',
    position: '50% 60%',
  },
  {
    img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1800&q=85&auto=format&fit=crop',
    label: 'Vondelpark',
    headline: ['Breathe,', 'Wander'],
    sub: '& Wonder',
    accent: "Europe's most gloriously child-sized capital",
    position: '50% 40%',
  },
  {
    img: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1800&q=85&auto=format&fit=crop',
    label: 'The Rijksmuseum',
    headline: ['Discover,', 'Create'],
    sub: '& Dream',
    accent: 'Free for every visitor under 18',
    position: '50% 55%',
  },
  {
    img: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=1800&q=85&auto=format&fit=crop',
    label: 'Canal Cruising',
    headline: ['Explore,', 'Drift'],
    sub: '& Discover',
    accent: 'UNESCO World Heritage on water',
    position: '50% 50%',
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive(a => (a + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const goTo = (i) => {
    setActive(i);
    setPaused(true);
    clearInterval(timerRef.current);
    setTimeout(() => setPaused(false), 8000);
  };

  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background slides with parallax */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === active ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: `translateY(${scrollY * 0.35}px)`, willChange: 'transform' }}
        >
          <img
            src={slide.img}
            alt={slide.label}
            className="w-full h-full object-cover scale-[1.08]"
            style={{ objectPosition: slide.position }}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/40 to-transparent z-10" />

      {/* Slide label — top right */}
      <div className="absolute top-8 right-8 z-30 hidden md:flex items-center gap-3">
        <AnimatePresence mode="wait">
          <motion.span
            key={active}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.5 }}
            className="text-[0.62rem] tracking-[0.28em] uppercase text-white/60 font-medium"
          >
            {slides[active].label}
          </motion.span>
        </AnimatePresence>
        <div className="w-8 h-px bg-gold/50" />
        <span className="text-[0.62rem] tracking-[0.18em] text-white/35 font-medium">
          {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* Main copy */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[0.68rem] font-medium tracking-[0.28em] uppercase text-gold mb-6"
        >
          VEDT · Amsterdam · A family city unlike any other
        </motion.p>

        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="font-display text-6xl sm:text-8xl md:text-[9rem] lg:text-[10.5rem] font-light leading-[0.88] text-white">
                {slides[active].headline[0]}{' '}
                <em className="italic text-gold-light">{slides[active].headline[1]}</em>
                <br />
                <span className="text-white/70">{slides[active].sub}</span>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${active}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-display italic text-lg md:text-xl text-white/70 mt-6"
          >
            "{slides[active].accent}"
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Link
            to="/packages"
            className="bg-gold text-navy px-10 py-4 text-[0.75rem] font-semibold tracking-[0.2em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            View Packages
          </Link>
          <Link
            to="/experiences"
            className="border border-white/40 text-white px-10 py-4 text-[0.75rem] font-medium tracking-[0.2em] uppercase hover:border-gold hover:text-gold-light hover:-translate-y-0.5 transition-all"
          >
            Family Experiences
          </Link>
        </motion.div>
      </div>

      {/* Slide nav dots */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30 flex gap-3 items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-500 ${
              i === active
                ? 'w-8 h-0.5 bg-gold'
                : 'w-2 h-0.5 bg-white/35 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 right-8 z-30 hidden md:flex flex-col items-center gap-2 text-white/40 text-[0.58rem] tracking-[0.22em] uppercase">
        <div className="w-px h-14 bg-gradient-to-b from-white/40 to-transparent animate-scroll-pulse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}