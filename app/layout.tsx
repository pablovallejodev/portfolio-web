import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Cormorant, Mulish, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
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
  title: 'Pablo Vallejo | Portfolio',
  description:
    'Ingeniero Backend Senior con más de 8 años de experiencia en Node.js, TypeScript y Big Data en tiempo real.',
  metadataBase: new URL('https://pablovallejo.dev'),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Pablo Vallejo | Portfolio',
    description:
      'Ingeniero Backend Senior con más de 8 años de experiencia en Node.js, TypeScript y Big Data en tiempo real.',
    url: 'https://pablovallejo.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pablo Vallejo | Portfolio',
    description:
      'Ingeniero Backend Senior con más de 8 años de experiencia en Node.js, TypeScript y Big Data en tiempo real.',
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
