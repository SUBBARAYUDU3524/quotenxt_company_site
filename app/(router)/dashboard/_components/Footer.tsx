import { FaLinkedin, FaInstagram, FaArrowRight, FaPaperPlane, FaPhone, FaEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import { ReactElement } from 'react';

interface FooterLink {
  text: string;
  icon?: ReactElement;
}

const Footer = (): ReactElement => {
  // Footer data
  const quickLinks: FooterLink[] = [
    { text: 'What We Do' },
    { text: 'Who We Serve' },
    { text: 'Our Approach' },
    { text: 'Case Studies' },
    { text: 'Contact' }
  ];

  const joinLinks: FooterLink[] = [
    { text: 'Careers' },
    { text: 'Job Board' },
    { text: 'Internships' },
    { text: 'Referrals' }
  ];

  const socialIcons = [
    { icon: <FaLinkedin size={14} />, bg: 'bg-[#0077b5] hover:bg-[#006097]' },
    { icon: <FaInstagram size={14} />, bg: 'bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90' },
    { icon: <FaTwitter size={14} />, bg: 'bg-[#1DA1F2] hover:bg-[#1991db]' },
    { icon: <FaYoutube size={14} />, bg: 'bg-[#FF0000] hover:bg-[#cc0000]' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-gray-100 pt-12 pb-0 border-t border-gray-700">
      <div className="container h-auto mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
        {/* Logo + Mission */}
        <div className="group">
          <div className="inline-block mb-4 transition-transform duration-500 group-hover:scale-105">
            <Image 
              src="/assets/logo.jpg" 
              alt="QuoteNXT" 
              width={140}
              height={48}
              className="w-36 h-auto object-contain"
            />
          </div>
         <p className="text-xs leading-relaxed text-gray-300 group-hover:text-gray-100 transition-colors duration-500">
  QuoteNXT&apos;s mission is to provide a technology bridge that leads to prosperity in business for everyone — from the solopreneur with big dreams to the household name large-corporation.
</p>

          <div className="flex gap-3 mt-6">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                className={`${social.bg} p-2 rounded-full text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold flex items-center text-gray-100">
            <span className="w-2.5 h-2.5 bg-amber-400 rounded-full mr-2 shadow-[0_0_6px_1px_rgba(251,191,36,0.3)]"></span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Contact Info
            </span>
          </h2>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-3 group">
              <div className="mt-0.5 text-amber-400 group-hover:animate-pulse">
                <FaPaperPlane size={14} />
              </div>
              <address className="text-gray-300 leading-relaxed not-italic group-hover:text-white transition-colors duration-300">
                QuoteNXT Consulting Services Pvt Ltd <br />
                12A04, 13th Floor, Manjeera Trinity Corporate, <br />
                JNTU-Hitech City Road, KPHB, <br />
                Beside Lulu mall, Hyderabad
              </address>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="text-amber-400 group-hover:animate-pulse">
                <FaPhone size={14} />
              </div>
              <a href="tel:+918978776121" className="text-gray-300 hover:text-white transition-colors duration-300">
                +91 8978776121
              </a>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="text-amber-400 group-hover:animate-pulse">
                <FaEnvelope size={14} />
              </div>
              <a href="mailto:info@quotenxt.com" className="text-gray-300 hover:text-white transition-colors duration-300">
                info@quotenxt.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-5 flex items-center text-gray-100">
            <span className="w-2.5 h-2.5 bg-amber-400 rounded-full mr-2 shadow-[0_0_6px_1px_rgba(251,191,36,0.3)]"></span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Quick Links
            </span>
          </h2>
          <ul className="space-y-3">
            {quickLinks.map((link, index) => (
              <li 
                key={index}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1.5 cursor-pointer text-sm"
              >
                <FaArrowRight className="text-amber-400 text-xs transition-all duration-300 group-hover:rotate-45" />
                <span>{link.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Join Our Team + Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-5 flex items-center text-gray-100">
            <span className="w-2.5 h-2.5 bg-amber-400 rounded-full mr-2 shadow-[0_0_6px_1px_rgba(251,191,36,0.3)]"></span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-600">
              Join Our Team
            </span>
          </h2>
          <ul className="space-y-3 mb-6">
            {joinLinks.map((link, index) => (
              <li 
                key={index}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1.5 cursor-pointer text-sm"
              >
                <FaArrowRight className="text-amber-400 text-xs transition-all duration-300 group-hover:rotate-45" />
                <span>{link.text}</span>
              </li>
            ))}
          </ul>
          
          <div>
            <h3 className="text-gray-100 font-medium mb-3 text-sm">Get Updates</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-grow">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-3 py-2 text-xs rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-800 transition-all duration-300 focus:shadow-md bg-gray-100 placeholder-gray-500"
                  aria-label="Email for newsletter subscription"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <FaEnvelope className="text-gray-500 text-xs" />
                </div>
              </div>
              <button
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium px-4 py-2 rounded-md transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap flex items-center justify-center gap-1 text-xs"
                type="button"
              >
                <span>Subscribe</span>
                <FaPaperPlane className="text-white text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700 text-center py-4 text-xs font-medium text-gray-300">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-2 md:mb-0">
              Copyright © {new Date().getFullYear()} QUOTENXT | All rights reserved
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 text-xs">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 text-xs">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors duration-300 text-xs">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;