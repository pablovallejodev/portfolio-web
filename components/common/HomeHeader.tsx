import type { Locale } from '@/i18n/config';
import { BrandMark } from '@/components/common/BrandMark';

type HomeHeaderProps = {
  lang: Locale;
};

export function HomeHeader({ lang }: HomeHeaderProps) {
  return (
    <header className="h-[69px] shrink-0">
      <div className="fixed inset-x-0 top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex max-w-5xl justify-center px-6 py-4 md:px-10">
          <a href={`/${lang}`} aria-label="PV" className="group inline-flex">
            <BrandMark />
          </a>
        </div>
      </div>
    </header>
  );
}
