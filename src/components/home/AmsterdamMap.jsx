import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leaflet default icon paths for Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const createIcon = (color) =>
  L.divIcon({
    html: `<div style="
      width:28px;height:28px;border-radius:50% 50% 50% 0;
      background:${color};border:3px solid #fff;
      transform:rotate(-45deg);box-shadow:0 2px 8px rgba(0,0,0,0.35);
    "></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -32],
    className: '',
  });

const icons = {
  museum: createIcon('#b8973a'),
  restaurant: createIcon('#4a7c6f'),
  landmark: createIcon('#1a2133'),
  park: createIcon('#4caf50'),
  hotel: createIcon('#9b59b6'),
};

const places = [
  // Museums
  { id: 1, type: 'museum', name: 'Rijksmuseum', lat: 52.3600, lng: 4.8852, desc: 'Dutch Golden Age masterpieces. Free for under-18s.', tip: 'Book online to skip the queue.' },
  { id: 2, type: 'museum', name: 'Van Gogh Museum', lat: 52.3584, lng: 4.8811, desc: 'Largest collection of Van Gogh works in the world.', tip: 'Opens at 9am — arrive early.' },
  { id: 3, type: 'museum', name: 'Anne Frank House', lat: 52.3752, lng: 4.8839, desc: 'The hiding place. Essential for teenagers.', tip: 'Tickets must be booked online in advance.' },
  { id: 4, type: 'museum', name: 'NEMO Science Museum', lat: 52.3741, lng: 4.9123, desc: 'Five floors of hands-on science experiments.', tip: 'Best museum for children aged 6–14.' },
  { id: 5, type: 'museum', name: 'Stedelijk Museum', lat: 52.3580, lng: 4.8796, desc: 'Modern and contemporary art since 1874.', tip: 'Free for under-19s.' },
  { id: 6, type: 'museum', name: 'Amsterdam Museum', lat: 52.3716, lng: 4.8936, desc: 'City history from its founding to today.', tip: 'Great for context before exploring.' },
  { id: 7, type: 'museum', name: 'Royal Palace Amsterdam', lat: 52.3731, lng: 4.8926, desc: 'Opulent 17th-century city hall, now a royal palace.', tip: 'Included in City Card.' },
  { id: 8, type: 'museum', name: 'Hermitage Amsterdam', lat: 52.3668, lng: 4.9063, desc: 'Rotating exhibitions from the Russian Hermitage.', tip: 'Check current exhibitions before visiting.' },

  // Restaurants
  { id: 9, type: 'restaurant', name: 'Café de Jaren', lat: 52.3694, lng: 4.8973, desc: 'Grand café on the Amstel with stunning river views.', tip: 'Reserve a terrace table on sunny days.' },
  { id: 10, type: 'restaurant', name: 'Restaurant Ciel Bleu', lat: 52.3413, lng: 4.9160, desc: 'Two Michelin stars. Panoramic views from the 23rd floor.', tip: 'Dress smart. Book weeks ahead.' },
  { id: 11, type: 'restaurant', name: 'Moeders', lat: 52.3712, lng: 4.8787, desc: 'Beloved local spot for traditional Dutch home cooking.', tip: 'Try the stamppot and hutspot.' },
  { id: 12, type: 'restaurant', name: 'Foodhallen', lat: 52.3616, lng: 4.8716, desc: 'Indoor street food market — 21 food stalls, craft beer.', tip: 'Perfect for families — everyone finds something.' },
  { id: 13, type: 'restaurant', name: 'Rijks Restaurant', lat: 52.3600, lng: 4.8858, desc: 'Michelin-starred dining inside the Rijksmuseum.', tip: 'Book the lunch menu for great value.' },
  { id: 14, type: 'restaurant', name: 'De Kas', lat: 52.3567, lng: 4.9378, desc: 'Farm-to-table in a stunning 1926 greenhouse.', tip: 'Fixed seasonal menu — tell them dietary needs ahead.' },
  { id: 15, type: 'restaurant', name: 'Pantry', lat: 52.3616, lng: 4.8842, desc: 'Classic Dutch cuisine in a cosy setting.', tip: 'Great for traditional erwtensoep (pea soup).' },
  { id: 16, type: 'restaurant', name: 'In de Waag', lat: 52.3725, lng: 4.9000, desc: 'Candlelit dining inside a 15th-century weigh house.', tip: 'Unique atmosphere. Book ahead.' },

  // Landmarks
  { id: 17, type: 'landmark', name: 'Dam Square', lat: 52.3731, lng: 4.8931, desc: "Amsterdam's historic heart. The city's beating centre.", tip: 'Visit at dusk for the best light.' },
  { id: 18, type: 'landmark', name: 'Westerkerk', lat: 52.3745, lng: 4.8840, desc: 'Tallest church tower in Amsterdam — climb for panoramic views.', tip: 'Tower open April–October only.' },
  { id: 19, type: 'landmark', name: 'Bloemenmarkt', lat: 52.3671, lng: 4.8907, desc: 'World\'s only floating flower market on the Singel canal.', tip: 'Best visited in the morning.' },
  { id: 20, type: 'landmark', name: 'Skinny Bridge', lat: 52.3625, lng: 4.9049, desc: 'The most romantic bridge in Amsterdam. Lit at night.', tip: 'Best photographed at dusk.' },
  { id: 21, type: 'landmark', name: 'Brouwersgracht', lat: 52.3798, lng: 4.8866, desc: 'Most beautiful canal street in Amsterdam.', tip: 'Walk the full length early morning.' },
  { id: 22, type: 'landmark', name: 'Leidseplein', lat: 52.3643, lng: 4.8827, desc: 'Lively square — theatres, street performers, cafés.', tip: 'Buzzing from 5pm onwards.' },

  // Parks
  { id: 23, type: 'park', name: 'Vondelpark', lat: 52.3582, lng: 4.8690, desc: '47 hectares of parkland. Free concerts all summer.', tip: 'Rent bikes at the entrance.' },
  { id: 24, type: 'park', name: 'Amsterdamse Bos', lat: 52.3141, lng: 4.8492, desc: '1,000-hectare forest just south of the city.', tip: 'Hire a boat on the lake.' },
  { id: 25, type: 'park', name: 'Hortus Botanicus', lat: 52.3664, lng: 4.9078, desc: 'One of the oldest botanical gardens in the world (1638).', tip: 'Butterfly greenhouse open year-round.' },
  { id: 26, type: 'park', name: 'Sarphatipark', lat: 52.3543, lng: 4.8961, desc: 'Quiet neighbourhood park in De Pijp. Local favourite.', tip: 'Combine with Albert Cuyp Market nearby.' },

  // Hotels
  { id: 27, type: 'hotel', name: 'Waldorf Astoria Amsterdam', lat: 52.3631, lng: 4.8888, desc: 'Six connected 17th-century canal houses. Ultimate luxury.', tip: 'Book the canal-view suite for a once-in-a-lifetime stay.' },
  { id: 28, type: 'hotel', name: 'Hotel V Nesplein', lat: 52.3701, lng: 4.8966, desc: 'Boutique design hotel in the heart of the city.', tip: 'Great rooftop bar for sunset drinks.' },
  { id: 29, type: 'hotel', name: 'Pulitzer Amsterdam', lat: 52.3762, lng: 4.8834, desc: '25 restored canal houses — one of the most romantic hotels in Europe.', tip: 'Book a canal-facing room.' },
  { id: 30, type: 'hotel', name: 'INK Hotel Amsterdam', lat: 52.3728, lng: 4.8942, desc: 'A former newspaper printing house turned luxury design hotel.', tip: 'Central location, five minutes from Dam Square.' },
  { id: 31, type: 'hotel', name: 'Hotel de l\'Europe', lat: 52.3684, lng: 4.9003, desc: 'Legendary five-star on the Amstel river since 1896.', tip: 'The Amstel Suite terrace is extraordinary.' },
  { id: 32, type: 'hotel', name: 'Sir Adam Hotel', lat: 52.3804, lng: 4.9004, desc: 'Rock-and-roll rooftop hotel in the iconic A\'DAM Tower.', tip: 'Rooftop swing over the city! Best city views.' },
  { id: 33, type: 'hotel', name: 'Hotel Okura Amsterdam', lat: 52.3413, lng: 4.9160, desc: 'Japanese luxury — two Michelin-star restaurant on site.', tip: 'The 23rd-floor Ciel Bleu is unmissable.' },
];

const categories = [
  { type: 'museum', label: 'Museums', color: '#b8973a', link: '/experiences' },
  { type: 'restaurant', label: 'Restaurants', color: '#4a7c6f', link: '/experiences' },
  { type: 'landmark', label: 'Landmarks', color: '#1a2133', link: '/neighbourhoods' },
  { type: 'park', label: 'Parks & Nature', color: '#4caf50', link: '/neighbourhoods' },
  { type: 'hotel', label: 'Hotels', color: '#9b59b6', link: '/plan' },
];

function FlyTo({ lat, lng }) {
  const map = useMap();
  React.useEffect(() => {
    map.flyTo([lat, lng], 16, { duration: 1.2 });
  }, [lat, lng]);
  return null;
}

export default function AmsterdamMap() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState(null);
  const [flyTarget, setFlyTarget] = useState(null);

  const filtered = filter === 'all' ? places : places.filter(p => p.type === filter);

  const handlePlaceClick = (place) => {
    setSelected(place.id);
    setFlyTarget({ lat: place.lat, lng: place.lng });
  };

  return (
    <section className="py-20 md:py-28 bg-soft">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[0.68rem] font-medium tracking-[0.25em] uppercase text-gold mb-3">Explore Amsterdam</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy leading-[1.1]">
            The City, <em className="italic text-gold-light">Mapped</em>
          </h2>
          <div className="w-10 h-px bg-gold mt-4 mb-6" />
          <p className="text-sm text-foreground/65 max-w-xl">
            Every restaurant, museum, landmark, and park your family needs — all in one place.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase font-medium border transition-all ${
              filter === 'all' ? 'bg-navy text-white border-navy' : 'bg-white text-navy border-navy/20 hover:border-navy/60'
            }`}
          >
            All Places
          </button>
          {categories.map(c => (
            <button
              key={c.type}
              onClick={() => setFilter(c.type)}
              className={`px-4 py-1.5 text-[0.68rem] tracking-[0.14em] uppercase font-medium border transition-all flex items-center gap-2 ${
                filter === c.type ? 'text-white border-transparent' : 'bg-white text-navy border-navy/20 hover:border-navy/60'
              }`}
              style={filter === c.type ? { backgroundColor: c.color, borderColor: c.color } : {}}
            >
              <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: filter === c.type ? 'white' : c.color }} />
              {c.label}
            </button>
          ))}
        </div>

        {/* Map + Sidebar layout */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-4 h-[580px]">
          {/* Map */}
          <div className="relative rounded-sm overflow-hidden shadow-lg border border-navy/10">
            <MapContainer
              center={[52.3676, 4.9041]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              />
              {flyTarget && <FlyTo lat={flyTarget.lat} lng={flyTarget.lng} />}
              {filtered.map(place => (
                <Marker
                  key={place.id}
                  position={[place.lat, place.lng]}
                  icon={icons[place.type]}
                  eventHandlers={{ click: () => setSelected(place.id === selected ? null : place.id) }}
                >
                  <Popup>
                    <div className="font-body min-w-[180px]">
                      <div className="text-[0.6rem] tracking-[0.18em] uppercase font-semibold mb-0.5"
                        style={{ color: categories.find(c => c.type === place.type)?.color }}>
                        {place.type}
                      </div>
                      <strong className="text-navy text-sm block mb-1">{place.name}</strong>
                      <p className="text-xs text-gray-600 leading-relaxed mb-1">{place.desc}</p>
                      <p className="text-[0.7rem] text-amber-700 italic">{place.tip}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Sidebar list */}
          <div className="bg-white border border-navy/10 overflow-y-auto rounded-sm">
            <div className="p-4 border-b border-navy/8 sticky top-0 bg-white z-10">
              <p className="text-[0.62rem] tracking-[0.2em] uppercase text-gold font-medium">
                {filtered.length} Places
              </p>
            </div>
            <div>
              {filtered.map((place, i) => {
                const cat = categories.find(c => c.type === place.type);
                return (
                  <motion.button
                    key={place.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03 }}
                    onClick={() => handlePlaceClick(place)}
                    className={`w-full text-left px-4 py-3 border-b border-navy/6 hover:bg-soft transition-colors flex items-start gap-3 ${
                      selected === place.id ? 'bg-soft border-l-2' : 'border-l-2 border-l-transparent'
                    }`}
                    style={selected === place.id ? { borderLeftColor: cat?.color } : {}}
                  >
                    <span className="mt-1 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: cat?.color }} />
                    <div className="min-w-0">
                      <p className="text-[0.78rem] font-medium text-navy leading-snug">{place.name}</p>
                      <p className="text-[0.68rem] text-muted-foreground leading-relaxed mt-0.5 line-clamp-2">{place.desc}</p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legend with links */}
        <div className="flex flex-wrap gap-4 mt-4">
          {categories.map(c => (
            <Link
              key={c.type}
              to={c.link}
              className="flex items-center gap-2 text-[0.68rem] font-medium border border-navy/10 bg-white px-3 py-1.5 rounded-full hover:border-navy/40 transition-colors group"
              style={{ color: c.color }}
            >
              <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: c.color }} />
              {c.label}
              <span className="text-navy/30 group-hover:text-navy/60 transition-colors">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}