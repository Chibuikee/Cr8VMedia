/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bslthemes.com",
        pathname: "/**",
      },
    ],
    domains: ["bslthemes.com", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
