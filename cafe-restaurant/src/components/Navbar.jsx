import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Coffee } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'Heritage', href: '#about' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Private', href: '#private' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled || isMobileMenuOpen ? 'bg-white py-4 shadow-lg border-b border-gray-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Coffee size={32} className={(isScrolled || isMobileMenuOpen) ? "text-primary-600" : "text-primary-400"} />
            <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${(isScrolled || isMobileMenuOpen) ? 'text-gray-900' : 'text-white'}`}>
               LUXE CAFE
            </span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${isScrolled ? 'text-gray-600 hover:text-primary-600' : 'text-white/90 hover:text-primary-400'}`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-[10px] font-bold transition-all ${isScrolled ? 'bg-primary-600 text-white shadow-md' : 'bg-primary-700 text-white'}`}
            >
              Book Table
            </motion.button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={(isScrolled || isMobileMenuOpen) ? "text-gray-900" : "text-white"}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-[76px] z-50 bg-white"
          >
            <div className="flex flex-col items-center py-12 gap-8 h-full bg-white">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-serif font-bold text-gray-800 hover:text-primary-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 w-full max-w-xs px-4">
                <button className="w-full py-4 bg-primary-700 text-white rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl">
                  Book Table
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
