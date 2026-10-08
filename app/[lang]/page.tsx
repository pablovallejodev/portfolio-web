import { notFound } from 'next/navigation';
import { HomeHeader } from '@/components/common/HomeHeader';
import { Footer } from '@/components/common/Footer';
import { Deepfriend } from '@/components/sections/Deepfriend';
import { Hero } from '@/components/sections/Hero';
import { HomeContact } from '@/components/sections/HomeContact';
import { HomeOpenSource } from '@/components/sections/HomeOpenSource';
import { Puente } from '@/components/sections/Puente';
import { ProfileJsonLd } from '@/components/seo/ProfileJsonLd';
import { copyCv } from '@/i18n/cv';
import { getLocalizedProfile } from '@/i18n/data';
import { isLocale, type Locale } from '@/i18n/config';

export default async function LocaleHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const copy = copyCv[locale];
  const localizedProfile = getLocalizedProfile(locale);

  return (
    <>
      <ProfileJsonLd
        locale={locale}
        profile={localizedProfile}
        title={copy.metadata.title}
        description={copy.metadata.description}
      />
      <HomeHeader lang={locale} />
      <main className="flex-1">
        <Hero lang={locale} profile={localizedProfile} copy={copy.hero} />
        <Deepfriend lang={locale} copy={copy.deepfriend} />
        <Puente copy={copy.puente} />
        <HomeContact profile={localizedProfile} copy={copy.contact} aria={copy.aria} />
        <HomeOpenSource copy={copy.source} />
      </main>
      <Footer lang={locale} profile={localizedProfile} copy={copy.footer} aria={copy.aria} />
    </>
  );
}
