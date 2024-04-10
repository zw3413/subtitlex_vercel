"use client" ;

import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

import {
  StripePricingTable,
  StripePricingTable_Monthly,
  StripePricingTable_Weekly,
} from "../helpers/components";

import {
  createCheckoutLink,
  createCustomerIfNull,
  generateCustomerPortalLink,
  hasSubscription,
} from "../helpers/billing.js";
import Link from "next/link";

import Feedback from "../(components)/feedbackWidget.jsx";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Stripe from "stripe";

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
  apiVersion: "2024-04-02",
});

function Subscription() {
  const {data:session, status} = useSession({
    required: true,
    onUnauthenticated(){
      redirect("/api/auth/signin?callbackUrl=/Subscription")
    }
  })


  return (
    <div>
      <h1>Member Client Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </div>
  )
}

export default Subscription