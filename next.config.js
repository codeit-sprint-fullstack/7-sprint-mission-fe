/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://panda-market-api.vercel.app/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
