import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig';

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ['All', 'Exterior', 'Dining', 'Rooms', 'Events'];

  const filteredGallery = activeCategory === 'All'
    ? HOTEL_CONFIG.gallery
    : HOTEL_CONFIG.gallery.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0F0F0F] relative overflow-hidden border-b border-white/5">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-black/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            Hotel Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#B3ACA0] font-light leading-relaxed">
            Take a visual tour of Babu's Premium Hotel, our outdoor dining courtyard, and guest accommodations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all border ${
                activeCategory === cat
                  ? 'gold-gradient-bg text-black border-[#D4AF37] font-semibold shadow-lg shadow-[#D4AF37]/15'
                  : 'bg-black/40 text-[#A0998E] border-white/10 hover:border-[#D4AF37]/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer gold-border glass-card-hover"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="w-8 h-8 rounded-full bg-black/70 border border-white/20 text-[#D4AF37] flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-serif text-base font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4">
          
          {/* Close Lightbox */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-white/70 hover:text-[#D4AF37] p-2 rounded-full bg-black/50 border border-white/10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Previous */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 z-50 text-white/70 hover:text-[#D4AF37] p-3 rounded-full bg-black/50 border border-white/10"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 z-50 text-white/70 hover:text-[#D4AF37] p-3 rounded-full bg-black/50 border border-white/10"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl gold-border shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium">
                {filteredGallery[lightboxIndex].category}
              </span>
              <h4 className="font-serif text-xl font-bold text-white mt-1">
                {filteredGallery[lightboxIndex].title}
              </h4>
            </div>
          </div>

        </div>
      )}

    </section>
  );
};
