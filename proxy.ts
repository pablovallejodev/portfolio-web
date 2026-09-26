import { NextResponse, type NextRequest } from 'next/server';
import { isLocale, LOCALE_COOKIE, resolveLocale } from '@/i18n/config';

const PUBLIC_FILE = /\.[^/]+$/;

function isIgnoredPath(pathname: string) {
  return (
    pathname.startsWith('/_next') ||
    pathname === '/api' ||
    pathname.startsWith('/api/') ||
    pathname === '/blog' ||
    pathname.startsWith('/blog/') ||
    pathname.startsWith('/assets/') ||
    PUBLIC_FILE.test(pathname)
  );
}

function requestLocale(request: NextRequest) {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;
  return resolveLocale(request.headers.get('accept-language'));
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (isIgnoredPath(pathname)) return NextResponse.next();
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  const requestHeaders = new Headers(request.headers);
  if (isLocale(firstSegment)) {
    requestHeaders.set('x-locale', firstSegment);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }
  const locale = requestLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname === '/' ? '' : pathname}${search}`, request.url), 307);
}

export const config = { matcher: ['/((?!_next|.*\\..*).*)'] };
