import type { Dictionary } from '@/i18n/types';
import { es } from '@/i18n/dictionaries/es';

export const en: Dictionary = {
  ...es,
  metadata: {
    title: 'Pablo Vallejo | Portfolio',
    description: 'Senior Backend Engineer with 8+ years of experience in Node.js, TypeScript and real-time Big Data.',
  },
  navigation: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'contact', label: 'Contact' },
  ],
  profile: {
    ...es.profile,
    headline: 'Senior Backend Engineer — Node.js · TypeScript · Big Data',
    shortHeadline: 'Senior Backend Engineer',
    status: 'Open to permanent and freelance opportunities',
    summary: [
      'Spanish Senior Backend Engineer with 8+ years of experience designing high-performance microservices and monoliths backed by real-time Big Data pipelines.',
      'Expert in Node.js and TypeScript, with proven impact in high-throughput environments serving more than 10 million users. Comfortable owning systems end-to-end, from architecture and observability to production rollout.',
      'EU citizen. Available for permanent positions and freelance engagements worldwide.',
    ],
    highlights: [
      { label: 'Backend engineering' },
      { label: 'Users served in production' },
      { label: 'SLA on critical services' },
      { label: 'Languages spoken' },
    ],
    social: {
      ...es.profile.social,
      email: 'Email',
      phone: 'Phone',
      passport: 'Status',
      location: 'Location',
      website: 'Website',
    },
    socialValues: { passport: 'Spanish · EU Citizen' },
  },
  hero: {
    titleBefore: 'Backends built to',
    titleAccent: 'scale',
    titleAfter: '.',
    introSuffix: 'real-time Big Data.',
    getInTouch: 'Get in touch',
    viewExperience: 'View experience',
  },
  about: {
    eyebrow: '01 · About',
    title: 'Senior Backend Engineer focused on scale, latency and clarity.',
    glance: 'At a glance',
    facts: { role: 'Role', stack: 'Stack', citizenship: 'Citizenship', availability: 'Availability' },
  },
  experience: {
    ...es.experience,
    eyebrow: '02 · Experience',
    title: 'Where I’ve shipped production systems.',
    description:
      'A selection of roles where I owned and contributed to backend architectures, data pipelines and reliability.',
    active: 'Active',
    data: {
      deepfriend: {
        ...es.experience.data.deepfriend,
        role: 'Founder & CTO',
        location: 'Delaware, US · Remote',
        start: 'Apr 2024',
        end: 'Present',
        description:
          'Founded a science-first AI mental health platform grounded in Cognitive Behavioral Therapy (CBT), owning the product end-to-end from architecture to public launch.',
        bullets: [
          'Designed and deployed a scalable backend powering real-time AI-driven conversations with LLMs, including an advanced memory system and voice chat under a 1s SLA.',
          'Architected a sustainable Big Data system on Google Cloud Platform (GCP) to handle sensitive user data with high availability and compliance.',
          'Launched on the Google Play Store, reaching 1k+ downloads with a 30% 7-day retention rate through continuous data-driven iteration.',
          'Incorporated the company in Delaware and led legal, privacy and data-handling compliance from day one.',
        ],
      },
      rrverse: {
        ...es.experience.data.rrverse,
        role: 'Senior Backend Developer',
        location: 'Madrid, Spain',
        start: 'Nov 2022',
        end: 'Dec 2025',
        description:
          'Telecommunications client serving 10M+ subscribers. Owned the core network anomaly detection backend and the real-time Big Data pipeline behind it.',
        bullets: [
          'Engineered the core network anomaly detection backend for a 10M+ client telecommunications network.',
          'Optimized critical microservices under a 300ms SLA, delivering an estimated 60% reduction in average response time.',
          'Architected and implemented a real-time Big Data pipeline processing millions of network events daily, integrating Elastic Machine Learning for predictive anomaly detection.',
          'Redesigned complex queries in ClickHouse, BigQuery and MariaDB, cutting data retrieval latency by 30% and ensuring stability during national peak traffic.',
          'Deployed and operated containerized services on Kubernetes (Rancher / OpenShift), guaranteeing high availability for mission-critical services.',
          'Built a real-time client status backend that drastically reduced incident resolution time for the customer support department.',
        ],
      },
      aszendit: {
        ...es.experience.data.aszendit,
        role: 'Backend Developer',
        location: 'Madrid, Spain',
        start: 'Sep 2021',
        end: 'Nov 2022',
        description:
          'Renewable energy consultancy. Built the backend powering real-time solar generation analytics for a client-facing mobile application.',
        bullets: [
          'Designed and implemented a backend system to process real-time solar panel generation data.',
          'Created high-performance microservices to serve generation metrics to the client-facing application.',
          'Contributed to the mobile app interface (Expo / React Native) and ensured seamless backend integration.',
          'Stepped up to lead the app’s final development phase, working in fast-paced 1-week SCRUM cycles.',
        ],
      },
      freelance: {
        ...es.experience.data.freelance,
        role: 'Web Developer',
        location: 'Barcelona, Spain',
        start: 'Mar 2018',
        end: 'Nov 2022',
        description: 'Independent full-stack work for small and mid-sized businesses across retail and services.',
        bullets: [
          'Designed digital presence and SEO strategies for 10+ SMEs in retail and service sectors.',
          'Handled everything from domain management to full-stack deployment and ongoing maintenance.',
        ],
      },
    },
  },
  skills: {
    eyebrow: '03 · Skills',
    title: 'A toolkit built around backend reliability and data.',
    description: 'Hands-on with each of these in production environments. Always learning the next one.',
    data: {
      backend: 'Backend & Architecture',
      data: 'Big Data & Observability',
      databases: 'Databases',
      devops: 'DevOps & Cloud',
      other: 'Tooling & Other',
    },
  },
  languages: {
    eyebrow: '04 · Languages',
    title: 'Communicating across teams and borders.',
    data: {
      Spanish: { language: 'Spanish', fluency: 'Native' },
      Catalan: { language: 'Catalan', fluency: 'Native' },
      English: { language: 'English', fluency: 'Full Professional Proficiency' },
    },
  },
  contact: {
    eyebrow: '05 · Contact',
    title: 'Let’s build something reliable together.',
    description: 'Open to senior backend roles, technical leadership and freelance engagements. Remote-friendly.',
    bestWay: 'Best way to reach me',
    message:
      'Happy to hear from you — drop me a line about a role, a project, or just to say hi. Thanks for stopping by.',
    sendEmail: 'Send me an email',
  },
  terminal: {
    eyebrow: '06 · Terminal',
    title: 'Meet me in the shell.',
    description:
      'Prefer a CLI over a form? Copy the command, paste it in your terminal, and drop into an interactive session — backends talking to backends.',
    runInTerminal: 'Run {command} in your terminal',
    copyCommand: 'Copy SSH command',
    copied: 'Copied',
    copy: 'Copy',
  },
  source: {
    eyebrow: '07 · Source',
    title: 'This site ships with the source.',
    description:
      'The portfolio is public. Inspect the stack, the structure, and how the pieces fit — then fork it if it helps.',
    viewOnGithub: 'View on GitHub',
  },
  header: { primary: 'Primary' },
  footer: {
    navigate: 'Navigate',
    contact: 'Contact',
    openSourceGithub: 'Open source · GitHub',
    allRightsReserved: 'All rights reserved.',
    openSourcePortfolio: 'Open source portfolio.',
  },
  aria: {
    language: 'Language',
    languages: 'Languages',
    emailCopied: 'Email copied',
    copyEmail: 'Copy email address',
    copied: 'Copied!',
  },
};
