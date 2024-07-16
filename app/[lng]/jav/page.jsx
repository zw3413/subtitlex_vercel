"use server";

import Image from 'next/image';
import SearchForm from '../(components)/searchForm';

import TelegramJoinPage from "../(components)/telegram.jsx";

import { useTranslation, UseTranslation } from "../../i18n";
import {languages} from '../../i18n/settings'

export async function generateStaticParams(){
  return languages.map((lng)=>({lng}))
}

export async function generateMetadata({ params: { uuid, lng } }) {

    const { t } = await UseTranslation(lng,'extension');

    return {
        title: t('jav_meta_title'),
        description: t('jav_meta_description'),
        keywords: t('jav_meta_keywords'),
        twitter:{
            card: "summary_large_image",
            title: t('jav_meta_title'),
            description:t('jav_meta_description'),
            creator: "@subtitlex_xyz",
            site: "https://jav.subtitlex.xyz/",
            image:  "https://jav.subtitlex.xyz/images/screenshots/jav.png",
        },
        openGraph: {
            title: t('jav_meta_title'),
            type: "website",
            url: "https://jav.subtitlex.xyz/",
            site_name: "jav.subtitlex.xyz",
            images: [
                "https://jav.subtitlex.xyz/images/screenshots/jav.png"
            ]
        }
    };
}

export default async function AdultContent({params:{lng}}) {
    const { t } = await useTranslation(lng,'extension');
    return (
        <>
            <div className="text-3xl font-bold text-pink-600 mb-5 mt-5">
                <h2>{t('jav_HEAD_1')}</h2>
            </div>
            <div className="container  bg-gradient-to-r from-pink-500 to-purple-600 p-10">

                {/* <div className="container mx-auto bg-white rounded-lg shadow-md p-5 flex flex-col items-center text-center max-w-2xl"> */}

                <Image
                    alt="subtitlex"
                    className="rounded-full mb-5 mx-auto"
                    src="/images/subtitlex-512-white-transparent.png"
                    width={200}
                    height={200}
                />
                <SearchForm lng={lng} placeholder={"SONE-118"} className="w-4/5 mb-5" />

                {/* </div> */}
            </div>  <p className="text-lg max-w-[900px] text-pink-200 leading-relaxed">
                {t('jav_DESCRIPTION_1')}
            </p><div className="flex content-center"><TelegramJoinPage lng={lng}></TelegramJoinPage></div><p className="text-lg leading-relaxed max-w-[900px] text-gray-800">
                {t('jav_DESCRIPTION_2')}
            </p></>
    );
}
