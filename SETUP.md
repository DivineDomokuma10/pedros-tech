# Pedro's Tech - Setup & Deployment Guide

## ✅ Build Status

The project has been successfully built with:
- **Framework**: Next.js 16 (with Turbopack)
- **Internationalization**: next-intl 4.13 (7 languages)
- **Styling**: Tailwind CSS
- **Components**: Shadcn/ui
- **Build Output**: Dynamic rendering (server-side)

**Build Result**: ✅ **SUCCESSFUL**
```
Route (app)
├ ○ /_not-found
├ ƒ /[locale]          (Dynamic - server-rendered)
└ ○ /sitemap.xml       (Static - prerendered)
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Update the following values:
```env
# Required: Set your domain
NEXT_PUBLIC_BASE_URL=https://yourdomain.com

# Contact Information (public - safe to expose)
NEXT_PUBLIC_CONTACT_EMAIL=your-email@domain.com
NEXT_PUBLIC_CONTACT_PHONE=+1-555-123-4567

# Social Media Links
NEXT_PUBLIC_TWITTER=https://twitter.com/yourhandle
NEXT_PUBLIC_LINKEDIN=https://linkedin.com/company/yourcompany
NEXT_PUBLIC_TELEGRAM=https://t.me/yourhandle
NEXT_PUBLIC_INSTAGRAM=https://instagram.com/yourhandle
NEXT_PUBLIC_GITHUB=https://github.com/yourorg
```

### 3. Run Development Server
```bash
pnpm dev
```

Visit: `http://localhost:3000` (redirects to `/en`)
- English: http://localhost:3000/en
- Spanish: http://localhost:3000/es
- French: http://localhost:3000/fr
- German: http://localhost:3000/de
- Portuguese: http://localhost:3000/pt
- Chinese: http://localhost:3000/zh
- Arabic: http://localhost:3000/ar

### 4. Build for Production
```bash
pnpm build
pnpm start
```

## 📋 What's Included

### ✨ Internationalization (i18n)
- **7 Languages Supported**:
  - English (en)
  - Spanish (es)
  - French (fr)
  - German (de)
  - Portuguese (pt)
  - Chinese (zh)
  - Arabic (ar)

- **Language Switcher**: Top navigation includes language selection
- **URL-based Routing**: Each language has its own URL (e.g., `/es`, `/fr`)
- **Translation Files**: Located in `/messages` directory
- **Dynamic Content**: All UI text is translatable

### 🔍 SEO Optimization
✅ **Complete SEO Setup**:
- Dynamic metadata per language and page
- JSON-LD structured data (Organization schema)
- Automatic XML sitemap generation (`/sitemap.xml`)
- robots.txt with AI scraper protection
- OpenGraph tags for social sharing
- Twitter Card support
- Hreflang tags (automatic with next-intl)
- Mobile-friendly responsive design

### 📱 Responsive Design
- Mobile-first approach
- Touch-friendly navigation
- Optimized for all screen sizes
- Smooth animations and transitions

### 🎨 Modern Design
- Clean, professional aesthetic
- Dark-first color scheme
- Smooth scrolling navigation
- Animated hero section
- Feature cards and testimonials
- Pricing comparison
- Call-to-action sections

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── [locale]/
│   │   ├── layout.tsx               # Locale-specific layout + SEO
│   │   ├── page.tsx                 # Home page (all languages)
│   │   └── not-found.tsx            # 404 page
│   └── sitemap.ts                   # Dynamic sitemap generation
│
├── components/
│   ├── landing/
│   │   ├── navigation.tsx           # Top nav with language switcher
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   ├── footer-section.tsx       # Links + contact info
│   │   └── ...
│   └── language-switcher.tsx        # Language selection dropdown
│
├── src/
│   ├── i18n/
│   │   ├── config.ts               # Locale list & labels
│   │   └── request.ts              # Message loading
│   ├── config/
│   │   └── contact.ts              # Contact info (email, phone, social)
│   └── lib/
│       └── seo.ts                  # SEO utilities
│
├── messages/                         # Translation files
│   ├── en.json
│   ├── es.json
│   ├── fr.json
│   ├── de.json
│   ├── pt.json
│   ├── zh.json
│   └── ar.json
│
├── public/
│   └── robots.txt                   # Search engine directives
│
├── middleware.ts                     # i18n routing
└── next.config.mjs                  # Next.js configuration
```

## 🔄 Adding New Languages

To add a new language (e.g., Italian):

1. **Create translation file**:
```bash
cp messages/en.json messages/it.json
```

2. **Update `/src/i18n/config.ts`**:
```typescript
export const locales = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'] as const

