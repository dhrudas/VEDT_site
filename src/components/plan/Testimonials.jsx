import React from 'react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

const testimonials = [
  {
    stars: '★★★★★',
    quote: '"Our 7-year-old declared Amsterdam her favourite city in the world — above Disney. That\'s not something we expected to hear. The pillow fight in Vondelpark absolutely made the trip."',
    avatar: '👨👩👧', name: 'The Hartley Family', trip: 'Budget Explorer · April 2025 · Bristol, UK',
  },
  {
    stars: '★★★★★',
    quote: '"We couldn\'t believe the Rijksmuseum was free for our children. We went three times. The treasure hunt booklet kept them engaged for hours. The private canal boat was extraordinary."',
    avatar: '👩👩👦', name: 'The Vermeer Family', trip: 'Refined Discoverer · June 2025 · London, UK',
  },
  {
    stars: '★★★★★',
    quote: '"We\'d been to Paris twice and felt we\'d \'done\' Europe. Amsterdam completely reset that. Free museums, a pillow fight, the best cheese our twins have ever tasted."',
    avatar: '👨👩👦👦', name: 'The Okafor Family', trip: 'Free Spirit · August 2025 · Manchester, UK',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-12 bg-navy">
      <div className="max-w-7xl mx-auto">
        <SectionHeader label="VEDT Families" title="What families" titleEm="tell us" light center />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((t, i) => (
            <RevealCard key={t.name} delay={i * 0.1}>
              <div className="bg-white/[0.04] border border-gold/15 rounded-md p-6 hover:bg-gold/[0.07] hover:-translate-y-1 transition-all">
                <div className="text-gold text-sm tracking-widest mb-4">{t.stars}</div>
                <p className="font-display italic text-base leading-relaxed text-white/85 mb-6">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/25 flex items-center justify-center text-lg">{t.avatar}</div>
                  <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-[0.72rem] text-white/42">{t.trip}</div>
                  </div>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}