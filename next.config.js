/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    NEXT_CLIENT_ID_SPOTIFY: process.env.NEXT_CLIENT_ID_SPOTIFY,
    NEXT_CLIENT_SECRET_SPOTIFY: process.env.NEXT_CLIENT_SECRET_SPOTIFY,
    NEXT_JWT_SECRET: process.env.NEXT_JWT_SECRET,
  },
  // serverRuntimeConfig: {
  //   NEXT_ENDPOINT: process.env.NEXT_ENDPOINT,
  // },
};

module.exports = nextConfig;
