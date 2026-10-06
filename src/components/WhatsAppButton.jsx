import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';

export const WhatsAppButton = ({ onOpenBookingModal }) => {
  const { contact } = HOTEL_CONFIG;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${contact.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#128C7E] hover:bg-[#075E54] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-400/30"
          aria-label="Chat with Babu's Hotel on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 animate-pulse" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold uppercase tracking-wider pr-1">
            WhatsApp Us
          </span>
        </a>
      </div>

      {/* Mobile Sticky Quick Action Bar (Fixed Bottom Bar) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-lg border-t border-[#D4AF37]/30 p-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          
          {/* Sticky Call Button */}
          <a
            href={`tel:${contact.phoneTel}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] active:bg-[#D4AF37]/20 transition-all"
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Call Hotel</span>
          </a>

          {/* Sticky WhatsApp Button */}
          <a
            href={`https://wa.me/${contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 active:bg-emerald-500/20 transition-all"
          >
            <MessageSquare className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
          </a>

          {/* Sticky Book CTA */}
          <button
            onClick={() => onOpenBookingModal()}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl gold-gradient-bg text-black active:opacity-80 transition-all shadow-md"
          >
            <Calendar className="w-4 h-4 mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Book Stay</span>
          </button>

        </div>
      </div>
    </>
  );
};
