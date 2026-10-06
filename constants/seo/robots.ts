import type { MetadataRoute } from 'next';

export const ROBOTS_RULES: MetadataRoute.Robots['rules'] = [
  { userAgent: '*', allow: '/' },
  { userAgent: 'OAI-SearchBot', allow: '/' },
  { userAgent: 'ChatGPT-User', allow: '/' },
];
