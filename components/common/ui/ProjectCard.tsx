import type { Project } from '@/constants/projects';
import type { Locale } from '@/i18n/config';

export function ProjectCard({ project, lang }: { project: Project; lang: Locale }) {
  return (
    <a
      href={`/${lang}#${project.id}`}
      className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-ink shadow-sm transition-[border-color,background-color,box-shadow,transform] duration-200 hover:-translate-y-px hover:border-teal/50 hover:bg-ice hover:text-ink hover:shadow-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal motion-reduce:transform-none motion-reduce:transition-none"
    >
      {project.name}
    </a>
  );
}
