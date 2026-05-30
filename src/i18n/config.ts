export const locales = ['en', 'es', 'fr', 'de', 'pt', 'zh', 'ar'] as const

export type Locale = (typeof locales)[number]

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  zh: '中文',
  ar: 'العربية',
}
