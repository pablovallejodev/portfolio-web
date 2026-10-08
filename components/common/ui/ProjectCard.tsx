import type { Project } from '@/constants/projects';
import { Icon } from '@/components/common/ui/Icon';

type ProjectCardCopy = {
  description: string;
  visitProject: string;
};

export function ProjectCard({ project, copy }: { project: Project; copy: ProjectCardCopy }) {
  return (
    <article className="min-w-0">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex aspect-square flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink text-white shadow-soft transition-colors duration-200 hover:border-teal/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal motion-reduce:transition-none"
      >
        <div className="flex-1 p-5 sm:p-8">
          <h3 className="font-serif text-2xl leading-tight tracking-tight text-white sm:text-4xl">{project.name}</h3>
          <div className="mt-3 h-0.5 w-8 rounded-full bg-teal" aria-hidden="true" />
          <p className="mt-3 text-[13px] leading-5 text-white/75 sm:text-sm sm:leading-6">{copy.description}</p>
        </div>
        <span className="inline-flex min-h-14 items-center justify-between gap-4 border-t border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors duration-200 group-hover:bg-teal-deep group-hover:text-white group-focus-visible:bg-teal-deep group-focus-visible:text-white motion-reduce:transition-none sm:px-8">
          {copy.visitProject}
          <Icon
            name="external"
            size={16}
            className="shrink-0 text-teal group-hover:text-white group-focus-visible:text-white"
          />
        </span>
      </a>
    </article>
  );
}
