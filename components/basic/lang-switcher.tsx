'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isLocale, LOCALE_COOKIE, LOCALE_FULL_LABELS, LOCALES, type Locale } from '@/i18n/config';

type LangSwitcherProps = { current: Locale; labels: { language: string; languages: string } };

function setLocaleCookie(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
}

export function LangSwitcher({ current, labels }: LangSwitcherProps) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDocumentClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocumentClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  function switchLocale(locale: Locale) {
    const segments = pathname.split('/').filter(Boolean);
    const tail = isLocale(segments[0]) ? segments.slice(1) : segments;
    const suffix = tail.length ? `/${tail.join('/')}` : '';
    setLocaleCookie(locale);
    document.documentElement.lang = locale;
    setOpen(false);
    router.push(`/${locale}${suffix}${window.location.search}${window.location.hash}`);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-semibold text-text-muted transition-colors hover:border-teal/40 hover:text-text-strong"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={labels.language}
        onClick={() => setOpen((value) => !value)}
      >
        <span>{LOCALE_FULL_LABELS[current]}</span>
        <span aria-hidden className="text-[10px]">
          ⌄
        </span>
      </button>
      {open ? (
        <ul
          className="absolute right-0 top-full z-50 mt-2 min-w-32 rounded-xl border border-border bg-surface p-1.5 shadow-soft"
          role="listbox"
          aria-label={labels.languages}
        >
          {LOCALES.map((locale) => (
            <li key={locale}>
              <button
                type="button"
                role="option"
                aria-selected={locale === current}
                className={`block w-full rounded-lg px-3 py-2 text-left text-xs transition-colors ${locale === current ? 'bg-teal/10 font-semibold text-teal-deep' : 'text-text-muted hover:bg-ice hover:text-text-strong'}`}
                onClick={() => switchLocale(locale)}
              >
                {LOCALE_FULL_LABELS[locale]}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
