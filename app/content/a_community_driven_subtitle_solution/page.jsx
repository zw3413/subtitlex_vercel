import Content from "./content.mdx";
export async function generateMetadata(context) {
  return {
    title:
      "Enhance Your Viewing Experience with Subtitlex : A Community-Driven Subtitle Solution",
    description: `Chrome Extension provide the function of load subtitles from user local and SubtitleX library`,
    openGraph: {
      images: ["https://www.subtitlex.xyz/images/blog/img1.png"],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@SubtitleX",
    },
  };
}

export default function Page() {
  return (
    <div className="container max-w-[680px] py-2">
      <Content />
    </div>
  );
}
