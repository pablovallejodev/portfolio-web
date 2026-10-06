import { headers } from 'next/headers';
import { NotFoundPage } from '@/components/errors/NotFoundPage';
import { pickLocale } from '@/i18n/config';
import { notFoundCopy } from '@/i18n/not-found';

export default async function NotFound() {
  const locale = pickLocale((await headers()).get('x-locale'));

  return <NotFoundPage locale={locale} copy={notFoundCopy[locale]} />;
}
