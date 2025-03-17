/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,  // Important for Vercel
    images: {
        unoptimized: true, 
    },
    eslint: {
        ignoreDuringBuilds: true, 
    },
};
export default nextConfig;
