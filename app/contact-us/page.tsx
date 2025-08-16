import { Metadata } from 'next';
import ServicesHeader from "../components/WhatWeDo/Header";
import Whatwedo from '../components/WhatWeDo/Whatwedo';
import SalesforceConsulting from '../components/WhatWeDo/SalesforceConsulting';
import Management from '../components/WhatWeDo/Management';
import WebDevelopmentServices from '../components/WhatWeDo/WebDev';
import VISM from '../components/WhatWeDo/VISM';
import ITConsulting from '../components/WhatWeDo/ITConsulting';
import ContactHeader from '../components/contactus/ContactHeader';
import ContactPage from '../components/contactus/ContactPage';

export const metadata: Metadata = {
  title: "Our Services | What We Do",
  description: "Discover our comprehensive range of professional services designed to drive your business growth.",
};

export default function WhatWeDo() {
  return (
    <main className="flex flex-col">
      {/* Services Header Section */}
      <ContactHeader />
       <section className="w-full">
        <ContactPage />
      </section>
       {/* <section className="w-full">
        <ContactUsPage />
      </section> */}
      
    </main>
  );
}