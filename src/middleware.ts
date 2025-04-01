import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ru'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // For root path, serve the content directly with default locale
  if (pathname === '/') {
    request.nextUrl.pathname = `/${defaultLocale}`;
    return NextResponse.rewrite(request.nextUrl);
  }

  // Redirect if there is no locale
  const locale = defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and special files
    '/((?!_next|api|favicon.ico|logo.svg|before.jpeg|after.jpeg|manifest.json|web-app-manifest-192x192.png|web-app-manifest-512x512.png|img|sitemap.xml|robots.txt|yandex_84b281fea463dc5a.html).*)',
  ],
}; 