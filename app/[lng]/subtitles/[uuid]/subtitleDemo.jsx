"use server";
import { useTranslation } from "../../../i18n";
import { fetchTextFromURL, fetchTextFromURLServerSide } from "../../../common_server";


export default async function SubtitleDemo({
  lng,
  uuid
}) {
  const { t } = useTranslation(lng);
  const subText = await fetchTextFromURLServerSide(uuid, "demo")
  // const handleDownloadDemo = async () => {
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   const [setItem, getItem, removeItem] = useLocalStorage("user");
  //   const user = getItem();
  //   if (user && user.email) {
  //     var blob = new Blob([subText], { type: "text/plain;charset=utf-8" });
  //     var url = URL.createObjectURL(blob);

  //     // 创建一个新的a标签
  //     var downloadLink = document.getElementById("downloadLink");
  //     downloadLink.href = url;
  //     // 设置文件名
  //     format = format.replace(".", "");
  //     var fileName = `${language}_${video_no || video_name}_demo.${format}`;
  //     downloadLink.setAttribute("download", fileName);

  //     // 触发点击事件
  //     downloadLink.click();

  //     // 释放URL对象
  //     URL.revokeObjectURL(url);
  //   } else {
  //     //未登陆，进行登陆
  //     const currentUrl = window.location.href;
  //     window.open("/api/auth/signin?callbackUrl=" + currentUrl, "_self");
  //   }
  // };
  return (
    <>
      {/* <button onClick={handleDownloadDemo}>{t("Download Demo")}</button> */}

      <textarea
        defaultValue={subText}
        readOnly
        id="message"
        rows="4"
        disabled
        className=" select-none h-[1000px] block p-2.5 w-full text-sm  rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white overflow-clip "
        placeholder=""
      ></textarea>
    </>
  );
}
