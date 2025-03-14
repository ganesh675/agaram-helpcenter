/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true, // Ignores ESLint errors during the build process
    },
};

export default nextConfig;
