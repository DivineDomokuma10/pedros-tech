'use client'

import { useRouter, usePathname } from 'next/navigation'
import { locales, localeLabels, type Locale } from '@/src/i18n/config'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const handleChangeLanguage = (locale: Locale) => {
    // Extract the path without the current locale
    const segments = pathname.split('/')
    const currentLocale = segments[1]

    let newPath = pathname
    if (locales.includes(currentLocale as Locale)) {
      // Replace the locale in the path
      newPath = pathname.replace(`/${currentLocale}`, locale === 'en' ? '' : `/${locale}`)
    } else {
      // Add locale to the path
      newPath = locale === 'en' ? pathname : `/${locale}${pathname}`
    }

    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline text-sm">Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => handleChangeLanguage(locale)}
            className="cursor-pointer"
          >
            {localeLabels[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
