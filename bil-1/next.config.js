const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    images: {
      remotePatterns: [
        {
          hostname: 'images.finncdn.no',
        },
        {
          hostname: 'i.imgur.com',
        },
        {
          hostname: 'i.ibb.co',
        },
        {
          hostname: 'images.unsplash.com',
        },
        {
          hostname: 'api.sanity.io',
        },
      ],
    },
  }
