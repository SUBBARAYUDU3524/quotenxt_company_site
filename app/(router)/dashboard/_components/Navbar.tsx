'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

// Nav links data
const navLinks = [
  { name: 'Home', path: '/dashboard' },
  { name: 'What We Do', path: '/dashboard/what-we-do' },
  { name: 'Who We Serve', path: '/dashboard/who-we-serve' },
  { name: 'Join Our Team', path: '/dashboard/join-our-team' },
  { name: 'Contact Us', path: '/dashboard/contact-us' },
];

// Framer Motion variants
const navLinkVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { 
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 bg-white backdrop-blur-sm bg-opacity-90 ${scrolled ? 'shadow-md' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-20 ">
          {/* Premium Logo with subtle effects */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0 flex items-center"
          >
            <Link 
              href="/dashboard" 
              aria-label="Home" 
              className="flex items-center group relative"
            >
              <div className="relative h-42 w-47">
                <Image
                  src="/assets/logo.jpg"
                  alt="Company Logo"
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="(max-width: 768px) 100px, 192px"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ x: -100 }}
                  whileHover={{ x: 100 }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Premium Links */}
          <motion.ul
            className="hidden md:flex items-center space-x-1"
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.path;
              return (
                <motion.li
                  key={link.path}
      
                  initial="initial"
                  animate="animate"
                  transition={{ delay: i * 0.07 }}
                  className="relative"
                >
                  <Link
                    href={link.path}
                    className={`group flex items-center px-4 py-2 font-medium text-gray-800 transition-all duration-300 relative
                      ${isActive ? 'text-gray-900 font-semibold' : 'hover:text-gray-900'}
                    `}
                  >
                    <span className="relative z-10 flex items-center">
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="activePill"
                          className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 rounded-full"
                          transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                    </span>
                    
                    {/* Hover background effect */}
                    {!isActive && (
                      <motion.span
                        className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 -z-10"
                        transition={{ duration: 0.3 }}
                        layoutId="hoverBg"
                      />
                    )}
                    
                    {/* Subtle hover scale effect */}
                    <motion.span
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Mobile menu button - Premium style */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              whileTap={{ scale: 0.92 }}
              className="inline-flex items-center justify-center p-2 rounded-lg focus:outline-none transition-all"
              aria-label="Toggle menu"
              style={{
                background: 'linear-gradient(145deg, #f9f9f9, #ffffff)',
                boxShadow: '3px 3px 6px #e8e8e8, -3px -3px 6px #ffffff'
              }}
            >
              {isOpen ? (
                <FiX className="h-6 w-6 text-gray-700" />
              ) : (
                <FiMenu className="h-6 w-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Premium style */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { 
            height: 'auto',
            opacity: 1,
            transition: { 
              height: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }
          },
          closed: { 
            height: 0,
            opacity: 0,
            transition: { 
              height: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.1 }
            }
          }
        }}
        className="md:hidden bg-white shadow-xl rounded-b-lg overflow-hidden"
        style={{
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
        }}
      >
        <motion.div 
          className="px-4 py-3 space-y-1"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              transition: { staggerChildren: 0.05, delayChildren: 0.15 }
            },
            closed: {
              transition: { staggerChildren: 0.02, staggerDirection: -1 }
            }
          }}
        >
          {navLinks.map((link, i) => {
            const isActive = pathname === link.path;
            return (
              <motion.div
                key={link.path}
                variants={{
                  open: { 
                    opacity: 1,
                    y: 0,
                    transition: { type: 'spring', stiffness: 300, damping: 24 }
                  },
                  closed: { 
                    opacity: 0,
                    y: 10,
                    transition: { duration: 0.15 }
                  }
                }}
              >
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 relative overflow-hidden
                    ${isActive ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-700 hover:bg-gray-50'}
                  `}
                >
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex items-center"
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="mobileActivePill"
                        className="ml-2 w-2 h-2 bg-gray-900 rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.div>
                  {!isActive && (
                    <motion.div
                      className="absolute left-0 bottom-0 h-0.5 bg-gray-200 w-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1, originX: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}