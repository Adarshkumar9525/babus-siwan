import React, { useState } from 'react';
import { Users, Bed, Eye, Calendar, Sparkles, MessageSquare } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';
import { RoomDetailModal } from './RoomDetailModal';

export const RoomsSection = ({ onOpenBookingModal }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBookRoom = (room) => {
    onOpenBookingModal({ roomType: room.name });
  };

  return (
    <section id="rooms" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-b border-white/5">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-black/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Accommodations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Rooms & Suites
          </h2>
          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            Elegantly appointed rooms designed to provide restful sleep, pristine hygiene, and modern amenities in Siwan.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HOTEL_CONFIG.rooms.map((room) => (
            <div
              key={room.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-white/10 group"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />

                {/* Popular Badge */}
                {room.isPopular && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    Guest Favorite
                  </div>
                )}

                {/* Quick Spec Pills */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                  <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#D4AF37]" />
                    {room.guests}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Bed className="w-3 h-3 text-[#D4AF37]" />
                    {room.bedType}
                  </span>
                </div>
              </div>

              {/* Room Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {room.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#D4AF37] font-medium tracking-wide uppercase mb-3">
                    {room.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#B0A99C] font-light leading-relaxed mb-6 line-clamp-2">
                    {room.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="text-[11px] bg-black/40 text-[#D4CEBF] px-2.5 py-1 rounded-md border border-white/5">
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="text-[11px] bg-black/40 text-[#D4AF37] px-2.5 py-1 rounded-md border border-[#D4AF37]/20">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] text-[#A0998E] uppercase tracking-wider block">Tariff</span>
                    <span className="font-serif text-lg font-bold text-white">{room.priceDisplay}</span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => handleBookRoom(room)}
                      className="flex-1 sm:flex-initial gold-gradient-bg hover:opacity-95 text-black px-4 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <RoomDetailModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
          onBookNow={(room) => handleBookRoom(room)}
        />
      )}

    </section>
  );
};
