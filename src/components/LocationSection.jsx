import React from 'react';
import { MapPin, Navigation, Phone, MessageSquare, Clock, Building } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';

export const LocationSection = ({ onOpenBookingModal }) => {
  const { contact } = HOTEL_CONFIG;

  return (
    <section id="location" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-b border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-black/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Prime City Location</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            Find Us in Siwan
          </h2>
          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            Conveniently situated near Rajendra Path & Fatehpur, providing easy access to major transportation hubs, markets, and business centers.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address & Quick Info Box */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-8 gold-border flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                  Property Address
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  Babu's Premium Hotel
                </h3>
                <p className="text-sm text-[#C8C2B8] font-light leading-relaxed mt-2">
                  {contact.address.fullAddress}
                </p>
              </div>

              {/* Landmarks */}
              <div className="p-4 bg-black/50 rounded-xl border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <Building className="w-4 h-4" />
                  <span className="font-semibold uppercase tracking-wider">Nearby Landmark</span>
                </div>
                <p className="text-xs text-[#A8A196]">
                  Behind Bachcha Babu Petrol Pump, New Adarsh Nagar More, Pal Nagar, Rajendra Path
                </p>
              </div>

              {/* Timings */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase text-[#A0998E] font-medium block mb-0.5">Check-In</span>
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {contact.timings.checkIn}
                  </span>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase text-[#A0998E] font-medium block mb-0.5">Check-Out</span>
                  <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {contact.timings.checkOut}
                  </span>
                </div>
              </div>

            </div>

            {/* Action CTA Buttons */}
            <div className="space-y-3 pt-6 border-t border-white/10 mt-6">
              <a
                href={HOTEL_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full gold-gradient-bg hover:opacity-95 text-black font-semibold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="py-3 rounded-xl border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call Hotel</span>
                </a>
                <a
                  href={`https://wa.me/${contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 rounded-xl border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Google Map Box */}
          <div className="lg:col-span-7 glass-card rounded-2xl overflow-hidden gold-border h-[450px] lg:h-auto min-h-[380px] relative">
            <iframe
              title="Babu's Premium Hotel Location Map"
              src={HOTEL_CONFIG.googleMapsEmbedUrl}
              className="w-full h-full border-0 filter contrast-[1.05] brightness-[0.9]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