export const localeLabels: Record<Locale, string> = {
  // ... existing
  it: 'Italiano',
}
```

3. **Update `/app/[locale]/layout.tsx`** - add metadata for the new language in the `generateMetadata` function

4. **Update `/src/i18n/request.ts`** - add the language to the message loader

## 🌐 Using Translations in Components

```typescript
'use client'

import { useTranslations } from 'next-intl'

export function MyComponent() {
  const t = useTranslations()
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  )
}
```

## 📧 Contact Information

Update contact details in `/src/config/contact.ts` or via environment variables:

```typescript
// Uses environment variables if set, otherwise falls back to defaults
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL
const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE
const social = {
  twitter: process.env.NEXT_PUBLIC_TWITTER,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN,
  telegram: process.env.NEXT_PUBLIC_TELEGRAM,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM,
  github: process.env.NEXT_PUBLIC_GITHUB,
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit: Pedro's Tech multilingual site"
git push origin main
```

2. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Set Environment Variables** in Vercel Settings:
   - `NEXT_PUBLIC_BASE_URL` = your domain
   - `NEXT_PUBLIC_CONTACT_EMAIL` = contact email
   - `NEXT_PUBLIC_CONTACT_PHONE` = phone number
   - Social media links (TWITTER, LINKEDIN, etc.)

4. **Deploy**:
   - Click "Deploy"
   - Done! Your site will be live in seconds

### Deploy Elsewhere

**Build Command**:
```bash
pnpm build
```

**Start Command**:
```bash
pnpm start
```

**Node Version**: 18+ (18.17 or higher recommended)

**Platforms**:
- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

## 📊 Sitemap & SEO

**Automatic Sitemap**:
- Located at `/sitemap.xml`
- Includes all language variants
- Updates automatically on deployment
- Register with Google Search Console

**Robots.txt**:
- Located at `/public/robots.txt`
- Allows all search engines
- Blocks AI training crawlers (GPTBot, Claude-Web, etc.)
- Points to sitemap

**Submit to Search Engines**:
1. Google Search Console: https://search.google.com/search-console
2. Bing Webmaster Tools: https://www.bing.com/webmasters
3. Submit sitemap: `https://yourdomain.com/sitemap.xml`

## 🔒 Security

- ✅ Content Security Policy ready
- ✅ Protection against AI content scraping
- ✅ HTTPS recommended
- ✅ No sensitive data in client-side code
- ✅ All contact info via environment variables

## 📈 Performance

- ✅ Fast builds with Turbopack
- ✅ Code splitting automatically
- ✅ Image optimization ready
- ✅ CSS purging with Tailwind
- ✅ Font subsetting with next/font
- ✅ Dynamic rendering for i18n compatibility

## ⚙️ Customization

### Change Brand Name
Update:
- `/components/landing/navigation.tsx` - logo text
- `/src/config/contact.ts` - company name
- `/app/layout.tsx` - metadata title
- Translation files - brand references

### Change Colors
Edit `/app/globals.css`:
```css
:root {
  --background: /* your background color */
  --foreground: /* your text color */
  --muted-foreground: /* secondary text */
  /* ... other tokens ... */
}
```

### Update Content
All landing page content is in:
- `/app/[locale]/page.tsx` - imports sections
- `/components/landing/*-section.tsx` - individual sections
- `/messages/*.json` - translatable strings

## 🐛 Troubleshooting

### Development Server Won't Start
```bash
# Kill existing processes
pkill -f "next dev"
# Remove lock file
rm -rf .next/dev/lock
# Start again
pnpm dev
```

### Build Fails
```bash
# Clear cache
rm -rf .next
# Rebuild
pnpm build
```

### Translations Not Showing
- Verify message keys exist in `/messages/[locale].json`
- Check component uses `useTranslations()` (client components only)
- Ensure locale folder is `[locale]` (with brackets)

### SEO Issues
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly
- Check `/sitemap.xml` is accessible
- Review `/public/robots.txt` permissions
- Test with: https://search.google.com/test/rich-results

## 📞 Support

- **Documentation**: Read `/README.md`
- **Issues**: Check GitHub issues
- **Environment Setup**: See `.env.example`
- **Translation Keys**: Reference `/messages/en.json`

## 📄 License

© 2024 Pedro's Tech. All rights reserved.

---

**Next Steps**:
1. ✅ Update `.env.local` with your details
2. ✅ Customize company name and branding
3. ✅ Update translation content as needed
4. ✅ Deploy to Vercel or your hosting platform
5. ✅ Register sitemap with search engines

Good luck! 🚀
