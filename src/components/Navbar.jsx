'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Chat', href: '#chatbot' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-black/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-bold text-xl text-black cursor-pointer"
        >
          QF
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm text-gray-600 hover:text-black transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-black relative w-10 h-10"
        >
          <motion.div
            animate={isMenuOpen ? 'open' : 'closed'}
            variants={{
              open: { rotate: 45, y: 8 },
              closed: { rotate: 0, y: 0 },
            }}
            className="absolute w-6 h-0.5 bg-black top-1/2 left-1/2 transform -translate-x-1/2"
          />
          <motion.div
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute w-6 h-0.5 bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2"
          />
          <motion.div
            animate={isMenuOpen ? 'open' : 'closed'}
            variants={{
              open: { rotate: -45, y: -8 },
              closed: { rotate: 0, y: 0 },
            }}
            className="absolute w-6 h-0.5 bg-black top-1/2 left-1/2 transform -translate-x-1/2"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
        className="md:hidden overflow-hidden bg-white/95 border-t border-black/10"
      >
        <div className="flex flex-col space-y-1 px-4 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-gray-700 hover:text-black transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
