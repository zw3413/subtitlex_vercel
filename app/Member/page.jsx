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
      subscriptions?.data[0].current_period_start *1000
    ).toLocaleString();
    var status = subscriptions?.data[0].status;
    var end_date = new Date(
      subscriptions?.data[0].current_period_end *1000
    ).toLocaleString();

    new Date(1713235507000).toLocaleString("en-US", { type: "" });
  }else {


  const stripe_customer_id = user?.stripe_customer_id;

  // const hasSub = false;
  // const manage_link = "";
  // const session = {
  //   user: {
  //     name: "Wei Zhang",
  //     email: "zhangweicalm@gmail.com",
  //     image:
  //       "https://lh3.googleusercontent.com/a/ACg8ocJyZpFrAHxNEDJ1iq6KU8vmehCs2I1PK7l56FjZbbCxLerRK7s_=s96-c",
  //   },
  // };
  // const stripe_customer_id = "cus_PszMYkiTERe0iy";

  const checkOutLink_Week = await createCheckoutLink_Weekly(stripe_customer_id);
  const checkOutLink_Month = await createCheckoutLink_Monthly(
    stripe_customer_id
  );

  var stripeObj = {
    stripe_customer_id: stripe_customer_id,
    checkOutLink_Week: checkOutLink_Week,
    checkOutLink_Month: checkOutLink_Month,
  };
}

  return (
    <div className="max-w-4xl m-auto w-full px-4">
      <div className="flex flex-col">
        <div className="py-10  mb-18">
          <p className="text-2xl font-medium inline">
            Welcome,{" "}
            {session.user.name ? session.user.name : session.user.email}{" "}
            {hasSub ? (
              <span className="p-6 text-base font-medium">Subscribed</span>
            ) : (
              <span className="p-6 text-base font-medium"></span>
            )}
          </p>

          <Link
            className="bg-white ml-auto text-black rounded-md px-2 py-1"
            href={"" + manage_link}
          >
            Manage billing
          </Link>
        </div>

        {hasSub ? (
          <>
            <p className="py-4">Subscription is success!</p>
            <p className="py-4">
              The subscription will be available from <b className="text-[#20e4ff]"> {start_date} </b> to <b className="text-[#20e4ff]">
              {end_date}</b>.
            </p>
            <p className="py-4">
              Any questions or suggestions,
            </p>
            <p className="py-4">Please feedback or
              contact {process.env.CONTACT_EMAIL}</p>
          </>
        ) : (
          <div className="min-h-350">
            <div className="mb-20 text-center flex">
              <PriceTables stripeObj={stripeObj}></PriceTables>
            </div>
          </div>
        )}

        <div className="py-4 text-black">
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
