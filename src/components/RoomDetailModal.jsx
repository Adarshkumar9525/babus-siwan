import React from 'react';
import { X, Users, Bed, Maximize2, Check, Calendar, MessageSquare, Phone } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';

export const RoomDetailModal = ({ room, onClose, onBookNow }) => {
  if (!room) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl glass-card rounded-2xl overflow-hidden gold-border shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 w-full shrink-0">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold bg-black/60 px-3 py-1 rounded-full border border-[#D4AF37]/30 inline-block mb-2">
              {room.tagline}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {room.name}
            </h3>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#E6E1DA]">
          
          {/* Quick Info Grid */}
          <div className="grid grid-cols-3 gap-3 bg-black/40 p-4 rounded-xl border border-white/5 text-center">
            <div>
              <Users className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
              <p className="text-[10px] uppercase text-[#A0998E]">Capacity</p>
              <p className="text-xs font-semibold text-white">{room.guests}</p>
            </div>
            <div>
              <Bed className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
              <p className="text-[10px] uppercase text-[#A0998E]">Bed Type</p>
              <p className="text-xs font-semibold text-white">{room.bedType}</p>
            </div>
            <div>
              <Maximize2 className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
              <p className="text-[10px] uppercase text-[#A0998E]">Room Size</p>
              <p className="text-xs font-semibold text-white">{room.size}</p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-2">About Room</h4>
            <p className="text-sm text-[#C8C2B8] font-light leading-relaxed">
              {room.description}
            </p>
          </div>

          {/* Tariff Notice */}
          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-4 flex justify-between items-center">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium">Tariff Rate</p>
              <p className="font-serif text-xl font-bold text-white">{room.priceDisplay}</p>
            </div>
            <span className="text-[11px] text-[#A0998E] italic">Rates subject to season & availability</span>
          </div>

          {/* Room Amenities */}
          <div>
            <h4 className="font-serif text-lg font-bold text-white mb-3">Room Highlights</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {room.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-black/30 px-3 py-2 rounded-lg border border-white/5 text-xs text-[#D4CEBF]">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-[#0E0E0E] border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between shrink-0">
          <a
            href={`tel:${HOTEL_CONFIG.contact.phoneTel}`}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/20 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
          >
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Call Desk</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onBookNow(room);
            }}
            className="w-full sm:w-auto gold-gradient-bg hover:opacity-95 text-black px-6 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Book {room.name} via WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
