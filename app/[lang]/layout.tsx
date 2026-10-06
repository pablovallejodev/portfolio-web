import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE } from '@/constants/routes/routes';
import { SITE_AUTHOR, SITE_NAME, SITE_SOCIAL_IMAGE } from '@/constants/seo/site';
import { copyCv } from '@/i18n/cv';
import { HREFLANG, isLocale, LOCALES } from '@/i18n/config';

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const copy = copyCv[lang];
  const localizedSocialImage = { ...SITE_SOCIAL_IMAGE, alt: copy.metadata.title };
  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    applicationName: SITE_NAME,
    authors: [SITE_AUTHOR],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    icons: {
      icon: [{ url: '/icon.png', type: 'image/png', sizes: '1024x1024' }],
      apple: '/icon.png',
    },
    alternates: {
      canonical: `${SITE}/${lang}`,
      languages: {
        ...Object.fromEntries(LOCALES.map((locale) => [HREFLANG[locale], `${SITE}/${locale}`])),
        'x-default': `${SITE}/es`,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.metadata.title,
      description: copy.metadata.description,
      images: [localizedSocialImage.url],
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: `${SITE}/${lang}`,
      siteName: SITE_NAME,
      type: 'website',
      locale: { es: 'es_ES', ca: 'ca_ES', en: 'en_US' }[lang],
      images: [localizedSocialImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return children;
}
