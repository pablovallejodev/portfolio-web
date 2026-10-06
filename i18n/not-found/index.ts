import type { Locale } from '@/i18n/config';

export type NotFoundCopy = {
  eyebrow: string;
  title: string;
  description: string;
  home: string;
  contact: string;
};

export const notFoundCopy: Record<Locale, NotFoundCopy> = {
  es: {
    eyebrow: 'Error 404',
    title: 'Esta página se ha perdido.',
    description: 'La ruta que buscas no existe o ha cambiado. Vuelve al portfolio y sigue explorando.',
    home: 'Volver al portfolio',
    contact: 'Ir a contacto',
  },
  ca: {
    eyebrow: 'Error 404',
    title: 'Aquesta pàgina s’ha perdut.',
    description: 'La ruta que busques no existeix o ha canviat. Torna al portfolio i continua explorant.',
    home: 'Tornar al portfolio',
    contact: 'Anar a contacte',
  },
  en: {
    eyebrow: 'Error 404',
    title: 'This page got lost.',
    description:
      'The route you are looking for does not exist or has changed. Return to the portfolio and keep exploring.',
    home: 'Back to the portfolio',
    contact: 'Go to contact',
  },
};
