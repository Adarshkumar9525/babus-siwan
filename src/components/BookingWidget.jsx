import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, BedDouble, Search, ChevronRight } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';
import { generateWhatsAppBookingUrl } from '../utils/whatsapp';

export const BookingWidget = ({ className = '', onOpenModal }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [roomType, setRoomType] = useState('Executive Deluxe Room');

  const handleCheckAvailability = (e) => {
    e.preventDefault();

    if (onOpenModal) {
      onOpenModal({ checkIn, checkOut, guests, roomType });
    } else {
      const waUrl = generateWhatsAppBookingUrl({
        checkIn,
        checkOut,
        guests,
        roomType,
        whatsappNumber: HOTEL_CONFIG.contact.whatsappNumber
      });
      window.open(waUrl, '_blank');
    }
  };

  return (
    <div className={`glass-card rounded-2xl p-4 sm:p-6 shadow-2xl border border-[#D4AF37]/30 ${className}`}>
      <form onSubmit={handleCheckAvailability}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
          
          {/* Check-In */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium flex items-center gap-1.5">
              <CalendarIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
              Check-In Date
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
            />
          </div>

          {/* Check-Out */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium flex items-center gap-1.5">
              <CalendarIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
              Check-Out Date
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
            />
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
            >
              <option value="1 Adult">1 Adult</option>
              <option value="2 Guests">2 Guests</option>
              <option value="3 Guests">3 Guests</option>
              <option value="4+ Guests / Family">4+ Guests / Family</option>
            </select>
          </div>

          {/* Room Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-medium flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-[#D4AF37]" />
              Room Selection
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
            >
              {HOTEL_CONFIG.rooms.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Action */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <button
              type="submit"
              className="w-full h-[42px] gold-gradient-bg hover:opacity-95 text-black font-semibold rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 transition-all"
            >
              <Search className="w-4 h-4" />
              <span>Check Availability</span>
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};
