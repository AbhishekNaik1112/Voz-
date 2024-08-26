/* @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/users",
        destination: "http://localhost:5000/api/users",
      },
    ];
  },
};

export default nextConfig;
