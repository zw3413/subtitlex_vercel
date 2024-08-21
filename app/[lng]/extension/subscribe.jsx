import Link from "next/link"
export default function Subscribe({t}){
    return (      <div className="my-12">
        <h1 className="text-center font-semibold text-5xl mx-auto mb-12">
          <Link
            className="bg-[#20e4ff] text-black hover:text-white font-bold py-2 px-4 rounded z-50"
            href="/Member"
          >
            {t('Subscribe')}
          </Link>{" "}
          {t('to Enjoy More')}
        </h1>

        <div className="flex justify-between my-12 gap-20">
          <div>
            <h1 className="text-2xl">Free Tier</h1>

            {/* <Image
              alt="SubtitleX"
              className="shadow-lg shadow-gray-100 mb-8"
              width={256}
              height={268}
              src="/images/noneuser.png"
            /> */}

            <h2 className="text-sm font-light">
              {" "}
              <svg
                className="w-[20px] h-[20px] text-white inline mr-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
              {t("sub_desc_1", { number: "20" })}
            </h2>
            <h2 className="text-sm font-light">
              {" "}
              <svg
                className="w-[20px] h-[20px] text-white inline mr-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
              {t('Unlimited loading local srt file')}
            </h2>
          </div>
          <div className="flex-wrap mt-4"></div>
          <div>
            <div className="flex-wrap">
              <h1 className="text-2xl ">{t('Subscribed Tier')}</h1>
            </div>
            {/* <Image
              alt="SubtitleX"
              className="shadow-lg shadow-gray-100 mb-8"
              width={256}
              height={268}
              src="/images/loginuser.png"
            /> */}
            <h2 className="text-sm font-light ">
              <svg
                className="w-[20px] h-[20px] text-white inline mr-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
              {t('sub_desc_2', { number: "200" })}
            </h2>
            <h2 className="text-sm font-light">
              {" "}
              <svg
                className="w-[20px] h-[20px] text-white inline mr-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
              {t('Unlimited loading local srt file')}
            </h2>
            <h2 className="text-sm font-light">
              {" "}
              <svg
                className="w-[20px] h-[20px] text-white inline mr-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11.917 9.724 16.5 19 7.5"
                />
              </svg>
              {t('Contact with developer directly')}
            </h2>
          </div>
        </div>
      </div>)
}