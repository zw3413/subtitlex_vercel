import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET);
  let data = await request.json();
  let priceId = data.priceId;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: process.env.DOMAIN_NAME + "/Member",
    cancel_url: process.env.DOMAIN_NAME + "/Member",
  });
  return NextResponse.json({ url: session.url });
}
