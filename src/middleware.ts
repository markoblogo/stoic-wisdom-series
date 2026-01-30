import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ["en", "tp"];
let defaultLocale = "en";

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Only run on "page" URLs.
        // Skip Next internals, API, and any path that looks like a file (has a dot), e.g. /robots.txt, /og-image.jpg
        "/((?!_next|api|.*\\..*).*)"
    ],
};
