import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'placehold.co', // allows all HTTPS origins
    },
  ],
},
};
export default nextConfig;
