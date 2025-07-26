"use client"
import { useState } from 'react';
import Head from 'next/head';

const WebDevelopmentServices = () => {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const services = [
    {
      title: "Web Portals ",
      icon: "🌐",
      shortDesc: "Custom portals for customers, partners, and communities that aggregate data from multiple sources...",
      fullDesc: "QuoteNXT works with web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, and interest-based communities. Our web portals automatically aggregate data from corporate systems and become a source of up-to-date information and help for users. We create intuitive interfaces that simplify complex data interactions.",
      features: [
        "Audience-specific portal solutions",
        "Real-time data aggregation",
        "Secure access controls",
        "Custom dashboard views"
      ]
    },
    {
      title: "Corporate Websites",
      icon: "💼",
      shortDesc: "Professional websites for businesses, governmental and non-profit organizations with brand building...",
      fullDesc: "We have expert professional skilled resources with knowledge of businesses, governmental and non-profit organizations. Our team will assist you to create corporate presentation and brand building websites. We make sure our websites have an easy-to-use page editor for dynamic content management while maintaining security and performance standards.",
      features: [
        "Brand-focused design",
        "Content management system",
        "SEO optimized structure",
        "Multi-language support"
      ]
    },
    {
      title: "Ecommerce Solutions",
      icon: "🛒",
      shortDesc: "From entry-level shops to custom large-scale solutions with microservices architecture...",
      fullDesc: "We've grown the expertise from entry-level shops for startups to custom ecommerce solutions built for large-scale and high-growth businesses. We multiply business efficiency by using scalable microservices architectures and enabling high automation of all business processes. Our solutions include payment gateways, inventory management, and analytics integration.",
      features: [
        "Scalable architecture",
        "Payment gateway integration",
        "Inventory management",
        "Customer analytics"
      ]
    },
    {
      title: "Web Applications",
      icon: "📱",
      shortDesc: "Modern cross-platform applications using HTML5/JavaScript and cloud services...",
      fullDesc: "Our deep expertise in front-end technologies helps address the digital needs of various businesses. We embrace the mobile-centric web reality by creating modern cross-platform applications. As an experienced web application development service provider, we deliver functional and visually compelling business solutions using the best of modern programming languages (HTML5/JavaScript), front & back-end technologies, databases, and cloud services.",
      features: [
        "Cross-platform compatibility",
        "Cloud-native development",
        "API integrations",
        "Progressive Web App (PWA) support"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Professional Web Development Services | White Theme</title>
        <meta name="description" content="Comprehensive white-themed web development solutions for businesses" />
      </Head>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 ">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Web Development</span> Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We build high-performance digital experiences with clean, modern designs tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
  {services.map((service, index) => (
    <div 
      key={index}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer h-full flex flex-col"
      onClick={() => setActiveModal(index)}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-4xl mb-4 text-blue-600">{service.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {service.shortDesc}
        </p>
        <span className="text-blue-500 font-medium mt-auto">Read more →</span>
      </div>
    </div>
  ))}
</div>

        {/* Modal */}
     {activeModal !== null && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <span className="text-3xl mr-4 text-blue-600">
              {services[activeModal].icon}
            </span>
            <h2 className="text-2xl font-bold text-gray-800">
              {services[activeModal].title}
            </h2>
          </div>
          <button 
            onClick={() => setActiveModal(null)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Description */}
        <div className="prose prose-lg text-gray-700 mb-6">
          <p>{services[activeModal].fullDesc}</p>
        </div>

        {/* Features List */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {services[activeModal].features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
      
      </div>
    </div>
  </div>
)}



        {/* Additional Info Section */}
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Development Expertise</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-xs border border-gray-100">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Frontend Technologies</h3>
              <p className="text-gray-600">We use modern JavaScript frameworks like React, Angular, and Vue.js to create responsive, interactive user interfaces...</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-xs border border-gray-100">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">Backend Systems</h3>
              <p className="text-gray-600">Our backend solutions leverage Node.js, Python, Java, and .NET with optimized database architectures...</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-xs border border-gray-100">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">DevOps & Cloud</h3>
              <p className="text-gray-600">We implement CI/CD pipelines and deploy to AWS, Azure, and GCP with containerization and infrastructure as code...</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default WebDevelopmentServices;