import { useEffect, useState } from "react";
import { remoteCall } from "../../common";
import { useTranslation } from "../../i18n/client";
import { Trans } from "react-i18next/TransWithoutContext";
export default function SubtitleCount({ lng }) {
  const { t } = useTranslation(lng, "translation");
  const [subsCount, setSubsCount] = useState(null);
  const [videosCount, setVideosCount] = useState(null);
  const fetchSubtitleCount = async () => {
    const f = "42511e82-139e-4e0b-8aad-0ec8c3c67320";
    const pl = ["subtitle_count"];
    const result = await remoteCall(f, pl, null, null);
    if (result && result.data && result.data.length > 0) {
      const l = JSON.parse(result.data);
      setSubsCount(l[0].subs_count);
      setVideosCount(l[0].videos_count);
    } else {
      return [];
    }
  };
  useEffect(() => {
    fetchSubtitleCount();
  }, []);
  return (
    subsCount &&
    videosCount && (
      <div>
        <span className="text-white">
          <Trans i18nKey="subtitle_count" t={t}>
            Totally {{ subsCount }} distinct subtitles for {{ videosCount }}{" "}
            distinct videos
          </Trans>
        </span>
      </div>
    )
  );
}
