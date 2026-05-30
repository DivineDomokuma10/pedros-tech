# Pedro's Tech - Multilingual AI Platform Landing Page

A modern, SEO-optimized landing page for Pedro's Tech built with Next.js, Next-Intl for internationalization, and Tailwind CSS.

## 🌍 Features

### Internationalization (i18n)
- **7 Language Support**: English, Spanish, French, German, Portuguese, Chinese, Arabic
- **Language Switcher**: Easy language selection in navigation
- **URL-based Routing**: Each language has its own URL prefix (e.g., `/es`, `/fr`)
- **Automatic Detection**: Browser language preference detection

### SEO Optimization
- **Dynamic Metadata**: Per-page and per-language metadata generation
- **Structured Data**: JSON-LD schema markup (Organization, LocalBusiness)
- **Sitemap Generation**: Automatic XML sitemap for all language variants
- **Robots.txt**: Search engine crawler guidelines
- **Hreflang Tags**: Proper multi-language SEO handling (automatic with next-intl)
- **OpenGraph Tags**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing previews

### Responsive Design
- Mobile-first approach
- Touch-friendly navigation
- Optimized for all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- pnpm (or npm/yarn)

### Installation

1. **Install dependencies**:
```bash
pnpm install
```

2. **Set up environment variables**:
```bash
cp .env.example .env.local
```

Edit `.env.local` and update with your actual:
- Base URL
- Contact email and phone
- Social media links

3. **Run development server**:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) and navigate to `/en` to see the site.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with i18n
│   ├── [locale]/
│   │   ├── layout.tsx          # Locale-specific layout with SEO metadata
│   │   └── page.tsx            # Home page
│   └── sitemap.ts              # Dynamic sitemap generation
├── components/
│   ├── landing/                # Landing page sections
│   │   ├── navigation.tsx
│   │   ├── hero-section.tsx
│   │   ├── footer-section.tsx
│   │   └── ...
│   └── language-switcher.tsx   # Language selection component
├── middleware.ts                # i18n middleware
├── messages/                    # Translation files
│   ├── en.json
│   ├── es.json
│   ├── fr.json
│   ├── de.json
│   ├── pt.json
│   ├── zh.json
│   └── ar.json
├── src/
│   ├── i18n.ts                 # i18n configuration
│   ├── config/
│   │   └── contact.ts          # Contact information & social links
│   └── lib/
│       └── seo.ts              # SEO utilities
└── public/
    └── robots.txt              # Search engine crawler rules
```

## 🌐 Internationalization (i18n)

### Adding a New Language

1. **Create translation file** in `messages/` directory:
```bash
cp messages/en.json messages/new-lang.json
```

2. **Translate content** in the new file

3. **Update `src/i18n.ts`**:
```typescript
export const locales = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'new-lang'] as const;

export const localeLabels: Record<Locale, string> = {
  // ... existing locales
  'new-lang': 'Language Name',
};
```

4. **Update `app/[locale]/layout.tsx`** to add metadata for new language

### Using Translations in Components

```typescript
'use client'

import { useTranslations } from 'next-intl'

export function MyComponent() {
  const t = useTranslations()
  
  return <h1>{t('hero.title')}</h1>
}
```

## 🔍 SEO Features

### Dynamic Metadata
The `app/[locale]/layout.tsx` file generates locale-specific metadata automatically:
- Page titles
- Meta descriptions
- OpenGraph tags
- Twitter cards

### Structured Data
Use the `generateStructuredData()` utility from `src/lib/seo.ts` to add JSON-LD markup:

```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateStructuredData('en', 'organization')),
  }}
/>
```

### Sitemap
Automatically generated at `/sitemap.xml`. The file `app/sitemap.ts` creates entries for all language variants.

### Robots.txt
Located at `public/robots.txt`. Configured to:
- Allow search engines to crawl all pages
- Block AI training crawlers (GPTBot, Claude-Web, etc.)
- Point to sitemap.xml

## 📞 Contact Configuration

Update `src/config/contact.ts` with your actual contact information, or use environment variables:

```typescript
// Using environment variables (recommended for sensitive data)
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE

// Social media links
const social = {
  twitter: process.env.NEXT_PUBLIC_TWITTER,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN,
  telegram: process.env.NEXT_PUBLIC_TELEGRAM,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM,
  github: process.env.NEXT_PUBLIC_GITHUB,
}
```

## 🎨 Styling

The project uses:
- **Tailwind CSS** for utility-first styling
- **Shadcn/ui** for pre-built components
- **Custom fonts**: Instrument Sans, Instrument Serif, JetBrains Mono

## 🔐 Security

- **Content Security Policy**: Configured in headers
- **AI Scraper Protection**: `robots.txt` blocks AI training crawlers
- **HTTPS**: Recommended for production deployment

## 🚀 Deployment

### Deploy to Vercel

1. **Push code to GitHub**
2. **Connect repository to Vercel**
3. **Configure environment variables** in Vercel Settings:
   - `NEXT_PUBLIC_BASE_URL`
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `NEXT_PUBLIC_CONTACT_PHONE`
   - Social media links

4. **Deploy**:
```bash
vercel
```

### Deploy Elsewhere

The site can be deployed to any Node.js hosting:
- Netlify
- AWS Amplify
- Railway
- Render

Build command: `pnpm build`
Start command: `pnpm start`

## 📊 Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS purging with Tailwind
- Font subsetting with next/font
- Automatic sitemap generation for SEO

## 🛠️ Environment Variables

Copy `.env.example` to `.env.local` and update:

```env
# SEO & Site Configuration
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# Contact Information (publicly visible - safe to expose)
NEXT_PUBLIC_CONTACT_EMAIL=your-email@domain.com
NEXT_PUBLIC_CONTACT_PHONE=+1-555-123-4567

# Social Media Links
NEXT_PUBLIC_TWITTER=https://twitter.com/yourhandle
NEXT_PUBLIC_LINKEDIN=https://linkedin.com/company/yourcompany
NEXT_PUBLIC_TELEGRAM=https://t.me/yourhandle
NEXT_PUBLIC_INSTAGRAM=https://instagram.com/yourhandle
NEXT_PUBLIC_GITHUB=https://github.com/yourorg
```

## 📝 License

This project is part of Pedro's Tech. All rights reserved.

## 🤝 Support

For issues or questions, contact: contact@pedrostech.com

---

Built with ❤️ using Next.js, Next-Intl, and Tailwind CSS
