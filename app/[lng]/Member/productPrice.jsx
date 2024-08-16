"use server"
import { createCheckoutLink_Premium } from "../helpers/billing";
import PricingCard_V1 from "./pricingCard_v1";
export default async function ProductPrice({ stripe_customer_id, t }) {
  const checkOutLink_Premium = await createCheckoutLink_Premium(
    stripe_customer_id
  );

  const priceObj_free = {
    plan: "Free",
    price: "0.00",
    unit: "USD",
    url: "",
    accessList: [
      { icon: "n", text: t("No Free Access to Full Subtitles") },
      { icon: "y", text: t("Free Access to 400,000+ Demo Subtitles") },
      { icon: "y", text: t("Load Subtitles with Browser Extension") },
      { icon: "y", text: t("New Subtitles Added Every Week") },
    ],
  };
  const priceObj_premium = {
    plan: "Premium",
    price: "9.99",
    unit: "USD",
    url: checkOutLink_Premium,
    accessList: [
      { icon: "y", text: t("Free Access to All Our 400,000+ Subtitles")+"†" },
      { icon: "y", text: t("Free Access to 400,000+ Demo Subtitles") },
      { icon: "y", text: t("Load Subtitles with Browser Extension") },
      { icon: "y", text: t("New Subtitles Added Every Week") },
    ],
  };

  return (
    <div className=" ">
      <h1 className="block text-color-jable w-full text-center">
        {t('You must be a premium member to download full versions of subtitles.')}
      </h1>

      <h1 className="block mt-6 w-full text-center"> {t('Select a Subscription Plan')}</h1>

      <p className="block w-full text-center text-slate-400">
        {t('Join us on our mission to subtitles every obscure movie! Renews automatically, cancel anytime!')}
      </p>
      <div className=" flex-row sm:flex w-full justify-around mt-6">

        <PricingCard_V1 className="flex" pri={priceObj_free}></PricingCard_V1>

        <PricingCard_V1 className="flex" pri={priceObj_premium}></PricingCard_V1>

      </div>
      <div className="my-4 px-4 text-slate-400 w-full text-center">
      †  {t('To avoid abuse, full subtitle downloads are limited to any 20 subtitles per day.')}
      </div>
    </div>
  );
}
