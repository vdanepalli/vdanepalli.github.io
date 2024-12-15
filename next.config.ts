/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: './',
  basePath: '', // Leave empty if deploying to root like `vdanepalli.github.io`
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
