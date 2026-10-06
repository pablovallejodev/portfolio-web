import { headers } from 'next/headers';
import { SITE } from '@/constants/routes/routes';
import type { Locale } from '@/i18n/config';
import type { Profile } from '@/types';

type ProfileJsonLdProps = {
  locale: Locale;
  profile: Profile;
  title: string;
  description: string;
};

export async function ProfileJsonLd({ locale, profile, title, description }: ProfileJsonLdProps) {
  const nonce = (await headers()).get('x-nonce') ?? undefined;
  const pageUrl = `${SITE}/${locale}`;
  const personId = `${SITE}/#person`;
  const sameAs = profile.social
    .map((social) => social.href)
    .filter((href) => href.startsWith('http://') || href.startsWith('https://'));

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${pageUrl}#profilepage`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: locale,
        mainEntity: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: profile.name,
        url: SITE,
        image: `${SITE}/pablo.png`,
        jobTitle: profile.headline,
        headline: profile.headline,
        description: profile.summary[0] ?? description,
        sameAs,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
    />
  );
}
