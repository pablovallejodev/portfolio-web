import { experiences } from '@/constants/experience';
import { languages } from '@/constants/languages';
import { skillGroups } from '@/constants/skills';
import { profile } from '@/constants/profile';
import { getDictionary } from '@/i18n/dictionary';
import type { Locale } from '@/i18n/config';

export function getLocalizedProfile(locale: Locale) {
  const copy = getDictionary(locale).profile;
  return {
    ...profile,
    headline: copy.headline,
    shortHeadline: copy.shortHeadline,
    status: copy.status,
    summary: copy.summary,
    highlights: profile.highlights.map((highlight, index) => ({
      ...highlight,
      label: copy.highlights[index]?.label ?? highlight.label,
    })),
    social: profile.social.map((item) => ({
      ...item,
      label: copy.social[item.icon] ?? item.label,
      value: copy.socialValues[item.icon] ?? item.value,
    })),
  };
}

export function getLocalizedExperiences(locale: Locale) {
  const copy = getDictionary(locale).experience.data;
  return experiences.map((experience) => ({
    ...experience,
    ...(copy[experience.id] ?? {}),
  }));
}

export function getLocalizedSkills(locale: Locale) {
  const copy = getDictionary(locale).skills.data;
  return skillGroups.map((group) => ({
    ...group,
    title: copy[group.id] ?? group.title,
  }));
}

export function getLocalizedLanguages(locale: Locale) {
  const copy = getDictionary(locale).languages.data;
  return languages.map((language) => ({
    ...language,
    ...(copy[language.language] ?? {}),
  }));
}
