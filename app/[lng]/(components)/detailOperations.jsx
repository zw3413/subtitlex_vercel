"use client"
import ResultDetailDownloadButton from "./resultDetailDownloadButton"
import InstallChromeExtensionButton from "./installChromeExtensionButton";
import { useTranslation } from "../../i18n/client";
import { useState } from "react";

export default function DetailOperations({ subText, seed, lng }) {
    const { t } = useTranslation(lng, "member");
    const [showInput, setShowInput] = useState(false);
    const [msg, setMsg] = useState(null);
    const handleReportIssue = () => {
        setShowInput(!showInput);
    }
    const handleSubmit =  () => {
        const target = 'zhangweicalm@gmail.com';
        const subject = 'SubtitleX Issue';
        const content = document.querySelector('#comment').value;
        if (!content || content === '') {
            setMsg(t('email.empty'));
            return;
        }
        sendEmail(target,subject,content);
        setMsg(t('email.sent'));
        setShowInput(false);
    }
    async function sendEmail(target, subject, content) {
        try {
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ target, subject, content }),
          });
      
          if (!response.ok) {
            throw new Error('Failed to send email');
          }
      
          const data = await response.json();
          console.log(data.message);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    return (<>
        <div className="flex  justify-between">
            <div className="inline-flex">
                <ResultDetailDownloadButton
                    subText={subText}
                    language={seed.language}
                    name={seed.video_name}
                    format={seed.format}
                    lng={lng}
                ></ResultDetailDownloadButton>

                <button
                    onClick={handleReportIssue}
                    id="report-button"
                    type="button"
                    className=" text-base px-5 py-1 mx-2 font-medium rounded-lg border border-gray-200 text-gray-900 focus:outline-none bg-white  hover:bg-gray-100 hover:text-blue-700 "
                >
                    {t("Report Issue")}
                </button>
            </div>

            <div className="inline-flex">
                <InstallChromeExtensionButton
                    lng={lng}
                ></InstallChromeExtensionButton>
            </div>
        </div>
        {showInput ?
            (<>
                <div className="mt-2">
                    <div className="w-full mb-4 border  rounded-lg  bg-gray-700 border-gray-600">
                        <div className="px-4 py-2 rounded-t-lg bg-gray-800">
                            <textarea id="comment" rows="4" className="w-full px-0 text-sm  border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400"  required ></textarea>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t border-gray-600">
                            <button onClick={handleSubmit} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4  focus:ring-blue-900 hover:bg-blue-800">
                                {t("Submit")}
                            </button>
                            {/* <div className="flex ps-0 space-x-1 rtl:space-x-reverse sm:ps-2">
                                <button type="button" className="inline-flex justify-center items-center p-2  rounded cursor-pointer   text-gray-400 hover:text-white hover:bg-gray-600">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                    </svg>
                                    <span className="sr-only">{t('Attach file')}</span>
                                </button>
                                <button type="button" className="inline-flex justify-center items-center p-2  rounded cursor-pointer   text-gray-400 hover:text-white hover:bg-gray-600">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                    </svg>
                                    <span className="sr-only">{t('Upload image')}</span>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div> 
            </>) : (<div></div>)
        }
        {msg?(<p>{msg}</p>):(<></>)}
    </>
    )
}