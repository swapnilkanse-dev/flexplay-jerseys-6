/**
 * JERSEY PRIORITY CONSTANTS
 * ═════════════════════════════════════════════════════════════════════════════
 * Define the priority order of jerseys here. These will appear first when
 * filtering by category. Update this file to change display priorities without
 * modifying any page logic.
 * 
 * Simply add/remove jersey names to control what appears first.
 */

/**
 * World Cup Priority Order
 * These jerseys appear first when viewing "All" or "World Cup" filters
 */
export const WORLD_CUP_PRIORITY: string[] = [
  'Spain 2026 Away Kit Pedri Embroidery Premium',
  'Portugal 2026 Black Kit Ronaldo Fullsleeve Polo Embroidery Premium',
  'Argentina 2026 Home Kit Messi Embroidery With Knitted Rib Premium',
  'Argentina 2026 Away Kit Messi Embroidery Premium',
  'Argentina 2026 Away Kit Messi',
  'Portugal 2026 Away Kit Ronaldo Embroidery Premium',
  'Brazil 2026 Away Kit Neymer Embroidery Premium',
  'Portugal 2026 Away Kit Ronaldo',
  'Brazil 2026 Home Kit Neymer Embroidery Premium',
  'Germany 2026 Home Kit Writz Knitted Polo Embroidery Premium',
  'Portugal 2026 Home Kit Ronaldo Embroidery Premium',
  'Argentina 2026 Home Kit Messi Embroidery Premium',
  'Spain 2026 Away Kit Pedri',
  'Brazil 2026 Home Kit Neymer',
  'Argentina 2026 Home Kit Messi',
  'France 2026 Home Kit Mbappe Polo',
  ''
]

/**
 * IPL Priority Order
 * These jerseys appear first when viewing IPL filter
 */
export const IPL_PRIORITY: string[] = [
  'India Cricket Test Jersey Polo Embroidery Premium',
  'Rcb 2026 Home Kit Virat Polo Embroidery',
  'Rcb 2026 Green Kit Virat Polo Premium',
  'Rcb 2026 Grey Striper Polo',
  'Rcb 2026 Maroon Striper Polo',
  'Chennai Super Kings 2026 Kit Dhoni Polo Embroidery Premium',
  'Chennai Super Kings 2026 Kit Dhoni Polo Premium',
  'Chennai Super Kings 2026 Kit Samson Polo Premium',
  'Mumbai Indians 2026 Kit Rohit Polo Embroidery Premium',
  'Mumbai Indians 2026 Home Kit Rohit Polo Embroidey',
  'Mumbai Indians 2026 Kit Hardik Polo Embroidery Premium',
  'Kolkata Knight Riders 2025 Kit Ajinkya',
  'Rajasthan Royals 2025 Kit Sanju Samson Polo',
]

/**
 * Clubs Priority Order
 * These jerseys appear first when viewing Clubs filter
 * Add club jersey names here to prioritize them
 */
export const CLUBS_PRIORITY: string[] = [
  // Add specific club jerseys here to prioritize them
  // Example:
  // 'Barcelona 23-24 Home Kit Pedri Embroidery Premium',
  // 'Real Madrid 25-26 Home Kit Valverde Embroidery Premium',
]

/**
 * Full Sleeve Priority Order
 * These jerseys appear first when viewing FullSleeve filter
 */
export const FULLSLEEVE_PRIORITY: string[] = [
  // Add full sleeve jersey names here to prioritize them
]

/**
 * Jackets Priority Order
 * These jerseys appear first when viewing Jackets filter
 */
export const JACKETS_PRIORITY: string[] = [
  // Add jacket names here to prioritize them
]

/**
 * F1 Priority Order
 * These jerseys appear first when viewing F1 filter
 */
export const F1_PRIORITY: string[] = [
  // Add F1 jersey names here to prioritize them
]

/**
 * Shorts Priority Order
 * These jerseys appear first when viewing Shorts filter
 */
export const SHORTS_PRIORITY: string[] = [
  // Add shorts names here to prioritize them
]

/**
 * Crop Top Priority Order
 * These jerseys appear first when viewing Crop Top filter
 */
export const CROPTOP_PRIORITY: string[] = [
  // Add crop top names here to prioritize them
]

/**
 * Global Priority for "All" view
 * Use this to control which jerseys appear first across ALL categories
 * Lists all World Cup jerseys first, then all IPL jerseys in consecutive order
 */
