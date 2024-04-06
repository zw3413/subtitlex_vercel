"use client"

import { useEffect, createElement } from "react";

export const StripePricingTable_Weekly = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/pricing-table.js";
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
  
    }, []);
  
    return createElement("stripe-pricing-table", {
      "pricing-table-id": process.env.STRIPE_PRICETABLE_WEEKLY_ID,
      "publishable-key":process.env.STRIPE_PUBLISHABLE_KEY,
    });
  
  };
  export const StripePricingTable_Monthly = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/pricing-table.js";
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
  
    }, []);
  
    return createElement("stripe-pricing-table", {
      "pricing-table-id": process.env.STRIPE_PRICETABLE_MONTHLY_ID,
      "publishable-key": process.env.STRIPE_PUBLISHABLE_KEY,
    });
  
  };