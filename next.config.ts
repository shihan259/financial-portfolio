import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Redirects from / to /insurance
        source: "/",
        destination: "/insurance",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
