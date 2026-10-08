import Image from 'next/image';
import type { Dictionary } from '@/i18n/types';
import { Icon } from '@/components/common/ui/Icon';
import { Reveal } from '@/components/common/ui/Reveal';

export function Puente({ copy }: { copy: Dictionary['puente'] }) {
  return (
    <section id="puente" aria-labelledby="puente-title" className="scroll-mt-24 bg-white py-16 text-black md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:px-10 lg:gap-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg shadow-black/10 sm:rounded-3xl">
            <div className="relative aspect-[1440/640] overflow-hidden">
              <Image
                src="/puente/puente-1440.webp"
                alt={copy.imageAlt}
                width={1440}
                height={640}
                sizes="(max-width: 768px) calc(100vw - 48px), (max-width: 1280px) 55vw, 640px"
                className="size-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col items-start gap-6">
            <h2 id="puente-title" className="max-w-xl font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              {copy.title}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg">{copy.description}</p>
            <p className="max-w-xl border-l-2 border-black/20 pl-4 text-sm leading-relaxed text-neutral-600">
              {copy.status}
            </p>
            <a
              href="https://puente.pablovallejo.dev/"
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
