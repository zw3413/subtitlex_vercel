import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import createMDX from "@next/mdx";
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/checkSubscription",
        headers: [
          //{ key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT,OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, access-control-allow-origin",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/Extension",
        destination: "/extension",
      },
      {
        "source": "/",
        "has": [
          {
            "type": "host",
            "value": "jav.subtitlex.xyz"
          }
        ],
        "destination": "/jav"
      }
    ];
  },
  reactStrictMode: false,
  // i18n: {
  //     // These are all the locales you want to support in
  //     // your application
  //     locales: ['en', 'zh-TW','zh-CN','ko'],
  //     // This is the default locale you want to be used when visiting
  //     // a non-locale prefixed path e.g. `/hello`
  //     defaultLocale: 'en',

  //   },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl)$/,
      use: ["raw-loader", "glslify-loader"],
    });
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    // remarkPlugins: [remarkGfm],
    // rehypePlugins: [remarkRehype],
  },
});
export default withMDX(nextConfig);
