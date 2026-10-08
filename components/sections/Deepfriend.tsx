import Image from 'next/image';
import type { Dictionary } from '@/i18n/types';
import { Icon } from '@/components/common/ui/Icon';
import { Reveal } from '@/components/common/ui/Reveal';
import type { Locale } from '@/i18n/config';

export function Deepfriend({ lang, copy }: { lang: Locale; copy: Dictionary['deepfriend'] }) {
  return (
    <section
      id="deepfriend"
      aria-labelledby="deepfriend-title"
      className="relative scroll-mt-24 overflow-hidden border-y border-border bg-white py-16 text-text-strong md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:px-10 lg:gap-16">
        <Reveal className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-[0_16px_48px_rgba(0,0,0,0.08)] sm:rounded-3xl sm:p-3">
            <div className="relative aspect-[1200/630] overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src={`/deepfriend/og-image${lang === 'es' ? '' : `-${lang}`}.png`}
                alt={copy.imageAlt}
                width={1200}
                height={630}
                sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1280px) 50vw, 640px"
                className="size-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="order-2 md:order-1">
          <div className="flex flex-col items-start gap-6">
            <h2 id="deepfriend-title" className="max-w-xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              {copy.title}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-text-muted md:text-lg">{copy.description}</p>
            <p className="max-w-xl border-l-2 border-ink/25 pl-4 text-sm leading-relaxed text-text-muted">
              {copy.disclaimer}
            </p>
            <a
              href={`https://deepfriend.es/${lang === 'ca' ? 'es' : lang}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${copy.visit} ${copy.opensInNewTab}`}
              className="inline-flex h-12 items-center gap-3 rounded-full bg-ink px-6 text-sm font-semibold text-white transition-all hover:-translate-y-px hover:bg-black hover:shadow-lg hover:shadow-black/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              {copy.visit}
              <Icon name="external" size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
