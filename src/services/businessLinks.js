import { businessInfo, formatStreetAddress } from "../data/businessInfo.js"

/**
 * Google Maps directions from the written address.
 * Coordinates are left out because they have not been independently verified.
 */
export function getDirectionsUrl(address = businessInfo.address) {
  const destination = encodeURIComponent(formatStreetAddress(address))
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}
