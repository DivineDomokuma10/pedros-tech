import createMiddleware from 'next-intl/middleware'
import { locales } from './src/i18n/config'

export default createMiddleware({
  locales: locales as unknown as string[],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
