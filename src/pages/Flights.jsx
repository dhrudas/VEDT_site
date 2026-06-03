import React from 'react';
import PageStrip from '../components/shared/PageStrip';
import FlightsCalendar from '../components/flights/FlightsCalendar';
import FlightRoutes from '../components/flights/FlightRoutes';
import FlightTips from '../components/flights/FlightTips';
import EurostarSection from '../components/flights/EurostarSection';

export default function Flights() {
  return (
    <div>
      <PageStrip
        label="VEDT Amsterdam · Getting There"
        title="Flights &"
        titleEm="Fare Calendar"
        subtitle="Find the cheapest time to fly — or take the train."
      />
      <FlightsCalendar />
      <FlightRoutes />
      <EurostarSection />
      <FlightTips />
    </div>
  );
}