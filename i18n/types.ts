import type { SocialIcon } from '@/types';
import type { ProjectId } from '@/constants/projects';

export type ExperienceTranslation = {
  role: string;
  location: string;
  start: string;
  end: string;
  description: string;
  bullets: string[];
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  navigation: { id: string; label: string }[];
  profile: {
    headline: string;
    shortHeadline: string;
    status: string;
    summary: string[];
    highlights: { label: string }[];
    social: Record<SocialIcon, string>;
    socialValues: Partial<Record<SocialIcon, string>>;
  };
  hero: {
    title: string;
    subtitle: string;
    projectsLabel: string;
    visitProject: string;
    projects: Record<ProjectId, { description: string }>;
    getInTouch: string;
    viewExperience: string;
  };
  deepfriend: {
    title: string;
    description: string;
    disclaimer: string;
    visit: string;
    opensInNewTab: string;
    imageAlt: string;
  };
  puente: {
    title: string;
    description: string;
    status: string;
    visit: string;
    opensInNewTab: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    glance: string;
    facts: { role: string; stack: string; citizenship: string; availability: string };
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    active: string;
    data: Record<string, ExperienceTranslation>;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    data: Record<string, string>;
  };
  languages: {
    eyebrow: string;
    title: string;
    data: Record<string, { language: string; fluency: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    bestWay: string;
    message: string;
    sendEmail: string;
  };
  terminal: {
    eyebrow: string;
    title: string;
    description: string;
    runInTerminal: string;
    copyCommand: string;
    copied: string;
    copy: string;
  };
  source: {
    eyebrow: string;
    title: string;
    description: string;
    viewOnGithub: string;
  };
  header: { primary: string };
  footer: {
    navigate: string;
    contact: string;
    openSourceGithub: string;
    allRightsReserved: string;
    openSourcePortfolio: string;
  };
  aria: { language: string; languages: string; emailCopied: string; copyEmail: string; copied: string };
};
