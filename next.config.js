/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.abhinavr.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "mohamed-khaled-45.000webhostapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
