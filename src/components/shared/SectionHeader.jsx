import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, titleEm, description, light = false, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7 }}
      className={center ? 'text-center' : ''}
    >
      {label && (
        <p className={`text-[0.68rem] font-medium tracking-[0.25em] uppercase mb-3 ${light ? 'text-gold' : 'text-gold'}`}>
          {label}
        </p>
      )}
      <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] ${light ? 'text-white' : 'text-navy'}`}>
        {title} {titleEm && <em className={`italic ${light ? 'text-gold-light' : 'text-gold'}`}>{titleEm}</em>}
      </h2>
      <div className={`w-12 h-0.5 bg-gold mt-6 mb-4 ${center ? 'mx-auto' : ''}`} />
      {description && (
        <p className={`max-w-xl text-[0.95rem] leading-relaxed ${light ? 'text-white/55' : 'text-muted-foreground'} ${center ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}