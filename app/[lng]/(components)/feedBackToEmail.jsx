"use client"
import { useTranslation } from "../../i18n/client";
import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { sendEmail } from "../../common"

export default function FeedBackToEmail({ lng, subject }) {
    const a = "text-color-jable"
    const { t } = useTranslation(lng, "member");
    const [showInput, setShowInput] = useState(true);
    const [msg, setMsg] = useState(null);
    const session = useSession();
    const timeoutRef = useRef(null)
    const [subj] = useState('[SubtitleX] '+subject );
    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => { setMsg(null) }, 5000);
    }, [msg])

    const handleSubmit = () => {
        const target = 'zhangweicalm@gmail.com';
        let content = document.querySelector('#comment').value;
        if (!content || content === '') {
            setMsg(t('email.empty'));
            return;
        }
        const line1 = window?.location?.href + "\n"
        const line2 = JSON.stringify(session ? session : {}) + "\n"
        content = line1 + line2 + content;
        if (!content || content === '') {
            setMsg(t('email.empty'));
            return;
        }
        sendEmail(target, subj, content);
        setMsg(t('email.sent'));
        setShowInput(false);
    }

    return (<>

       { showInput &&
        <div className="mt-2" >
            <h2 className="text-white p-2">{subject}:</h2>
            <div className="w-full  border rounded-lg bg-gray-700 border-gray-600">
                <div className="px-4 py-2 rounded-t-lg bg-gray-800">
                    <textarea
                        id="comment"
                        rows="4"
                        className="w-full px-0 text-sm border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400" placeholder={t('Please input your comment ...')}
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
        </div>}

       { msg && <p className="text-sm text-white">{msg}</p>}
    </>
    )
}