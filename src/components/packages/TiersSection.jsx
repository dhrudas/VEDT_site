import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

const tiers = [
  {
    id: 'free-spirit',
    name: 'The Free Spirit',
    badge: 'Self-Guided',
    price: '£65',
    priceLabel: 'from £65 per person / day',
    tagline: 'Amsterdam\'s greatest things cost nothing at all.',
    description: 'A completely self-directed Amsterdam experience built around the city\'s extraordinary free cultural infrastructure. World-class museums, UNESCO canals, and 47 hectares of parkland — all at no charge for children.',
    color: 'border-budget-c',
    accentColor: 'text-budget-c',
    badgeBg: 'bg-budget-c',
    ctaStyle: 'bg-budget-c text-white hover:bg-budget-c/85',
    img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=900&q=85&auto=format&fit=crop',
    includes: [
      { text: 'Rijksmuseum — free for all children under 18', highlight: true },
      { text: 'Van Gogh Museum — free for all children under 18', highlight: true },
      { text: 'Vondelpark (47 ha) — always free', highlight: true },
      { text: 'IJ Ferry from Central Station — no charge ever', highlight: true },
      { text: 'Budget hostel or serviced family apartment', highlight: false },
      { text: 'OV-chipkaart public transit (€8.50/adult/day)', highlight: false },
      { text: 'Albert Cuyp Market picnic lunch under €15', highlight: false },
      { text: 'VEDT self-guided digital family trails', highlight: false },
      { text: 'Annual Pillow Fight, Vondelpark — free', highlight: true },
    ],
    ideal: 'Families who prefer to explore independently, with children aged 6+',
  },
  {
    id: 'budget-explorer',
    name: 'The Budget Explorer',
    badge: 'Curated',
    price: '£120',
    priceLabel: 'from £120 per person / day',
    tagline: 'Amsterdam at its most authentic — beautifully organised.',
    description: 'The classic Amsterdam family holiday. Comfortable 3-star accommodation in characterful neighbourhoods, structured itinerary, and all major attractions included — without sacrificing the city\'s authentic spirit.',
    color: 'border-disc-c',
    accentColor: 'text-disc-c',
    badgeBg: 'bg-disc-c',
    ctaStyle: 'bg-disc-c text-white hover:bg-disc-c/85',
    img: 'https://images.unsplash.com/photo-1548041421-f668e49c6a3b?w=900&q=85&auto=format&fit=crop',
    includes: [
      { text: '3-star family apartment in the Jordaan or De Pijp', highlight: false },
      { text: 'iAmsterdam City Card 72h (€105/adult — 70+ attractions)', highlight: false },
      { text: 'Rijksmuseum — free for your children', highlight: true },
      { text: 'Full family bike hire including cargo bike', highlight: false },
      { text: 'NEMO Science Museum (5 floors, hands-on)', highlight: false },
      { text: 'Artis Royal Zoo — Europe\'s oldest urban zoo', highlight: false },
      { text: 'Day trip to Zaanse Schans windmill village', highlight: false },
      { text: 'VEDT curated daily activity cards', highlight: false },
      { text: 'Annual Pillow Fight, Vondelpark — free', highlight: true },
    ],
    ideal: 'Families who want a fully planned trip without the luxury price',
  },
  {
    id: 'refined-discoverer',
    name: 'The Refined Discoverer',
    badge: 'Most Popular',
    price: '£280',
    priceLabel: 'from £280 per person / day',
    tagline: 'The sweet spot — comfort, character, and genuine Dutch soul.',
    description: 'Boutique canal-side accommodation, private guided experiences, and expert curation from VEDT\'s Amsterdam concierge team. The package most families choose when they want the real Amsterdam without compromise.',
    color: 'border-gold',
    accentColor: 'text-gold',
    badgeBg: 'bg-gold',
    ctaStyle: 'bg-gold text-navy hover:bg-gold-light',
    featured: true,
    img: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=900&q=85&auto=format&fit=crop',
    includes: [
      { text: 'Boutique canal-side hotel in the UNESCO ring', highlight: false },
      { text: 'Private guided canal boat tour — 2 hours', highlight: false },
      { text: 'Rijksmuseum priority access — children free', highlight: true },
      { text: 'Artisan cheese-making workshop in Gouda', highlight: false },
      { text: 'Private Jordaan cycling tour through secret hofjes', highlight: false },
      { text: 'Dutch cooking class — poffertjes & stroopwafels', highlight: false },
      { text: 'Keukenhof VIP entry (spring — adults €20, children €10)', highlight: false },
      { text: 'VEDT concierge available 24/7', highlight: false },
      { text: 'All museums free for children', highlight: true },
    ],
    ideal: 'Families wanting a premium experience — the most-requested tier',
  },
  {
    id: 'connoisseur',
    name: 'The Connoisseur',
    badge: 'Bespoke',
    price: '£750',
    priceLabel: 'from £750 per person / day',
    tagline: 'Perfection is the only brief.',
    description: 'An entirely bespoke Amsterdam experience — private canal houses, after-hours museum access, Michelin-starred dining, and a dedicated VEDT family concierge from arrival to departure. Nothing is shared. Nothing is standard.',
    color: 'border-lux-c',
    accentColor: 'text-lux-c',
    badgeBg: 'bg-lux-c',
    ctaStyle: 'bg-navy border border-gold/50 text-white hover:bg-gold hover:text-navy hover:border-gold',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85&auto=format&fit=crop',
    includes: [
      { text: 'Private 17th-century canal house with butler', highlight: false },
      { text: 'Rijksmuseum after-hours private family tour', highlight: true },
      { text: 'Bespoke electric canal boat — private chef on board', highlight: false },
      { text: 'Helicopter transfer from Schiphol — direct to city', highlight: false },
      { text: 'Keukenhof at sunrise — before public opening', highlight: false },
      { text: 'Michelin-starred family dinner at Ciel Bleu', highlight: false },
      { text: 'Personal VEDT family concierge embedded throughout', highlight: false },
      { text: 'Tailor-made children\'s treasure trail — printed & bound', highlight: false },
      { text: 'All children\'s experiences — completely free', highlight: true },
    ],
    ideal: 'Families for whom the experience matters more than the budget',
  },
];

