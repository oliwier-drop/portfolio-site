import { defineMiddleware } from "astro:middleware";
import {
  defaultLocale,
  getLocaleFromUrl,
  localizePath,
  stripLocalePrefix,
} from "@/i18n/config";

function isBlogPath(pathname: string): boolean {
  const stripped = stripLocalePrefix(pathname);
  return stripped === "/blog" || stripped.startsWith("/blog/");
}

export const onRequest = defineMiddleware(async (ctx, next) => {
  const { pathname, search } = ctx.url;

  if (isBlogPath(pathname)) {
    const home = localizePath("/", getLocaleFromUrl(ctx.url));
    return ctx.redirect(`${home}${search}`, 301);
  }

  if (pathname === "/pl" || pathname.startsWith("/pl/")) {
    const dest = localizePath(stripLocalePrefix(pathname), defaultLocale);
    return ctx.redirect(`${dest}${search}`, 301);
  }

  const response = await next();
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  return response;
});
