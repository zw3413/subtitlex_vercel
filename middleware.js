import { NextResponse } from "next/server";
import acceptLanguage from "accept-language";
import { fallbackLng, languages, cookieName } from "./app/i18n/settings";
import { subtitleXserverApi } from "./constants";
acceptLanguage.languages(languages);

//配置不走middleware的url pattern
export const config = {
  // matcher: '/:lng*'
  matcher: [
    "/((?!api|_next/static|images|sitemap|_next/image|lensblur|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
};

const requestUUIDWithClientIP = async (client_ip) => {
  try {
    let url = subtitleXserverApi + "/api2";
    // url = "http://192.168.2.203:12801"+"/api2"
    console.log(url);
    const response = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Forwarded-Host": client_ip,
        },
      },
      5000
    );
    if (response.status == "200") {
      const result = await response.json();
      if (result.rc == "000") {
        return result.data;
      }
    }
    return "xxxx";
  } catch (e) {
    console.error(e);
    return "xxxx";
  }
};
//middleware 用于i18n的redirecting
export async function middleware(req) {
  const response = NextResponse.next();

  //check if the client_uuid exist in the cookie
  let client_uuid = req.cookies.get("client_uuid")?.value;
  //if none, try to get the client ip
  if (!client_uuid || client_uuid  == '') {
    const clientIp = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(
      ","
    )[0];
    //use the client ip to call api2 to get a client_uuid
    client_uuid = await requestUUIDWithClientIP(clientIp);
    response.cookies.set("client_uuid", client_uuid);
  }

  let lng;
  //首先尝试使用cookie中带回来的lng
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName).value);
  //否则尝试使用headers的Accept-Language作为lng
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  //都没有的时候使用默认的lng
  if (!lng) lng = fallbackLng;

  //转换jav.subtitlex.xyz 和 jav.subtitlex.xyz/[lng]的子域名的路径，并重定向
  if (
    req.nextUrl.origin.includes("jav.") ||
    req.headers.get("referer")?.includes("jav.")
  ) {
    //    const redUrl =req.nextUrl.origin + req.nextUrl.pathname + "/jav"
    //      const redUrl =new URL('/jav', req.nextUrl.origin)

    if (req.nextUrl.pathname === "/") {
      const url = req.nextUrl.clone();
      url.pathname = `/${lng}/jav`;
      return NextResponse.redirect(url);
    } else if (languages.some((loc) => req.nextUrl.pathname === `/${loc}`)) {
      const url = req.nextUrl.clone();
      url.pathname = url.pathname + `/jav`;
      return NextResponse.redirect(url);
    }
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
  //如果header中有referer，则使用和原来一致的lng，并修改cookie中lng
  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer"));
    const lngInReferer = languages.find((l) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );

    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }
  return response;
}
