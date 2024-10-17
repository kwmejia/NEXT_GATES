/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn3d.iconscout.com' },
            { protocol: 'https', hostname: 'res.cloudinary.com' },
        ]
    }
};

export default nextConfig;
