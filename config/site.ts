export type SiteConfig = {
  key: string
  displayName: string
  title: string
  description: string
  openGraphTitle: string
  openGraphDescription: string
  logoPath: string
  logoAlt: string
  whatsappNumber: string
  whatsappMessageTitle: string
  email: string
  instagramUrl: string
  instagramHandle: string
  phoneNumbers: string[]
  hours: string
  deliveryLabel: string
  tagline: string
  footerNote: string
  shareTitle: string
  whyUs: string[]
  gaId: string
  baseUrl: string
}

const siteConfigs: Record<string, SiteConfig> = {
  flexplay: {
    key: 'flexplay',
    displayName: 'FlexPlay Jerseys',
    title: 'FlexPlay Jerseys – World Cup 2026 Collection',
    description: 'Premium World Cup 2026 jerseys – Argentina, Portugal, Brazil, France & more. Order on WhatsApp for fast delivery across India.',
    openGraphTitle: 'FlexPlay Jerseys – World Cup 2026 Collection',
    openGraphDescription: 'Premium World Cup 2026 jerseys at unbeatable prices. Order via WhatsApp.',
    logoPath: '/images/flexplay-logo.png',
    logoAlt: 'FlexPlay Jerseys',
    whatsappNumber: '919156165683',
    whatsappMessageTitle: 'New Order – FlexPlay Jerseys',
    email: 'flexplayjersey@gmail.com',
    instagramUrl: 'https://www.instagram.com/flexplay.jerseys/?hl=en',
    instagramHandle: '@flexplay.jerseys',
    phoneNumbers: ['+91 91561 65683', '+91 70580 49668'],
    hours: '10 AM – 8 PM',
    deliveryLabel: 'Free Pan India Delivery',
    tagline: 'Premium World Cup 2026 jerseys at the best prices. All orders confirmed personally on WhatsApp.',
    footerNote: 'Made with ⚽ for football fans across India',
    shareTitle: 'FlexPlay Jerseys',
    whyUs: [
      '🏅 Premium embroidered crests',
      '👕 Sizes S to XXXL',
      '🚀 Fast and Free Delivery across India',
      '💬 Personal WhatsApp support',
      '✅ Quality guaranteed',
    ],
    gaId: 'G-TTEPGP2BET',
    baseUrl: 'https://flexplay-jerseys.netlify.app',
  },
  jerseyholic: {
    key: 'jerseyholic',
    displayName: 'Jerseyholic',
    title: 'Jerseyholic – World Cup 2026 Collection',
    description: 'Premium World Cup 2026 jerseys – Argentina, Portugal, Brazil, France & more. Order on WhatsApp for fast delivery across India.',
    openGraphTitle: 'Jerseyholic – World Cup 2026 Collection',
    openGraphDescription: 'Premium World Cup 2026 jerseys at unbeatable prices. Order via WhatsApp.',
    logoPath: '/images/jerseyholic-logo.JPG',
    logoAlt: 'Jerseyholic',
    whatsappNumber: '919156165683',
    whatsappMessageTitle: 'New Order – Jerseyholic',
    email: 'jerseyholic.in@gmail.com',
    instagramUrl: 'https://www.instagram.com/jerseyholic.in/',
    instagramHandle: '@jerseyholic.in',
    phoneNumbers: ['+91 91561 65683'],
    hours: '10 AM – 8 PM',
    deliveryLabel: 'Free Pan India Delivery',
    tagline: 'Premium World Cup 2026 jerseys at the best prices. All orders confirmed personally on WhatsApp.',
    footerNote: 'Made with ⚽ for football fans across India',
    shareTitle: 'Jerseyholic',
    whyUs: [
      '🏅 Premium embroidered crests',
      '👕 Sizes S to XXXL',
      '🚀 Fast and Free Delivery across India',
      '💬 Personal WhatsApp support',
      '✅ Quality guaranteed',
    ],
    gaId: 'G-19LXX4WMFT',
    baseUrl: 'https://jerseyholic.netlify.app',
  },
}

function normalizeSiteKey(value?: string) {
  const normalized = (value || process.env.NEXT_PUBLIC_SITE_NAME || 'flexplay').toLowerCase().replace(/[^a-z]/g, '')
  if (normalized === 'jerserholic') return 'jerseyholic'
  return normalized
}

export function getSiteConfig(siteName?: string): SiteConfig {
  const key = normalizeSiteKey(siteName)
  return siteConfigs[key] || siteConfigs.flexplay
}

export const siteConfig = getSiteConfig()
