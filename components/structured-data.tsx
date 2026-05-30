import { contactConfig } from '@/src/config/contact'

interface StructuredDataProps {
  locale: string
}

export function StructuredData({ locale }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pedrostech.com'

  // Organization structured data
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}#organization`,
    name: contactConfig.company.name,
    url: baseUrl,
    description: contactConfig.company.description,
    email: contactConfig.email,
    telephone: contactConfig.phone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressLocality: contactConfig.company.address,
    },
    sameAs: [
      contactConfig.social.twitter,
      contactConfig.social.linkedin,
      contactConfig.social.github,
      contactConfig.social.instagram,
    ],
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
      width: 250,
      height: 250,
    },
  }

  // Website structured data
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}#website`,
    url: baseUrl,
    name: contactConfig.company.name,
    description: contactConfig.company.description,
    inLanguage: locale,
    publisher: {
      '@id': `${baseUrl}#organization`,
    },
  }

  // BreadcrumbList structured data
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
    </>
  )
}
