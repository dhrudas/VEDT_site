import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Packages & Prices', path: '/packages' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Flights', path: '/flights' },
  { label: 'Neighbourhoods', path: '/neighbourhoods' },
  { label: 'Plan Your Trip', path: '/plan' },
  { label: 'Kids', path: '/kids' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white/95 backdrop-blur-xl border-b border-gold/15 transition-all duration-300 ${scrolled ? 'py-2 px-4 md:px-12 shadow-lg shadow-navy/5' : 'py-3.5 px-4 md:px-12'}`}>
        <Link to="/" className="flex items-center gap-1">
          <svg viewBox="0 0 120 42" fill="none" className="h-8 w-auto">
            <text x="0" y="36" fontFamily="Georgia,serif" fontSize="42" fontWeight="700" fill="#1a2133" letterSpacing="-2">VEDT</text>
            <path d="M18 28 Q48 20 90 26" stroke="#b8973a" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
            <g transform="translate(91,19) rotate(-20)">
              <polygon points="0,4 14,0 14,8" fill="#b8973a"/>
              <polygon points="4,0 0,4 2,8 6,8 8,4" fill="#b8973a"/>
            </g>
          </svg>
        </Link>

        <ul className="hidden lg:flex items-center gap-0">
          {navLinks.map(link => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block text-[0.71rem] font-medium tracking-[0.1em] uppercase px-3.5 py-2 relative transition-colors hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-navy'}`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gold transition-transform origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0'} hover:scale-x-100`} />
              </Link>
            </li>
          ))}
          <li>
            <Link to="/plan" className="block bg-navy text-white px-5 py-2 text-[0.7rem] font-medium tracking-[0.1em] uppercase ml-2 hover:bg-gold hover:text-navy transition-colors">
              Enquire Now
            </Link>
          </li>
        </ul>

        <button className="lg:hidden p-1" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5 text-navy" /> : <Menu className="w-5 h-5 text-navy" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed top-14 left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-gold/20 z-40 flex flex-col px-6 py-4 lg:hidden">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-[0.1em] uppercase py-3 border-b border-gold/10 transition-colors hover:text-gold ${location.pathname === link.path ? 'text-gold' : 'text-navy'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}