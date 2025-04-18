/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.gravatar.com",
        port: "",
        pathname: "/**",
      },
    ]
  },
  devIndicators: false
};

module.exports = nextConfig;
