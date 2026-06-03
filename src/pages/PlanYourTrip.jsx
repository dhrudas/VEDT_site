import React from 'react';
import { Link } from 'react-router-dom';
import PageStrip from '../components/shared/PageStrip';
import SectionHeader from '../components/shared/SectionHeader';
import RevealCard from '../components/shared/RevealCard';
import PracticalInfo from '../components/plan/PracticalInfo';
import Testimonials from '../components/plan/Testimonials';

export default function PlanYourTrip() {
    return (
        <div>
            <PageStrip
                label="VEDT Amsterdam · Travel Intel"
                title="Plan Your"
                titleEm="Perfect Trip"
                subtitle="Everything you need to know before you arrive."
            />
            <PracticalInfo />
            <Testimonials />

            {/* CTA Strip */}
            <section className="py-20 px-4 md:px-12 bg-gradient-to-br from-navy to-[#0f1724] text-center relative overflow-hidden">
                <div className="absolute -top-[60%] -left-[20%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,151,58,0.12)_0%,transparent_70%)]" />
                <div className="relative z-10 max-w-2xl mx-auto">
                    <p className="text-[0.72rem] font-medium tracking-[0.25em] uppercase text-gold mb-4">Ready to Discover Amsterdam</p>
                    <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-3">
                        Your family's <em className="italic text-gold-light">best trip yet</em><br />starts here
                    </h2>
                    <p className="text-sm text-white/55 mb-8">Four tiers. Free museums for children. An annual pillow fight in Vondelpark. Let VEDT handle everything.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="mailto:hello@vedt.com" className="bg-gold text-navy px-8 py-3.5 text-[0.78rem] font-medium tracking-[0.15em] uppercase hover:bg-gold-light hover:-translate-y-0.5 transition-all">
                            Start Planning — It's Free
                        </a>
                        <Link to="/packages" className="border border-white/45 text-white px-8 py-3.5 text-[0.78rem] font-medium tracking-[0.15em] uppercase hover:border-gold hover:text-gold-light hover:-translate-y-0.5 transition-all">
                            Compare Packages
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}