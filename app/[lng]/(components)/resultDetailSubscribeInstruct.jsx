"use server";
import { UseTranslation } from '../../i18n'
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
export default async function ResultDetailSubscribeInstruct({ subText, lng }) {
  console.log("ResultDetailSubscribeInstruct")
  console.log(lng)
  console.log(123)
  const { t } = UseTranslation(lng);
  const tip = "Subscribe to www.subtitlex.xyz/Member please";
 
  return (
    <>
      {subText.includes(tip) ? (
        <div className=" text-red-400">
          👋123
          <Trans i18nKey="Exceed Limit Please Subscribe" t={t}>
            You have request more than 20 subtitles today, please
            <Link
              href="/Member"
              target="_blank"
              className="underline text-color-jable text-xl font-sans mx-1"
            >
              Subscribe
            </Link>
            to unlock the limit up to 200 subtitles per day, thanks for your
            great support
          </Trans>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
