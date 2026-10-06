import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Cormorant, Mulish, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SITE } from '@/constants/routes/routes';
import { SITE_AUTHOR, SITE_DESCRIPTION, SITE_NAME, SITE_SOCIAL_IMAGE } from '@/constants/seo/site';
import { pickLocale } from '@/i18n/config';

const cormorant = Cormorant({
  variable: '--font-serif-cormorant',
  subsets: ['latin'],
  weight: ['700'],
});

const mulish = Mulish({
  variable: '--font-sans-mulish',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono-geist',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${SITE_NAME} | Portfolio`,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [SITE_AUTHOR],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE),
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '1024x1024' }],
    apple: '/icon.png',
  },
  openGraph: {
    title: `${SITE_NAME} | Portfolio`,
    description: SITE_DESCRIPTION,
    url: SITE,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'es_ES',
    images: [SITE_SOCIAL_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Portfolio`,
    description: SITE_DESCRIPTION,
    images: [SITE_SOCIAL_IMAGE.url],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = pickLocale((await headers()).get('x-locale'));

  return (
    <html lang={locale} className={`${cormorant.variable} ${mulish.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
