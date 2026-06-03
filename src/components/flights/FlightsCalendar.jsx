import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Plane, TrendingDown } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';
import RevealCard from '../shared/RevealCard';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Simulated price data per month (avg return per adult from London)
const monthlyPrices = {
  0: { avg: 95, low: 42, high: 185, cheapDays: [7, 14, 21, 28], event: null },
  1: { avg: 78, low: 35, high: 145, cheapDays: [5, 12, 19, 26], event: null },
  2: { avg: 85, low: 38, high: 160, cheapDays: [4, 11, 18, 25], event: '🌷 Tulip season begins' },
  3: { avg: 110, low: 52, high: 210, cheapDays: [1, 8, 15, 22], event: '🎉 King\'s Day (27 Apr) — book early!' },
  4: { avg: 105, low: 48, high: 195, cheapDays: [6, 13, 20, 27], event: '🌷 Keukenhof peak' },
  5: { avg: 120, low: 55, high: 240, cheapDays: [3, 10, 17, 24], event: '☀️ Summer begins' },
  6: { avg: 140, low: 65, high: 280, cheapDays: [1, 8, 15, 22], event: '☀️ Peak summer — book 3+ months ahead' },
  7: { avg: 145, low: 68, high: 290, cheapDays: [5, 12, 19, 26], event: '☀️ School holiday peak' },
  8: { avg: 95, low: 40, high: 175, cheapDays: [2, 9, 16, 23], event: '🍂 Shoulder season — great value' },
  9: { avg: 82, low: 36, high: 155, cheapDays: [7, 14, 21, 28], event: '🍂 Quiet & beautiful' },
  10: { avg: 72, low: 30, high: 135, cheapDays: [4, 11, 18, 25], event: '✨ Light Festival begins' },
  11: { avg: 88, low: 38, high: 180, cheapDays: [2, 9, 16, 23], event: '🎄 Christmas markets' },
};

function generateDays(year, month) {
  const firstDay = new Date(year, month, 1);
  let startDay = firstDay.getDay() - 1;
  if (startDay < 0) startDay = 6;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const data = monthlyPrices[month];

  const days = [];
  for (let i = 0; i < startDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    const isCheap = data.cheapDays.includes(d);
    const isWeekend = new Date(year, month, d).getDay() === 0 || new Date(year, month, d).getDay() === 6;
    const basePrice = isCheap ? data.low + Math.floor(Math.random() * 15) : isWeekend ? data.avg + Math.floor(Math.random() * 40) : data.avg + Math.floor(Math.random() * 25 - 12);
    days.push({ day: d, price: Math.max(data.low, Math.min(data.high, basePrice)), isCheap, isWeekend });
  }
  return days;
}

const priceColor = (price, low, high) => {
  const ratio = (price - low) / (high - low);
  if (ratio <= 0.25) return 'bg-green-100 text-green-800 border-green-200';
  if (ratio <= 0.5) return 'bg-emerald-50 text-emerald-700 border-emerald-100';
  if (ratio <= 0.75) return 'bg-amber-50 text-amber-700 border-amber-100';
  return 'bg-red-50 text-red-700 border-red-100';
};

export default function FlightsCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear] = useState(new Date().getFullYear());

  const data = monthlyPrices[currentMonth];
  const days = useMemo(() => generateDays(currentYear, currentMonth), [currentMonth, currentYear]);

  const prevMonth = () => setCurrentMonth(m => m === 0 ? 11 : m - 1);
  const nextMonth = () => setCurrentMonth(m => m === 11 ? 0 : m + 1);

  return (
    <section className="py-16 md:py-20 px-4 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="Fare Calendar"
          title="Find the cheapest"
          titleEm="day to fly"
          description="Indicative return fares from London to Amsterdam (Schiphol). Prices update daily — greener means cheaper. Tuesdays and Wednesdays are consistently the best value."
          center
        />

        <RevealCard className="mt-12">
          <div className="max-w-4xl mx-auto">
            {/* Month Navigator */}
            <div className="flex items-center justify-between mb-6">
              <button onClick={prevMonth} className="p-2 rounded-full border border-navy/15 hover:border-gold transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="text-center">
                <h3 className="font-display text-3xl font-light text-navy">{monthNames[currentMonth]} {currentYear}</h3>
                {data.event && <p className="text-sm text-gold mt-1">{data.event}</p>}
              </div>
              <button onClick={nextMonth} className="p-2 rounded-full border border-navy/15 hover:border-gold transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-6 p-4 bg-cream rounded-lg">
              <div className="text-center">
                <div className="text-[0.62rem] tracking-wider uppercase text-muted-foreground">Cheapest</div>
                <div className="font-display text-2xl text-free-c">£{data.low}</div>
              </div>
              <div className="text-center">
                <div className="text-[0.62rem] tracking-wider uppercase text-muted-foreground">Average</div>
                <div className="font-display text-2xl text-navy">£{data.avg}</div>
              </div>
              <div className="text-center">
                <div className="text-[0.62rem] tracking-wider uppercase text-muted-foreground">Highest</div>
                <div className="font-display text-2xl text-destructive/70">£{data.high}</div>
              </div>
              <div className="text-center">
                <div className="text-[0.62rem] tracking-wider uppercase text-muted-foreground">Best Days</div>
                <div className="text-sm font-medium text-gold">Tue & Wed</div>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {dayNames.map(d => (
                <div key={d} className="text-center text-[0.65rem] font-medium tracking-wider uppercase text-muted-foreground py-2">{d}</div>
              ))}
              {days.map((day, i) => (
                <div key={i} className={`${day ? `border rounded-md p-1.5 md:p-2 text-center cursor-pointer hover:shadow-md transition-all hover:-translate-y-0.5 ${priceColor(day.price, data.low, data.high)}` : ''}`}>
                  {day && (
                    <>
                      <div className="text-[0.7rem] font-medium">{day.day}</div>
                      <div className="text-[0.65rem] font-semibold mt-0.5">£{day.price}</div>
                      {day.isCheap && <TrendingDown className="w-3 h-3 mx-auto mt-0.5 text-green-600" />}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-[0.68rem] text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-green-100 border border-green-200" /> Cheapest</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-50 border border-emerald-100" /> Good value</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-50 border border-amber-100" /> Average</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-red-50 border border-red-100" /> Peak</span>
            </div>
          </div>
        </RevealCard>
      </div>
    </section>
  );
}