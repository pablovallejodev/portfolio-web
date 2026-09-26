import type { NavItem, Profile } from '@/types';
import type { Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/types';
import { projectRepoUrl } from '@/constants/profile';
import { LangSwitcher } from '@/components/basic/lang-switcher';

type FooterProps = {
  lang: Locale;
  navigation: NavItem[];
  profile: Profile;
  copy: Dictionary['footer'];
  aria: Dictionary['aria'];
};

export function Footer({ lang, navigation, profile, copy, aria }: FooterProps) {
  const year = new Date().getFullYear();
  const email = profile.social.find((item) => item.icon === 'email');

  return (
    <footer className="mt-16 bg-ink text-white md:mt-24">
      <div className="mx-auto max-w-5xl px-6 pt-12 pb-8 md:px-10 md:pt-[4.5rem]">
        <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.6fr_1fr_1fr] md:gap-12 lg:gap-16">
          {/* Brand */}
          <div className="flex max-w-sm flex-col gap-4">
            <a href={`/${lang}`} className="inline-flex items-center gap-2.5">
              <span className="inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-teal to-teal-deep font-mono text-xs font-semibold text-white">
                PV
              </span>
              <span className="font-serif text-[1.375rem] leading-none text-white">{profile.name}</span>
            </a>
            <p className="text-sm leading-relaxed text-white/60">
              {profile.shortHeadline} · Node.js · TypeScript · Big Data
            </p>
            <a
              href={projectRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center rounded-full bg-white px-[18px] py-2.5 text-[13px] font-bold text-ink transition-all hover:bg-teal hover:text-white hover:-translate-y-px"
            >
              {copy.openSourceGithub}
            </a>
          </div>

          {/* Navigate */}
          <div className="flex flex-col gap-3.5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white">{copy.navigate}</p>
            <ul className="flex flex-col gap-2.5">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a href={`/${lang}#${item.id}`} className="text-sm text-white/60 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3.5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-white">{copy.contact}</p>
            <ul className="flex flex-col gap-2.5">
              {email ? (
                <li>
                  <a href={email.href} className="text-sm text-white/60 transition-colors hover:text-white">
                    {email.value}
                  </a>
                </li>
              ) : null}
              {profile.social
                .filter((item) => item.href && item.icon !== 'email')
                .map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
            <span>
              © {year} {profile.name}. {copy.allRightsReserved}
            </span>
            <span aria-hidden>·</span>
            <span>{copy.openSourcePortfolio}</span>
          </div>
          <LangSwitcher current={lang} labels={aria} />
        </div>
      </div>
    </footer>
  );
}
