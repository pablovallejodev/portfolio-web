import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
  return {
    title: copy.metadata.title,
    description: copy.metadata.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(LOCALES.map((locale) => [HREFLANG[locale], `/${locale}`])),
        'x-default': '/es',
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.metadata.title,
      description: copy.metadata.description,
    },
    openGraph: {
      title: copy.metadata.title,
      description: copy.metadata.description,
      url: `https://pablovallejo.dev/${lang}`,
      type: 'website',
      locale: { es: 'es_ES', ca: 'ca_ES', en: 'en_US' }[lang],
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
