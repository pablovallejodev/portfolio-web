import type { MetadataRoute } from 'next';
import { DEFAULT_LOCALE, HREFLANG, LOCALES } from '@/i18n/config';
import { ROUTES, SITE } from '@/constants/routes/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.flatMap((route) =>
    LOCALES.map((lang) => ({
      url: `${SITE}/${lang}${route}`,
      alternates: {
        languages: {
          ...Object.fromEntries(LOCALES.map((locale) => [HREFLANG[locale], `${SITE}/${locale}${route}`])),
          'x-default': `${SITE}/${DEFAULT_LOCALE}${route}`,
        },
      },
    })),
  );
}
