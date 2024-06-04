/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://api.setlist.fm/rest/1.0/:path*', // Proxy to API setlist.fm
			},
		]
	},
};

export default nextConfig;
