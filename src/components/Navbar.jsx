import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Calendar } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';

export const Navbar = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Dining', href: '#dining' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md py-3 shadow-2xl border-b border-[#D4AF37]/20'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#hero" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-black/60 text-[#D4AF37] group-hover:border-[#D4AF37] transition-all">
              <span className="font-serif text-xl font-bold italic">B</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-wide text-white group-hover:text-[#D4AF37] transition-colors font-bold">
                Babu's
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
                Premium Hotel
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-[#E6E1DA]/80 hover:text-[#D4AF37] transition-colors font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${HOTEL_CONFIG.contact.phoneTel}`}
              className="p-2.5 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all flex items-center justify-center"
              title="Call Hotel Direct"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 transition-all flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="gold-gradient-bg hover:opacity-95 text-black px-5 py-2.5 rounded-full font-medium text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Stay</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenBookingModal()}
              className="gold-gradient-bg text-black text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#D4AF37]/30 text-[#D4AF37] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F0F0F] border-b border-[#D4AF37]/20 px-6 py-6 mt-3 shadow-2xl">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-[#E6E1DA] hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="mt-6 flex flex-col gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full gold-gradient-bg text-black font-semibold py-3 rounded-xl uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Stay via WhatsApp</span>
            </button>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <a
                href={`tel:${HOTEL_CONFIG.contact.phoneTel}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
              <a
                href={`https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-emerald-500/40 text-emerald-400 text-xs font-medium"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
