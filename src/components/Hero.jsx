import React from 'react';
import { Phone, MessageSquare, Calendar, ChevronDown, MapPin, Star } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';
import { BookingWidget } from './BookingWidget';

export const Hero = ({ onOpenBookingModal }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0A0A0A]">
      
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hotel/exterior-front.jpg"
          alt="Babu's Premium Hotel Siwan Exterior"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.1] transition-transform duration-10000 ease-out animate-pulse"
          style={{ animationDuration: '20s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-[#0A0A0A]" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto pt-8">
        <div className="max-w-3xl">
          
          {/* Tag & Location Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/50 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-xs uppercase tracking-widest text-[#E6E1DA] font-medium">
              Rajendra Path, Siwan, Bihar
            </span>
          </div>

          {/* Subheader / Brand */}
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase gold-gradient-text mb-3">
            Babu's Premium Hotel
          </p>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Comfort. <span className="italic font-normal text-[#D4AF37]">Elegance.</span> Hospitality.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-xl text-[#C8C2B8] font-light leading-relaxed max-w-2xl mb-8">
            Experience premium comfort and warm hospitality in the heart of Siwan. Modern rooms, attentive hosting, and delicious culinary experiences since 2012.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
            <button
              onClick={() => onOpenBookingModal()}
              className="gold-gradient-bg hover:opacity-95 text-black px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-xl shadow-[#D4AF37]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Stay</span>
            </button>

            <a
              href={`tel:${HOTEL_CONFIG.contact.phoneTel}`}
              className="px-6 py-3.5 rounded-full border border-[#D4AF37]/40 bg-black/40 hover:bg-[#D4AF37]/10 text-white font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call Hotel</span>
            </a>

            <a
              href={`https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-500/20 text-emerald-300 font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 transition-all backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>

        {/* Integrated Floating Booking Widget */}
        <div className="mt-4">
          <BookingWidget onOpenModal={onOpenBookingModal} />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 flex justify-center mt-6">
        <a
          href="#about"
          className="flex flex-col items-center gap-1 text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Explore Babu's</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

    </section>
  );
};
