import { SITE } from '@/constants/routes/routes';

export const SITE_NAME = 'Pablo Vallejo';
export const SITE_DESCRIPTION =
  'Ingeniero Backend Senior con más de 8 años de experiencia en Node.js, TypeScript y Big Data en tiempo real.';

export const SITE_AUTHOR = {
  name: SITE_NAME,
  url: SITE,
};

export const SITE_SOCIAL_IMAGE = {
  url: `${SITE}/pablo.png`,
  width: 1254,
  height: 1254,
  type: 'image/png',
  alt: `${SITE_NAME} — Senior Backend Engineer`,
} as const;
