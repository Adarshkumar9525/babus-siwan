import React from 'react';
import { Utensils, Sparkles, Clock, FileText, ChevronRight } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';

export const DiningSection = () => {
  const { dining } = HOTEL_CONFIG;

  return (
    <section id="dining" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-b border-white/5">
      
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-black/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Utensils className="w-3.5 h-3.5" />
            <span>Culinary Delights</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            {dining.tagline}
          </h2>
          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            {dining.description}
          </p>
        </div>

        {/* Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Main Hero Food Platter Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden gold-border shadow-2xl group">
              <img
                src={dining.images[0].url}
                alt="Signature Tandoori Feast at Babu's Hotel"
                className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold bg-black/60 px-3 py-1 rounded-full border border-[#D4AF37]/30 inline-block mb-2">
                    {dining.images[0].category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {dining.images[0].caption}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Side Cards: Lawn Dining & Menu Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Lawn Dining Card */}
            <div className="relative rounded-2xl overflow-hidden gold-border shadow-xl group h-[210px]">
              <img
                src={dining.images[1].url}
                alt="Open-Air Lawn Dining & Events"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {dining.images[1].category}
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  {dining.images[1].caption}
                </h4>
              </div>
            </div>

            {/* Menu Notice Box */}
            <div className="glass-card rounded-2xl p-6 gold-border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
                  <FileText className="w-5 h-5" />
                  <span className="font-serif text-lg font-bold text-white">Restaurant Menu</span>
                </div>
                <p className="text-xs text-[#A8A196] font-light leading-relaxed mb-4">
                  We prepare fresh Indian, Tandoori, and local specialties tailored to your taste. Full digital menu is being updated.
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/20">
                  {dining.menuStatus}
                </span>

                <a
                  href={`https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=Hello%20Babu's%20Hotel,%20please%20share%20the%20current%20restaurant%20menu%20and%20dining%20options.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white hover:text-[#D4AF37] font-medium flex items-center gap-1 transition-colors"
                >
                  <span>Enquire Menu on WhatsApp</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
