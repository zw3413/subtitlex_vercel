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
      "pricing-table-id": "prctbl_1P282BLch9pwz6rlr6UsLcpV",
      "publishable-key":
        "pk_test_51OuR0WLch9pwz6rliCx2ggwyBH3ujiNTDzWuWtZXQy9ZqEkoiOD06RZUJ1vxxRyt2J5qb2gtoQ8y4dnaJCdpigmK00AgjgO7TE",
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
      "pricing-table-id": "prctbl_1P28CfLch9pwz6rlATUnPLPC",
      "publishable-key":
        "pk_test_51OuR0WLch9pwz6rliCx2ggwyBH3ujiNTDzWuWtZXQy9ZqEkoiOD06RZUJ1vxxRyt2J5qb2gtoQ8y4dnaJCdpigmK00AgjgO7TE",
    });
  
  };