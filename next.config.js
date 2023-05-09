/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn-ak.f.st-hatena.com', 'connpass-tokyo.s3.amazonaws.com'],
  },
}

module.exports = nextConfig
