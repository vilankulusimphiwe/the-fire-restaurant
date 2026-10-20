/**
 * Confirmed facts about The Fire Restaurant.
 * Keep this file as the only place these details are written.
 * Unknown details stay null so the site never shows invented information.
 */
export const businessInfo = {
  name: "The Fire Restaurant",
  tagline: "Good Food. Great Company. The Shisanyama Experience.",
  summary:
    "Enjoy African food, freshly selected meat for the braai, refreshing drinks and a game of snooker in a welcoming social atmosphere at The Fire Restaurant in Johannesburg.",
  address: {
    street: "9 Commissioner Street",
    locality: "Johannesburg",
    country: "South Africa",
    landmark: "Next to John Foster Police Station",
  },
  phone: {
    display: "084 877 3423",
    href: "tel:+27848773423",
  },
  email: null,
  whatsapp: null,
  openingHours: null,
  socialLinks: [],
}

export function formatStreetAddress(address = businessInfo.address) {
  return `${address.street}, ${address.locality}, ${address.country}`
}
