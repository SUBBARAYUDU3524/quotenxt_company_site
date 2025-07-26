"use client";

import React from 'react';
import Image from 'next/image';
import { 
  FaUsers, 
  FaMobileAlt, 
  FaGlobe, 
  FaApple, 
  FaAndroid,
  FaCode,
  FaUserTie,
  FaHandshake,
  FaUserCheck,
  FaShieldAlt,
  FaArrowRight,
  FaHeadset,
  FaBolt,
  FaStar
} from 'react-icons/fa';
import mobile from "../../../../../public/assets/mobile.jpg"
import WorkForceManagement from "../../../../../public/assets/Work_Force_Management.jpg"
import WebDevlopment from "../../../../../public/assets/Mobile_Web_Development_Service_Management.jpg"

const Management = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-20">
        {/* Workforce Management Section */}
        <div className="mb-24">
          <h2 className="text-5xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center gap-4">
            <FaUsers className="text-blue-600" size={50} />
            Workforce Management
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            {!isMobile && (
              <div className="w-full md:w-1/2">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={WorkForceManagement}
                    alt="Workforce Management"
                    width={800}
                    height={450}
                    layout="responsive"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
            
            <div className="w-full md:w-1/2">
              <p className="text-lg mb-6 text-gray-600">
                We build the process of managing an organization's employees which includes hiring, training, scheduling, 
                assigning tasks and evaluating performance. It is a central component of human resource management and is 
                used to maximize efficiency and productivity by making sure the right number of employees are in the 
                right place at the right time.
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm flex-1 min-w-[200px] flex flex-col items-center gap-2 hover:shadow-md transition-shadow">
                  <FaUserTie className="text-blue-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Dedicated Agile Teams</h3>
                </div>
                
                <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm flex-1 min-w-[200px] flex flex-col items-center gap-2 hover:shadow-md transition-shadow">
                  <FaHandshake className="text-blue-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Contract to Hire (C2H)</h3>
                </div>
                
                <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm flex-1 min-w-[200px] flex flex-col items-center gap-2 hover:shadow-md transition-shadow">
                  <FaUserCheck className="text-blue-600" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">Onetime Placement</h3>
                </div>
              </div>
            </div>
            
            {isMobile && (
              <div className="w-full mt-8">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={WorkForceManagement}
                    alt="Workforce Management"
                    width={800}
                    height={450}
                    layout="responsive"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile/Web Development Service Management Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center gap-4">
            <FaMobileAlt className="text-blue-600" size={40} />
            Mobile / Web Development Service Management
          </h2>
          
          <div className={`flex ${isMobile ? 'flex-col-reverse' : 'flex-row'} items-center gap-12`}>
            <div className="w-full md:w-1/2">
              <p className="text-lg mb-6 text-gray-600">
                Mobile app development is the process of creating software applications specifically designed to run on 
                mobile devices such as smartphones and tablets. It involves a combination of technical skills, creativity, 
                and problem-solving to transform an idea or concept into a functional and user-friendly mobile app.
              </p>
              <p className="text-lg text-gray-600">
                Companies that invest in the development of mobile applications can tap into the vast potential of the 
                mobile market, reach a larger audience, and provide customers with convenient and personalized experiences.
              </p>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={WebDevlopment}
                  alt="Mobile Development"
                  width={800}
                  height={450}
                  layout="responsive"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Types of Mobile Apps Management Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 flex items-center justify-center gap-4">
            <FaCode className="text-blue-600" size={40} />
            Types of Mobile Apps Management
          </h2>
          
          <h3 className="text-2xl mb-8 text-center text-gray-600">
            There are three main types of mobile applications.
          </h3>
          
          <div className="max-w-5xl mx-auto relative mb-16">
            {/* Diagram Container */}
            <div className="w-full mb-12">
              <div className="rounded-xl overflow-hidden bg-gray-50 p-4">
                <Image
                  src={mobile}
                  alt="Mobile Apps Diagram"
                  width={1200}
                  height={600}
                  layout="responsive"
                  className="object-contain"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Progressive Web Apps */}
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-300"></div>
                <div className="relative h-full p-8 rounded-xl bg-white border border-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300 hover:border-transparent">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                      <FaGlobe size={24} className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      Progressive Web Apps
                    </h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Progressive web apps (PWAs) are web-based applications that work across platforms and devices. 
                    Accessed through browsers, they provide app-like experiences with offline functionality and 
                    push notifications.
                  </p>
                  {/* <div className="mt-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                      Web Technologies
                    </span>
                  </div> */}
                </div>
              </div>

              {/* Native Applications */}
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-300"></div>
                <div className="relative h-full p-8 rounded-xl bg-white border border-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300 hover:border-transparent">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors duration-300">
                      <div className="flex">
                        <FaApple size={20} className="text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                        <FaAndroid size={20} className="text-green-600 group-hover:text-green-700 ml-2 transition-colors duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300">
                      Native Applications
                    </h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Native apps are platform-specific applications built with languages like Swift for iOS and Kotlin for Android. 
                    They deliver superior performance and full access to device capabilities.
                  </p>
                  {/* <div className="mt-6 flex gap-2">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-green-600 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors duration-300">
                      iOS
                    </span>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-green-600 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors duration-300">
                      Android
                    </span>
                  </div> */}
                </div>
              </div>

              {/* Hybrid Applications */}
              <div className="group relative h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-50 blur-sm transition-all duration-300"></div>
                <div className="relative h-full p-8 rounded-xl bg-white border border-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300 hover:border-transparent">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-lg bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300">
                      <FaCode size={24} className="text-purple-600 group-hover:text-purple-700 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
                      Hybrid Applications
                    </h3>
                  </div>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Hybrid apps blend web and native technologies, using HTML, CSS, and JavaScript wrapped in a native container. 
                    This approach allows a single codebase to run on multiple platforms.
                  </p>
                  {/* <div className="mt-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors duration-300">
                      Cross-Platform
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
<div className="mt-24 mb-16">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">
      Trusted by Leading Businesses
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Several leading businesses choose us as their Mobile App Development Services provider for seamless application development.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Card Template - Apply this structure to all cards */}
    <div className="group flex flex-col p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
      <div className="w-16 h-16 mb-6 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
        <FaBolt className="text-blue-600 text-2xl group-hover:text-blue-700 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3"> Fast Performance</h3>
      <p className="text-gray-600 mb-6 flex-grow">
        Apps with faster response time – consistently below 3.4 seconds for optimal user experience.
      </p>
      <div className="mt-auto">
        <div className="flex items-center text-sm text-blue-600 font-medium">
          <span>Learn more</span>
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>

    {/* Brand Differentiation */}
    <div className="group flex flex-col p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
      <div className="w-16 h-16 mb-6 rounded-lg bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
        <FaStar className="text-purple-600 text-2xl group-hover:text-purple-700 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">Brand Excellence</h3>
      <p className="text-gray-600 mb-6 flex-grow">
        Sharp focus on business needs and brand differentiation to make your app stand out.
      </p>
      <div className="mt-auto">
        <div className="flex items-center text-sm text-purple-600 font-medium">
          <span>Learn more</span>
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>

    {/* Seamless UX */}
    <div className="group flex flex-col p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
      <div className="w-16 h-16 mb-6 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
        <FaUserCheck className="text-green-600 text-2xl group-hover:text-green-700 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">Perfect Flow</h3>
      <p className="text-gray-600 mb-6 flex-grow">
        Seamless UX that boosts brand reputation, keeps users engaged, fosters credibility growth.
      </p>
      <div className="mt-auto">
        <div className="flex items-center text-sm text-green-600 font-medium">
          <span>Learn more</span>
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>

    {/* 24/7 Support */}
    <div className="group flex flex-col p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
      <div className="w-16 h-16 mb-6 rounded-lg bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
        <FaHeadset className="text-orange-600 text-2xl group-hover:text-orange-700 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">Reliable Support</h3>
      <p className="text-gray-600 mb-6 flex-grow">
        24/7 dedicated QA and app support to ensure uninterrupted performance.
      </p>
      <div className="mt-auto">
        <div className="flex items-center text-sm text-orange-600 font-medium">
          <span>Learn more</span>
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Management;