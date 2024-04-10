import React from "react";
import axios from "axios";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";

const PricingCard = ({ price, stripeObj }) => {

  const dynamicSubtitle = (price) => {
    if (price.nickname === "One Week") {
      return <p className="text-[#20e4ff] mt-1">Jable-Helper 7-day subscription</p>;
    }

    if (price.nickname === "One Month") {
      return <p className="text-[#20e4ff] mt-1">Jable-Helper 30-day subscription</p>;
    }
  };

  const dynamicDescription = (price) => {
    if (price.nickname === "One Week") {
      return (
        <div className="mt-6 space-x-3">
           <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              Support jable.tv ...
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              Pure subtitles with no promts
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              10+ Languages provided
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              7 days of service
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              Slack and email support
            </h2>
          </div>
          <div className="border" />
        </div>
      );
    }
    if (price.nickname === "One Month") {
      return (
        <div className="mt-6 space-x-3">
                <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              Support jable.tv ...
            </h2>
          </div>
          <div className="border" />

          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              Pure subtitles with no promts
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              10+ Languages provided
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              30 days of service
            </h2>
          </div>
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              Slack and email support
            </h2>
          </div>
          <div className="border" />
        </div>
      );
    }
  };

  const dynamicButton = (price) => {
    if (price.nickname === "One Week") {
      return (
        <Link
          className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#20e4ff] py-2 px-4 text-sm font-medium text-black shadow-sm"
          href={"" + stripeObj.checkOutLink_Week}
        >
          Subscribe Now
        </Link>
      );
    }
    if (price.nickname === "One Month") {
      return (
        <Link
          className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#20e4ff] py-2 px-4 text-sm font-medium text-black shadow-sm"
          href={"" + stripeObj.checkOutLink_Month}
        >
          Subscribe Now
        </Link>
      );
    }
  };

  // const handleSubscription = async (price)=>{
  //   e.preventDefault();
  //   const {data} = await axios.post('/api/payment',{
  //     priceId: price.id,
  //   },{
  //     headers: {
  //       "Content-Type":"application/json",
  //     },
  //   });

  //   window.location.assign(data)
  // }

  return (
    <div className="border-grey-100 shadow-2xl border-4 text-center mt-10 max-w-[1040px]">
      <div>
        <div className="bg-grey-100 h-28 items-center font-bold">
          <h4 className="text-3xl font-bold">{price.nickname}</h4>
          <p>{dynamicSubtitle(price)}</p>
          <h3>Multilingual subtitles</h3>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center pt-4">
            <h1 className="text-5xl font-bold">
              {(price.unit_amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
            <h3></h3>
          </div>
          <ul className="flex justify-center">
            <li className="text-xl font-bold">{dynamicDescription(price)}</li>
          </ul>
          {dynamicButton(price)}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
