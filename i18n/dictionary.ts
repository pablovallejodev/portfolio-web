import type { Locale } from '@/i18n/config';
import { ca } from '@/i18n/dictionaries/ca';
import { en } from '@/i18n/dictionaries/en';
import { es } from '@/i18n/dictionaries/es';

const dictionaries = { es, ca, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
