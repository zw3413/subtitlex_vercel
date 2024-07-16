"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import PricingCard from "./pricingCard";

const PriceTables = ({ stripeObj, lng }) => {
  return (
    <section>
      <div className="grid grid-cols-3  gap-8 items-center">
        <PricingCard  priceObj={stripeObj.weekly} key={stripeObj.weekly.price_id}  lng={lng}/>
        <PricingCard priceObj={stripeObj.monthly} key={stripeObj.monthly.price_id} lng={lng} />
      </div>
    </section>
  );
};

export default PriceTables;
