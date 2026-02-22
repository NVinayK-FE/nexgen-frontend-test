import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es", "fr"] as const;
const defaultLocale = "en";

const PUBLIC_FILE = /\.[^/]+$/;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        PUBLIC_FILE.test(pathname)
    ) {
        return NextResponse.next();
    }

    const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

    if (hasLocale) {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;

    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/((?!_next|api).*)"],
};
