import ExtensionVid from "./extension_vid";
import { useTranslation, UseTranslation } from "../../i18n";
import { languages } from '../../i18n/settings'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params: { lng } }) {
  const { t } = await UseTranslation(lng, 'extension');

  function alternates() {
    let alternates = {};
    languages.map((lng) => {
      alternates[lng] = `https://www.subtitlex.xyz/${lng}/extension`;
    });
    return alternates;
  }
  return {

    title: t('meta_title'),
    description: t('meta_description'),
    openGraph: {
      description:
        `${t("Free download subtitles (captions) of")} `,
      images: ["https://www.subtitlex.xyz/images/subtitlex-512-transparent.png"],
      video:"https://youtu.be/Uf2b4NqyQN8"
    },
    twitter: {
      card: "summary",
      title: "SubtitleX",
      description:
        `${t("Free download subtitles (captions) of")} .` ,
      creator: "@subtitlex_xyz",
      site: "https://www.subtitlex.xyz",
      image: "https://www.subtitlex.xyz/images/subtitlex-512-transparent.png",
    },
    alternates: {
      canonical: `https://www.subtitlex.xyz/${lng}/extension`,
      languages: alternates(),
    },
  };
}


export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'extension');
  return (
    <ExtensionVid lng={lng}></ExtensionVid>
  )
}