import type { Locale } from '@/i18n/config';

export type CvHeroCopy = {
  titleBefore: string;
  titleAccent: string;
  titleAfter: string;
  introSuffix: string;
  getInTouch: string;
  viewExperience: string;
};

export const cvHeroCopy: Record<Locale, CvHeroCopy> = {
  es: {
    titleBefore: 'Backends preparados para',
    titleAccent: 'escalar',
    titleAfter: '.',
    introSuffix: 'Big Data en tiempo real.',
    getInTouch: 'Hablemos',
    viewExperience: 'Ver experiencia',
  },
  ca: {
    titleBefore: 'Backends preparats per',
    titleAccent: 'escalar',
    titleAfter: '.',
    introSuffix: 'Big Data en temps real.',
    getInTouch: 'Parlem',
    viewExperience: 'Veure experiència',
  },
  en: {
    titleBefore: 'Backends built to',
    titleAccent: 'scale',
    titleAfter: '.',
    introSuffix: 'real-time Big Data.',
    getInTouch: 'Get in touch',
    viewExperience: 'View experience',
  },
};
