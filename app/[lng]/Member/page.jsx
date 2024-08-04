//import "@upstash/feedback/dist/style.css";
import "@upstash/feedback/index.css"
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { useTranslation, UseTranslation } from "../../i18n";
// import {
//   StripePricingTable,
//   StripePricingTable_Monthly,
//   StripePricingTable_Weekly,
// } from "../helpers/components";
import {
    createCheckoutLink_Daily,
    createCheckoutLink_Weekly,
    createCheckoutLink_Monthly,
    createCustomerIfNull,
    generateCustomerPortalLink,
    getSubscription,
} from "../helpers/billing.js";
import Link from "next/link";

import FeedbackWidget from "../(components)/feedbackWidget.jsx";
import PriceTables from "../(components)/priceTables.jsx";
import SendMessage from "../(components)/sendMessage.jsx";
import FeedBackToEmail from "../(components)/feedBackToEmail";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Stripe from "stripe";

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
    apiVersion: "2024-04-02",
});



// const feedbackApi =  createFeedbackAPI({
//   webhooks: [process.env.SLACK_WEBHOOK_URL],
// });


async function Member({ params: { lng } }) {
    const { t } = await UseTranslation(lng, "member");
    const session = await getServerSession(options);
    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/Member");
    }
    await createCustomerIfNull();
    const user = await prisma.user.findFirst({
        where: {
            email: session?.user?.email,
        },
    });
    const manage_link = await generateCustomerPortalLink(
        user?.stripe_customer_id
    );
    const subscriptions = await getSubscription();
    let hasSub = subscriptions?.data?.length > 0;
    if (hasSub) {
        var start_date = new Date(
            subscriptions?.data[0].current_period_start * 1000
        ).toLocaleString();
        var status = subscriptions?.data[0].status;
        var end_date = new Date(
            subscriptions?.data[0].current_period_end * 1000
        ).toLocaleString();

        new Date(1713235507000).toLocaleString("en-US", { type: "" });
    } else {
        const stripe_customer_id = user?.stripe_customer_id;
        const checkOutLink_Day = await createCheckoutLink_Daily(
            stripe_customer_id
        );
        const checkOutLink_Week = await createCheckoutLink_Weekly(
            stripe_customer_id
        );
        const checkOutLink_Month = await createCheckoutLink_Monthly(
            stripe_customer_id
        );

        var stripeObj = {
            stripe_customer_id: stripe_customer_id,
            daily: {
                checkOutLink: checkOutLink_Day,
                price_id: process.env.STRIPE_PRODUCT_DAILY_ID,
                nickname: "One Day",
                unit_amount: 50,
            },
            weekly: {
                checkOutLink: checkOutLink_Week,
                price_id: process.env.STRIPE_PRODUCT_WEEKLY_ID,
                nickname: "One Week",
                unit_amount: 300,
            },
            monthly: {
                checkOutLink: checkOutLink_Month,
                price_id: process.env.STRIPE_PRODUCT_MONTHLY_ID,
                nickname: "One Month",
                unit_amount: 1000,
            },
        };
    }

    const userInfo = {
        email: user.email,
        name: user.name,
        hasSub: hasSub,
        expireDate: hasSub ? subscriptions?.data[0].current_period_end : null,
    };
    //用当前时间和subscription的current_period_end对比，看订阅是否还有效
    const current_time = new Date().getTime() / 1000;
    const expire_time = hasSub ? subscriptions?.data[0].current_period_end : null;
    const is_expired = expire_time ? current_time > expire_time : false;


    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
                {/* greeting start */}
                <div className="py-6 sm:py-10 mb-6 sm:mb-18 flex flex-wrap items-center justify-between">
                    <p className="text-xl sm:text-2xl font-medium mb-4 sm:mb-0">
                        {t('Welcome')},{" "}
                        {session.user.name ? session.user.name : session.user.email}{" "}
                    </p>

                    <Link
                        className="bg-white text-black rounded-md px-2 py-1 text-sm sm:text-base"
                        href={"" + manage_link}
                        target="_blank"
                    >
                        {t('Manage billing')}
                    </Link>
                </div>
                <SendMessage user={userInfo}></SendMessage>
                {/* greeting end */}

                {hasSub && !is_expired ? (
                    // for subscribed user
                    <div className="space-y-6">
                        <h1 className="text-xl sm:text-2xl text-color-jable">
                            {t('Subscription is Valid.')}
                        </h1>
                        <h2 className="text-base sm:text-lg">
                            {t('You have login successfully, ')}<br />
                            <br />
                            {t('greeting_1')}<br />
                            <br />
                            {t('Subscription is valid from', { start: start_date, end: end_date })}.
                        </h2>

                        <div className="text-lg sm:text-xl font-sans text-color-jable">
                            {t('Refresh the video page to show the subtitle.')}
                        </div>
                        <div>
                            <Link className="text-lg sm:text-xl font-sans underline text-color-jable" href="/">
                                {t('Search Subtitles Now')}
                            </Link>
                        </div>
                    </div>
                ) : (
                    // for none-subscribed user
                    <div className="space-y-6">
                        <h1 className="text-xl sm:text-2xl text-color-jable">
                            {t('Subscription is Invalid.')}
                        </h1>
                        <h2 className="text-base sm:text-lg">
                            <span className="text-color-jable">{t('200 subtitles per day')} </span>{" "}
                            {t('will be offered with a valid subscription.')}<br />
                            {t('greeting_2')}
                        </h2>

                        <div className="mt-8">
                            <PriceTables stripeObj={stripeObj} lng={lng}></PriceTables>
                        </div>
                        <div>
                            <Link className="text-lg sm:text-xl font-sans underline text-color-jable" href="/">
                                {t('Search Subtitles Now')}
                            </Link>
                        </div>
                    </div>
                )}

                <div className="mt-8 text-black">
                    {/* <FeedbackWidget
                        showOnInitial={false}
                        title={"Hi 👋"}
                        description={t("Have feedback? We'd love to hear it")}
                        type={"full"}
                        themeColor={"#20e4ff"}
                        textColor={"#000000"}
                        user={session?.user?.name + "(" + session?.user?.email + ")"}
                    ></FeedbackWidget> */}

                    <div className="mt-2">
                       <FeedBackToEmail lng={lng} subject={t('Feedback to Developer')}></FeedBackToEmail>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Member;