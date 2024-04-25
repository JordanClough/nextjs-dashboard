/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? '/{nextjs-dashboard}' : '',
  };
  
  module.exports = nextConfig;
  //export default nextConfig;
