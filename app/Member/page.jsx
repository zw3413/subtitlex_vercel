import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
// import {
//   StripePricingTable,
//   StripePricingTable_Monthly,
//   StripePricingTable_Weekly,
// } from "../helpers/components";
import {
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

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Stripe from "stripe";

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
  apiVersion: "2024-04-02",
});

// import FeedbackWidget from "@upstash/feedback";

import "@upstash/feedback/index.css";
// import createFeedbackAPI from "@upstash/feedback/api";

// const feedbackApi =  createFeedbackAPI({
//   webhooks: [process.env.SLACK_WEBHOOK_URL],
// });
// console.log("feedbackApi")
// console.log(await feedbackApi())

async function Member() {
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
  const hasSub = subscriptions?.data?.length > 0;
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
    const checkOutLink_Week = await createCheckoutLink_Weekly(
      stripe_customer_id
    );
    const checkOutLink_Month = await createCheckoutLink_Monthly(
      stripe_customer_id
    );

    var stripeObj = {
      stripe_customer_id: stripe_customer_id,
      weekly: {
        checkOutLink: checkOutLink_Week,
        price_id: process.env.STRIPE_PRODUCT_WEEKLY_ID,
        nickname: "One Week",
        unit_amount: 500,
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
    <div className="max-w-[1100px] min-w-[1000px] place-content-left ml-20">
      <div className="flex flex-col">
        {/* greeting start */}
        <div className="py-10  mb-18">
          <p className="text-2xl font-medium inline mr-8">
            Welcome,{" "}
            {session.user.name ? session.user.name : session.user.email}{" "}
            {/* {hasSub ? (
              <span className="p-6 text-base font-medium">Subscribed</span>
            ) : (
              <span className="p-6 text-base font-medium"></span>
            )} */}
          </p>

          <Link
            className="bg-white ml-auto text-black rounded-md px-2 py-1"
            href={"" + manage_link}
          >
            Manage billing
          </Link>
        </div>
        <SendMessage user={userInfo}></SendMessage>
        {/* greeting end */}

        {hasSub && !is_expired ? (
          // for subscribed user
          <div className="h-[420px]">
            <h1 className="max-w-[1000px] text-color-jable">
              Subscription is Valid.
            </h1>
            <h2 className="mt-6">
              You have login successfully, <br />
              <br />
              <span className="underline text-2xl">
                Refresh the video page to show the subtitle.
              </span>
              <br />
              <br />
              Contact with the developer, we&#39;d love to hear your feedback.
              <br />
              <br />
              Subscription is valid from{" "}
              <b className="text-[#20e4ff]"> {start_date} </b> to{" "}
              <b className="text-[#20e4ff]">{end_date}</b>.
            </h2>
          </div>
        ) : (
          // for none-subscribed user
          <div className="h-[420px]">
            <h1 className="max-w-[1000px]">Subscription is Invalid.</h1>
            <h2 className="mt-2">
              <span className="text-color-jable">200 subtitles per day </span>{" "}
              will be offered with a valid subscription.
              <br />
              Contact with the developer, we&#39;d love to hear your feedback.
            </h2>
            <div className="min-h-300">
              <div className="mb-10 text-center flex">
                <PriceTables stripeObj={stripeObj}></PriceTables>
              </div>
            </div>
          </div>
        )}

        
        <div className=" text-black">
          <FeedbackWidget
            showOnInitial={true}
            title={"Hi 👋"}
            description={"Have feedback? We'd love to hear it"}
            type={"full"}
            themeColor={"#20e4ff"}
            textColor={"#000000"}
            user={session?.user?.name + "(" + session?.user?.email + ")"}
          ></FeedbackWidget>
        </div>
      </div>
    </div>
  );
}

export default Member;
