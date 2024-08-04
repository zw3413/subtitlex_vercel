"use client";

import { useState, useEffect } from "react";
import PricingCard from "./pricingCard";

const PriceTables = ({ stripeObj, lng }) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <PricingCard priceObj={stripeObj.daily} key={stripeObj.daily.price_id} lng={lng} />
        <PricingCard priceObj={stripeObj.weekly} key={stripeObj.weekly.price_id} lng={lng} />
        <PricingCard priceObj={stripeObj.monthly} key={stripeObj.monthly.price_id} lng={lng} />
      </div>
    </section>
  );
};

export default PriceTables;