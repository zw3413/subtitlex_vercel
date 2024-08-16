import "@upstash/feedback/index.css";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { UseTranslation } from "../../i18n";
import {
  createCheckoutLink_Daily,
  createCheckoutLink_Weekly,
  createCheckoutLink_Monthly,
  createCustomerIfNull,
  generateCustomerPortalLink,
  getSubscription,
} from "../helpers/billing.js";
import Link from "next/link";
import PriceTables from "../(components)/priceTables.jsx";
import SendMessage from "../(components)/sendMessage.jsx";
import FeedBackToEmail from "../(components)/feedBackToEmail";
import { PrismaClient } from "@prisma/client";
import Stripe from "stripe";
import ProductPrice from "./productPrice";
import SearchForm from "../(components)/searchForm";

const prisma = new PrismaClient();
const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
  apiVersion: "2024-04-02",
});

async function Member({ params: { lng } }) {
  const { t } = await UseTranslation(lng, "member");
  const session = await getServerSession(options);
  if (!session) {
    //没有session表示没有登录，重定向到登录页面，callback链接回member
    redirect("/api/auth/signin?callbackUrl=/Member");
  }
  await createCustomerIfNull(); //检查创建strip用户
  //获取prisma的用户
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });
  //生成strip账户管理链接
  const manage_link = await generateCustomerPortalLink(
    user?.stripe_customer_id
  );
  //获取strip中订阅信息
  const subscriptions = await getSubscription();
  let hasSub = subscriptions?.data?.length > 0;
  let stripe_customer_id = "";
  if (hasSub) {
    //有订阅，获取订阅开始和结束时间
    var start_date = new Date(
      subscriptions?.data[0].current_period_start * 1000
    )
      .toISOString()
      .split(".")[0]
      .replace("T", " ");

    var end_date = new Date(subscriptions?.data[0].current_period_end * 1000)
      .toISOString()
      .split(".")[0]
      .replace("T", " ");
  } else {
    //无订阅，显示订阅price信息
    stripe_customer_id = user?.stripe_customer_id;
    // const checkOutLink_Day = await createCheckoutLink_Daily(stripe_customer_id);
    // const checkOutLink_Week = await createCheckoutLink_Weekly(stripe_customer_id);
    // const checkOutLink_Month = await createCheckoutLink_Monthly(stripe_customer_id);
    //for debug
    const checkOutLink_Day = "";
    const checkOutLink_Week = "";
    const checkOutLink_Month = "";
    //strip object 用于显示订阅信息
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
  //用户信息
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
        <div className="py-6 sm:py-10 mb-6 sm:mb-18 flex flex-wrap items-center justify-center">
          <p className="text-xl sm:text-2xl font-medium mb-4 sm:mb-0 sm:mx-4">
            {t("Welcome")},{" "}
            {session.user.name ? session.user.name : session.user.email}{" "}
          </p>

          <Link
            className="bg-white text-black rounded-md px-2 py-1 text-sm sm:text-base"
            href={"" + manage_link}
            target="_blank"
          >
            {t("Manage billing")}
          </Link>
        </div>
        {/* for debug */}
        {/* <SendMessage user={userInfo}></SendMessage> */}
        {/* greeting end */}

        {hasSub ? (
          // for subscribed user
          <div className="space-y-6">
            <h1 className="text-xl sm:text-3xl text-color-jable w-full text-center">
              {t("Subscription is Valid.")}
            </h1>
            <h2 className="text-base sm:text-xl w-full text-center text-color-jable">
              {t("Subscription is valid from", {
                start: start_date,
                end: end_date,
              })}
              .
            </h2>
            <div>
              <ul className="text-color-jable text-3xl w-fit mx-auto">
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-2xl font-normal leading-tight text-gray-400 ms-3">
                    {t("Free Access to All Our 400,000+ Subtitles") + "†"}
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-2xl font-normal leading-tight text-gray-400 ms-3">
                    {t("Free Access to 400,000+ Demo Subtitles")}
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-2xl font-normal leading-tight text-gray-400 ms-3">
                    {t("Load Subtitles with Browser Extension")}
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span className="text-2xl font-normal leading-tight text-gray-400 ms-3">
                    {t("New Subtitles Added Every Week")}
                  </span>
                </li>
              </ul>
            </div>
            <div className="my-4 px-4 text-slate-400 w-full text-center text-sm">
              †{" "}
              {t(
                "To avoid abuse, full subtitle downloads are limited to any 20 subtitles per day."
              )}
            </div>
            {/* <div className="text-lg sm:text-xl font-sans text-color-jable">
              {t("Refresh the video page to show the subtitle.")}
            </div> */}

          </div>
        ) : (
          // for none-subscribed user
          // <div className="space-y-6">
          //   <h1 className="text-xl sm:text-2xl text-color-jable">
          //     {t("Subscription is Invalid.")}
          //   </h1>
          //   <h2 className="text-base sm:text-lg">
          //     <span className="text-color-jable">
          //       {t("200 subtitles per day")}{" "}
          //     </span>{" "}
          //     {t("will be offered with a valid subscription.")}
          //     <br />
          //     {t("greeting_2")}
          //   </h2>

          //   <div className="mt-8">
          //     <PriceTables stripeObj={stripeObj} lng={lng}></PriceTables>
          //   </div>
          //   <div>
          //     <Link
          //       className="text-lg sm:text-xl font-sans underline text-color-jable"
          //       href="/"
          //     >
          //       {t("Search Subtitles Now")}
          //     </Link>
          //   </div>
          // </div>
          <ProductPrice
            stripe_customer_id={stripe_customer_id}
            t={t}
          ></ProductPrice>
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

          <div className="mt-2 max-w-md mx-auto">
            <FeedBackToEmail
              lng={lng}
              subject={t("Feedback to Developer")}
            ></FeedBackToEmail>
          </div>

          <div className="pt-20">
              {/* <Link
                className="text-lg sm:text-xl font-sans underline text-color-jable"
                href="/"
              >
                {t("Search Subtitles Now")}
              </Link> */}
              <SearchForm lng={lng}></SearchForm>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
