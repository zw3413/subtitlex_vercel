"use client";
import { useTranslation } from "../../i18n/client";
export default function ResultDetailDownloadButton({
  subText,
  language,
  name,
  format,
  lng
}) {
  const { t } = useTranslation(lng, "translation");
  const handleClick = () => {
    var blob = new Blob([subText], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);

    // 创建一个新的a标签
    var downloadLink = document.getElementById("downloadLink");
    downloadLink.href = url;
    // 设置文件名
    format = format.replace(".", "");
    var fileName = `${language}-${name}.${format}`;
    downloadLink.setAttribute("download", fileName);

    // 触发点击事件
    downloadLink.click();

    // 释放URL对象
    URL.revokeObjectURL(url);
  };
  return (
    <>    <button
      onClick={handleClick}
      id="download"
      type="button"
      className="text-base px-5 py-1 mx-2 font-medium rounded-lg border border-gray-200 text-white bg-blue-700 hover:bg-blue-800  "
    >
      {t('Download')}
    </button>
    <a className="hidden" id="downloadLink"></a>
    </>

  );
}
