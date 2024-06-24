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
      creator: "@subtitlex_xyz",
      site:"https://www.subtitlex.xyz",
      account_id: "1295910283341254657",
      image:"https://www.subtitlex.xyz/images/blog/img1.png"
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
