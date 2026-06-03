import React from 'react';
import RevealCard from '../shared/RevealCard';

const IMG = 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=900&q=80&auto=format&fit=crop';

export default function PillowFeature() {
  return (
      <section className="px-4 md:px-12 pb-10">
        <div className="max-w-7xl mx-auto">
          <RevealCard>
            <div className="bg-gradient-to-br from-[#2a1066] to-[#1a0a44] rounded-xl p-6 md:p-10 grid lg:grid-cols-2 gap-8 items-center relative overflow-hidden">
              <div className="absolute -top-[30%] -right-[10%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(184,151,58,0.2)_0%,transparent_70%)] pointer-events-none" />
              <div className="rounded-lg overflow-hidden h-64 md:h-72">
                <img src={IMG} alt="Families in Amsterdam park" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-gold px-4 py-1.5 text-[0.68rem] text-navy font-bold tracking-wider uppercase mb-4">
                  Free Entry · Annual Spring Event
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-2 leading-tight">
                  Amsterdam's Great<br /><em className="italic text-gold-light">Pillow Battle</em>
                </h2>
                <p className="text-sm text-white/80 leading-relaxed mb-2">
                  Every spring, Amsterdam hosts one of Europe's most joyful children's events — a city-wide, completely free, beautifully chaotic pillow fight in Vondelpark and Museumplein.
                </p>
                <p className="text-[0.78rem] text-white/55 italic mt-3">
                  VEDT tip: arrive 30 minutes early. Bring a change of clothes and a bag for wayward feathers.
                </p>
                <div className="flex flex-wrap gap-3 mt-5">
                  {[['April', 'Each year'], ['€0', 'Entry fee'], ['All', 'Ages welcome'], ['2+', 'Locations']].map(([num, label]) => (
                      <div key={label} className="bg-white/[0.08] border border-gold/20 rounded-lg px-4 py-3 text-center min-w-[80px]">
                        <div className="font-display text-xl font-light text-gold-light">{num}</div>
                        <div className="text-[0.62rem] text-white/45 tracking-wider uppercase mt-0.5">{label}</div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealCard>
        </div>
      </section>
  );
}