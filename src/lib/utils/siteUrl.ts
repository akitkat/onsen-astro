export function getPageUrl(pathname: string, siteBaseUrl: string): string {
  return new URL(pathname, siteBaseUrl).href;
}

export function toAbsoluteUrl(url: string, siteBaseUrl: string): string {
  return url.startsWith("http") ? url : new URL(url, siteBaseUrl).href;
}
