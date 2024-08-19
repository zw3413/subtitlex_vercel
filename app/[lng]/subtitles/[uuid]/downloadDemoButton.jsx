"use client";
import { useTranslation } from "../../../i18n/client";
import { fetchTextFromURL } from "../../../common";
import { useLocalStorage } from "../../../../customHook/useLocalStorage";

export default function DownloadDemoButton({
  lng,
  uuid,
  format,
  language,
  video_no,
  video_name,
}) {

  const { t } = useTranslation(lng);
  const handleDownloadDemo = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [setItem, getItem, removeItem] = useLocalStorage("user");
    const user = getItem();
    if (user && user.email) {
      const subText = await fetchTextFromURL(uuid, "demo");
      var blob = new Blob([subText], { type: "text/plain;charset=utf-8" });
      var url = URL.createObjectURL(blob);

      // 创建一个新的a标签
      var downloadLink = document.getElementById("downloadLink");
      downloadLink.href = url;
      // 设置文件名
      format = format.replace(".", "");
      var fileName = `${language}_${video_no || video_name}_demo.${format}`;
      downloadLink.setAttribute("download", fileName);

      // 触发点击事件
      downloadLink.click();

      // 释放URL对象
      URL.revokeObjectURL(url);
    } else {
      //未登陆，进行登陆
      const currentUrl = window.location.href;
      window.open("/api/auth/signin?callbackUrl=" + currentUrl, "_self");
    }
  };
  return <button onClick={handleDownloadDemo}>{t("Download Demo")}</button>;
}
