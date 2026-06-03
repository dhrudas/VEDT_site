import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0d111b] text-white/40 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-display text-xl text-white/60">VEDT</div>
        <div className="font-display text-sm text-white/45 italic text-center">
          "Where every canal is a classroom, every bridge a story."
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { label: 'Home', path: '/' },
            { label: 'Packages', path: '/packages' },
            { label: 'Experiences', path: '/experiences' },
            { label: 'Flights', path: '/flights' },
            { label: 'Neighbourhoods', path: '/neighbourhoods' },
            { label: 'Plan Your Trip', path: '/plan' },
          ].map(link => (
            <Link key={link.path} to={link.path} className="text-[0.78rem] tracking-wide hover:text-gold transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-[0.7rem]">© 2026 VEDT. All rights reserved.</div>
      </div>
    </footer>
  );
}