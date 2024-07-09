import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "./app/i18n/settings";


acceptLanguage.languages(languages);

export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|images|_next/image|lensblur|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

export function middleware(req) {
  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLng;

  if (
    (req.nextUrl.origin.includes("jav.") ||
      req.headers.get("referer")?.includes("jav.")) &&
    (req.nextUrl.pathname === "/" ||
      languages.some((loc) => req.nextUrl.pathname === `/${loc}`))
  ) {
    //    const redUrl =req.nextUrl.origin + req.nextUrl.pathname + "/jav"
    //      const redUrl =new URL('/jav', req.nextUrl.origin)
    const redUrl = "/jav";
    console.log(redUrl);
    console.log(req.nextUrl);
    console.log(req.url);
    console.log(req.URL)
    return NextResponse.redirect(redUrl,req.url );
  }

  // Redirect if lng in path is not supported
  if (
    !languages.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    const baseUrl = req.nextUrl.origin;
    const newPath = `/${lng}${req.nextUrl.pathname}`;
    const newUrl = new URL(newPath, baseUrl);
    for (const [key, value] of req.nextUrl.searchParams.entries()) {
      newUrl.searchParams.append(key, value);
    }
    return NextResponse.redirect(newUrl);
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  return NextResponse.next();
}
