export const LOCALES = ['es', 'ca', 'en'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const LOCALE_LABELS: Record<Locale, string> = {
  es: 'ES',
  ca: 'CA',
  en: 'EN',
};

export const LOCALE_FULL_LABELS: Record<Locale, string> = {
  es: 'Español',
  ca: 'Català',
  en: 'English',
};

export const HREFLANG: Record<Locale, string> = {
  es: 'es',
  ca: 'ca',
  en: 'en',
};

export const isLocale = (value: string | undefined): value is Locale =>
  Boolean(value && (LOCALES as readonly string[]).includes(value));

export function pickLocale(value: string | null | undefined): Locale {
  return isLocale(value ?? undefined) ? (value as Locale) : DEFAULT_LOCALE;
}

function languageBase(tag: string): string {
  return tag.trim().toLowerCase().split('-')[0] ?? '';
}

export function resolveLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const candidates = acceptLanguage
    .split(',')
    .map((part, index) => {
      const [tag, ...parameters] = part.trim().split(';');
      const q = parameters.find((parameter) => parameter.trim().startsWith('q='));
      const parsedWeight = q ? Number.parseFloat(q.trim().slice(2)) : 1;
      return {
        language: languageBase(tag ?? ''),
        weight: Number.isFinite(parsedWeight) ? parsedWeight : 0,
        index,
      };
    })
    .filter(({ language, weight }) => language && weight > 0)
    .sort((a, b) => b.weight - a.weight || a.index - b.index);

  for (const candidate of candidates) {
    if (isLocale(candidate.language)) return candidate.language;
  }

  return DEFAULT_LOCALE;
}
