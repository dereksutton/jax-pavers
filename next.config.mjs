import { resolve } from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: resolve('.'),
  },
};

export default nextConfig;
