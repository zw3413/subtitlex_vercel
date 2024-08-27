import Link from "next/link";
import { useTranslation, UseTranslation } from "../../i18n";

export default async function Error({ params: { lng }, searchParams }) {
  console.log({ searchParams });
  const { t } = await useTranslation(lng, "notfound");
  return (
    <>
      <div className="container mx-auto px-4  py-8 sm:px-6 lg:px-8">
        <div>{searchParams.rc}</div>
        <div>{searchParams.rm}</div>
        <p>
          <Link className="text-color-jable pe-2 underline" href="/">
            {t("Return to Home Page")}
          </Link>
          {t("or")}
          <Link className=" underline px-2" href="/Member">
            {t("Feedback an Issue")}
          </Link>
          .
        </p>
      </div>
    </>
  );
}
