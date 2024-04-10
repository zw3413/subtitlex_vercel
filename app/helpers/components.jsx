"use client";
import { options } from "../api/auth/[...nextauth]/options";
import { useEffect, createElement } from "react";

export const StripePricingTable_Weekly = async () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const session = await getServerSession(options);
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });

  return createElement("stripe-pricing-table", {
    "pricing-table-id": process?.env?.NEXT_PUBLIC_STRIPE_PRICETABLE_WEEKLY_ID,
    "publishable-key": process?.env?.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    "client-reference-id": user?.stripe_customer_id,
  });
};
export const StripePricingTable_Monthly = async () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const session = await getServerSession(options);
  const user = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });
  return createElement("stripe-pricing-table", {
    "pricing-table-id": process?.env?.NEXT_PUBLIC_STRIPE_PRICETABLE_MONTHLY_ID,
    "publishable-key": process?.env?.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    "client-reference-id": user?.stripe_customer_id,
  });
};
