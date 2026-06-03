import React, { useState, useMemo } from 'react';
import { Minus, Plus, Calculator, Users, Calendar, Sparkles } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

const tiers = [
  { id: 'free-spirit', name: 'Free Spirit', ppd: 80, color: 'border-budget-c bg-budget-c/5', accent: 'text-budget-c' },
  { id: 'budget-explorer', name: 'Budget Explorer', ppd: 140, color: 'border-disc-c bg-disc-c/5', accent: 'text-disc-c' },
  { id: 'refined-discoverer', name: 'Refined Discoverer', ppd: 330, color: 'border-gold bg-gold/5', accent: 'text-gold', popular: true },
  { id: 'connoisseur', name: 'Connoisseur', ppd: 1050, color: 'border-lux-c bg-lux-c/5', accent: 'text-lux-c' },
];

const addOns = [
  { id: 'citycard', name: 'iAmsterdam City Card (72h)', price: 105, per: 'per adult' },
  { id: 'bikes', name: 'Family Bike Hire (per day)', price: 44, per: 'per day' },
  { id: 'cheese', name: 'Cheese Workshop, Gouda', price: 112, per: 'family of 4' },
  { id: 'cooking', name: 'Dutch Cooking Class', price: 85, per: 'per person' },
  { id: 'keukenhof', name: 'Keukenhof VIP Entry', price: 60, per: 'family of 4' },
  { id: 'canal', name: 'Private Canal Boat Tour', price: 280, per: 'per booking' },
];

