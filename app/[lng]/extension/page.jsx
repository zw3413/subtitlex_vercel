import Extension from "./extension";

export async function generateMetadata({params:{lng}}) {  
  return {
    title: "Chome Extension",
    description: `Chrome Extension provide the function of load subtitles from user local and SubtitleX library`,
    alternates: {
      canonical: `https://www.subtitlex.xyz/extension`,
    },
  };
}

export default async function Home({params:{lng}}){

  return (
    <Extension lng={lng}></Extension>
  )
}