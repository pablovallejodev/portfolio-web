import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
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
import { copyCv } from '@/i18n/cv';
import { getLocalizedExperiences, getLocalizedLanguages, getLocalizedProfile, getLocalizedSkills } from '@/i18n/data';
import { isLocale, type Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return { robots: { index: false, follow: true } };
}

export default async function LocaleHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const copy = copyCv[locale];
  const localizedProfile = getLocalizedProfile(locale);

  return (
    <>
      <Header
        lang={locale}
        navigation={copy.navigation}
        primaryLabel={copy.header.primary}
        getInTouch={copy.hero.getInTouch}
      />
      <main className="flex-1">
        <Hero lang={locale} profile={localizedProfile} copy={copy.hero} />
        <About profile={localizedProfile} copy={copy.about} />
        <Experience experiences={getLocalizedExperiences(locale)} copy={copy.experience} />
        <Skills skillGroups={getLocalizedSkills(locale)} copy={copy.skills} />
        <Languages languages={getLocalizedLanguages(locale)} copy={copy.languages} />
        <Contact profile={localizedProfile} copy={copy.contact} aria={copy.aria} />
        <Terminal copy={copy.terminal} />
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