export default function PriceCalculator() {
  const [selectedTier, setSelectedTier] = useState('refined-discoverer');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(2);
  const [nights, setNights] = useState(4);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const tier = tiers.find(t => t.id === selectedTier);

  const toggleAddOn = (id) => {
    setSelectedAddOns(prev => prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]);
  };

  const estimate = useMemo(() => {
    const people = adults + children;
    const base = tier.ppd * people * nights;
    const childDiscount = tier.ppd * 0.35 * children * nights;
    const addOnTotal = selectedAddOns.reduce((sum, id) => {
      const addon = addOns.find(a => a.id === id);
      if (addon.per === 'per adult') return sum + addon.price * adults;
      if (addon.per === 'per person') return sum + addon.price * people;
      if (addon.per === 'per day') return sum + addon.price * nights;
      return sum + addon.price;
    }, 0);
    const total = base - childDiscount + addOnTotal;
    return { base, childDiscount: Math.round(childDiscount), addOnTotal, total: Math.round(total), perPerson: Math.round(total / people / nights) };
  }, [selectedTier, adults, children, nights, selectedAddOns]);

  const Counter = ({ value, onChange, min = 0, max = 10, label }) => (
    <div>
      <label className="text-[0.68rem] tracking-wider uppercase text-muted-foreground block mb-2">{label}</label>
      <div className="flex items-center gap-3">
        <button onClick={() => onChange(Math.max(min, value - 1))} className="w-8 h-8 rounded-full border border-navy/15 flex items-center justify-center hover:border-gold transition-colors">
          <Minus className="w-3.5 h-3.5" />
        </button>
        <span className="font-display text-2xl font-light w-8 text-center">{value}</span>
        <button onClick={() => onChange(Math.min(max, value + 1))} className="w-8 h-8 rounded-full border border-navy/15 flex items-center justify-center hover:border-gold transition-colors">
          <Plus className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Customise Your Trip"
          title="Family Price"
          titleEm="Calculator"
          description="Configure your ideal Amsterdam trip and see an instant estimate. Adjust tier, group size, duration, and add-ons."
          center
        />

        <RevealCard className="mt-12">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8">
            {/* Controls */}
            <div className="space-y-8">
              {/* Tier Selection */}
              <div>
                <label className="text-[0.68rem] tracking-wider uppercase text-muted-foreground block mb-3">Select Your Tier</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {tiers.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTier(t.id)}
                      className={`relative p-4 rounded-lg border-2 text-left transition-all ${selectedTier === t.id ? t.color + ' shadow-md' : 'border-navy/10 hover:border-navy/25'}`}
                    >
                      {t.popular && <span className="absolute -top-2.5 right-2 text-[0.55rem] font-semibold tracking-wider uppercase bg-gold text-navy px-2 py-0.5 rounded-full">Popular</span>}
                      <div className={`font-display text-lg ${selectedTier === t.id ? t.accent : 'text-navy'}`}>{t.name}</div>
                      <div className="text-[0.72rem] text-muted-foreground mt-0.5">from £{t.ppd}/pp/day</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* People & Nights */}
              <div className="flex flex-wrap gap-8">
                <Counter label="Adults" value={adults} onChange={setAdults} min={1} max={6} />
                <Counter label="Children (under 18)" value={children} onChange={setChildren} min={0} max={8} />
                <Counter label="Nights" value={nights} onChange={setNights} min={1} max={14} />
              </div>

              {/* Add-ons */}
              <div>
                <label className="text-[0.68rem] tracking-wider uppercase text-muted-foreground block mb-3">Optional Add-Ons</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {addOns.map(a => (
                    <button
                      key={a.id}
                      onClick={() => toggleAddOn(a.id)}
                      className={`flex items-center justify-between p-3.5 rounded-lg border text-left transition-all text-sm ${selectedAddOns.includes(a.id) ? 'border-gold bg-gold/5 shadow-sm' : 'border-navy/10 hover:border-navy/20'}`}
                    >
                      <div>
                        <div className="font-medium text-navy">{a.name}</div>
                        <div className="text-[0.72rem] text-muted-foreground">{a.per}</div>
                      </div>
                      <div className="font-display text-lg text-gold font-light">€{a.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-gradient-to-br from-navy to-[#243050] rounded-xl p-6 text-white">
                <div className="flex items-center gap-2 mb-5">
                  <Calculator className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-xl font-light">Your Estimate</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60"><Users className="w-3.5 h-3.5 inline mr-1" />{adults} adults, {children} children</span>
                    <span className="text-white/60"><Calendar className="w-3.5 h-3.5 inline mr-1" />{nights} nights</span>
                  </div>

                  <div className="h-px bg-white/10 my-3" />

                  <div className="flex justify-between">
                    <span className="text-white/70">{tier.name} base</span>
                    <span>£{estimate.base.toLocaleString()}</span>
                  </div>
                  {estimate.childDiscount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Children's discount (35%)</span>
                      <span>-£{estimate.childDiscount.toLocaleString()}</span>
                    </div>
                  )}
                  {selectedAddOns.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-white/70">Add-ons ({selectedAddOns.length})</span>
                      <span>£{Math.round(estimate.addOnTotal * 0.85).toLocaleString()}</span>
                    </div>
                  )}

                  <div className="h-px bg-white/10 my-3" />

                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[0.62rem] tracking-wider uppercase text-gold">Estimated Total</div>
                      <div className="font-display text-4xl font-light text-white leading-none mt-1">£{estimate.total.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[0.62rem] text-white/40">per person / day</div>
                      <div className="font-display text-xl text-gold-light">£{estimate.perPerson}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 mt-4 p-3 bg-white/[0.06] rounded-lg">
                    <Sparkles className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-[0.72rem] text-white/60 leading-relaxed">
                      This is a guide price. Your VEDT concierge will tailor a precise quote based on your exact dates and preferences.
                    </p>
                  </div>
                </div>

                <a href="mailto:hello@vedt.com" className="block text-center mt-5 bg-gold text-navy py-3 rounded-sm text-[0.72rem] font-medium tracking-[0.15em] uppercase hover:bg-gold-light transition-colors">
                  Get Your Custom Quote
                </a>
              </div>
            </div>
          </div>
        </RevealCard>
      </div>
    </section>
  );
}