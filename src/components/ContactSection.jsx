import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Mail, Calendar, Send, CheckCircle2 } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';
import { generateWhatsAppBookingUrl } from '../utils/whatsapp';

export const ContactSection = ({ onOpenBookingModal }) => {
  const { contact } = HOTEL_CONFIG;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleQuickEnquiry = (e) => {
    e.preventDefault();
    const waUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
      `Hello Babu's Premium Hotel,\n\nI have a general enquiry:\n\nName: ${name}\nPhone: ${phone}\nMessage: ${message}`
    )}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0F0F0F] relative overflow-hidden border-b border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-black/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            Contact Babu's Premium Hotel
          </h2>
          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            Our desk is available to assist you with room reservations, dining queries, and location guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Direct Call Card */}
            <div className="glass-card rounded-2xl p-6 gold-border flex items-center justify-between group hover:border-[#D4AF37]/60 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#A0998E] font-medium block">Phone Assistance</span>
                  <a href={`tel:${contact.phoneTel}`} className="font-serif text-xl sm:text-2xl font-bold text-white hover:text-[#D4AF37] transition-colors">
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${contact.phoneTel}`}
                className="px-4 py-2 rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Call Now
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-card rounded-2xl p-6 border border-emerald-500/30 flex items-center justify-between group hover:border-emerald-500/60 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-black/60 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400/80 font-medium block">WhatsApp Reception</span>
                  <a
                    href={`https://wa.me/${contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl sm:text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
              <a
                href={`https://wa.me/${contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider hover:bg-emerald-500 hover:text-black transition-all"
              >
                Message
              </a>
            </div>

            {/* Location Address Card */}
            <div className="glass-card rounded-2xl p-6 gold-border space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-black/60 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">Siwan Address</h4>
                  <p className="text-xs text-[#A0998E]">Pal Nagar, Siwan, Bihar</p>
                </div>
              </div>
              <p className="text-xs text-[#C8C2B8] font-light leading-relaxed pl-13">
                {contact.address.fullAddress}
              </p>
            </div>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={HOTEL_CONFIG.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 rounded-xl border border-white/20 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={() => onOpenBookingModal()}
                className="gold-gradient-bg text-black font-semibold py-3 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>Booking Enquiry</span>
              </button>
            </div>

          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-6 glass-card rounded-2xl p-8 gold-border">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-[#A8A196] font-light mb-6">
              Have a question about room rates, banquets, or dining? Fill out the form below.
            </p>

            <form onSubmit={handleQuickEnquiry} className="space-y-4 text-xs">
              <div>
                <label className="text-white font-medium block mb-1.5 uppercase tracking-wider text-[10px]">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-white font-medium block mb-1.5 uppercase tracking-wider text-[10px]">Mobile Number</label>
                <input
                  type="tel"
                  required
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-white font-medium block mb-1.5 uppercase tracking-wider text-[10px]">Message / Enquiry</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full gold-gradient-bg hover:opacity-95 text-black font-semibold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Enquiry via WhatsApp</span>
              </button>

              {submitted && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Opening WhatsApp with your enquiry...</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
