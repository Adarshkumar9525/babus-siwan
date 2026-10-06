/**
 * Centralized Editable Data File for Babu's Premium Hotel
 * All phone numbers, addresses, room details, amenities, gallery images, 
 * and dining info can easily be updated here.
 */

export const HOTEL_CONFIG = {
  name: "Babu's Premium Hotel",
  brandName: "Babu's",
  tagline: "Comfort. Elegance. Hospitality.",
  subheading: "Experience premium comfort and warm hospitality in the heart of Siwan.",
  proprietor: "Vivek Anand",
  establishedYear: 2012,
  
  contact: {
    phoneDisplay: "+91 62051 91211",
    phoneTel: "+916205191211",
    whatsappNumber: "916205191211",
    email: "info@babuspremiumhotel.com", // editable placeholder
    address: {
      line1: "Rajendra Path, near Fatehpur",
      line2: "behind Bachcha Babu Petrol Pump, New Adarsh Nagar More",
      landmark: "Pal Nagar",
      city: "Siwan",
      state: "Bihar",
      pincode: "841226",
      fullAddress: "Rajendra Path, near Fatehpur, behind Bachcha Babu Petrol Pump, New Adarsh Nagar More, Pal Nagar, Siwan, Bihar – 841226"
    },
    timings: {
      checkIn: "12:00 PM",
      checkOut: "11:00 AM"
    }
  },

  seo: {
    keywords: [
      "Hotel in Siwan",
      "Premium Hotel in Siwan",
      "Best Hotel in Siwan",
      "Hotel near Rajendra Path Siwan",
      "Hotel near Fatehpur Siwan",
      "Babu's Hotel Siwan"
    ]
  },

  // Room categories with editable placeholders
  rooms: [
    {
      id: "deluxe-room",
      name: "Executive Deluxe Room",
      tagline: "Modern Comfort for Business & Leisure",
      description: "Thoughtfully designed room equipped with modern furnishings, plush bedding, ambient lighting, and high-speed Wi-Fi for a relaxing stay in Siwan.",
      guests: "2 Adults",
      bedType: "1 Queen Bed",
      size: "240 sq.ft",
      priceDisplay: "Contact for current rates",
      isPopular: true,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
      amenities: ["Air Conditioning", "Free High-Speed Wi-Fi", "Smart Flat-TV", "Ensuite Bathroom", "24/7 Room Service", "Electric Kettle"]
    },
    {
      id: "super-deluxe",
      name: "Super Deluxe Room",
      tagline: "Spacious Luxury & Modern Amenities",
      description: "Generously spaced room offering premium mattress comfort, sleek contemporary decor, seating area, and dedicated work desk.",
      guests: "2 Adults, 1 Child",
      bedType: "1 King Bed",
      size: "310 sq.ft",
      priceDisplay: "Contact for current rates",
      isPopular: false,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
      amenities: ["Air Conditioning", "Free High-Speed Wi-Fi", "43\" Smart TV", "Luxury Bath Amenities", "Work Desk & Chair", "24/7 Room Service"]
    },
    {
      id: "premium-suite",
      name: "Babu's Signature Suite",
      tagline: "Unmatched Luxury & Elegant Living",
      description: "Our flagship suite offering an exquisite living area, master bedroom with king bed, sophisticated lighting, and priority hospitality services.",
      guests: "3 Adults",
      bedType: "1 King Bed + Extra Bed Option",
      size: "420 sq.ft",
      priceDisplay: "Contact for current rates",
      isPopular: true,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      amenities: ["Air Conditioning", "Free High-Speed Wi-Fi", "Separate Lounge Area", "50\" Smart TV", "Premium Bathrobe & Toiletries", "Priority Room Service"]
    },
    {
      id: "family-suite",
      name: "Premium Family Room",
      tagline: "Comfortable Accommodation for Families",
      description: "Ideal for family trips and groups visiting Siwan, featuring double beds, spacious layout, and high-quality room amenities.",
      guests: "4 Adults",
      bedType: "2 Queen Beds",
      size: "480 sq.ft",
      priceDisplay: "Contact for current rates",
      isPopular: false,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
      amenities: ["Air Conditioning", "Free High-Speed Wi-Fi", "Smart TV", "Large Wardrobe", "Spacious Bathroom", "Daily Housekeeping"]
    }
  ],

  // Confirmed & customizable amenities list
  amenities: [
    { id: "wifi", title: "High-Speed Wi-Fi", description: "Complimentary seamless Wi-Fi coverage across all rooms & public areas.", icon: "Wifi" },
    { id: "ac", title: "Air Conditioning", description: "Individual climate control in every room for maximum comfort.", icon: "Wind" },
    { id: "parking", title: "Secure Parking", description: "Ample on-premises parking space for car and vehicle safety.", icon: "Car" },
    { id: "dining", title: "In-House Dining", description: "Delicious fresh multi-cuisine food served hot at our restaurant or to your room.", icon: "Utensils" },
    { id: "room-service", title: "24/7 Room Service", description: "Prompt room delivery and dedicated staff assistance throughout your stay.", icon: "Bell" },
    { id: "tv", title: "Smart LED Television", description: "Entertainment units with popular satellite channels and streaming capability.", icon: "Tv" },
    { id: "power", title: "24/7 Power Backup", description: "Uninterrupted heavy-duty generator power backup for comfort without delays.", icon: "Zap" },
    { id: "housekeeping", title: "Daily Housekeeping", description: "Pristine cleanliness, fresh linen changes, and hygienic sanitization.", icon: "Sparkles" }
  ],

  // Dining Section information
  dining: {
    tagline: "Good Food. Great Moments.",
    headline: "A Culinary Experience in Siwan",
    description: "At Babu's Premium Hotel, we believe hospitality is incomplete without memorable dining. Enjoy freshly prepared local and multi-cuisine dishes in our outdoor courtyard, event space, or private dining setup.",
    menuStatus: "Menu Coming Soon", // "Menu Available" or "Menu Coming Soon"
    images: [
      { url: "/images/hotel/dining-platter.jpg", caption: "Authentic Tandoori & Kebab Platter", category: "Signature Dishes" },
      { url: "/images/hotel/dining-lawn.jpg", caption: "Open-Air Outdoor Dining & Event Atmosphere", category: "Ambience" },
      { url: "/images/hotel/courtyard-decor.jpg", caption: "Charming Courtyard Decor", category: "Decor" }
    ]
  },

  // About Section & Story
  about: {
    headline: "Crafting Premium Hospitality in Siwan Since 2012",
    subheadline: "The story of Babu's brand, founded on warmth, authentic service, and contemporary comfort.",
    story: "The Babu's journey began in 2012 under the leadership of Vivek Anand, with a vision to provide high-quality hospitality and dining experiences in Siwan. Over the years, the Babu's brand has grown into a trusted destination known for comfort, integrity, and gracious hosting. Babu's Premium Hotel represents the culmination of this legacy — offering a refined, modern hotel stay tailored for business travelers, families, and guests seeking city-center convenience near Rajendra Path.",
    philosophy: [
      { title: "Warm Hospitality", desc: "Attentive service rooted in regional warmth and professional standards." },
      { title: "Uncompromising Comfort", desc: "Spacious rooms, clean hygiene standards, and modern in-room amenities." },
      { title: "Strategic Location", desc: "Situated conveniently near Rajendra Path and Fatehpur, easily accessible for all travelers." }
    ],
    timeline: [
      { year: "2012", event: "Establishment of the Babu's brand in Siwan, laying the foundation for authentic dining & hospitality." },
      { year: "2017", event: "Expansion of dining services and hosting private celebrations and outdoor gatherings." },
      { year: "2023", event: "Conceptualization of Babu's Premium Hotel to elevate lodging standards in the city." },
      { year: "2026", event: "Presenting a modernized hotel experience with elegant accommodations and direct WhatsApp booking convenience." }
    ]
  },

  // Multi-category Gallery with real user photos included
  gallery: [
    { id: 1, title: "Hotel Front & Entrance", category: "Exterior", image: "/images/hotel/exterior-front.jpg" },
    { id: 2, title: "Outdoor Courtyard Dining", category: "Dining", image: "/images/hotel/dining-lawn.jpg" },
    { id: 3, title: "Courtyard Decorative Lighting", category: "Exterior", image: "/images/hotel/courtyard-decor.jpg" },
    { id: 4, title: "Signature Tandoori Feast", category: "Dining", image: "/images/hotel/dining-platter.jpg" },
    { id: 5, title: "Executive Deluxe Interior", category: "Rooms", image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80" },
    { id: 6, title: "Super Deluxe Suite Bedding", category: "Rooms", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80" },
    { id: 7, title: "Evening Lawn Celebrations", category: "Events", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=80" },
    { id: 8, title: "Master Suite Lounge", category: "Rooms", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80" }
  ],

  // Google Maps Embed URL
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14300.000000000002!2d84.35!3d26.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992fc7c6a999999%3A0x0!2sRajendra+Path%2C+Siwan%2C+Bihar+841226!5e0!3m2!1sen!2sin!4v1700000000000",
  
  // Directions link
  googleMapsDirectionsUrl: "https://maps.google.com/?q=Babu's+Premium+Hotel+Rajendra+Path+Siwan+Bihar"
};
