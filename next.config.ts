import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.thermeyetec.com',
        port: '',
        pathname: '/**', // This allows all paths under the domain
      },
    ],
  },
};

export default nextConfig;
