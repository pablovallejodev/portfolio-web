import Link from 'next/link';
import type { Route } from 'next';
import type { Locale } from '@/i18n/config';
import type { NotFoundCopy } from '@/i18n/not-found';

type NotFoundPageProps = {
  locale: Locale;
  copy: NotFoundCopy;
};

export function NotFoundPage({ locale, copy }: NotFoundPageProps) {
  const homeHref = `/${locale}` as Route;
  const contactHref = `/${locale}#contact` as Route;

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16 md:px-10">
      <section className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-soft md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-16 font-serif text-[12rem] leading-none text-teal/10 md:text-[16rem]"
        >
          404
        </div>
        <div className="relative z-10 max-w-xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal to-ink font-mono text-sm font-semibold text-white shadow-soft">
              PV
            </span>
            <span className="font-serif text-lg text-text-strong">Pablo Vallejo</span>
          </div>
          <p className="eyebrow-pill mb-6">
            <span aria-hidden className="eyebrow-dot" />
            {copy.eyebrow}
          </p>
          <h1 className="max-w-lg font-serif text-4xl leading-tight text-text-strong md:text-6xl">{copy.title}</h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-text-muted md:text-lg">{copy.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={homeHref}
              className="inline-flex items-center rounded-full bg-teal-deep px-5 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-teal"
            >
              {copy.home}
            </Link>
            <Link
              href={contactHref}
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-text-muted transition-colors hover:border-teal/40 hover:text-text-strong"
            >
              {copy.contact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
