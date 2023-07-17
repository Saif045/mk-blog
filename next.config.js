/** @type {import('next').NextConfig} */
const nextConfig = { images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'wp.abhinavr.com',
      port: '',
      pathname: '/**',
    }
    , {
      protocol: 'https',
      hostname: 'mk-blog-45.000webhostapp.com',
      port: '',
      pathname: '/**',
    }
  ]
}}

module.exports = nextConfig
