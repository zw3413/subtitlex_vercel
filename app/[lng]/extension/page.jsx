import ExtensionVid from "./extension_vid";
import { useTranslation, UseTranslation } from "../../i18n";
import { languages } from '../../i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params: { lng } }) {

  const { t } = await UseTranslation(lng, 'extension');
  return {
    title: t('meta_title'),
    description: t('meta_description'),
    alternates: {
      canonical: `https://www.subtitlex.xyz/extension`,
    },
  };
}

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'extension');
  return (
    <ExtensionVid lng={lng}></ExtensionVid>
  )
}