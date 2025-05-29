import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/capacitacao/:path*",
        destination: "https://homol.services.defensoria.pa.def.br/api-folgas/v1/capacitacao/:path*", // sua API real aqui
      },
    ];
  },
};

export default nextConfig;
