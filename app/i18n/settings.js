export const fallbackLng = "en";
export const languages = [
  fallbackLng,
  "de",
  "ko",
  "ja",
  "zh-CN",
  "zh-TW",
  "ar",
  "es",
  "fr",
  "ms",
  "pt",
  "ru",
  "vi",
];
export const defaultNS = "translation";
export const cookieName = "i18next";
export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
