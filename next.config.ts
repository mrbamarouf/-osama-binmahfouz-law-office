import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      {
        source: "/:locale(ar|en)/services/consultations-contracts",
        destination: "/:locale/services/legal-consultations",
        permanent: true
      },
      {
        source: "/:locale(ar|en)/services/labor-cases",
        destination: "/:locale/services/labor-disputes",
        permanent: true
      },
      {
        source: "/:locale(ar|en)/services/civil-commercial-cases",
        destination: "/:locale/services/commercial-disputes",
        permanent: true
      },
      {
        source: "/:locale(ar|en)/services/regulations-bylaws",
        destination: "/:locale/services/legal-documentation-regulatory-procedures",
        permanent: true
      },
      {
        source: "/:locale(ar|en)/services/criminal-courts",
        destination: "/:locale/services/criminal-cases",
        permanent: true
      },
      {
        source: "/:locale(ar|en)/services/enforcement-courts",
        destination: "/:locale/services/enforcement-proceedings",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
