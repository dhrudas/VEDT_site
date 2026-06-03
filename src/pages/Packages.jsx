import React from 'react';
import PackagesHero from '../components/packages/PackagesHero';
import TiersSection from '../components/packages/TiersSection';
import ComparisonTable from '../components/packages/ComparisonTable';
import TicketPrices from '../components/packages/TicketPrices';
import PriceCalculator from '../components/packages/PriceCalculator';
import PackageCustomizer from '../components/packages/PackageCustomizer';
import SectionHeader from '../components/shared/SectionHeader';

export default function Packages() {
    return (
        <div>
            <PackagesHero />

            <div id="tiers">
                <TiersSection />
            </div>

            <PriceCalculator />

            {/* Package Customiser */}
            <section className="py-20 md:py-28 px-4 md:px-12 bg-navy relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.025]"
                     style={{ backgroundImage: 'linear-gradient(rgba(184,151,58,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(184,151,58,0.8) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
                <div className="max-w-7xl mx-auto relative z-10">
                    <SectionHeader
                        label="Build Your Itinerary"
                        title="Your bespoke"
                        titleEm="Amsterdam journey"
                        description="Answer a few questions and receive a personalised itinerary summary — crafted by our interactive journey builder."
                        light
                        center
                    />
                    <div className="mt-12">
                        <PackageCustomizer />
                    </div>
                </div>
            </section>

            <ComparisonTable />
            <TicketPrices />
        </div>
    );
}