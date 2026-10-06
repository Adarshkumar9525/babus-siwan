import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { DiningSection } from './components/DiningSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BookingModal } from './components/BookingModal';

export function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingModalData, setBookingModalData] = useState({});

  const handleOpenBookingModal = (data = {}) => {
    setBookingModalData(data);
    setIsBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E6E1DA] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* Navigation Bar */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      <main>
        {/* Cinematic Hero */}
        <Hero onOpenBookingModal={handleOpenBookingModal} />

        {/* Brand Story & Timeline */}
        <AboutSection />

        {/* Accommodations Showcase */}
        <RoomsSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Amenities & Services */}
        <AmenitiesSection />

        {/* Dining Experience */}
        <DiningSection />

        {/* Multi-Category Photo Gallery */}
        <GallerySection />

        {/* Interactive Google Map & Location */}
        <LocationSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Direct Desk Contact & Quick Message */}
        <ContactSection onOpenBookingModal={handleOpenBookingModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Desktop Floating WhatsApp & Sticky Mobile Action Bar */}
      <WhatsAppButton onOpenBookingModal={handleOpenBookingModal} />

      {/* Direct Booking WhatsApp Enquiry Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
        initialData={bookingModalData}
      />

    </div>
  );
}

export default App;
