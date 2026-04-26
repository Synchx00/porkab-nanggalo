import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "porkab-img-673586849814-us-east-1-an.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;