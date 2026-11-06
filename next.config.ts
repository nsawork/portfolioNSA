import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite testar o servidor de dev pelo celular na rede local
  allowedDevOrigins: ["192.168.15.44"],
};

export default nextConfig;
