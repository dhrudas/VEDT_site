import React from 'react';
import PageStrip from '../components/shared/PageStrip';
import RijksFeature from '../components/experiences/RijksFeature';
import PillowFeature from '../components/experiences/PillowFeature';
import ExperiencesGrid from '../components/experiences/ExperiencesGrid';
import SeasonalEvents from '../components/experiences/SeasonalEvents';

export default function Experiences() {
    return (
        <div>
            <PageStrip
                label="VEDT Amsterdam · Family Experiences"
                title="Things families"
                titleEm="actually remember"
                subtitle="Not the tourist checklist — the moments children recount for years."
            />
            <RijksFeature />
            <PillowFeature />
            <ExperiencesGrid />
            <SeasonalEvents />
        </div>
    );
}