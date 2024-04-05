import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import {
  createCheckoutLink,
  createCustomerIfNull,
  generateCustomerPortalLink,
  hasSubscription,
} from "../helpers/billing.js";
import Link from "next/link";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Stripe from "stripe";
import { create } from "domain";
export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
  apiVersion: "2024-04-02",
});

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

  const hasSub = await hasSubscription();
  const checkout_link = await createCheckoutLink(user?.stripe_customer_id);

  return (
    <div className="max-w-4xl m-auto w-full px-4">
      <div className="flex flex-col">
        <p className="text-2xl font-medium">Welcome, {session?.user?.name}</p>
        <div className="py-4">
          <Link
            className="bg-white ml-auto text-black rounded-md px-2 py-1"
            href={"" + manage_link}
          >
            Manage billing
          </Link>
        </div>

        <div className="">
          {hasSub ? (
            <div className="p-6 round-md border-white-400 shadow-sm font-medium">
              Subscribed
            </div>
          ) : (
            <div className="p-6 round-md border-zinc-400 shadow-sm font-medium flex items-center gap-2">
              Free plan

              <Link
                className="bg-white ml-auto text-black rounded-md px-2 py-1"
                href={checkout_link}
              >
                Subscribe
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Member;
