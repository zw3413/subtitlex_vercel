"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import {  useTranslation } from "../i18n/client";
import {Trans} from "react-i18next/TransWithoutContext"
export default function NotFound() {
  const { lng } = useParams();
  const { t } = useTranslation(lng, "notfound");
  return (
    <div>
      <h2>{t("Not Found")}</h2>
      <p>{t('Could not find requested resource, please refresh or')} </p>
      <p>
        
        <Link className="text-color-jable pe-2 underline" href="/">
        {t('Return to Home Page')}
        </Link>
        {t('or')}
        <Link className=" underline px-2" href="/Member">
          {t('Feedback an Issue')}
        </Link>
        .

      
      </p>
    </div>
  );
}
