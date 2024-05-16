import React from "react";
import axios from "axios";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";

const PricingCard = ({ priceObj}) => {
  const dynamicSubtitle = (priceObj) => {
    if (priceObj.nickname === "One Week") {
      return (
        <span className="text-[#20e4ff] mt-1">
          Jable-Helper 7-day subscription
        </span>
      );
    }

    if (priceObj.nickname === "One Month") {
      return (
        <span className="text-[#20e4ff] mt-1">
          Jable-Helper 30-day subscription
        </span>
      );
    }
  };

  const dynamicDescription = (priceObj) => {
    if (priceObj.nickname === "One Week") {
      return (
        <div className="mt-6 ">
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              Millions of JAV subtitles
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
              Immersive enjoyable
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
    if (priceObj.nickname === "One Month") {
      return (
        <div className="mt-6 ">
          <div className="border" />
          <div className="flex space-x-3">
            <AiFillCheckCircle
              className="h-5 w-5 flex-shrink-0 text-[#20e4ff] ml-2"
              aria-hidden="true"
            />
            <h2 className="text-sm text-grep-100 text-white">
              Millions of JAV subtitles
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
              Immersive enjoyable
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

  const dynamicButton = (priceObj) => {
    if (priceObj.nickname === "One Week") {
      return (
        <Link
          className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#20e4ff] py-2 px-4 text-sm font-medium text-black shadow-sm"
          href={"" + priceObj.checkOutLink}
        >
          Subscribe Now
        </Link>
      );
    }
    if (priceObj.nickname === "One Month") {
      return (
        <Link
          className="mt-8 flex w-full justify-center rounded-md border border-transparent bg-[#20e4ff] py-2 px-4 text-sm font-medium text-black shadow-sm"
          href={"" + priceObj.checkOutLink}
        >
          Subscribe Now
        </Link>
      );
    }
  };

  return (
    <div className="shadow-sm hover:shadow-lg border border-slate-400 rounded-lg p-6  shadow-gray-100 hover:shadow-gray-100 mb-4 text-center mt-10 max-w-[1040px]">
      <div>
        <div className="bg-grey-100 h-12 items-center font-bold">
          <h4 className="text-xl font-semibold text-slate-300 mt-1">
            {priceObj.nickname}
          </h4>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center pt-2">
            <h1 className="text-2xl font-thin text-white">
              {(priceObj.unit_amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h1>
            <h3></h3>
          </div>
          {/* <ul className="flex justify-center">
            <li className="text-xl font-bold">{dynamicDescription(priceObj)}</li>
          </ul> */}
          {dynamicButton(priceObj)}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
