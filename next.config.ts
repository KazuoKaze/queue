import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  typescript: {
    // 👇 This tells Next.js to ignore TS errors during build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
