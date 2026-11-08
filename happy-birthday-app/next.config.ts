import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the project root so a stray lockfile in a parent folder
  // (e.g. ~/package-lock.json) isn't picked up as the workspace root.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
