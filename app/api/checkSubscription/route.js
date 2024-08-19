import Stripe from "stripe";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";
import { join } from "path";

const prisma = new PrismaClient();

export async function POST(request) {
  let userInfo = {};
  let email = null;
  const email_param = request.nextUrl.searchParams.get("email");
  if (!email_param) {
    const session = await getServerSession(options);
    email = session?.user?.email;
  } else {
    email = email_param;
  }

  try {
    if (email) {
      const stripe = new Stripe(process.env.STRIPE_SECRET);

      if (email) {
        //获取prisma user
        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });
        if (user) {
          console.log(user);
          //获取strip customer
          const subscriptions = await stripe.subscriptions.list({
            customer: user?.stripe_customer_id,
          });
          const hasSub = subscriptions?.data?.length > 0;
          let user_secret = null;
          if (hasSub) {
            //email+weekday+salt(stripe_customer_id) md5
            const salt = user?.stripe_customer_id;
            const date = new Date(
              Date.UTC(
                new Date().getUTCFullYear(),
                new Date().getUTCMonth(),
                new Date().getUTCDate(),
                new Date().getUTCHours(),
                new Date().getUTCMinutes(),
                new Date().getUTCSeconds()
              )
            );
            // Get the day of the week for the current UTC date
            const dayOfWeek = date.getUTCDay();
            var md5 = require("md5");
            user_secret = md5(email + dayOfWeek + salt);
          }
          userInfo = {
            email: user.email,
            name: user.name,
            hasSub: hasSub,
            expireDate: hasSub
              ? subscriptions?.data[0].current_period_end
              : null,
            user_secret,
          };
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json(userInfo);
}

export async function OPTIONS(reqquest) {
  return NextResponse.json({});
}
