"use server";
import { useTranslation } from "../../i18n";
import Link from "next/link";
import { Trans } from "react-i18next/TransWithoutContext";
export default async function ResultDetailSubscribeInstruct({ subText, lng }) {
  const { t } = await useTranslation(lng, "notfound");
  console.log("resultDetailSubscribeInstruct ", lng);
  const tip = "Subscribe to www.subtitlex.xyz/Member please";

  return (
    <>
      {subText.includes(tip) ? (
        <div className=" text-red-400">
          👋 {t("Exceed_Limit")} <br /> 👋 {" "}
          <Trans i18nKey="Please_Subscribe" t={t}>
            Please
            <Link
              href="/Member"
              target="_blank"
              className="underline text-color-jable text-xl font-sans mx-1"
            >
              Read about the frequency limitation and Subscribe
            </Link>
            to unlock the limitation. 
          </Trans>
         <bt/> 👋 {t('proxy_tip')}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
