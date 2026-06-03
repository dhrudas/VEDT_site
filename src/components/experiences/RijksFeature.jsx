import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

const IMG = 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=900&q=80&auto=format&fit=crop';

export default function RijksFeature() {
  return (
      <section className="py-16 md:py-20 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Featured · The Crown Jewel" title="The museum that" titleEm="costs your children nothing" />

          <RevealCard className="mt-8">
            <div className="bg-gradient-to-br from-free-c to-[#14502b] rounded-xl p-6 md:p-10 grid lg:grid-cols-2 gap-8 items-center relative overflow-hidden">
              <div className="absolute -right-4 -top-6 font-display text-[11rem] font-semibold text-white/[0.05] leading-none select-none">FREE</div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/18 border border-white/35 px-4 py-1.5 text-[0.72rem] text-white font-semibold tracking-wider mb-4">
                  Free Admission · All Visitors Under 18
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-light text-white mb-2 leading-tight">
                  The <em className="italic text-green-300">Rijksmuseum</em><br />is your children's museum
                </h2>
                <p className="text-sm text-white/80 leading-relaxed mb-2">
                  One of the world's top ten art museums — and it costs every visitor under 18 precisely nothing. Houses over one million objects including Rembrandt's <em>Night Watch</em> and Vermeer's <em>Milkmaid</em>.
                </p>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  Purpose-built family trails turn the galleries into a treasure hunt. Children become detectives.
                </p>

                <div className="flex gap-3 mb-5">
                  {[['Adults', '€22.50'], ['Under 18', 'FREE'], ['Family Trail', 'FREE']].map(([label, price]) => (
                      <div key={label} className="bg-white/10 border border-white/20 rounded-md px-3 py-2 text-center">
                        <div className="text-[0.6rem] tracking-wider uppercase text-white/50">{label}</div>
                        <div className={`font-display text-xl font-light ${price === 'FREE' ? 'text-green-300 font-semibold text-lg' : 'text-white'}`}>{price}</div>
                      </div>
                  ))}
                </div>

                <div className="space-y-2">
                  {['🍽️ Restaurant Rijks inside — superb children\'s menu', '🚲 Walk-through cycle tunnel — an Amsterdam institution', '🔍 Family treasure hunt booklets free at reception', '🎨 Atelier Rijksmuseum: drop-in art workshops'].map(item => (
                      <div key={item} className="flex items-start gap-2 text-sm text-white/80">
                        <span className="flex-shrink-0">{item.slice(0, 2)}</span>
                        <span>{item.slice(3)}</span>
                      </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg overflow-hidden h-64 md:h-80">
                <img src={IMG} alt="Rijksmuseum interior" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
          </RevealCard>
        </div>
      </section>
  );
}