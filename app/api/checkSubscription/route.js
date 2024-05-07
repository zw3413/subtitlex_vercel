import Stripe from "stripe";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET);

  const email = request.nextUrl.searchParams.get("email");

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  let userInfo = {}
  if(user){
    const subscriptions = await stripe.subscriptions.list({
        customer :user?.stripe_customer_id
    })
    const hasSub = subscriptions?.data?.length > 0;
    userInfo = {
        email: user.email,
        name: user.name,
        hasSub: hasSub,
        expireDate: hasSub ? subscriptions?.data[0].current_period_end : null,
      };
  }
  return NextResponse.json(userInfo);
}


export async function OPTIONS(req, res){
  return NextResponse({}, 200, "OPTIONS")
}