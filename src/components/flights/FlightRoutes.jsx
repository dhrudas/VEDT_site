import React from 'react';
import { Plane, Clock, ArrowRight } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

const routes = [
  { from: 'London Heathrow', to: 'Amsterdam Schiphol', airlines: ['British Airways', 'KLM'], duration: '1h 15m', fromPrice: 42, dailyFlights: '20+', tip: 'Most frequencies — best for flexible dates' },
  { from: 'London Gatwick', to: 'Amsterdam Schiphol', airlines: ['easyJet', 'Transavia'], duration: '1h 10m', fromPrice: 30, dailyFlights: '8', tip: 'Cheapest fares — book 6–8 weeks ahead' },
  { from: 'London City', to: 'Amsterdam Schiphol', airlines: ['KLM Cityhopper'], duration: '1h 05m', fromPrice: 85, dailyFlights: '6', tip: 'Premium & fast — 30min check-in, city-centre location' },
  { from: 'Manchester', to: 'Amsterdam Schiphol', airlines: ['KLM', 'easyJet'], duration: '1h 20m', fromPrice: 38, dailyFlights: '5', tip: 'Strong competition keeps fares low' },
  { from: 'Edinburgh', to: 'Amsterdam Schiphol', airlines: ['KLM', 'easyJet'], duration: '1h 30m', fromPrice: 45, dailyFlights: '3', tip: 'Book early for school holidays' },
  { from: 'Birmingham', to: 'Amsterdam Schiphol', airlines: ['KLM', 'Ryanair'], duration: '1h 15m', fromPrice: 35, dailyFlights: '4', tip: 'Great value via Ryanair' },
  { from: 'Bristol', to: 'Amsterdam Schiphol', airlines: ['easyJet'], duration: '1h 20m', fromPrice: 32, dailyFlights: '2', tip: 'Limited flights — be flexible with dates' },
  { from: 'Dublin', to: 'Amsterdam Schiphol', airlines: ['Aer Lingus', 'KLM', 'Ryanair'], duration: '1h 50m', fromPrice: 40, dailyFlights: '6', tip: 'Aer Lingus for comfort, Ryanair for price' },
];

export default function FlightRoutes() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-12 bg-soft">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Routes & Airlines"
          title="Direct flights to"
          titleEm="Amsterdam"
          description="All major UK and Irish airports fly direct to Schiphol. The train from the airport to Amsterdam Centraal takes just 17 minutes."
        />

        <div className="grid md:grid-cols-2 gap-4 mt-10">
          {routes.map((r, i) => (
            <RevealCard key={r.from} delay={i * 0.05}>
              <div className="bg-white border border-navy/8 rounded-lg p-5 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Plane className="w-4 h-4 text-gold" />
                  <span className="font-medium text-navy text-sm">{r.from}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="font-medium text-navy text-sm">{r.to}</span>
                </div>

                <div className="flex flex-wrap gap-4 text-[0.78rem] text-muted-foreground mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {r.duration}</span>
                  <span>{r.dailyFlights} flights/day</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {r.airlines.map(a => (
                    <span key={a} className="text-[0.62rem] font-medium tracking-wider uppercase bg-cream text-navy px-2 py-0.5 rounded-full">{a}</span>
                  ))}
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-[0.6rem] tracking-wider uppercase text-muted-foreground">From</div>
                    <div className="font-display text-2xl text-free-c">£{r.fromPrice}</div>
                    <div className="text-[0.62rem] text-muted-foreground">return per person</div>
                  </div>
                  <p className="text-[0.72rem] text-gold italic max-w-[200px] text-right">{r.tip}</p>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}