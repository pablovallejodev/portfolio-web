import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Languages } from '@/components/sections/Languages';
import { OpenSource } from '@/components/sections/OpenSource';
import { Skills } from '@/components/sections/Skills';
import { Terminal } from '@/components/sections/Terminal';
import { getDictionary } from '@/i18n/dictionary';
import { getLocalizedExperiences, getLocalizedLanguages, getLocalizedProfile, getLocalizedSkills } from '@/i18n/data';
import { isLocale, type Locale } from '@/i18n/config';

export default async function LocaleHomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale = lang as Locale;
  const dictionary = getDictionary(locale);
  const localizedProfile = getLocalizedProfile(locale);

  return (
    <>
      <Header
        lang={locale}
        navigation={dictionary.navigation}
        profile={localizedProfile}
        copy={{ header: dictionary.header, hero: dictionary.hero, aria: dictionary.aria }}
      />
      <main className="flex-1">
        <Hero lang={locale} profile={localizedProfile} copy={dictionary.hero} />
        <About profile={localizedProfile} copy={dictionary.about} />
        <Experience experiences={getLocalizedExperiences(locale)} copy={dictionary.experience} />
        <Skills skillGroups={getLocalizedSkills(locale)} copy={dictionary.skills} />
        <Languages languages={getLocalizedLanguages(locale)} copy={dictionary.languages} />
        <Contact profile={localizedProfile} copy={dictionary.contact} aria={dictionary.aria} />
        <Terminal copy={dictionary.terminal} />
        <OpenSource copy={dictionary.source} />
      </main>
      <Footer
        lang={locale}
        navigation={dictionary.navigation}
        profile={localizedProfile}
        copy={dictionary.footer}
        aria={dictionary.aria}
      />
    </>
  );
}
