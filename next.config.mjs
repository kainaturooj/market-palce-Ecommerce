/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['cdn.sanity.io'], // Add Sanity's CDN domain here
      },
    eslint : {
        ignoreDuringBuilds : true
    }
};

export default nextConfig;
