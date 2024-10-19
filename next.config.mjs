/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // localPatterns: [
        //   {
        //     pathname: '/public/**',
        //     search: '',
        //   },
        // ],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
