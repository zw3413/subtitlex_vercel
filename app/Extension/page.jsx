"use client"

import Link from "next/link";
import Image from "next/image";
import "flowbite";
export default function Home() {
  function handleInstallClick() {
    window.open(
      "https://chromewebstore.google.com/detail/subtitlex/jleagfpeiplocfdkajcpgcadnpipmkcl",
      "_blank"
    );
  }
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
            src="/images/subtitlex-512-transparent.png"
            alt="SubtitleX Logo"
            width={32}
            height={32}
            priority
          />
          <h1 className="text-2xl ml-2"> SubtitleX</h1>
        </div>
        <div className="flex content-center mt-8">
          <button
            onClick={handleInstallClick}
            type="button"
            className="  border focus:ring-4 focus:outline-none  font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-color-jable hover:bg-gray-700 mb-8 mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#c0c9cc"
                d="M42.39,11.07V37c0,1.66-1.34,3-3,3H8.38c-1.66,0-3-1.34-3-3V11.07H42.39z"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFa_GsBZ74FbIf7a_gr1"
                x1="23.885"
                x2="23.885"
                y1="2.953"
                y2="29.195"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#bac1c6"></stop>
                <stop offset=".703" stopColor="#9ca5ad"></stop>
              </linearGradient>
              <polygon
                fill="url(#s1KY5cWnBSx6qWb48gxgFa_GsBZ74FbIf7a_gr1)"
                points="42.39,11.07 42.39,26 5.38,26 5.38,11.07 15,11.07 15,9 18,6 18,11.07 29,11.07 29,6 32,9 32,11.07"
              ></polygon>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFb_GsBZ74FbIf7a_gr2"
                x1="23.5"
                x2="23.5"
                y1="2.477"
                y2="11.251"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".117" stopColor="#889097"></stop>
                <stop offset=".465" stopColor="#64717c"></stop>
              </linearGradient>
              <rect
                width="11"
                height="3"
                x="18"
                y="6"
                fill="url(#s1KY5cWnBSx6qWb48gxgFb_GsBZ74FbIf7a_gr2)"
              ></rect>
              <path
                fill="#fff"
                d="M16.03,37.66L17.42,40h-0.84C16.29,39.27,16.09,38.48,16.03,37.66z"
              ></path>
              <path
                fill="#fff"
                d="M17.46,40c-0.08-0.14-0.14-0.29-0.19-0.44c0-0.02-0.01-0.05-0.03-0.08c-0.07-0.2-0.14-0.41-0.19-0.62	c-0.04-0.13-0.07-0.25-0.09-0.38c-0.01-0.01-0.01-0.03-0.01-0.04c-0.05-0.23-0.09-0.46-0.11-0.7C16.81,37.5,16.8,37.25,16.8,37	c0-3.98,3.22-7.2,7.2-7.2V29c1.25,0,2.44,0.29,3.49,0.8C30.16,31.09,32,33.83,32,37c0,1.06-0.21,2.07-0.58,3H17.47"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFc_GsBZ74FbIf7a_gr3"
                x1="7.819"
                x2="18.057"
                y1="33.359"
                y2="38.803"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#4caf50"></stop>
                <stop offset=".489" stopColor="#4aaf50"></stop>
                <stop offset=".665" stopColor="#43ad50"></stop>
                <stop offset=".79" stopColor="#38aa50"></stop>
                <stop offset=".892" stopColor="#27a550"></stop>
                <stop offset=".978" stopColor="#11a050"></stop>
                <stop offset="1" stopColor="#0a9e50"></stop>
              </linearGradient>
              <path
                fill="url(#s1KY5cWnBSx6qWb48gxgFc_GsBZ74FbIf7a_gr3)"
                d="M17.42,40H8.29C8.1,39.03,8,38.03,8,37	c0-3.16,0.92-6.11,2.51-8.59h0.02l5.5,9.25L17.42,40z"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFd_GsBZ74FbIf7a_gr4"
                x1="32"
                x2="32"
                y1="40"
                y2="26.321"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffd747"></stop>
                <stop offset=".482" stopColor="#ffd645"></stop>
                <stop offset=".655" stopColor="#fed43e"></stop>
                <stop offset=".779" stopColor="#fccf33"></stop>
                <stop offset=".879" stopColor="#fac922"></stop>
                <stop offset=".964" stopColor="#f7c10c"></stop>
                <stop offset="1" stopColor="#f5bc00"></stop>
              </linearGradient>
              <path
                fill="url(#s1KY5cWnBSx6qWb48gxgFd_GsBZ74FbIf7a_gr4)"
                d="M40,37c0,1.02-0.1,2.03-0.28,3h-9.19	c0.43-0.91,0.67-1.93,0.67-3c0-3.98-3.22-7.2-7.2-7.2V21c4.29,0,8.18,1.69,11.05,4.45c0.27,0.25,0.52,0.51,0.76,0.77	c0.49,0.54,0.94,1.11,1.35,1.7c0.21,0.3,0.4,0.61,0.59,0.92s0.37,0.63,0.53,0.96C39.37,31.97,40,34.41,40,37z"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFe_GsBZ74FbIf7a_gr5"
                x1="20.091"
                x2="27.909"
                y1="32.992"
                y2="40.811"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#2aa4f4"></stop>
                <stop offset="1" stopColor="#007ad9"></stop>
              </linearGradient>
              <path
                fill="url(#s1KY5cWnBSx6qWb48gxgFe_GsBZ74FbIf7a_gr5)"
                d="M29.6,37c0,1.1-0.32,2.13-0.88,3h-9.44	c-0.56-0.87-0.88-1.9-0.88-3c0-3.09,2.51-5.6,5.6-5.6S29.6,33.91,29.6,37z"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFf_GsBZ74FbIf7a_gr6"
                x1="17.397"
                x2="17.336"
                y1="39.763"
                y2="39.801"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#f7572f"></stop>
                <stop offset=".523" stopColor="#f7552d"></stop>
                <stop offset=".712" stopColor="#f75026"></stop>
                <stop offset=".846" stopColor="#f7461b"></stop>
                <stop offset=".954" stopColor="#f7390a"></stop>
                <stop offset="1" stopColor="#f73100"></stop>
              </linearGradient>
              <path
                fill="url(#s1KY5cWnBSx6qWb48gxgFf_GsBZ74FbIf7a_gr6)"
                d="M17.46,40c-0.08-0.14-0.14-0.29-0.19-0.44	c0.06,0.15,0.13,0.3,0.2,0.44"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFg_GsBZ74FbIf7a_gr7"
                x1="33.704"
                x2="14.065"
                y1="22.36"
                y2="34.631"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#f7572f"></stop>
                <stop offset=".523" stopColor="#f7552d"></stop>
                <stop offset=".712" stopColor="#f75026"></stop>
                <stop offset=".846" stopColor="#f7461b"></stop>
                <stop offset=".954" stopColor="#f7390a"></stop>
                <stop offset="1" stopColor="#f73100"></stop>
              </linearGradient>
              <path
                fill="url(#s1KY5cWnBSx6qWb48gxgFg_GsBZ74FbIf7a_gr7)"
                d="M38.27,29.8H24c-3.98,0-7.2,3.22-7.2,7.2	c0,0.25,0.01,0.5,0.04,0.74c0.02,0.24,0.06,0.47,0.11,0.7c0,0.01,0,0.03,0.01,0.04c0.02,0.13,0.05,0.25,0.09,0.38	c0.05,0.21,0.11,0.42,0.19,0.62c0.02,0.03,0.03,0.06,0.03,0.08c0.05,0.15,0.11,0.3,0.19,0.44h-0.04l-1.39-2.34l-5.5-9.25h-0.02	c0.16-0.25,0.33-0.5,0.5-0.75c0.21-0.29,0.43-0.57,0.66-0.85c0.2-0.24,0.4-0.47,0.61-0.7c0.17-0.18,0.33-0.35,0.5-0.51	c0.12-0.12,0.25-0.24,0.37-0.35c0.44-0.41,0.9-0.79,1.38-1.14c0.23-0.18,0.47-0.34,0.71-0.5c0.89-0.59,1.85-1.08,2.85-1.48	c0.23-0.09,0.46-0.18,0.7-0.26c0.08-0.03,0.17-0.06,0.26-0.09c0.28-0.09,0.56-0.17,0.85-0.25c0.32-0.09,0.65-0.16,0.99-0.23	c0.34-0.06,0.67-0.12,1.02-0.16c0.27-0.04,0.54-0.07,0.81-0.09c0.13-0.01,0.26-0.02,0.39-0.02C23.41,21.01,23.7,21,24,21	c4.29,0,8.18,1.69,11.05,4.45c0.27,0.25,0.52,0.51,0.76,0.77c0.49,0.54,0.94,1.11,1.35,1.7c0.21,0.3,0.4,0.61,0.59,0.92	C37.93,29.15,38.11,29.47,38.27,29.8z"
              ></path>
            </svg>
            Install Chrome extension
          </button>
        </div>
        <h1 className="text-center font-semibold text-5xl mx-auto ">
          Immersive multilingual subtitles for online videos, such as Disney,
          Netflix, YouTube and many more!
        </h1>
      </div>

      {/* product instruction */}
      <div className="font-bold">
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
        <h2 className="my-2" id="help">
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

      {/* carousel */}
      <div className="flex-wrap my-12 max-w-[1000px]">
        <div className="flex content-center"></div>

        <div className="flex my-4 place-content-center">
          <Image
            src="/images/icon/hand-down-1-96.png"
            alt="hand"
            width={60}
            height={30}
          ></Image>
          <h2 className="text-4xl my-4 mx-12">IT IS SUPER EASY TO USE</h2>
          <Image
            src="/images/icon/hand-down-1-96.png"
            alt="hand"
            width={60}
            height={30}
          ></Image>
        </div>
        <div className="flex my-4 ">
          <Image
            alt="SubtitleX"
            className="rounded-lg mx-4"
            src="/images/screenshots/1 Click Icon in Menu.png"
            height={300}
            width={480}
          />
          <div>
            <h1 className="text-xl font-thin mt-20">
            1. Icon of SubtitleX will show on the control bar of video after the
            page loaded( might delay a few seconds impacted by internet speed). If you didn&apos;t see it please reload the page or
            contact with developer.</h1>
            <h1 className="font-thin text-base pt-4 wrap">
              * if the icon{" "}
              <Image
                className="inline"
                src="/images/subtitlex-512-transparent.png"
                height={30}
                width={30}
                alt="icon"
              ></Image>{" "}
              is not showing, please try to reload the page or feedback to us.
            </h1>
          </div>
        </div>

        <div className="flex my-4  ">
          <h1 className="text-xl font-thin mt-28">
            2. Click the icon, you will see the panel of SubtitleX, all
            operations were located here.
          </h1>
          <Image
            alt="SubtitleX"
            className="rounded-lg mx-4"
            src="/images/screenshots/2 Show the dialog of SubtitleX.png"
            height={300}
            width={480}
          />
        </div>

        <div className="flex my-4 w-full"  id="websites">
          <Image
            alt="SubtitleX"
            className="rounded-lg mx-4"
            src="/images/screenshots/3 Load subtitle file from local.png"
            height={300}
            width={480}
          />
          <div className="flex-wrap mt-28 ml-4">
            <h1 className="text-xl font-thin  wrap">
              3. Search or get subtitle files by your self, load it with this
              button.
            </h1>
            <h1 className="font-thin text-base pt-4 wrap">
              Recommended websites to download subtitles:
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

        <div className="flex my-4  ">
          <h1 className="text-xl font-thin mt-28">
            4. If the subtitles of video on current page have already been
            collected by SubtitleX database, you should be able to select
            subtitles from here.
          </h1>
          <Image
            alt="SubtitleX"
            className="rounded-lg mx-4"
            src="/images/screenshots/4. Select subtitle from subtitlex database.png"
            height={300}
            width={480}
          />
        </div>

        <div className="flex my-4 ">
          <Image
            alt="SubtitleX"
            className="rounded-lg mx-4"
            src="/images/screenshots/5. show the subtitle under video.png"
            height={300}
            width={480}
          />
          <h1 className="text-xl font-thin mt-28">
            5. Loaded subtitle will show under the video,{" "}
            <strong>position is draggable</strong>. You can adjust the
            font-size, background, hide/show ,and the time synchronization in
            SubtitleX panel.
          </h1>
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
              5 subtitles per hour from subtitlex database
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
              <span className="text-color-jable">100 subtitles</span> per day
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

        <div className="flex content-center mt-8">
          <button
            onClick={handleInstallClick}
            type="button"
            className="  border focus:ring-4 focus:outline-none  font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-color-jable hover:bg-gray-700 mb-8 mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#c0c9cc"
                d="M42.39,11.07V37c0,1.66-1.34,3-3,3H8.38c-1.66,0-3-1.34-3-3V11.07H42.39z"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFa_GsBZ74FbIf7a_gr1"
                x1="23.885"
                x2="23.885"
                y1="2.953"
                y2="29.195"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#bac1c6"></stop>
                <stop offset=".703" stopColor="#9ca5ad"></stop>
              </linearGradient>
              <polygon
                fill="url(#s1KY5cWnBSx6qWb48gxgFa_GsBZ74FbIf7a_gr1)"
                points="42.39,11.07 42.39,26 5.38,26 5.38,11.07 15,11.07 15,9 18,6 18,11.07 29,11.07 29,6 32,9 32,11.07"
              ></polygon>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFb_GsBZ74FbIf7a_gr2"
                x1="23.5"
                x2="23.5"
                y1="2.477"
                y2="11.251"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".117" stopColor="#889097"></stop>
                <stop offset=".465" stopColor="#64717c"></stop>
              </linearGradient>
              <rect
                width="11"
                height="3"
                x="18"
                y="6"
                fill="url(#s1KY5cWnBSx6qWb48gxgFb_GsBZ74FbIf7a_gr2)"
              ></rect>
              <path
                fill="#fff"
                d="M16.03,37.66L17.42,40h-0.84C16.29,39.27,16.09,38.48,16.03,37.66z"
              ></path>
              <path
                fill="#fff"
                d="M17.46,40c-0.08-0.14-0.14-0.29-0.19-0.44c0-0.02-0.01-0.05-0.03-0.08c-0.07-0.2-0.14-0.41-0.19-0.62	c-0.04-0.13-0.07-0.25-0.09-0.38c-0.01-0.01-0.01-0.03-0.01-0.04c-0.05-0.23-0.09-0.46-0.11-0.7C16.81,37.5,16.8,37.25,16.8,37	c0-3.98,3.22-7.2,7.2-7.2V29c1.25,0,2.44,0.29,3.49,0.8C30.16,31.09,32,33.83,32,37c0,1.06-0.21,2.07-0.58,3H17.47"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFc_GsBZ74FbIf7a_gr3"
                x1="7.819"
                x2="18.057"
                y1="33.359"
                y2="38.803"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#4caf50"></stop>
                <stop offset=".489" stopColor="#4aaf50"></stop>
                <stop offset=".665" stopColor="#43ad50"></stop>
                <stop offset=".79" stopColor="#38aa50"></stop>
                <stop offset=".892" stopColor="#27a550"></stop>
                <stop offset=".978" stopColor="#11a050"></stop>
                <stop offset="1" stopColor="#0a9e50"></stop>
              </linearGradient>
              <path
                fill="url(#s1KY5cWnBSx6qWb48gxgFc_GsBZ74FbIf7a_gr3)"
                d="M17.42,40H8.29C8.1,39.03,8,38.03,8,37	c0-3.16,0.92-6.11,2.51-8.59h0.02l5.5,9.25L17.42,40z"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFd_GsBZ74FbIf7a_gr4"
                x1="32"
                x2="32"
                y1="40"
                y2="26.321"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffd747"></stop>
                <stop offset=".482" stopColor="#ffd645"></stop>
                <stop offset=".655" stopColor="#fed43e"></stop>
                <stop offset=".779" stopColor="#fccf33"></stop>
                <stop offset=".879" stopColor="#fac922"></stop>
                <stop offset=".964" stopColor="#f7c10c"></stop>
                <stop offset="1" stopColor="#f5bc00"></stop>
              </linearGradient>
              <path
                fill="url(#s1KY5cWnBSx6qWb48gxgFd_GsBZ74FbIf7a_gr4)"
                d="M40,37c0,1.02-0.1,2.03-0.28,3h-9.19	c0.43-0.91,0.67-1.93,0.67-3c0-3.98-3.22-7.2-7.2-7.2V21c4.29,0,8.18,1.69,11.05,4.45c0.27,0.25,0.52,0.51,0.76,0.77	c0.49,0.54,0.94,1.11,1.35,1.7c0.21,0.3,0.4,0.61,0.59,0.92s0.37,0.63,0.53,0.96C39.37,31.97,40,34.41,40,37z"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFe_GsBZ74FbIf7a_gr5"
                x1="20.091"
                x2="27.909"
                y1="32.992"
                y2="40.811"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#2aa4f4"></stop>
                <stop offset="1" stopColor="#007ad9"></stop>
              </linearGradient>
              <path
                fill="url(#s1KY5cWnBSx6qWb48gxgFe_GsBZ74FbIf7a_gr5)"
                d="M29.6,37c0,1.1-0.32,2.13-0.88,3h-9.44	c-0.56-0.87-0.88-1.9-0.88-3c0-3.09,2.51-5.6,5.6-5.6S29.6,33.91,29.6,37z"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFf_GsBZ74FbIf7a_gr6"
                x1="17.397"
                x2="17.336"
                y1="39.763"
                y2="39.801"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#f7572f"></stop>
                <stop offset=".523" stopColor="#f7552d"></stop>
                <stop offset=".712" stopColor="#f75026"></stop>
                <stop offset=".846" stopColor="#f7461b"></stop>
                <stop offset=".954" stopColor="#f7390a"></stop>
                <stop offset="1" stopColor="#f73100"></stop>
              </linearGradient>
              <path
                fill="url(#s1KY5cWnBSx6qWb48gxgFf_GsBZ74FbIf7a_gr6)"
                d="M17.46,40c-0.08-0.14-0.14-0.29-0.19-0.44	c0.06,0.15,0.13,0.3,0.2,0.44"
              ></path>
              <linearGradient
                id="s1KY5cWnBSx6qWb48gxgFg_GsBZ74FbIf7a_gr7"
                x1="33.704"
                x2="14.065"
                y1="22.36"
                y2="34.631"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#f7572f"></stop>
                <stop offset=".523" stopColor="#f7552d"></stop>
                <stop offset=".712" stopColor="#f75026"></stop>
                <stop offset=".846" stopColor="#f7461b"></stop>
                <stop offset=".954" stopColor="#f7390a"></stop>
                <stop offset="1" stopColor="#f73100"></stop>
              </linearGradient>
              <path
                fill="url(#s1KY5cWnBSx6qWb48gxgFg_GsBZ74FbIf7a_gr7)"
                d="M38.27,29.8H24c-3.98,0-7.2,3.22-7.2,7.2	c0,0.25,0.01,0.5,0.04,0.74c0.02,0.24,0.06,0.47,0.11,0.7c0,0.01,0,0.03,0.01,0.04c0.02,0.13,0.05,0.25,0.09,0.38	c0.05,0.21,0.11,0.42,0.19,0.62c0.02,0.03,0.03,0.06,0.03,0.08c0.05,0.15,0.11,0.3,0.19,0.44h-0.04l-1.39-2.34l-5.5-9.25h-0.02	c0.16-0.25,0.33-0.5,0.5-0.75c0.21-0.29,0.43-0.57,0.66-0.85c0.2-0.24,0.4-0.47,0.61-0.7c0.17-0.18,0.33-0.35,0.5-0.51	c0.12-0.12,0.25-0.24,0.37-0.35c0.44-0.41,0.9-0.79,1.38-1.14c0.23-0.18,0.47-0.34,0.71-0.5c0.89-0.59,1.85-1.08,2.85-1.48	c0.23-0.09,0.46-0.18,0.7-0.26c0.08-0.03,0.17-0.06,0.26-0.09c0.28-0.09,0.56-0.17,0.85-0.25c0.32-0.09,0.65-0.16,0.99-0.23	c0.34-0.06,0.67-0.12,1.02-0.16c0.27-0.04,0.54-0.07,0.81-0.09c0.13-0.01,0.26-0.02,0.39-0.02C23.41,21.01,23.7,21,24,21	c4.29,0,8.18,1.69,11.05,4.45c0.27,0.25,0.52,0.51,0.76,0.77c0.49,0.54,0.94,1.11,1.35,1.7c0.21,0.3,0.4,0.61,0.59,0.92	C37.93,29.15,38.11,29.47,38.27,29.8z"
              ></path>
            </svg>
            Install Chrome extension
          </button>
        </div>

        <div className="flex mt-8 justify-around  max-w-[1000px]" id="feedback">
        <Link href="https://www.youtube.com/channel/UC8Vx81PczyWmAm41l9piHOg" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FF3D00"
              d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
            ></path>
            <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
          </svg>
        </Link>

        <Link href="https://subtitlex.slack.com/archives/C06SQJ5AMHD" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <path d="M44,21v-2h-0.424c-0.774-1.763-2.531-3-4.576-3s-3.802,1.237-4.576,3H34v-9c0-2.757-2.243-5-5-5s-5,2.243-5,5	c0-2.757-2.243-5-5-5c-2.045,0-3.802,1.237-4.576,3H14v2c0,2.045,1.237,3.802,3,4.576V15H8c-2.045,0-3.802,1.237-4.576,3H3v2	c0,2.414,1.721,4.434,4,4.899v0.23C5.404,25.454,4.096,26.549,3.447,28H3v2h0.002C3.002,30.008,3,30.014,3,30.022	c0,2.754,2.243,4.994,5,4.994s5-2.24,5-4.994V30h0.002c0,0.008-0.002,0.014-0.002,0.022v10.984C13,43.76,15.243,46,18,46	s5-2.24,5-4.994V41c0,2.757,2.243,5,5,5s5-2.243,5-5v-2h-0.424c-0.774-1.763-2.531-3-4.576-3h11c2.757,0,5-2.243,5-5v-2h-0.424	c-0.774-1.763-2.531-3-4.576-3C41.757,26,44,23.757,44,21z"></path>
            <path
              fill="#fff"
              d="M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"
            ></path>
            <path
              fill="#fff"
              d="M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"
            ></path>
            <path
              fill="#fff"
              d="M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"
            ></path>
            <path
              fill="#fff"
              d="M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"
            ></path>
            <path
              fill="#fff"
              d="M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"
            ></path>
            <path
              fill="#fff"
              d="M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"
            ></path>
            <path
              fill="#fff"
              d="M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"
            ></path>
            <path
              fill="#fff"
              d="M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"
            ></path>
            <path d="M29,24c-2.757,0-5-2.243-5-5V8c0-2.757,2.243-5,5-5s5,2.243,5,5v11C34,21.757,31.757,24,29,24z M29,5c-1.654,0-3,1.346-3,3	v11c0,1.654,1.346,3,3,3s3-1.346,3-3V8C32,6.346,30.654,5,29,5z"></path>
            <path d="M39,24h-4c-0.553,0-1-0.448-1-1v-4c0-2.757,2.243-5,5-5s5,2.243,5,5S41.757,24,39,24z M36,22h3c1.654,0,3-1.346,3-3	s-1.346-3-3-3s-3,1.346-3,3V22z"></path>
            <path d="M19,23H8c-2.757,0-5-2.243-5-5s2.243-5,5-5h11c2.757,0,5,2.243,5,5S21.757,23,19,23z M8,15c-1.654,0-3,1.346-3,3	s1.346,3,3,3h11c1.654,0,3-1.346,3-3s-1.346-3-3-3H8z"></path>
            <path d="M23,13h-4c-2.757,0-5-2.243-5-5s2.243-5,5-5s5,2.243,5,5v4C24,12.552,23.553,13,23,13z M19,5c-1.654,0-3,1.346-3,3	s1.346,3,3,3h3V8C22,6.346,20.654,5,19,5z"></path>
            <path d="M18,44c-2.757,0-5-2.24-5-4.994V28.022c0-2.754,2.243-4.994,5-4.994s5,2.24,5,4.994v10.984C23,41.76,20.757,44,18,44z M18,25.028c-1.654,0-3,1.343-3,2.994v10.984C15,40.657,16.346,42,18,42s3-1.343,3-2.994V28.022C21,26.371,19.654,25.028,18,25.028z"></path>
            <path d="M8,33.016c-2.757,0-5-2.24-5-4.994s2.243-4.994,5-4.994h4c0.553,0,1,0.448,1,1v3.994C13,30.776,10.757,33.016,8,33.016z M8,25.028c-1.654,0-3,1.343-3,2.994s1.346,2.994,3,2.994s3-1.343,3-2.994v-2.994H8z"></path>
            <path d="M39,34H28c-2.757,0-5-2.243-5-5s2.243-5,5-5h11c2.757,0,5,2.243,5,5S41.757,34,39,34z M28,26c-1.654,0-3,1.346-3,3	s1.346,3,3,3h11c1.654,0,3-1.346,3-3s-1.346-3-3-3H28z"></path>
            <path d="M28,44c-2.757,0-5-2.243-5-5v-4c0-0.552,0.447-1,1-1h4c2.757,0,5,2.243,5,5S30.757,44,28,44z M25,36v3c0,1.654,1.346,3,3,3	s3-1.346,3-3s-1.346-3-3-3H25z"></path>
          </svg>
        </Link>

        <Link href="mailto:subtitlex.xyz@gmail.com" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48"
          >
            <path
              fill="#4caf50"
              d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
            ></path>
            <path
              fill="#1e88e5"
              d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
            ></path>
            <polygon
              fill="#e53935"
              points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
            ></polygon>
            <path
              fill="#c62828"
              d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
            ></path>
            <path
              fill="#fbc02d"
              d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
            ></path>
          </svg>
        </Link>
        <Link href={"https://x.com/subtitlex_xyz"} target="_blank" >
        <svg xmlns="http://www.w3.org/2000/svg"   
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 48 48">
<path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
</svg></Link>
      </div>
      </div>
    </>
  );
}
