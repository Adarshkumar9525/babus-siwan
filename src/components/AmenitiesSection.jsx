import React from 'react';
import { Wifi, Wind, Car, Utensils, Bell, Tv, Zap, Sparkles, ShieldCheck } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';

// Map icon string names to Lucide icons
const iconMap = {
  Wifi: Wifi,
  Wind: Wind,
  Car: Car,
  Utensils: Utensils,
  Bell: Bell,
  Tv: Tv,
  Zap: Zap,
  Sparkles: Sparkles,
};

export const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-24 bg-[#0F0F0F] relative overflow-hidden border-b border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-black/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Modern Convenience</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Hotel Facilities & Comforts
          </h2>
          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            Essential services and amenities designed to make your stay effortless and pleasant in Siwan.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOTEL_CONFIG.amenities.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.id}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center mb-5 group-hover:border-[#D4AF37] group-hover:scale-110 transition-all">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#A8A196] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[10px] text-[#D4AF37]/80 uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Available on Premises</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on customizable info */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#807A70] italic">
            Need specific arrangements or customized stay requirements? Contact our front desk team directly.
          </p>
        </div>

      </div>
    </section>
  );
};
