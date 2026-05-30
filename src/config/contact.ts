export const contactConfig = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'contact@pedrostech.com',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1-555-123-4567',
  social: {
    twitter: process.env.NEXT_PUBLIC_TWITTER || 'https://twitter.com/pedrostech',
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN || 'https://linkedin.com/company/pedrostech',
    telegram: process.env.NEXT_PUBLIC_TELEGRAM || 'https://t.me/pedrostech',
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || 'https://instagram.com/pedrostech',
    github: process.env.NEXT_PUBLIC_GITHUB || 'https://github.com/pedrostech',
  },
  company: {
    name: 'Pedro\'s Tech',
    description: 'Building the future of AI-powered solutions',
    address: 'San Francisco, CA',
  },
}
