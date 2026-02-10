import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Matcha Mastery', href: '#matcha' },
    { name: 'Menu', href: '#menu' },
    { name: 'How to Grab', href: '#grab' },
    { name: 'Hours', href: '#hours' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Script Style */}
          <a href="#" className="logo-script text-6xl text-forest hover:text-forest-light transition-colors leading-none py-2">
            Lerus
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#matcha"
              className="mark-btn green-mark text-xs font-semibold text-forest tracking-[0.15em] uppercase py-2 px-3"
            >
              Matcha Mastery
            </a>
            <a
              href="#menu"
              className="mark-btn yellow-mark text-xs font-semibold text-forest tracking-[0.15em] uppercase py-2 px-3"
            >
              Menu
            </a>
            <a
              href="#grab"
              className="mark-btn pink-mark text-xs font-semibold text-forest tracking-[0.15em] uppercase py-2 px-3"
            >
              How to Grab
            </a>
            <a
              href="#hours"
              className="mark-btn green-mark text-xs font-semibold text-forest tracking-[0.15em] uppercase py-2 px-3"
            >
              Hours
            </a>
            <a 
              href="https://food.grab.com/ph/en/restaurant/lerus-coffee-barrio-obrero-delivery/2-C6CBLBBCL2CBEJ" 
              target="_blank"
              rel="noopener noreferrer"
              className="mark-btn yellow-mark text-xs font-semibold text-forest tracking-[0.15em] uppercase py-2 px-4 ml-2"
            >
              Order on GrabFood
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-forest" />
            ) : (
              <Menu className="w-6 h-6 text-forest" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#matcha"
              className="mark-btn green-mark text-sm font-semibold text-forest tracking-[0.15em] uppercase py-2 px-4 inline-block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Matcha Mastery
            </a>
            <a
              href="#menu"
              className="mark-btn yellow-mark text-sm font-semibold text-forest tracking-[0.15em] uppercase py-2 px-4 inline-block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </a>
            <a
              href="#grab"
              className="mark-btn pink-mark text-sm font-semibold text-forest tracking-[0.15em] uppercase py-2 px-4 inline-block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How to Grab
            </a>
            <a
              href="#hours"
              className="mark-btn green-mark text-sm font-semibold text-forest tracking-[0.15em] uppercase py-2 px-4 inline-block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hours
            </a>
            <a 
              href="https://food.grab.com/ph/en/restaurant/lerus-coffee-barrio-obrero-delivery/2-C6CBLBBCL2CBEJ"
              target="_blank"
              rel="noopener noreferrer"
              className="mark-btn yellow-mark text-sm font-semibold text-forest tracking-[0.15em] uppercase py-2 px-4 mt-4 inline-block"
            >
              Order on GrabFood
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