export default function TiersSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-20 md:py-28 px-4 md:px-12 bg-soft">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Choose Your Journey"
          title="Four tiers of"
          titleEm="Amsterdam magic"
          description="From self-guided adventures to total immersion — every family deserves Amsterdam. All packages based on a family of 4 (2 adults, 2 children under 18). Children's museum admissions are free across all tiers."
          center
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {tiers.map((tier, i) => (
            <RevealCard key={tier.id} delay={i * 0.1}>
              <div
                className={`relative flex flex-col h-full bg-white border-2 transition-all duration-400 overflow-hidden ${tier.featured ? 'border-gold shadow-2xl shadow-gold/10 -translate-y-3' : 'border-navy/10 hover:-translate-y-2 hover:shadow-xl'}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={tier.img}
                    alt={tier.name}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{ transform: hovered === i ? 'scale(1.07)' : 'scale(1.0)' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
                  <span className={`absolute top-3 left-3 px-3 py-1 text-[0.55rem] font-semibold tracking-[0.18em] uppercase text-white ${tier.badgeBg}`}>
                    {tier.badge}
                  </span>
                  {tier.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-gold text-navy px-2.5 py-1 text-[0.55rem] font-semibold tracking-wider uppercase">
                      <Star className="w-2.5 h-2.5" /> Top Pick
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-4">
                    <p className="text-[0.58rem] tracking-[0.2em] uppercase text-muted-foreground mb-1">From</p>
                    <div className={`font-display text-4xl font-light ${tier.accentColor}`}>{tier.price}</div>
                    <p className="text-[0.68rem] text-muted-foreground">{tier.priceLabel}</p>
                  </div>

                  <h3 className="font-display text-xl text-navy mb-1">{tier.name}</h3>
                  <p className="text-[0.75rem] text-muted-foreground italic mb-3 leading-relaxed">"{tier.tagline}"</p>
                  <p className="text-[0.78rem] text-foreground/70 leading-relaxed mb-4">{tier.description}</p>

                  <div className="h-px bg-navy/8 mb-4" />

                  <ul className="space-y-2.5 flex-1">
                    {tier.includes.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-[0.78rem] leading-relaxed">
                        <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${f.highlight ? 'text-free-c' : 'text-gold'}`} />
                        <span className={f.highlight ? 'text-free-c font-semibold' : 'text-foreground/75'}>
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-navy/6">
                    <p className="text-[0.68rem] text-muted-foreground italic mb-4">Ideal for: {tier.ideal}</p>
                    <Link
                      to="/plan"
                      className={`flex items-center justify-center gap-2 py-3 text-[0.7rem] font-medium tracking-[0.15em] uppercase transition-all ${tier.ctaStyle}`}
                    >
                      {tier.featured ? 'Enquire Now' : 'Start Planning'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[0.78rem] text-muted-foreground mt-10 italic"
        >
          All prices are guide rates for a family of 4 (2 adults, 2 children). Your VEDT concierge will confirm exact pricing based on dates, occupancy, and seasonal availability.
        </motion.p>
      </div>
    </section>
  );
}