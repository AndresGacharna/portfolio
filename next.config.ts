import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.20.102", "192.168.20.x"],
  output: "standalone", // Enable standalone output for optimized deployment
};

export default nextConfig;
