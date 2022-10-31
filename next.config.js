/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr", // default lang fr
  },
}

module.exports = nextConfig
