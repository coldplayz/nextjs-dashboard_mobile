/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "192.168.64.63:3000",
        "*",
      ],
      // allowedForwardedHosts: ["localhost:3000"],
      // ^ You might have to use this property depending on your exact version.
    }
  },
  /*
  async headers() {
    return [
      {
        // source: "/api/:path*",
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // Set your origin
            // value: "192.168.64.63:3000", // Set your origin
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
        ],
      },
    ];
  },
  */
};

module.exports = nextConfig;
