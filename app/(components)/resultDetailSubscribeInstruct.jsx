"use client";
import Link from "next/link";
export default function ResultDetailSubscribeInstruct({ subText }) {
  const tip = "Subscribe to www.subtitlex.xyz/Member please";

  return (
    <>
      {subText.includes(tip) ? (
        <div className=" text-red-400">
          You have request more than 5 subtitles in last hour, please wait for a
          moment or <Link href="/Member" target="_blank" className="underline text-color-jable text-xl font-sans mx-1">Subscribe</Link> to get a more comfortable experience with 100
          subtitles per day.
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
