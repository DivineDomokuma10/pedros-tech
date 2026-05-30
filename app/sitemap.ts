import { MetadataRoute } from 'next'
import { locales } from '@/src/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pedrostech.com'

  const routes = []

  // Add home page for each locale
  for (const locale of locales) {
    routes.push({
      url: locale === 'en' ? baseUrl : `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    })
  }

  return routes
}
