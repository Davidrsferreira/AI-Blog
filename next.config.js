/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s.gravatar.com"],
  },
  devIndicators: false
};

module.exports = nextConfig;
