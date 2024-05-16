import Link from "next/link";
import Image from "next/image";
import "flowbite";
export default function Home() {
  return (
    <>
      <div
        className=" 
        mt-16  
        flex-wrap
        place-items-center
        max-w-[1000px]
        "
      >
        <div className="flex justify-center my-8 ">
          <h1 className="text-2xl font-light mr-6">Welcome to use</h1>
          <Image
            src="/jable_helper_icon.png"
            alt="Jable-Helper Logo"
            width={32}
            height={32}
            priority
          />
          <h1 className="text-2xl ml-2"> Jable-Helper</h1>
        </div>
        <h1 className="text-center font-semibold text-7xl mx-auto ">
          Immersive multilingual subtitles for JAV websites.
        </h1>
      </div>

      {/* product instruction */}
      <div className="my-12 font-bold">
        <h2 className="my-2">
          <svg
            className="w-9 h-9 text-white inline mr-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3"
            ></path>
          </svg>
          Automatically load subtitle if the video has been collected
        </h2>
        <h2 className="my-2">
          <svg
            className="w-9 h-9 text-white inline mr-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM7.648 9.636c.25 0 .498-.064.717-.186a1 1 0 1 1 .979 1.745 3.475 3.475 0 1 1 .185-5.955 1 1 0 1 1-1.082 1.681 1.475 1.475 0 1 0-.799 2.715Zm6.186 0c.252 0 .5-.063.72-.187a1 1 0 1 1 .974 1.746 3.475 3.475 0 1 1 .188-5.955 1 1 0 0 1-1.084 1.681 1.475 1.475 0 1 0-.8 2.715h.002Z"></path>
          </svg>
          Over <span className="text-color-jable">30,000</span> video has been
          collected and still growing
        </h2>
        <h2 className="my-2">
          <svg
            className="w-9 h-9 text-white inline mr-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 17V1m0 0L1 4m3-3 3 3m4-3h6l-6 6h6m-7 10 3.5-7 3.5 7m-6.125-2H16"
            ></path>
          </svg>
          Support over 10 languages
        </h2>
        <h2 className="my-2">
          <svg
            className="w-9 h-9 text-white inline mr-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 18"
          >
            <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z"></path>
            <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z"></path>
          </svg>
          Load subtitle from user local
        </h2>
        <h2 className="my-2">
          <svg
            className="w-9 h-9 text-white inline mr-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
          </svg>
          Time offset adjustment
        </h2>
        <h2 className="my-2" id="SupportedWebsites">
          <svg
            className="w-9 h-9 text-white inline mr-8"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 14 20"
          >
            <path d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"></path>
          </svg>
          Free to use, and update frequently
        </h2>
      </div>

      <div className="my-12" >
        <h1 className="text-center font-semibold text-3xl mx-auto ">
          Current adapt to below free and fast
          <span className="text-color-jable">JAV</span> Websites
        </h1>
        <div className="flex justify-center gap-20 my-10"     id="Help">
          <Link href="https://jable.tv/" target="_blank">
            <Image width={300} height={100} src="/images/jable.png" />
          </Link>
          <Link href="https://missav.com/" target="_blank">
            <Image width={300} height={100} src="/images/missav.png" />
          </Link>
        </div>
      </div>

      {/* carousel */}
      <div className="flex-wrap my-12 max-w-[1000px]">
        <h1
          className="text-center font-semibold text-5xl mx-auto mb-12"
      
        >
          Install and Enjoy Now !
        </h1>
        <div className="flex my-4 ">
          <Image
            className="rounded-lg mx-4"
            src="/images/1_pin_the_extension.png"
            height={300}
            width={480}
          />
          <h1 className="text-xl font-thin mt-28">
            1. Pin the extension to your navgation bar
          </h1>
        </div>

        <div className="flex my-4  ">
          <h1 className="text-xl font-thin mt-28">
            2. Select the language or subtitle in your favour
          </h1>
          <Image
            className="rounded-lg mx-4"
            src="/images/2_select_language_or_subtitle_you_prefer.png"
            height={300}
            width={480}
          />
        </div>

        <div className="flex my-4 w-full  ">
          <Image
            className="rounded-lg mx-4"
            src="/images/3_load_subtitle_from_your_local.png"
            height={300}
            width={480}
          />
          <div className="flex-wrap mt-28 ml-4">
            <h1 className="text-xl font-thin  wrap">
              3. If no subtitle available, you could search and download it from
              internet, and then load it.
            </h1>
            <h1 className="font-thin text-base pt-4 wrap">
              Great websites to download subtitles:
            </h1>
            <svg
              className="w-[20px] h-[20px] text-white inline"
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
                d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
              />
            </svg>
            <Link
              className="underline text-slate-400 hover:text-white"
              target="_blank"
              href="https://subtitlecat.com/"
            >
              SUBTITLE CAT
            </Link>{" "}
            <br />
            <svg
              className="w-[20px] h-[20px] text-white inline"
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
                d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961"
              />
            </svg>{" "}
            <Link
              className="underline text-slate-400 hover:text-white"
              target="_blank"
              href="https://www.opensubtitles.org/en/search"
            >
              OPENSUBTITLES.ORG
            </Link>
          </div>
        </div>
      </div>

      {/* subscribe */}
      <div className="my-12">
        <h1 className="text-center font-semibold text-5xl mx-auto mb-12">
          <Link
            className="bg-[#20e4ff] text-black hover:text-white font-bold py-2 px-4 rounded z-50"
            href="/Member"
          >
            Subscribe
          </Link>{" "}
          to Enjoy More
        </h1>

        <div className="flex justify-between my-12 gap-20">
          <div>
            <h1 className="text-2xl">Free Tier</h1>

            <Image
              className="shadow-lg shadow-gray-100 mb-8"
              width={256}
              height={268}
              src="/images/noneuser.png"
            />

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
              3 subtitles per hour from subtitlex database
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
              Unlimited loading local srt file
            </h2>
          </div>
          <div className="flex-wrap mt-4"></div>
          <div>
            <div className="flex-wrap">
              <h1 className="text-2xl ">Subscribed Tier</h1>
            </div>
            <Image
              className="shadow-lg shadow-gray-100 mb-8"
              width={256}
              height={268}
              src="/images/loginuser.png"
            />
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
              <span className="text-color-jable">60 subtitles</span> per day
              from subtitlex database
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
              Unlimited loading local srt file
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
              Contact with developer directly
            </h2>
          </div>
        </div>
      </div>

      <div>
        <Link
          target="_blank"
          href="https://www.subtitlex.xyz/Jable-Helper/privacy-policy"
        >
          {" "}
          Privacy Policy
        </Link>{" "}
        |
        <Link
          target="_blank"
          href="https://www.subtitlex.xyz/Jable-Helper/terms-of-service"
        >
          {" "}
          Terms of Service
        </Link>
        <br />
        <br />
      </div>
    </>
  );
}
