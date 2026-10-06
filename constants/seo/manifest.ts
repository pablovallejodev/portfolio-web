import type { MetadataRoute } from 'next';
import { SITE_DESCRIPTION } from '@/constants/seo/site';

export const MANIFEST: MetadataRoute.Manifest = {
  name: 'Pablo Vallejo | Portfolio',
  short_name: 'Pablo Vallejo',
  description: SITE_DESCRIPTION,
  start_url: '/es',
  scope: '/',
  display: 'standalone',
  lang: 'es',
  theme_color: '#24998b',
  background_color: '#ffffff',
  icons: [
    {
      src: '/icon.png',
      sizes: '1024x1024',
      type: 'image/png',
      purpose: 'any',
    },
  ],
};
