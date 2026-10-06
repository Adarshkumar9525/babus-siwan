/**
 * Formats a clean, professional WhatsApp booking enquiry message and opens WhatsApp Web / App
 */
export const generateWhatsAppBookingUrl = ({
  guestName = '',
  phone = '',
  checkIn = '',
  checkOut = '',
  guests = '2 Guests',
  roomType = 'Executive Deluxe Room',
  specialRequest = '',
  whatsappNumber = '916205191211'
}) => {
  const messageLines = [
    `*Hello Babu's Premium Hotel,*`,
    ``,
    `I would like to enquire about room availability and tariff:`,
    ``,
    `👤 *Guest Name:* ${guestName || 'Not specified'}`,
    `📞 *Phone:* ${phone || 'Not specified'}`,
    `📅 *Check-in Date:* ${checkIn || 'To be decided'}`,
    `📅 *Check-out Date:* ${checkOut || 'To be decided'}`,
    `👥 *Number of Guests:* ${guests}`,
    `🛏️ *Room Preference:* ${roomType}`,
  ];

  if (specialRequest && specialRequest.trim() !== '') {
    messageLines.push(`📝 *Special Request:* ${specialRequest.trim()}`);
  }

  messageLines.push(
    ``,
    `Please confirm room availability and current tariff rates.`,
    `Thank you!`
  );

  const encodedText = encodeURIComponent(messageLines.join('\n'));
  return `https://wa.me/${whatsappNumber}?text=${encodedText}`;
};
