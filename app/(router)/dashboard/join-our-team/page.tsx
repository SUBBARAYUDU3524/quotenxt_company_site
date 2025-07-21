import { Metadata } from 'next';


import JoinHero from '../_components/joinourteam/JoinHero';
import CultureSection from '../_components/joinourteam/CultureSection';
import LifeAtCompany from '../_components/joinourteam/LifeAtCompany';
import JobsList from '../_components/joinourteam/JobsList';
import BenefitsSection from '../_components/joinourteam/BenefitsSection';

export const metadata: Metadata = {
  title: "Our Services | What We Do",
  description: "Discover our comprehensive range of professional services designed to drive your business growth.",
};

export default function WhatWeDo() {
  return (
    <main className="flex flex-col">
      {/* Services Header Section */}
      <JoinHero />
       <section className="w-full">
        <CultureSection />
      </section>
       <section className="w-full">
        <LifeAtCompany />
      </section>
       <section className="w-full">
        <JobsList />
      </section>
       <section className="w-full">
        <BenefitsSection />
      </section>
       
    </main>
  );
}