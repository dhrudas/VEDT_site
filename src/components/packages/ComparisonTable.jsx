import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

const sections = [
  {
    heading: 'Museums & Culture',
    rows: [
      ['Rijksmuseum (children under 18)', 'FREE', 'FREE', 'FREE', 'FREE'],
      ['Van Gogh Museum (children under 18)', 'FREE', 'FREE', 'FREE', 'FREE'],
      ['NEMO Science Museum', 'Self-book', 'Included', 'Included', 'Private session'],
      ['Anne Frank House', 'Self-book', 'Self-book', 'Pre-booked', 'Private evening'],
      ['Artis Royal Zoo', 'Self-book', 'Included', 'Included', 'Private tour'],
      ['Keukenhof Gardens', 'Not included', 'Optional', 'VIP entry', 'Sunrise access'],
      ['EYE Film Museum, Noord', 'Self-book', 'Self-book', 'Included', 'Private screening'],
    ],
  },
  {
    heading: 'Transport & Getting Around',
    rows: [
      ['Accommodation location', 'Budget hostel', '3-star Jordaan', 'Boutique canalside', 'Private canal house'],
      ['Airport transfer', 'Train (self)', 'Train (self)', 'Private car', 'Helicopter'],
      ['City transport', 'OV-chipkaart', 'City Card included', 'City Card + car', 'Private driver'],
      ['Bike hire', 'Self-organised', 'Family fleet', 'Private guided', 'Fleet on call'],
      ['IJ Ferry to Noord', 'FREE', 'FREE', 'FREE', 'FREE'],
    ],
  },
  {
    heading: 'Experiences & Activities',
    rows: [
      ['Canal boat experience', 'Public cruise', 'Group tour', 'Private 2hr guided', 'Bespoke + chef'],
      ['Cycling itinerary', 'VEDT digital trail', 'Self-guided map', 'Private Jordaan tour', 'Custom daily rides'],
      ['Cheese workshop (Gouda)', 'Not included', 'Optional add-on', 'Included', 'Private master class'],
      ['Dutch cooking class', 'Not included', 'Optional add-on', 'Included', 'Private chef lesson'],
      ['Vondelpark Pillow Fight', 'FREE', 'FREE', 'FREE', 'FREE'],
      ['Zaanse Schans windmills', 'Self-organised', 'Day trip included', 'Private guide', 'Sunrise private tour'],
    ],
  },
  {
    heading: 'VEDT Support & Curation',
    rows: [
      ['VEDT concierge', 'Digital guides only', 'Email support', '24/7 concierge', 'Embedded throughout'],
      ['Pre-trip planning call', 'Not included', '30-minute call', '60-minute call', 'Unlimited sessions'],
      ['Children\'s treasure trail', 'Digital download', 'Printed pack', 'Custom illustrated', 'Personalised, bound'],
      ['Restaurant reservations', 'Self-organised', 'Recommendations', 'All pre-booked', 'All Michelin-starred'],
      ['Emergency assistance', 'Email only', 'Phone & email', '24/7 hotline', 'Dedicated liaison'],
    ],
  },
];

const getCellStyle = (val) => {
  if (val === 'FREE') return { className: 'text-free-c font-semibold text-sm', content: val };
  if (val === 'Not included') return { className: 'text-muted-foreground/50 text-xs', content: val };
  if (['Private 2hr guided', 'Private screening', 'Private evening', 'Private tour', 'Private guide', 'Sunrise private tour', 'Private master class', 'Private chef lesson', 'Bespoke + chef', 'Custom daily rides', 'Unlimited sessions', 'All Michelin-starred', 'Dedicated liaison', 'Personalised, bound', 'Embedded throughout', 'Helicopter', 'Private driver', 'Sunrise access', 'Private canal house', 'Boutique canalside', 'Private car', 'Fleet on call', 'Private session'].includes(val))
    return { className: 'text-lux-c font-medium text-xs', content: val };
  if (['Optional', 'Optional add-on', 'Self-book', 'Self-organised', 'Self-book', 'Email only', '30-minute call', 'Self-organised', 'Group tour', 'Self-guided map', 'Day trip included', 'Phone & email', 'Recommendations', 'Printed pack', 'Not included'].includes(val))
    return { className: 'text-muted-foreground text-xs', content: val };
  return { className: 'text-navy text-xs', content: val };
};

const headers = [
  { label: 'Free Spirit', sub: '£65–£95 / person / day', color: 'text-budget-c' },
  { label: 'Budget Explorer', sub: '£120–£160 / person / day', color: 'text-disc-c' },
  { label: 'Refined Discoverer', sub: '£280–£380 / person / day', color: 'text-gold', featured: true },
  { label: 'Connoisseur', sub: '£750+ / person / day', color: 'text-lux-c' },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Side by Side"
          title="What's included"
          titleEm="at a glance"
          description="A complete breakdown of every inclusion across all four tiers — so you can choose with confidence."
        />

        <RevealCard className="mt-12">
          <div className="overflow-x-auto rounded-lg border border-navy/8 shadow-sm">
            <table className="w-full border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-navy">
                  <th className="text-left p-4 text-[0.65rem] font-medium tracking-wider uppercase text-white/60 w-[30%]">
                    Feature
                  </th>
                  {headers.map((h, i) => (
                    <th key={i} className={`text-center p-4 ${h.featured ? 'bg-gold/10 border-x border-gold/20' : ''}`}>
                      <div className={`text-[0.68rem] font-semibold tracking-[0.12em] uppercase ${h.featured ? 'text-gold' : 'text-white'}`}>
                        {h.label}
                      </div>
                      <div className="text-[0.6rem] text-white/40 font-normal mt-0.5">{h.sub}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sections.map((section, si) => (
                  <React.Fragment key={si}>
                    <tr className="bg-cream/80">
                      <td colSpan={5} className="px-4 py-2.5 text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-gold">
                        {section.heading}
                      </td>
                    </tr>
                    {section.rows.map((row, ri) => (
                      <tr
                        key={ri}
                        className={`border-b border-navy/5 hover:bg-gold/[0.04] transition-colors ${ri % 2 === 0 ? 'bg-white' : 'bg-cream/40'}`}
                      >
                        <td className="px-4 py-3 text-[0.82rem] font-medium text-navy">{row[0]}</td>
                        {row.slice(1).map((val, ci) => {
                          const { className, content } = getCellStyle(val);
                          return (
                            <td
                              key={ci}
                              className={`px-4 py-3 text-center ${headers[ci].featured ? 'bg-gold/[0.04] border-x border-gold/10' : ''}`}
                            >
                              <span className={className}>{content}</span>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-6 mt-5 px-1">
            <p className="text-[0.72rem] text-free-c font-semibold">FREE = complimentary for all children under 18</p>
            <p className="text-[0.72rem] text-muted-foreground italic">All prices are guide rates. Your VEDT concierge will confirm exact inclusions based on your dates.</p>
          </div>
        </RevealCard>
      </div>
    </section>
  );
}