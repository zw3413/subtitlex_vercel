import Stripe from "stripe";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { options } from "../../api/auth/[...nextauth]/options";

const prisma = new PrismaClient();

export async function POST(request) {
  let userInfo = {};
  const session = await getServerSession(options);
  try {
    if (session) {
      const stripe = new Stripe(process.env.STRIPE_SECRET);

      //const email = request.nextUrl.searchParams.get("email");
      const email = session.user?.email;
      if (email) {
        //获取prisma user
        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });
        if (user) {
          //获取strip customer
          const subscriptions = await stripe.subscriptions.list({
            customer: user?.stripe_customer_id,
          });
          const hasSub = subscriptions?.data?.length > 0;
          userInfo = {
            email: user.email,
            name: user.name,
            hasSub: hasSub,
            expireDate: hasSub
              ? subscriptions?.data[0].current_period_end
              : null,
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
