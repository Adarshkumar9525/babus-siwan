import React from 'react';
import { Award, Clock, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';

export const AboutSection = () => {
  const { about } = HOTEL_CONFIG;

  return (
    <section id="about" className="py-24 bg-[#0F0F0F] relative overflow-hidden border-b border-white/5">
      
      {/* Background Decorative Gold Accent Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-black/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>Established 2012</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            {about.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            {about.subheadline}
          </p>
        </div>

        {/* Story & Images Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden gold-border shadow-2xl group">
              <img
                src="/images/hotel/courtyard-decor.jpg"
                alt="Babu's Hotel Decor & Ambiance"
                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-serif text-xl text-white font-bold">Warm Ambiance & Courtyard</p>
                <p className="text-xs text-[#D4AF37] font-medium uppercase tracking-wider">Pal Nagar, Siwan</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-5 border border-[#D4AF37]/20 flex flex-col justify-center">
                <span className="font-serif text-4xl font-bold gold-gradient-text">2012</span>
                <span className="text-xs uppercase tracking-wider text-[#A0998E] font-medium mt-1">Brand Founded</span>
              </div>
              <div className="glass-card rounded-xl p-5 border border-[#D4AF37]/20 flex flex-col justify-center">
                <span className="font-serif text-xl font-bold text-white">Vivek Anand</span>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium mt-1">Proprietor</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-8 rounded-2xl gold-border">
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                The Babu's Heritage
              </h3>
              <p className="text-sm sm:text-base text-[#D4CEBF] font-light leading-relaxed mb-6">
                {about.story}
              </p>

              {/* Philosophy Points */}
              <div className="space-y-4 pt-2">
                {about.philosophy.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full border border-[#D4AF37]/40 bg-black/60 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-[#A0998E] font-light leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Timeline Section */}
        <div className="mt-12 bg-black/40 rounded-2xl p-8 border border-white/5">
          <h3 className="font-serif text-2xl font-bold text-white text-center mb-8">
            Our Growth Timeline
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {about.timeline.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 relative border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
                <span className="font-serif text-3xl font-bold gold-gradient-text block mb-2">
                  {item.year}
                </span>
                <p className="text-xs text-[#C8C2B8] font-light leading-relaxed">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
