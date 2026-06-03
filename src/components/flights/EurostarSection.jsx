import React from 'react';
import { Train, Clock, MapPin, Sparkles } from 'lucide-react';
import RevealCard from '../shared/RevealCard';

export default function EurostarSection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <RevealCard>
          <div className="bg-gradient-to-br from-navy to-[#243050] rounded-xl p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center relative overflow-hidden">
            <div className="absolute -right-8 -top-8 font-display text-[10rem] font-semibold text-white/[0.03] leading-none select-none">TRAIN</div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 text-[0.68rem] text-gold font-semibold tracking-wider uppercase mb-4">
                <Train className="w-3.5 h-3.5" /> Alternative to Flying
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-light text-white leading-tight mb-4">
                Eurostar to Amsterdam<br /><em className="italic text-gold-light">No airport. No stress.</em>
              </h2>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                London St Pancras to Amsterdam Centraal in 3 hours 55 minutes. City-centre to city-centre, no airport security theatrics, generous luggage allowance, and children under 4 travel free.
              </p>
              <ul className="space-y-2.5">
                {[
                  { icon: Clock, text: '3h 55m — London to Amsterdam direct' },
                  { icon: MapPin, text: 'Arrives at Amsterdam Centraal — heart of the city' },
                  { icon: Sparkles, text: 'Children under 4 travel FREE' },
                  { icon: Train, text: 'No luggage restrictions — bring the pram, the scooter, everything' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/80">
                    <item.icon className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              {[
                { label: 'Standard', price: '£40', note: 'one way', badge: 'From' },
                { label: 'Standard Premier', price: '£79', note: 'one way', badge: 'Comfort' },
                { label: 'Family Return', price: '£180', note: '2 adults + 2 children', badge: 'Best Value' },
                { label: 'Business Premier', price: '£245', note: 'one way', badge: 'Luxury' },
              ].map(fare => (
                <div key={fare.label} className="bg-white/[0.06] border border-gold/20 rounded-lg p-4 text-center hover:bg-white/[0.1] transition-colors">
                  <div className="text-[0.55rem] tracking-wider uppercase text-gold mb-1">{fare.badge}</div>
                  <div className="font-display text-2xl font-light text-white">{fare.price}</div>
                  <div className="text-[0.68rem] text-white/50 mt-0.5">{fare.label}</div>
                  <div className="text-[0.6rem] text-white/35">{fare.note}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealCard>
      </div>
    </section>
  );
}