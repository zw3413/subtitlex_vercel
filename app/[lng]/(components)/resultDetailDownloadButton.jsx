"use client";
import { useTranslation } from "../../i18n/client";
import { fetchTextFromURL } from "../../common";
import { useLocalStorage } from "../../../customHook/useLocalStorage";
export default function ResultDetailDownloadButton({
  subtitleUuid,
  language,
  name,
  format,
  lng,
}) {
  const { t } = useTranslation(lng, "translation");
  const downloadSubtitle = async ({ mode }) => {
    const text = await fetchTextFromURL(subtitleUuid, mode);
    subText = text;
  };

  const handleClick = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [setItem, getItem, removeItem] = useLocalStorage("user");
    const user = getItem();
    console.log("download subtitle button");
    console.log(user);
    if (user && user.email) {
      if (user?.hasSub) {
        if (!user?.user_secret) {
          console.error("no user_secret");
        }
        await downloadSubtitle({ mode: "full" });
        var blob = new Blob([subText], { type: "text/plain;charset=utf-8" });
        var url = URL.createObjectURL(blob);

        // 创建一个新的a标签
        var downloadLink = document.getElementById("downloadLink");
        downloadLink.href = url;
        // 设置文件名
        format = format.replace(".", "");
        var fileName = `${language}_${name}.${format}`;
        downloadLink.setAttribute("download", fileName);

        // 触发点击事件
        downloadLink.click();

        // 释放URL对象
        URL.revokeObjectURL(url);
      } else {
        //登录了，但是未订阅，跳转到订阅页面
        window.open("/Member", "_self");
      }
    } else {
      //未登陆，进行登陆
      const currentUrl = window.location.href;
      window.open("/api/auth/signin?callbackUrl=" + currentUrl, "_self");
    }
  };

  return (
    <>
      {" "}
      <button
        onClick={handleClick}
        id="download"
        type="button"
        className=" h-14 text-base px-5 py-1 mx-2 font-medium rounded-lg  text-color-jable bg-blue-800 hover:bg-blue-700 hover:text-white  "
      >
        {t("Download")}
      </button>
      <a className="hidden" id="downloadLink"></a>
    </>
  );
}
