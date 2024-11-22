import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/framer-motion",
  // for static site that have base path we need to set assetPrefix; otherwise the assets will not be loaded
  assetPrefix: "/framer-motion/",
  output: "export",
};

export default nextConfig;
