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

    const handleSubmit = () => {
        const target = 'zhangweicalm@gmail.com';
        const subject = 'SubtitleX Issue';
        const content = document.querySelector('#comment').value;
        if (!content || content === '') {
            setMsg(t('email.empty'));
            return;
        }
        sendEmail(target, subject, content);
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

    return (
        <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <div className="flex flex-wrap gap-2">
                    <ResultDetailDownloadButton
                        subText={subText}
                        language={seed.language}
                        name={seed.video_name}
                        format={seed.format}
                        lng={lng}
                    />
                    <button
                        onClick={handleReportIssue}
                        id="report-button"
                        type="button"
                        className="text-sm sm:text-base px-3 sm:px-5 py-1 font-medium rounded-lg border border-gray-200 text-gray-900 focus:outline-none bg-white hover:bg-gray-100 hover:text-blue-700"
                    >
                        {t("Report Issue")}
                    </button>
                </div>
                <div className="hidden sm:block">
                    <InstallChromeExtensionButton lng={lng} />
                </div>
            </div>
            {showInput && (
                <div className="mt-2">
                    <div className="w-full mb-4 border rounded-lg bg-gray-700 border-gray-600">
                        <div className="px-4 py-2 rounded-t-lg bg-gray-800">
                            <textarea
                                id="comment"
                                rows="4"
                                className="w-full px-0 text-sm border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400"
                                required
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 border-t border-gray-600">
                            <button
                                onClick={handleSubmit}
                                className="inline-flex items-center py-2 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-900 hover:bg-blue-800"
                            >
                                {t("Submit")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {msg && <p className="text-sm text-gray-300">{msg}</p>}
        </div>
    )
}