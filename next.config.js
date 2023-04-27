/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn-ak.f.st-hatena.com'],
  },
}

module.exports = nextConfig
