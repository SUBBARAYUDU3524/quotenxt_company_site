import { Metadata } from 'next';
import ServicesHeader from "../components/WhatWeDo/Header";
import Whatwedo from '../components/WhatWeDo/Whatwedo';
import SalesforceConsulting from '../components/WhatWeDo/SalesforceConsulting';
import Management from '../components/WhatWeDo/Management';
import WebDevelopmentServices from '../components/WhatWeDo/WebDev';
import VISM from '../components/WhatWeDo/VISM';
import ITConsulting from '../components/WhatWeDo/ITConsulting';

export const metadata: Metadata = {
  title: "Our Services | What We Do",
  description: "Discover our comprehensive range of professional services designed to drive your business growth.",
};

export default function WhatWeDo() {
  return (
    <main className="flex flex-col">
      {/* Services Header Section */}
      <ServicesHeader />
       <section className="w-full">
        <Whatwedo />
      </section>
       <section className="w-full">
        <SalesforceConsulting />
      </section>
       <section className="w-full">
        <Management />
      </section>
       <section className="w-full">
        <WebDevelopmentServices />
      </section>
       <section className="w-full">
        <VISM />
      </section>
       <section className="w-full">
        <ITConsulting />
      </section>
   
    </main>
  );
}