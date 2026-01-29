import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/teitelbaum-roofing",
  assetPrefix: "/teitelbaum-roofing/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
