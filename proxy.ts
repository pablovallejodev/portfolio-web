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

function buildCsp(nonce: string, isDev: boolean): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${isDev ? "'unsafe-eval'" : ''}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self'",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    'upgrade-insecure-requests',
  ]
    .filter(Boolean)
    .join('; ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function requestLocale(request: NextRequest) {
  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(cookie)) return cookie;
  return resolveLocale(request.headers.get('accept-language'));
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  if (isIgnoredPath(pathname)) return NextResponse.next();

  const nonce = crypto.randomUUID().replace(/-/g, '');
  const isDev = process.env.NODE_ENV !== 'production';
  const csp = buildCsp(nonce, isDev);
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('x-csp', csp);
  requestHeaders.set('Content-Security-Policy', csp);

  if (isLocale(firstSegment)) {
    requestHeaders.set('x-locale', firstSegment);
    const response = NextResponse.next({ request: { headers: requestHeaders } });
    response.headers.set('Content-Security-Policy', csp);
    return response;
  }

  const locale = requestLocale(request);
  const response = NextResponse.redirect(
    new URL(`/${locale}${pathname === '/' ? '' : pathname}${search}`, request.url),
    307,
  );
  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('Cache-Control', 'private, no-store');
  return response;
}

export const config = { matcher: ['/((?!_next|.*\\..*).*)'] };
