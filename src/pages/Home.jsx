import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhySection from '../components/home/WhySection';
import FactsSection from '../components/home/FactsSection';
import DifferentSection from '../components/home/DifferentSection';
import AmsterdamMap from '../components/home/AmsterdamMap';
import EditorialStrip from '../components/home/EditorialStrip';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhySection />
      <FactsSection />
      <DifferentSection />
      <AmsterdamMap />
      <EditorialStrip />
    </div>
  );
}