export const GLOBAL_PRIORITY: string[] = [
  // World Cup Jerseys (shown first)
  'Spain 2026 Away Kit Pedri Embroidery Premium',
  'Portugal 2026 Black Kit Ronaldo Fullsleeve Polo Embroidery Premium',
  'Argentina 2026 Home Kit Messi Embroidery With Knitted Rib Premium',
  'Argentina 2026 Away Kit Messi Embroidery Premium',
  'Argentina 2026 Away Kit Messi',
  'Portugal 2026 Away Kit Ronaldo Embroidery Premium',
  'Brazil 2026 Away Kit Neymer Embroidery Premium',
  'Portugal 2026 Away Kit Ronaldo',
  'Brazil 2026 Home Kit Neymer Embroidery Premium',
  'Germany 2026 Home Kit Writz Knitted Polo Embroidery Premium',
  'Portugal 2026 Home Kit Ronaldo Embroidery Premium',
  'Argentina 2026 Home Kit Messi Embroidery Premium',
  'Spain 2026 Away Kit Pedri',
  'Brazil 2026 Home Kit Neymer',
  'Argentina 2026 Home Kit Messi',
  'France 2026 Home Kit Mbappe Polo',
  'Spain 2026 Home Kit Pedri Embroidery Premium',
  'ITALY 2026 TIRO POLO EMBROIDERY PREMIUM',
  'ARGENTINA 2026 TRAINING KIT MESSI POLO EMBROIDERY PREMIUM'   ,
  
  // IPL Jerseys (shown after World Cup)
  'India Cricket Test Jersey Polo Embroidery Premium',
  'Rcb 2026 Home Kit Virat Polo Embroidery',
  'Rcb 2026 Green Kit Virat Polo Premium',
  'Rcb 2026 Grey Striper Polo',
  'Rcb 2026 Maroon Striper Polo',
  'Chennai Super Kings 2026 Kit Dhoni Polo Embroidery Premium',
  'Chennai Super Kings 2026 Kit Dhoni Polo Premium',
  'Chennai Super Kings 2026 Kit Samson Polo Premium',
  'Mumbai Indians 2026 Kit Rohit Polo Embroidery Premium',
  'Mumbai Indians 2026 Home Kit Rohit Polo Embroidey',
  'Mumbai Indians 2026 Kit Hardik Polo Embroidery Premium',
  'Kolkata Knight Riders 2025 Kit Ajinkya',
  'Rajasthan Royals 2025 Kit Sanju Samson Polo',
]

/**
 * Get priority index for a jersey across all filters
 * @param jerseyName - The name of the jersey to find priority for
 * @returns Priority index (lower = appears first) or -1 if not in priority list
 * Note: Comparison is case-insensitive for flexibility
 */
export const getPriorityIndex = (jerseyName: string): number => {
  const normalizedName = jerseyName.toLowerCase().trim()
  
  const globalIndex = GLOBAL_PRIORITY.findIndex(item => item.toLowerCase().trim() === normalizedName)
  if (globalIndex !== -1) return globalIndex

  const worldCupIndex = WORLD_CUP_PRIORITY.findIndex(item => item.toLowerCase().trim() === normalizedName)
  if (worldCupIndex !== -1) return worldCupIndex

  const clubsIndex = CLUBS_PRIORITY.findIndex(item => item.toLowerCase().trim() === normalizedName)
  if (clubsIndex !== -1) return clubsIndex

  const fullSleeveIndex = FULLSLEEVE_PRIORITY.findIndex(item => item.toLowerCase().trim() === normalizedName)
  if (fullSleeveIndex !== -1) return fullSleeveIndex

  const jacketsIndex = JACKETS_PRIORITY.findIndex(item => item.toLowerCase().trim() === normalizedName)
  if (jacketsIndex !== -1) return jacketsIndex

  const f1Index = F1_PRIORITY.findIndex(item => item.toLowerCase().trim() === normalizedName)
  if (f1Index !== -1) return f1Index

  const shortsIndex = SHORTS_PRIORITY.findIndex(item => item.toLowerCase().trim() === normalizedName)
  if (shortsIndex !== -1) return shortsIndex

  const iplIndex = IPL_PRIORITY.findIndex(item => item.toLowerCase().trim() === normalizedName)
  if (iplIndex !== -1) return iplIndex

  const cropTopIndex = CROPTOP_PRIORITY.findIndex(item => item.toLowerCase().trim() === normalizedName)
  if (cropTopIndex !== -1) return cropTopIndex

  return -1
}
