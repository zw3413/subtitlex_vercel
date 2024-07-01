"use server";

import Image from 'next/image';
import SearchForm from '../(components)/searchForm';

import TelegramJoinPage from "../(components)/telegram.jsx";


export async function generateMetadata(context) {
    return {
        title: "JAV subtitle",
        description: `Free searching and download subtitles (captions) in multiple languages for Japanese adult videos (JAV).`,
        keywords: "jav subtitle download,subtitle,captions,download,free,jav,japanese,adult",
        openGraph: {
            title: "JAV subtitle",
            type: "website",
            url: "https://jav.subtitlex.xyz/",
            site_name: "jav.subtitlex.xyz",
            images: [
                "https://jav.subtitlex.xyz/images/subtitlex-512-transparent.png"
            ]
        }
    };
}

export default async function AdultContent() {

    return (
        <>
            <div className="text-3xl font-bold text-pink-600 mb-5 mt-5">
                <h2>Discover millions of JAV subtitles with subtitlex.xyz!</h2>
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
                <SearchForm placeholder={"SONE-118"} className="w-4/5 mb-5" />

                {/* </div> */}
            </div>  <p className="text-lg max-w-[900px] text-pink-200 leading-relaxed">
                Search, download, and enjoy using our extensive library with a massive amount of over 150,000 subtitles for more than 30,000 Japanese Adult Videos (JAVs) collected when building the Subtitlex.xyz
            </p><div className="flex content-center"><TelegramJoinPage></TelegramJoinPage></div><p className="text-lg leading-relaxed max-w-[900px] text-gray-800">
                Subtitlex.xyz is a comprehensive database of subtitles for online videos, curated from the internet and produced with fast-whisper. Our mission is to democratize access to high-quality subtitles, fostering community around sharing, learning, and enjoying the video content. Join us in our mission to make intelligent subtitles!
            </p></>
    );
}
