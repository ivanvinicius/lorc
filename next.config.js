/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['app-food4u-bucket.s3.us-east-2.amazonaws.com']
  }
}

module.exports = nextConfig
