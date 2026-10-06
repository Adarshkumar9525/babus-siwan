import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, BedDouble, Phone, User, MessageSquare, Send, AlertCircle } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';
import { generateWhatsAppBookingUrl } from '../utils/whatsapp';

export const BookingModal = ({ isOpen, onClose, initialData = {} }) => {
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [roomType, setRoomType] = useState('Executive Deluxe Room');
  const [specialRequest, setSpecialRequest] = useState('');

  useEffect(() => {
    if (initialData.checkIn) setCheckIn(initialData.checkIn);
    if (initialData.checkOut) setCheckOut(initialData.checkOut);
    if (initialData.guests) setGuests(initialData.guests);
    if (initialData.roomType) setRoomType(initialData.roomType);
  }, [initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const waUrl = generateWhatsAppBookingUrl({
      guestName,
      phone,
      checkIn,
      checkOut,
      guests,
      roomType,
      specialRequest,
      whatsappNumber: HOTEL_CONFIG.contact.whatsappNumber
    });

    window.open(waUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl glass-card rounded-2xl overflow-hidden gold-border shadow-2xl max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 bg-[#0E0E0E] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-black/60 text-[#D4AF37] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">Direct Booking Enquiry</h3>
              <p className="text-xs text-[#D4AF37] font-medium">Babu's Premium Hotel, Siwan</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] flex items-center justify-center transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs">
          
          {/* Informational Disclaimer Banner */}
          <div className="p-3.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#D4CEBF] leading-relaxed">
              Submitting this enquiry will immediately generate a structured WhatsApp message to our reception desk (+91 62051 91211) to confirm room availability & tariffs.
            </p>
          </div>

          {/* Guest Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-white font-medium flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <User className="w-3.5 h-3.5 text-[#D4AF37]" />
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Kumar"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-white font-medium flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Check-In & Check-Out */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-white font-medium flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                Check-In Date
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-white font-medium flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                Check-Out Date
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Guests & Room Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-white font-medium flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
                Number of Guests
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

            <div className="space-y-1.5">
              <label className="text-white font-medium flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
                <BedDouble className="w-3.5 h-3.5 text-[#D4AF37]" />
                Select Room Category
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
          </div>

          {/* Special Request */}
          <div className="space-y-1.5">
            <label className="text-white font-medium flex items-center gap-1.5 uppercase tracking-wider text-[10px]">
              <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
              Special Requests / Note (Optional)
            </label>
            <textarea
              rows={3}
              placeholder="Early check-in, extra mattress, food preferences..."
              value={specialRequest}
              onChange={(e) => setSpecialRequest(e.target.value)}
              className="w-full bg-[#181818] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full gold-gradient-bg hover:opacity-95 text-black font-semibold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/25 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send Booking Request via WhatsApp</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
