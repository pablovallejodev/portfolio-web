import { notFound } from 'next/navigation';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Languages } from '@/components/sections/Languages';
import { OpenSource } from '@/components/sections/OpenSource';
import { Skills } from '@/components/sections/Skills';
import { Terminal } from '@/components/sections/Terminal';
import { ProfileJsonLd } from '@/components/seo/ProfileJsonLd';
import { copyCv } from '@/i18n/cv';
import { getLocalizedExperiences, getLocalizedLanguages, getLocalizedProfile, getLocalizedSkills } from '@/i18n/data';
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
      <Header
        lang={locale}
        navigation={copy.navigation}
        primaryLabel={copy.header.primary}
        getInTouch={copy.hero.getInTouch}
      />
      <main className="flex-1">
        <Hero lang={locale} profile={localizedProfile} copy={copy.hero} />
        <Contact profile={localizedProfile} copy={copy.contact} aria={copy.aria} />
        <OpenSource copy={copy.source} />
      </main>
      <Footer
        lang={locale}
        navigation={copy.navigation}
        profile={localizedProfile}
        copy={copy.footer}
        aria={copy.aria}
      />
    </>
  );
}
