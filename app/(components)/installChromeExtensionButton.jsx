'use client'
export default function InstallChromeExtensionButton(){
    function handleInstallClick(){
        window.open('/Extension','_blank')
      }
    return (
        <button
        onClick={handleInstallClick}
        type="button"
        className="mx-2 border focus:ring-4 focus:outline-none  font-medium rounded-lg text-xl px-5 py-1 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-color-jable hover:bg-gray-700  mx-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
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

    )
}