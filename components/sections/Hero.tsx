import type { Profile } from '@/types';
import type { Dictionary } from '@/i18n/types';
import type { Locale } from '@/i18n/config';
import { projects } from '@/constants/projects';
import { ProjectCard } from '@/components/common/ui/ProjectCard';
import { CompactIconLink } from '@/components/common/ui/SocialLinks';
import { Reveal } from '@/components/common/ui/Reveal';
import styles from '@/styles/hero/Background.module.css';

const ACTION_ORDER = ['linkedin', 'github'] as const;

export function Hero({ lang, profile, copy }: { lang: Locale; profile: Profile; copy: Dictionary['hero'] }) {
  const heroSocial = ACTION_ORDER.flatMap((icon) => profile.social.filter((item) => item.href && item.icon === icon));
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-border bg-background">
      <div aria-hidden className={`pointer-events-none absolute inset-0 -z-10 ${styles.backdrop}`}>
        <div className={styles.rotor}>
          <span className={styles.glowOne} />
          <span className={styles.glowTwo} />
        </div>
      </div>

      {/* Main hero copy and calls to action */}
      <div className="mx-auto max-w-5xl px-6 pb-16 pt-20 md:px-10 md:pb-48 md:pt-28">
        <div className="text-center">
          <Reveal>
            <h1 className="mx-auto max-w-3xl font-serif text-[clamp(2.5rem,7vw,4.75rem)] leading-[1.06] tracking-[-0.02em] text-ink">
              {copy.title}
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="mx-auto mt-5 max-w-xl text-[clamp(1rem,1.6vw,1.125rem)] leading-relaxed text-slate">
              {copy.subtitle}
            </p>
          </Reveal>

          <Reveal delay={180}>
            {/* Mobile: icons above CTAs; desktop: icons left of CTAs */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 md:flex-row md:flex-wrap">
              <div className="flex items-center gap-2.5">
                {heroSocial.map((item) => (
                  <CompactIconLink key={item.label} item={item} />
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`/${lang}#contact`}
                  className="inline-flex h-12 items-center rounded-xl border border-border-strong bg-surface px-6 text-[15px] font-semibold text-ink transition-all hover:border-ink hover:bg-ice"
                >
                  {copy.getInTouch}
                </a>
              </div>
            </div>
          </Reveal>

          <section aria-labelledby="hero-projects-title" className="mt-16 md:mt-20">
            <Reveal>
              <h2
                id="hero-projects-title"
                className="text-center text-sm font-semibold uppercase tracking-[0.12em] text-ink"
              >
                {copy.projectsLabel}
              </h2>
            </Reveal>
            <ul className="mx-auto mt-4 flex flex-wrap items-center justify-center gap-4 px-1">
              {projects.map((project, index) => (
                <Reveal as="li" key={project.id} delay={80 * index}>
                  <ProjectCard project={project} lang={lang} />
                </Reveal>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
