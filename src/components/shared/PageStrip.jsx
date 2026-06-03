import React from 'react';

export default function PageStrip({ label, title, titleEm, subtitle }) {
  return (
    <div className="pt-24 pb-14 md:pt-28 md:pb-16 px-4 md:px-12 bg-gradient-to-br from-navy to-[#0f1724] text-center relative overflow-hidden">
      <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(184,151,58,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[5%] w-[350px] h-[350px] bg-[radial-gradient(circle,rgba(184,151,58,0.08)_0%,transparent_70%)] pointer-events-none" />
      {label && <p className="text-[0.68rem] font-medium tracking-[0.25em] uppercase text-gold mb-3 relative z-10">{label}</p>}
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.05] relative z-10">
        {title} {titleEm && <em className="italic text-gold-light">{titleEm}</em>}
      </h1>
      {subtitle && <p className="font-display italic text-base text-white/60 mt-3 relative z-10">{subtitle}</p>}
    </div>
  );
}