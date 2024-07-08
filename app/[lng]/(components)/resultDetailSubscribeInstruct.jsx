"use client";
import Link from "next/link";
export default function ResultDetailSubscribeInstruct({ subText }) {
  const tip = "Subscribe to www.subtitlex.xyz/Member please";

  return (
    <>
      {subText.includes(tip) ? (
        <div className=" text-red-400">
          You have request more than 20 subtitles today, please <Link href="/Member" target="_blank" className="underline text-color-jable text-xl font-sans mx-1">Subscribe</Link> to unlock the limit up to 200
          subtitles per day, thanks for your great support  👋
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
