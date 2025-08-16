import { Metadata } from 'next';
import WhoWeServeHeader from '../components/WhoWeServe/Header';
import WhoWeServeMain from '../components/WhoWeServe/WhoWeServeMain';


export const metadata: Metadata = {
  title: "Our Services | What We Do",
  description: "Discover our comprehensive range of professional services designed to drive your business growth.",
};

export default function WhatWeDo() {
  return (
    <main className="flex flex-col">
      {/* Services Header Section */}
      <WhoWeServeHeader />
        <section className="w-full">
        <WhoWeServeMain />
      </section> 
    
    </main>
  );
}