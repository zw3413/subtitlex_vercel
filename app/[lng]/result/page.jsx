"use client";
import { useEffect, useState } from "react";
import SearchForm from "../(components)/searchForm";
import { remoteCall } from "../../common";
import SearchList from "../(components)/searchList";
import SearchDetail from "../(components)/searchDetail";
import { useTranslation } from "../../i18n/client";
import { useSession } from "next-auth/react";
import { useCookies } from "react-cookie";

const searchSubtitle = async (hint, session, client_uuid) => {
    try {
        const f = "7435a7c0-223c-43c7-a256-5d160d58a8f5";
        const pl = [hint, "100"];
        const result = await remoteCall(f, pl, session, client_uuid);
        if (result && result.data && result.data.length > 0) {
            return JSON.parse(result.data);
        } else {
            return [];
        }
    } catch (e) {
        console.error(e);
    }
};

export default function Result(inParams) {
    const {
        searchParams,
        params: { lng },
    } = inParams;
    const { t } = useTranslation(lng, "translation");

    const hint = searchParams.hint;
    const [seeds, setSeeds] = useState(null);
    const [seed, setSeed] = useState(null);
    const session = useSession();
    const [cookies] = useCookies();
    const client_uuid = cookies["client_uuid"];

    useEffect(() => {
        searchSubtitle(hint, session, client_uuid).then((result) => {
            if (result && result.map) {
                setSeeds(result);
            }
        });
    }, [hint, session, client_uuid]);

    useEffect(() => {
        if (seed) {
            console.log(seed);
            const url = `/result/detail/${seed.uuid}`;
            window.open(url, "_blank");
        }
    }, [seed]);

    return (
        <div className="container mx-auto px-4">
            <div className="my-6 md:my-10">
                <SearchForm inHint={hint} t={t} />
            </div>

            <div className="grid gap-2 grid-cols-1 md:grid-cols-5">
                <div className="hidden md:block"></div>
                <div className="col-span-1 md:col-span-3">
                    {!false ? (
                        <>
                            <h1 className="mb-6 md:mb-10 text-xl md:text-2xl">
                                {t("ResultsOfSearching")} &quot;{hint}&quot;:
                            </h1>
                            {seeds ? (
                                <SearchList seeds={seeds} setSeed={setSeed} t={t} />
                            ) : (
                                <div className="flex place-content-center">
                                    {t("Searching...")}
                                </div>
                            )}
                        </>
                    ) : (
                        <SearchDetail seed={seed} />
                    )}
                </div>
                <div className="hidden md:block"></div>
            </div>
        </div>
    );
}